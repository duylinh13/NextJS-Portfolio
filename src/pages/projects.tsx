import projects from "../data/projects";

const Projects = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8">Projects</h1>
      <div className="grid gap-8 mt-6 p-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Visit Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
