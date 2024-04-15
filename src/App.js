import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import JobSearchPage from './pages/JobSearchPage';
import JobPage from './pages/JobPage'
import RegisterJobPage from './pages/RegisterJobPage';
import {FRONTEND_URL,Backend_URL} from './constant'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [response,setresponse] = useState({})

  useEffect(()=>{
    const token =localStorage.getItem('cookie')

    ;(async()=>{
      try {
        let options = {
          method: "GET",
          headers: { "content-type": "application/x-www-form-urlencoded" },
          url:`${Backend_URL}/job/getJobsAll`,
          params:{
            data:true
          }
        };
       const data=await axios(options)
       if(data?.data?.success){
        console.log(data);
        setresponse({...response,jobs:data?.data?.data})
      }
      console.log('fasdfasf',data);
      } catch (error) {
        console.log(error);
      }
    })()

    console.log(token);
    if(token){
      setIsSignedIn(true)
    }
  },[])
  console.log(setresponse);

  return (
     <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} response={response} setresponse={setresponse}></LoginPage>}></Route>
      <Route path='/register' element={<RegisterPage isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} response={response} setresponse={setresponse}></RegisterPage>}></Route>
      <Route path='/JobSearchPage' element={<JobSearchPage isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} response={response} setresponse={setresponse}></JobSearchPage>}></Route>
      <Route path='/JobPage' element={<JobPage isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} response={response} setresponse={setresponse}></JobPage>}></Route>
      <Route path='/' element={<JobSearchPage isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} response={response} setresponse={setresponse}></JobSearchPage>}></Route>
      <Route path='/RegisterJobPage' element={<RegisterJobPage></RegisterJobPage>}></Route>
      <Route path='/*' element={<h2>page not found</h2>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
