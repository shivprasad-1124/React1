// import Article from "./Mycomponents/Article";
// import Body from "./Mycomponents/Body";
// import Class from "./Mycomponents/Class";
// import ClassComp from "./Mycomponents/ClassComp";
// import ClassComp1 from "./Mycomponents/ClassComp1";
// import ClassComp2 from "./Mycomponents/ClassComp2";
// import ClassComp3 from "./Mycomponents/ClassComp3";
// import ClassComp4 from "./Mycomponents/ClassComp4";
// import Footer from "./Mycomponents/Footer";
// import FunctionComp from "./Mycomponents/Functioncomp";
// import Header from "./Mycomponents/Header";
// import ListComponent from "./Mycomponents/ListComponent";
// import Section from "./Mycomponents/Section";

import Home from "../Assignment/Practice/Home";
import Login from "../Assignment/Practice/Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from "../Assignment/Practice/Signup";

// import Background from "../Assignment/Background";
// import Counter from "../Assignment/Counter";
// import Decrease from "../Assignment/Decrease";
// import Hide from "../Assignment/Hide";
// import Lifecycle from "../Assignment/Lifecycle";
// import Like from "../Assignment/Like";
// import Multiplevalue from "../Assignment/Multiplevalue";
// import Name from "../Assignment/Name";
// import Reset from "../Assignment/Reset";
// import Toggle from "../Assignment/Toggle";
// import Assign from "./Mycomponents/Assign";
// import Assignment from "./Mycomponents/Assignment";
// import Brushup from "./Mycomponents/Brushup";
// import List from "./Mycomponents/List";



// function App(){
//     return(
//       <>
//       {/* <Header/>
//       <Body/>
//       <Footer/>
//       <Section/>
//       <Article/> */}
//       {/* <ClassComp/> */}
//       {/* <ClassComp1/> */}
//       {/* <FunctionComp name="Shivu" age={22}/>
//       <Class role="tech engineer" city="mumbai"/> */}
//       {/* <ClassComp2/>
//       <ClassComp3/>
//       <ClassComp4/> */}
//       <ListComponent/>
//       </>
//     )
// }

// export default App;


// import ListComponent from "./Mycomponents/ListComponent";

// function App(){
//   let isloggedIn = false;
//   if(isloggedIn){
//     return(

//         <h1>welcome to Shiv project</h1>
      
//     )

//   }
//   else{
//     return(
//       <h1>login not happened,Go back to login page</h1>
//     )
//   }
// }
// export default App;


// function App(){
//   let isloggedIn = false;
//   return(
//     <>
//     {
//       (isloggedIn)?<h1>welocome to Shiv project</h1>:<h1>Please login</h1>
//     }
//     </>
//   )
// }
// export default App;

// function App(){
//   let Frontend = ["Java","CSS","Python","React"];
//   return(
//     <div>
//       <ul>
//         {
//           Frontend.map((x)=>{
//             return <li>{x}</li>
//           })
//         }
//       </ul>
//     </div>
//   )
// }
// export default App;


// function App(){
//   return(
//     <>
//     <Counter/>
//     <Decrease/>
//     <Reset/>
//     <Toggle/>
//     <Background/>
//     {/* <Hide/> */}
//     <Name/>
//     <Like/>
//     <Multiplevalue/>
//     <Lifecycle/>
//     </>
//   )
// }
// export default App;

// import React from 'react'

// const App = () => {
//   let age = 32;
//   if(age>=18){
//     return(<h1>You are eligible to vote</h1>)
//   }
//   else{
//     return(<h1>You are not eligible to vote</h1>)
//   }
// }

// export default App

// import React from 'react'

// const App = () => {
//   let age = 35;
//   return (
//     <div>{
//       (age>=18)?<h1>You are eligible to vote</h1>:<h1>You are not eligible to vote</h1>
//     }
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   let age = 19;
//   return (
//     <div>{
//       (age>18)&&<h1>You are eligible to vote</h1>
//     }
//     </div>
//   )
// }

// export default App


// function App(){
//   return(
//   <>
//   <Brushup/>
//   <List/>
//   <Assignment/>
//   <Assign/>
//   </>
//   )
// }
// export default App

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

