import Link from "next/link";
const { v4 } = require("uuid");
import MainHeader from "../components/MainHeader";

export default function Project() {
  const projects = [
    {
      title: "Docchi mo Kizukanai.",
      projectId: "docchi",
    },
    {
      title: "Nanashi ~ Nakushita Nanika no Sagashikata",
      projectId: "nanashi",
    },
  ];

  const projectList = projects.map((project) => {
    return (
      <Link
        key={v4()}
        href={`/project/${encodeURIComponent(project.projectId)}/overview`}
      >
        {project.title}
      </Link>
    );
  });

  return (
    <main>
      <MainHeader selectedTab={1} />
      {projectList}
    </main>
  );
}
