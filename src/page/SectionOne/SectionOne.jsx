import { useMediaQuery } from "react-responsive";
import GridSection from "./GridSection";
import GridSectionMob from "./GridSectionMob";
import SectionOneContents from "./SectionOneContents";

export default function SectionOne() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section className="section section-one">
      <SectionOneContents />
      {isMobile ? <GridSectionMob /> : <GridSection />}
    </section>
  );
}
