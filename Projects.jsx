import React from 'react';

function Projects(){
  const projects = [
    { name: "Welcome App", tech: "React + API" },
    { name: "Todo App", tech: "React + LocalStorage" },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Projects</h2>
      {projects.map((project, index)=>(
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.tech}</p>
        </div>
      ))}
    </div>
  );
}
export default Projects;