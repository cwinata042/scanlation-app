import React from "react";
const { v4 } = require("uuid");
import Link from "next/link";
import { getDocument } from "../../firebase/getData";

export default async function ProjectHeader(props: {
  projectId: string;
  selectedTab: number;
}) {
  // Fetches the title of the project from db
  async function getTitle() {
    let title = "";
    const project = await getDocument("projects", props.projectId);
    if (project.data) {
      title = project.data.title;
    }

    return title;
  }

  const tabNames = ["Overview", "Schedule", "Fonts"];
  const title = await getTitle();

  let tabs = tabNames.map((tabName) => {
    const link = `../${props.projectId}/${tabName.toLowerCase()}`;

    if (props.selectedTab === tabNames.indexOf(tabName)) {
      return (
        <Link key={v4()} href={link}>
          <button className="header-tab selected">{tabName}</button>
        </Link>
      );
    } else {
      return (
        <Link key={v4()} href={link}>
          <button className="header-tab">{tabName}</button>
        </Link>
      );
    }
  });

  return (
    <div className="project-header">
      {tabs}
      <Link className="back-button" href="../">
        <button>Return to Project List</button>
      </Link>
      <div className="project-name">{title}</div>
    </div>
  );
}
