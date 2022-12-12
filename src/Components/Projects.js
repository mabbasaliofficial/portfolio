import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-data-one.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, []);
  return (
    <div className="lg:m-10" id="projects">
      <h1 className="text-3xl font-bold text-center mb-10 divider">My Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {project.map((pro) => (
          <div key={pro.id} className="card border mx-5 shadow-xl my-5">
            <figure>
              <img src={pro.img} alt="projects" className="rounded h-48" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{pro.title}</h2>
              <p>{pro.details}</p>
              <div className="card-actions justify-center mb-5 mt-5">
                <div className="badge badge-outline p-3">{pro.tech1}</div>
                <div className="badge badge-outline p-3">{pro.tech2}</div>
                <div className="badge badge-outline p-3">{pro.tech3}</div>
              </div>
              <Link className="btn btn-secondary" to={`/projects/${pro.id}`}>
                Show Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
