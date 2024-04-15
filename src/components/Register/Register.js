import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/image 466.png";
import image1 from "../../assets/Group 12.png";
import style from "./Register.module.css";
import {FRONTEND_URL,Backend_URL} from '../../constant'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Register = () => {
  const navigate=useNavigate()
  const onchangeHandler = (e) => {
    console.log(form);
    console.log(e);
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const [form, setform] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });
  const [isChecked, setisChecked] = useState(false);
  const [input, setinput] = useState(false);
  return (
   <div style={{height:'100%',width:'100%'}}>
  
     <div className={style.register}>
      <div className={style.leftSideContainer}>
      
       <div className={style.container}>
       <div className={style.containerbox1}>
          <h1>Create an account</h1>
          <p>Your personal job finder is here</p>
        </div>

        <div className={style.containerbox2}>
          <input
            placeholder="Name"
            name="name"
            type="text"
            value={form.name}
            onChange={onchangeHandler}
          ></input>
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={onchangeHandler}
          ></input>
          <input
            placeholder="Mobile"
            name="number"
            type="text"
            value={form.number}
            onChange={onchangeHandler}
          ></input>
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={onchangeHandler}
          ></input>
          { input&&<div className={style.box11} onClick={()=>{
          setinput(false)
        }}>
        <h2>All feilds are required</h2>
        <img src={image1} ></img>
    </div>}
          <div>
            <input
              type="checkbox"
              value={isChecked}
              onChange={() => {
                setisChecked(!isChecked);
              }}
            ></input>
            
            <p>
              By creating an account, I agree to our terms of use and privacy
              policy
            </p>
          </div>
        </div>
        <div className={style.containerbox3}>
          <button onClick={(e)=>{
            console.log(form);
            console.log(input);
              if(!form.name||!form.email||!form.number||!form.password){
                console.log('flkjasdljf');
                return setinput(true)
              }else{
              setinput(false)}
              ;(async()=>{
                try {
                  const data={name:form.name,
                    email:form.email,
                    number:form.number,
                    password:form.password
                  }
                  let options = {
                    method: "POST",
                    headers: { "content-type": "application/x-www-form-urlencoded" },
                    data: data,
                    url:`${Backend_URL}/user/register`
                  };
                  console.log('fasjflk',data);
                  console.log(`${Backend_URL}/user/register`,data);
                 const response=await axios(options)
                 if(response?.data?.success){
                  console.log('kfljsdlkjf');
                  navigate(`/login`)
                 }
                 console.log(response);
                } catch (error) {
                  console.log(error);
                }
              })()
          }}>Create Account</button> 
          <div>
            <p>Already have an account?</p>
            <Link>Sign In</Link>
          </div>
        </div>

       </div>
      </div>
      <div className={style.rightSideContainer}>
        <img src={image}></img>
      </div>
    </div>
   </div>
  );
};

export default Register;
