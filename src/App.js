// import { getDatabase , ref , set } from "firebase/database";
// import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth";
// import { app } from "./firebase";
import './App.css';
import  SignupPage  from "./pages/Signup.jsx"

// const auth = getAuth(app);

function App(){
  // const signupUser = () =>{
  //   createUserWithEmailAndPassword(auth,"aadilgani2001@gmail.com","Cmrit#123")
  //   .then((value)=>console.log(value));
  // };

// const db = getDatabase(app);

// function App() {

//   const putData = () => {
//     set(ref(db,'users/aadil'),{
//       id:1,
//       name:"Aadil Gani",
//       age:21,
//     })
//   }
  // return (
  //   <div className="App">
  //     <h1>Firebase React App</h1>
  //     <button onClick={putData}>Put Data</button>
  //   </div>
  // );
  return (
    <div className="App">
      {/* <h1>Firebase React App</h1>
      <button onClick={ signupUser }>Create User</button> */}

      <SignupPage />

    </div>
  );
}

export default App;
