import experience from "../data/experience";

const Experience = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8">Experience</h1>
      <div className="mt-6 p-8">
        {experience.map((job, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold">{job.company}</h2>
            <h3>
              {job.position} - {job.duration}
            </h3>
            <ul className="list-disc pl-5">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
