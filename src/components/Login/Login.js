import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/image 466.png";
import style from "./Login.module.css";
import image1 from "../../assets/Group 12.png";
import {FRONTEND_URL,Backend_URL} from '../../constant'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Login = ({isSignedIn,setIsSignedIn,response,setresponse}) => {
  const navigate=useNavigate()
  const [input, setinput] = useState(false);
  
  const onchangeHandler = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  return (
   <div style={{height:'100%',width:'100%'}}>
    
     <div className={style.register}>
      <div className={style.leftSideContainer}>
       <div className={style.container}>
       <div className={style.containerbox1}>
          <h1>Already have an account?</h1>
          <p>Your personal job finder is here</p>
        </div>

        <div className={style.containerbox2}>
         
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={onchangeHandler}
          ></input>
       
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={onchangeHandler}
          ></input>
         
        </div>
        <div className={style.containerbox3}>
          <button onClick={(e)=>{
             console.log(form);
               if(!form.email||!form.password){
                setinput(true)
                console.log("All feilds are required");
               }
               ;(async()=>{
                 
                 try {
                   const data={
                     email:form.email,
                     password:form.password
                   }
                   let options = {
                     method: "POST",
                     headers: { "content-type": "application/json" },
                     data: data,
                     withCredentials: true, 
                     url:`${Backend_URL}/user/login`
                   };
                   console.log(`${Backend_URL}/user/login`,data);
                  const res=await axios(options)
                   const token=res?.data?.data?.token
                   console.log(res);
                   setIsSignedIn(true)
                  if(res?.data?.success){
                    console.log('fasfasf',res);
                    setresponse({...response,user:res.data.data})
                    console.log(response);
                    localStorage.setItem("cookie",token)
                    setinput(false)
                   navigate(`/JobSearchPage`)
                  }
                  setinput(true)
                 } catch (error) {
                  setinput(true)
                   console.log(error);
                 }
               })()
          }}>Sign In</button>

          <div>
            <p>Already have an account?</p>
            <div onClick={()=>{
              navigate('/register')
            }}>Sign Up</div>
          </div>
          { input&&<div className={style.box11} onClick={()=>{
          setinput(false)
        }}>
        <h2>Login have failed</h2>
        <img src={image1} ></img>
    </div>}
        </div>

       </div>
      </div>
      <div className={style.rightSideContainer}>
        <img src={image}></img>
      </div>
    </div>
   </div>
  );

}

export default Login