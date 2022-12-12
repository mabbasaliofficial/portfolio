import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const project = useLoaderData()
    const {title, detailsImg1, detailsImg2, detailsImg3, details, tech1, tech2, tech3, item1, item2, item3, item4, item5,} = project
    return (
      <div>
          <div className="bg-base-200 lg:p-10">
            <h1 className='text-center text-3xl font-bold'>{title}</h1>
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
              <img src={detailsImg1} className="lg:w-1/3 rounded-lg shadow-2xl" alt="" />
              <img src={detailsImg2} className="lg:w-1/3 rounded-lg shadow-2xl" alt="" />
              <img src={detailsImg3} className="lg:w-1/3 rounded-lg shadow-2xl" alt="" />
           
            </div>
          </div>
          <div className="divider lg:text-3xl font-bold">Features</div>
          <div className="border border-purple-400 lg:p-10 p-5 rounded-lg mt-10 lg:mx-auto m-5 lg:w-1/2">
            <h3 className='text-xl mb-10'>{details}</h3>
           <ul>
            <li className="list-disc">{item1}</li>
            <li className="list-disc">{item2}</li>
            <li className="list-disc">{item3}</li>
            <li className="list-disc">{item4}</li>
            <li className="list-disc">{item5}</li>
           </ul>
           <div className="card-actions justify-center mb-5 mt-5">
                <div className="badge badge-outline p-3">{tech1}</div>
                <div className="badge badge-outline p-3">{tech2}</div>
                <div className="badge badge-outline p-3">{tech3}</div>
              </div>
          </div>
        </div>
      </div>
      );
};

export default ProjectDetails;