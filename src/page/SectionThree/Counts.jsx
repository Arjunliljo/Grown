import React from "react";

export default function Counts() {
  const stats = [
    { value: "12", label: "Certified Engineers" },
    { value: "180+", label: "Happy Clients" },
    { value: "8+", label: "Cities" },
    { value: "250", label: "Projects Done" },
  ];

  return (
    <div className="gridsection">
      {stats.map((stat, index) => (
        <div key={index} className="flex-col-center">
          <h1 className="ten">{stat.value}</h1>
          <span className="numberhead">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
