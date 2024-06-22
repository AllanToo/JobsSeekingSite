import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
  <>
   <Hero title ='Become a developer today' subtitle='Find one and apply'/>
   <HomeCards/>
   <JobListings isHome='true'/>
   <ViewAllJobs/>
  </>
   
   
  )
}

export default HomePage