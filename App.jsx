import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import React from 'react'
;
import HomePage from "./src/pages/HomePage";
import MainLayout from "./src/layouts/MainLayout";
import JobsPage from "./src/pages/JobsPage";
import NotFoundPage from "./src/pages/NotFoundPage"
import JobPage, {jobLoader} from "./src/pages/JobPage";
import AddJobPage from "./src/pages/AddJobPage";
import EditJobPage from "./src/pages/EditJobPage";

const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  
  // Update Job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>

       <Route  index element={<HomePage/>}/>
       <Route path="/job" element={<JobsPage/>}/>
       <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
       <Route path='*' element={<NotFoundPage/>}/>
       <Route path="/add-job" element={<AddJobPage  addJobSubmit={addJob} />}/>
       <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
    </Route>
 


)
)

  return <RouterProvider router={router}/>

}
export default App;