import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Excersice from "../excercise";


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Excersice/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default (App);
