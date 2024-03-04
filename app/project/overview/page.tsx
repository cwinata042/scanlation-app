import React from "react";
import ProjectHeader from "../../components/ProjectHeader";

export default function ProjectPage() {
  return (
    <div className="project-overview">
      <ProjectHeader selectedTab={0} />
      <div>Calendar</div>
      <div>Progress</div>
      <div>Links</div>
      <div>People</div>
    </div>
  );
}
