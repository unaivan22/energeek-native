import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from 'react-helmet';

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost/api/get_project.php?id=${id}`).then((res) => {
      if (res.data.success) {
        setProject(res.data.project);
      }
    });
  }, [id]);

  if (!project) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="container max-w-3xl mx-auto py-12">
        <Helmet>
        <title>{project.name} - Careers at Energeek</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-6">{project.name}</h1>
      <img src={project.thumbnail} alt={project.name} className="w-full rounded-lg shadow-lg mb-6" />
      <p className="text-gray-600 mb-4">
        <strong>Client:</strong> {project.client}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Year:</strong> {project.year}
      </p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: project.description }} />
      <h2 className="text-xl font-semibold mt-6 mb-4">Screenshots</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {JSON.parse(project.screenshots || "[]").map((img, index) => (
          <img key={index} src={`http://localhost/api/${img}`} alt={`Screenshot ${index + 1}`} className="w-full rounded-lg shadow" />
        ))}
      </div>
    </div>
  );
}
