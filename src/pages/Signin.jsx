import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("Signin Success"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="signin-page">
      <h1>Signin Page</h1>
      <label>Enter your email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email here"
      />
      <label>Enter your password</label>
      <input 
      type="password" 
      placeholder="Enter your password here" 
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      />
      <button onClick={signinUser}>Sign me in</button>
    </div>
  );
};
export default SigninPage;
