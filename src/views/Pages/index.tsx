import * as React from 'react';
import 'src/assets/scss/reset.scss'
import 'src/assets/scss/Pages.scss'
import ZwibblerComponent from "src/components/zwibbler/ZwibblerComponent";
import MovableList from "src/components/MovableList"
const Pages = () => {
  return (
    <div className="App">
      <ZwibblerComponent />
      <MovableList />
    </div>
  );
};
export default Pages