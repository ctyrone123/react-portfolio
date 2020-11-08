import React from "react";
import projects from "../../projects.json";
import Project from "../Project/project";

export default function Portfolio(props) {
  return (
    <div className="container">
      <section className="row cardRow">
        {projects.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            repo={project.repo}
            deployed={project.deployed}
          />
        ))}
      </section>
    </div>
  );
}
