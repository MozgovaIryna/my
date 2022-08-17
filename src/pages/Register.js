
import React, {useState} from "react";
import './../App.css';
import { auth } from '../firebase';
import {createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {
    const [data, setData] = useState({
        firstname: "",
        email:"",
        password:"",
        error: null,
        loading: false,
    });
    const {firstname,  email, password, error, loading} = data;
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    };
    const handlerSubmit = async (e) => {
        e.preventDefault();
 setData({...data, error: null, loading: true}); 
     if(!firstname || ! email || password){
        setData({...data, error: "All fields are required"})
     }
     console.log(data);
   try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        console.log(data);
     }  catch (err) {}
 
    };
  return (
    <section>
      <h3>Create An Account</h3>
      <form className="form"  onSubmit={handlerSubmit}>
        <div className="input_container">
            <label htmlFor="name">Name</label>
            <input type="text" name="firstname" value={firstname} onChange={handleChange}/>
        </div>
        <div className="input_container">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={email} onChange={handleChange}/>
        </div>
        <div className="input_container">
            <label htmlFor="password">Password</label>

            <input type="password" name="password" value={password}  onChange={handleChange}/>
        </div>
       {error ? <p className="error"> {error} </p>: null} 
        <div className="btn_container">
            <button className="btn">Register</button>
        </div>
      </form>
    </section>
  );
};
export default Register;