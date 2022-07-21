/** @format */

import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Rect, Transformer } from "react-konva";
import Loading from "src/components/Loading";

const Rectangle = ({
	shapeProps,
	isSelected,
	onSelect,
	onChange,
	setTransform,
}) => {
	const shapeRef = React.useRef();
	const trRef = React.useRef();
	
	React.useEffect(() => {
		if (isSelected) {
			// we need to attach transformer manually
			trRef.current.nodes([shapeRef.current]);
			trRef.current.getLayer().batchDraw();
		}
	}, [isSelected]);

	return (
		<React.Fragment>
			<Rect
				onClick={onSelect}
				onTap={onSelect}
				ref={shapeRef}
				{...shapeProps}
				x={shapeProps.x}
				y={shapeProps.y}
				width={shapeProps.width}
				height={shapeProps.height}
				stroke="#0BCEA5"
				fill="rgba(11, 206, 165, 0.1)"
				draggable
				onDragEnd={(e) => {
					onChange({
						...shapeProps,
						x: e.target.x(),
						y: e.target.y(),
					});
					setTransform({
						x: Math.floor(e.target.x()),
						y: Math.floor(e.target.y()),
					});
				}}
				onTransformEnd={(e) => {
					// transformer is changing scale of the node
					// and NOT its width or height
					// but in the store we have only width and height
					// to match the data better we will reset scale on transform end
					const node = shapeRef.current;
					const scaleX = node.scaleX();
					const scaleY = node.scaleY();

					// we will reset it back
					node.scaleX(1);
					node.scaleY(1);
					onChange({
						...shapeProps,
						x: node.x(),
						y: node.y(),
						// set minimal value
						width: Math.max(5, node.width() * scaleX),
						height: Math.max(node.height() * scaleY),
					});
					setTransform({
						x: Math.floor(node.x()),
						y: Math.floor(node.y()),
						width: Math.floor(node.width() * scaleX),
						height: Math.floor(node.height() * scaleY),
					});
				}}
			/>
			{isSelected && (
				<Transformer
					ref={trRef}
					boundBoxFunc={(oldBox, newBox) => {
						// limit resize
						if (newBox.width < 5 || newBox.height < 5) {
							return oldBox;
						}
						return newBox;
					}}
				/>
			)}
		</React.Fragment>
	);
};

const KonvaCanvasdraw = (props) => {
	const StageRef = useRef(null);
	const [annotations, setAnnotations] = useState([]);
	const [newAnnotation, setNewAnnotation] = useState([]);
	const [selectedId, selectShape] = useState(null);
	const [rectangles, setRectangles] = useState([]);
	console.log("selectTool",props.selectTool)
	useEffect(() => {
		// document.getElementById("StageDiv")
		// document.getElementById("StageDiv")
	});
	const handleMouseDown = (event) => {
		
		if (props.selectTool === "square_draw") {
			if (newAnnotation.length === 0) {
				const { x, y } = event.target.getStage().getPointerPosition();
				setAnnotations([]);
				setNewAnnotation([
					{ id: 0, x, y, width: 0, height: 0, fill: "red", id: "rect1" },
				]);
			}
		} else {
			const clickedOnEmpty = event.target === event.target.getStage();
			if (clickedOnEmpty) {
				selectShape(null);
			}
		}
	};

	const handleMouseUp = (event) => {
		if (props.selectTool === "square_draw") {
			if (newAnnotation.length === 1) {
				const sx = newAnnotation[0].x;
				const sy = newAnnotation[0].y;
				const { x, y } = event.target.getStage().getPointerPosition();
				const annotationToAdd = {
					x: Math.floor(sx),
					y: Math.floor(sy),
					width: Math.floor(x - sx),
					height: Math.floor(y - sy),
					key: annotations.length + 1,
				};
				props.setTransform({
					x: Math.floor(x),
					y: Math.floor(y),
					width: Math.floor(x - sx),
					height: Math.floor(y - sy),
				});

				// annotations.push(annotationToAdd);
				setNewAnnotation([]);
				setAnnotations([annotationToAdd]);
			}
		}
	};

	const handleMouseMove = (event) => {
		if (props.selectTool === "square_draw") {
			if (newAnnotation.length === 1) {
				const sx = newAnnotation[0].x;
				const sy = newAnnotation[0].y;
				const { x, y } = event.target.getStage().getPointerPosition();
				setNewAnnotation([
					{
						x: sx,
						y: sy,
						width: x - sx,
						height: y - sy,
						key: "0",
					},
				]);
			}
		}
	};
	if (props.KonvaWidth === 0) {
		return <Loading />;
	} else {
		const annotationsToDraw = [...annotations, ...newAnnotation];

		return (
			<div
				className="flex-center"
				style={{ position: "absolute", zIndex: 100 }}
				id="StageDiv"
			>
				<Stage
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}
					onMouseMove={handleMouseMove}
					width={1083}
					height={893}
				>
					<Layer>
						{annotationsToDraw.map((value, index) => {
							return props.selectTool === "square_draw" ? (
								<Rect
									x={value.x}
									y={value.y}
									width={value.width}
									height={value.height}
									fill="rgba(11, 206, 165, 0.1)"
									stroke="#0BCEA5"
									key={index}
								/>
							) : (
								<Rectangle
									key={index}
									shapeProps={value}
									isSelected={value.id === selectedId}
									onSelect={() => {
										selectShape(value.id);
									}}
									onChange={(newAttrs) => {
										const rects = rectangles.slice();
										rects[index] = newAttrs;
										setAnnotations(rects);
									}}
									setTransform={props.setTransform}
								/>
							);
						})}
					</Layer>
				</Stage>
			</div>
		);
	}
};

export default KonvaCanvasdraw;
