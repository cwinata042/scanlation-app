import React from "react";
import ProjectHeader from "../../../components/ProjectHeader";

export default function ProjectSchedule({
  params,
}: {
  params: { projectId: string };
}) {
  return (
    <div className="project-schedule">
      <ProjectHeader projectId={params.projectId} selectedTab={1} />
      schedule below :D
    </div>
  );
}
