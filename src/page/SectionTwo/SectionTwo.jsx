import { useState, useEffect } from "react";

export default function SectionTwo() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate hand positions based on scroll
  const calculateHandPosition = () => {
    const maxMove = 300; // maximum pixels to move
    const scrollFactor = 0.1; // controls animation speed
    return Math.min(scrollOffset * scrollFactor, maxMove);
  };

  const handPosition = calculateHandPosition();

  return (
    <div className="sectionTwo">
      <div className="hand-group">
        <div
          className="left-hand"
          style={{
            transform: `translateX(${handPosition}px)`,
          }}
        >
          <img
            src="https://cdn.prod.website-files.com/678b6504163867089763e0b9/678b6504163867089763e170_l-hand.webp"
            alt="left-hand"
          />
        </div>
        <div
          className="right-hand"
          style={{
            transform: `translateX(-${handPosition}px)`,
          }}
        >
          <img
            src="https://cdn.prod.website-files.com/678b6504163867089763e0b9/678b6504163867089763e171_r-hand.webp"
            alt="right-hand"
          />
        </div>
      </div>
    </div>
  );
}
