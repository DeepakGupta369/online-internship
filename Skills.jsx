import React from 'react';

function Skills(){
  const skills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap"];

  return(
    <div style={{ padding: '20px' }}>
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;