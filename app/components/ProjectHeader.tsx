import React from "react";
const { v4 } = require("uuid");
import Link from "next/link";

export default function ProjectHeader(props: { selectedTab: number }) {
  const tabNames = ["Overview", "Schedule", "Fonts"];

  let tabs = tabNames.map((tabName) => {
    const link = `../project/${tabName.toLowerCase()}`;

    if (props.selectedTab === tabNames.indexOf(tabName)) {
      return (
        <Link key={v4()} className="header-tab selected" href={link}>
          {tabName}
        </Link>
      );
    } else {
      return (
        <Link key={v4()} className="header-tab" href={link}>
          {tabName}
        </Link>
      );
    }
  });

  return (
    <div className="project-header">
      {tabs}
      <div className="project-name">Docchi mo Kizukanai.</div>
    </div>
  );
}
