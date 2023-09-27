import "../src/App.css";
import {Routes ,Route } from "react-router-dom";
import HeroPage from "./component/HeroPage";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HeroPage/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;
