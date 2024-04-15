import React, { useState } from 'react'
import style from '../../components/jobs/RegisterJob.module.css'
import image from '../../assets/WallpaperDog-20567151 1.png'
import image1 from '../../assets/Group 12.png'
import axios from 'axios'
import { Backend_URL } from '../../constant'
import { useNavigate } from 'react-router-dom'
import { withCookies } from 'react-cookie'
const RegisterJob = () => {
    axios.defaults.withCredentials = true;
    const navigate=useNavigate()
    const [form,setform]=useState({name:'',logo:'',job:'',salary:'',type:'',location:'',description:'',aboutCompany:'',skills:[],information:'',remote:'',duration:''})
    const [skill,setskill]=useState('')
    const remote=['office','remote']
    const option=['html','css','sql','python']
    const type=['computer','software','frontend','backend']
   
    const onchangeHandler=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
        
    }
  return (
    <>
    <div className={style.container}>
            <div className={style.box1}>
                <h1>
                Add job description
                </h1>
                <div>
                    <div className={style.box3}>
                        <div>
                        <label htmlFor='companyName'>Company Name</label>
                        <input placeholder='Enter your company name here' type='text' id='companyName' value={form.name} name='name' onChange={onchangeHandler}></input>
                        </div>
                       <div>
                       <label htmlFor='logo'>Add logo URL</label>
                        <input placeholder='Enter the link' type='text' id='logo' value={form.logo} name='logo' onChange={onchangeHandler}></input>
                       </div>
                        <div>
                        <label htmlFor='job'>Job position</label>
                        <input placeholder='Enter job position' type='text' id='job' value={form.job} name='job' onChange={onchangeHandler}></input>
                        </div>
                       <div>
                       <label htmlFor='salary'>Monthly salary</label>
                        <input placeholder='Enter Amount in rupees' type='text' id='salary' value={form.salary} name='salary' onChange={onchangeHandler}></input>
                       </div>
                        <div>
                        <label htmlFor='type'>Job Type</label>
                        <select id='type' name='type' onChange={onchangeHandler}>
                            <option selected disabled>select</option>
                            {type.map((e)=>{
                                return <option value={e} name={e} >{e}</option>
                            })}
                        </select>
                        </div>
                        <div>
                        <label htmlFor='remote'>Remote/office</label>
                        <select id='remote' name='remote'onChange={onchangeHandler}>
                            <option selected disabled>select</option>
                            {remote.map((e)=>{
                                return <option value={e} name={e} >{e}</option>
                            })}
                        </select>
                        </div>
                        <div>
                        <label htmlFor='location'>Location</label>
                        <input placeholder='Enter Location' type='text' id='location' value={form.location} name='location' onChange={onchangeHandler}></input>
                        </div>
                        <div>
                        <label htmlFor='description'>Job Description</label>
                        <input placeholder='Type the job description' type='text' id='description' value={form.description} name='description' onChange={onchangeHandler}></input>
                        </div>
                       <div>
                       <label htmlFor='aboutCompany'>About Company</label>
                        <input placeholder='Type about your company' type='text' id='aboutCompany' value={form.aboutCompany} name='aboutCompany' onChange={onchangeHandler}></input>
                       </div>
                        <div>
                        <label htmlFor='skills'>Skills Required</label>
                        <div className={style.box6}>
                        <div>
                        <select id='skills' name='skills'  className={style.box5} onChange={(e)=>{
                            if(!form.skills.includes(e.target.value)){
                             setform({...form,skills:[...form.skills,e.target.value]})
                             console.log(form);
                            }
                        }}>
                            <option selected={true} disabled>select</option>
                            {option.map((e)=>{
                                return <option value={e} name={e} >{e}</option>
                            })}
                        </select> 
                        </div>
                        <div className={style.box7}>
                        {form.skills.map((e)=>{
                                return <div onClick={()=>{
                                   let a=form.skills.filter((ele)=>{
                                    return ele!=e
                                   })
                                   console.log(a);
                                   setform({...form,skills:[...a]})
                               }}>
                                    <button>{e}</button>
                                    <img src={image1} ></img>
                                </div>
                            })}
                        </div>
                        </div>
                        </div>
                        <div>
                        <label htmlFor='duration'>duration</label>
                        <input placeholder='Enter the duration' type='text' id='duration' value={form.duration} name='duration' onChange={onchangeHandler}></input>
                        </div>
                        <div>
                        <label htmlFor='information'>Information</label>
                        <input placeholder='Enter the additional information' type='text' id='information' value={form.information} name='information' onChange={onchangeHandler}></input>
                        </div>
                    </div>
                    <div className={style.box8}>
                        <button className={style.box9}>Cancel</button>
                        <button className={style.box10} onClick={()=>{
                                    ;(async()=>{
                                      try {
                                        let options = {
                                          method: "POST",
                                          headers: { "content-type": "application/json" },
                                        
                                          withCookies:true,
                                          withCredentials:true,
                                          data:{
                                            companyName:form.name,title:form.job,description:form.description,jobType:form.type,logoUrl:form.logo,salary:form.salary,location:form.location,locationType:form.remote,aboutcompany:form.aboutCompany,duration:form.duration,about:form.information,skills:form.skills
                                          }
                                          
                                        };
                                        // axios()
                                       const data=await axios.post(`${Backend_URL}/job/createJob`,{withCredentials:true,data:{
                                        companyName:form.name,title:form.job,description:form.description,jobType:form.type,logoUrl:form.logo,salary:form.salary,location:form.location,locationType:form.remote,aboutcompany:form.aboutCompany,duration:form.duration,about:form.information,skills:form.skills
                                      }})
                                       console.log(data.data.success);
                                       if(data?.data?.success){
                                        // //  setresponse((prev)=>{
                                        // //   return {...prev,jobidd:data.data.data}
                                        //  })
                                         console.log(data);
                                        //  localStorage.setItem('jobsearch',JSON.stringify(response.jobid))
                                        // console.log(JSON.parse(localStorage.getItem('jobsearch')));
                                         navigate('/')
                                      }
                                      } catch (error) {
                                        console.log(error);
                                      }
                                    })()
                        }}>Add Job</button>
                    </div>
                </div>
            </div>
            <div className={style.box2}>
                <img src={image}></img>
            </div>
    </div>
    </>
)
}

export default RegisterJob