import React from 'react'
import JobContainer from '../components/jobs/JobContainer'
import JobSearch from '../components/jobs/Jobsearch'
const JobSearchPage = ({isSignedIn,response,setresponse}) => {
  
  console.log(isSignedIn,response,setresponse);
  return (
  <>
   <JobContainer isSignedIn={isSignedIn} response={response} setresponse={setresponse}></JobContainer>
   <JobSearch isSignedIn={isSignedIn} response={response} setresponse={setresponse}></JobSearch></>
  )
}

export default JobSearchPage