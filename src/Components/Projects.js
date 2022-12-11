import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const Projects = () => {
    const [project, setProject] = useState([]);
    useEffect(()=> {
        fetch('projects.json')
        .then(res=> res.json())
        .then(data=> {
            setProject(data)
            console.log(data)
        })

    },[])
  return (
    <div className="m-10">
        <h1 className="text-3xl font-bold text-center mb-10 divider">My Projects</h1>
   <div className="grid grid-cols-1 lg:grid-cols-3">
   {
        project.map(pro =>   <div className="card border mx-5 shadow-xl">
        <figure>
          <img src={pro.img} alt="projects" className="rounded h-48"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {pro.title}
          </h2>
          <p>{pro.details}</p>
          <p className="font-bold">Technologies : {pro.technologies}</p>
        </div>
      </div>)
    }
   </div>
    </div>
  );
};

export default Projects;
