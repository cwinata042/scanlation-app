import React from "react";
import ProjectHeader from "../../../components/ProjectHeader";

export default function ProjectFonts({
  params,
}: {
  params: { projectId: string };
}) {
  return (
    <div className="project-overview">
      <ProjectHeader projectId={params.projectId} selectedTab={2} />
      Fonts here
    </div>
  );
}
