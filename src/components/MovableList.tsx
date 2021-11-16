import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { List, arrayMove } from 'react-movable';
import "./MovableList.scss"
const VaryingHeights: React.FC = () => {
    const [index, active] = useState(-1)
    const [items, setItems] = React.useState([
        0,
        1,
        2,
        3,
        4
    ]);
    return (
        <List
            values={items}
            onChange={({ oldIndex, newIndex }) =>
                setItems(arrayMove(items, oldIndex, newIndex))
            }
            renderList={({ children, props, isDragged }) => (
                <div className="page-wrap"
                >
                    <ul
                        className="page-list"
                        {...props}
                    >
                        {children}
                    </ul>
                </div>
            )}
            renderItem={({ value, props, isDragged, isSelected }) => (
                <div>
                    <li
                        {...props}
                        className="item"
                        style={{
                            ...props.style,
                            listStyleType: "none",
                            cursor: isDragged ? 'grabbing' : 'grab',
                        }}
                    >
                        <img src="/images/list.png" />
                        {index == value &&
                            <input type="number" className="number-input"
                                style={{
                                    width: "80px",
                                    border: "0",
                                    marginTop: "15px",
                                    boxSizing: "border-box",
                                    outline: "none",
                                    height: "20px",
                                }}
                            />
                        }
                    </li>
                </div>
            )}
        />
    );
};

export default VaryingHeights;
