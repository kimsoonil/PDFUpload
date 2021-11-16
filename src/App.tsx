import 'src/assets/scss/reset.scss'
import './App.scss'
import ZwibblerComponent from "src/components/zwibbler/ZwibblerComponent";
import MovableList from "src/components/MovableList"
const App = () => {
  return (
    <div className="App">
      <ZwibblerComponent />
      <MovableList />
    </div>
  );
};
export default App