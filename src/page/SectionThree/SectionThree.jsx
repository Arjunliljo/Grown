import React from "react";
import Counts from "./Counts";

export default function SectionThree() {
  return (
    <div style={{ backgroundColor: "white" }} id="about">
      <div className="sectionThree">
        <div className="sectionThree-content">
          <h1 className="sectionThree-content-heading">Loram Ipsum</h1>
          <div className="sectionThree-content-text">
            <div className="sectionThree-content-text-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quos.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quos.
              </p>
            </div>
            <Counts />
          </div>
        </div>
      </div>
    </div>
  );
}
