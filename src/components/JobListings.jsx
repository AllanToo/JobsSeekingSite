import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import JobListing from './JobListing'
import { MdCatchingPokemon } from 'react-icons/md';
import { FaS } from 'react-icons/fa6';
const JobListings = ({isHome = false}) => {
   const [jobs, setjobs] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() =>{
      const fetchJobs = async () =>{
        const apiUrl = isHome ? 
        'http://localhost:8000/jobs?_limit=3' :
        'http://localhost:8000/jobs';
        try
        {const res = await fetch (apiUrl);
        const data = await res.json();
        setjobs(data);}
        catch(error){
          console.log('Error', error)
        }
        finally{
          setLoading(false);      
        }
      }
      fetchJobs();
   }, [])

  return (

   <section className="bg-blue-50 px-4 py-10">
   <div className="container-xl lg:container m-auto">
     <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
       {isHome? 'Recent Jobs' : 'Browse Jobs'}
     </h2>
     {loading ? (<Spinner loading={loading} />) : (<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       {jobs.map((alan) => (
       <JobListing  key={alan.id} alan ={alan}/>
       ))}
    
     </div>)}
     
   </div>
 </section>
  )
}

export default JobListings