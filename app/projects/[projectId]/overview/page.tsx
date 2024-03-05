import React from "react";
import ProjectHeader from "../../../components/ProjectHeader";

export default function ProjectOverview({
  params,
}: {
  params: { projectId: string };
}) {
  return (
    <div className="project-overview">
      <ProjectHeader projectId={params.projectId} selectedTab={0} />
      <div>Calendar</div>
      <div>Progress</div>
      <div>Links</div>
      <div>People</div>
    </div>
  );
}
