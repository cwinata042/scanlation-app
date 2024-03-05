import React from "react";
const { v4 } = require("uuid");
import Link from "next/link";

export default function MainHeader(props: { selectedTab: number }) {
  const tabNames = ["Schedule", "All Projects"];

  let tabs = tabNames.map((tabName) => {
    const link = tabName === "Schedule" ? "../schedule" : "../projects";

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

  return <div className="main-header">{tabs}</div>;
}
