import React from "react";
import projects from "../../projects.json";
import Project from "../Project/project";

export default function Portfolio(props) {
  return (

    <figure className="card col-md-12 p-4">
      <section className="row cardRow">
        {projects.map((project => 
          <Project
            key={project.id}
            name={project.name}
            image={project.image}
            repo={project.repo}
            deployed={project.link}
          />
        ))}
      </section>
    </figure>
  );
}