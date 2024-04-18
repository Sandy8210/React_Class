import Admin from "./Task/Admin";
import CountDownTimer from "./Task/CountDownTimer";
import { ListTable } from "./Task/ListTable";
import Task4 from "./Task/Task4";
import Timer from "./Task/Timer";
import Axios from "./components/Axios";
import AxiosFilter from "./components/AxiosFilter";
import Count from "./components/Count";
import Mousemove from "./components/Mousemove";
import RegisterForm from "./components/RegisterForm";
import TimerMsg from "./components/TimerMsg";
import UseEffect from "./components/UseEffect";
import UseEffect2 from "./components/UseEffect2";
import UseEffect3 from "./components/UseEffect3";
import UseEffectInterval from "./components/UseEffectInterval";
import UseEffectTimeOut from "./components/UseEffectTimeOut";
import UseReduce from "./components/UseReduce";
import "./App.css";
import UseReduce_object from "./components/UseReduce_object";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";

// import Task3 from './Task/Task3';
// import HandleForm from './components/HandleForm';
// import Task1 from './Task/Task1';
// import Task2 from './Task/Task2';
// import ArrowFunction from './components/ArrowFunction';
// import ClassFunction from './components/ClassFunction';
// import Function from './components/Function';
// import Hello from './components/Hello';
// import Hello2 from './components/Hello2';
// import Hello3 from './components/Hello3';
// import Hello4 from './components/Hello4';
// import Hello5 from './components/Hello5';
// import List from './components/List';
// import Map from './components/Map';
// import MethodProps from './components/MethodProps';
// import State from './components/State';
// import State2 from './components/State2';
// import TableRow from './components/TableRow';

import React, { useReducer } from "react";
import UC_reducer from "./components/UC_reducer";
import ProgressCount from "./components/ProgressCount";
import Parent from "./components/Parent";
import Usememo from "./components/UsememoFunc";
import UseRefFunc from "./components/UseRefFunc";
import Timer_UseRef from "./components/Timer_UseRef";
import ShoppingCart from "./components/ShoppingCart";
import HookCreate from "./components/HookCreate";

export const CountContext = React.createContext();

function App() {
  // const initialState = 0;

  // const reducer = (state, action) => {
  //   switch (action) {
  //     case "incr":
  //       if (state < 10) {
  //         return state + 1;
  //       } else {
  //         alert("Reached Maximum Item");
  //         return state;
  //       }
  //     case "decr":
  //       if (state > 0) {
  //         return state - 1;
  //       } else {
  //         alert("Sorry! Empty Stock ");
  //         return state;
  //       }
  //     case "reset":
  //       return initialState;
  //     default:
  //       return state;
  //   }
  // };

  // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/* <UC_reducer /> */}
      <h1>Hello Sandy !</h1>
      <hr />
      {/* <Hello name={"BodySoda"} age={27} />
      <Hello2 name={"Vandu Murugan"} age={24} />
       <Hello3 name={"Sunaa Pannaa"} age={32} />
      <Hello4 name={"Great Kirikalan"} age={40}>
        <p>The magician</p>
      </Hello4>
      <Hello5 name={"Nesamani"} age={45}>
        <p>Contracter</p>
      </Hello5>
      <hr />
      <Function />
      <ArrowFunction />
      <ClassFunction />
      <hr />

      <MethodProps />

      <hr />

      <State />
      <State2 />

      <hr />
      <Task1 />
      <hr /> */}
      {/* <Task2 /> */}
      {/* <List />
      <Map />
      <TableRow /> */}
      {/* <HandleForm/> */}

      {/* <Task3 /> */}

      {/* <Task4 /> */}
      {/* <ListTable/> */}
      {/* <Admin /> */}

      {/* <UseEffect /> */}
      {/* <UseEffect2 /> */}
      {/* <UseEffect3 /> */}
      {/* <UseEffectInterval /> */}
      {/* <UseEffectTimeOut /> */}
      {/* <Mousemove /> */}
      {/* <TimerMsg /> */}
      {/* <Timer /> */}
      {/* <CountDownTimer /> */}
      {/* <Axios /> */}
      {/* <RegisterForm /> */}
      {/* <UseReduceHook /> */}
      {/* <Count /> */}
      {/* <AxiosFilter /> */}
      {/* <UseReduce /> */}
      {/* <UseReduce_object /> */}

      {/* <CountContext.Provider value={{ count, dispatch }}>
        <h1>
          Count Value is : <span> {count} </span> it's from App.jsx
        </h1>
        <A />
        <B />
        <C />
      </CountContext.Provider> */}
      {/* <ProgressCount /> */}
      {/* <Parent /> */}
      {/* <Usememo /> */}
      {/* <UseRefFunc /> */}
      {/* <Timer_UseRef /> */}

      {/* <ShoppingCart /> */}
      <HookCreate />
    </>
  );
}

export default App;
