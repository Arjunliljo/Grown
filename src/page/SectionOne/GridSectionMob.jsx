import { useInView } from "framer-motion";
import { useRef } from "react";

export default function GridSectionMob() {
  const ref = useRef();
  const inView = useInView(ref, { amount: 0.2 });
  return (
    <div className="grid-section" ref={ref} id="home">
      <div
        className="card card-hidden"
        style={{ gridRow: "span 3", opacity: 0 }}
      ></div>
      <div
        className="card"
        style={{
          gridRow: "span 12",
          transform: inView ? "translateY(0)" : "translateY(10rem)",
        }}
      ></div>

      <div
        className="card"
        style={{
          gridRow: "span 12",
          transform: inView ? "translateY(0)" : "translateY(30rem)",
        }}
      ></div>

      <div
        className="card"
        style={{
          gridRow: "span 12",
          transform: inView ? "translateY(0)" : "translateY(40rem)",
        }}
      ></div>
      <div
        className="card"
        style={{
          gridRow: "span 12",
          transform: inView ? "translateY(0)" : "translateY(50rem)",
        }}
      ></div>
      <div
        className="card"
        style={{
          gridRow: "span 12",
          transform: inView ? "translateY(0)" : "translateY(60rem)",
        }}
      ></div>
      <div
        className="card"
        style={{
          gridRow: "span 12",
          transform: inView ? "translateY(0)" : "translateY(70rem)",
        }}
      ></div>
      <div
        className="card"
        style={{
          gridRow: "span 12",
          transform: inView ? "translateY(0)" : "translateY(80rem)",
        }}
      ></div>
      <div
        className="card"
        style={{
          gridRow: "span 10",
          transform: inView ? "translateY(0)" : "translateY(90rem)",
        }}
      ></div>
    </div>
  );
}
