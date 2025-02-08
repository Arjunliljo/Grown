import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import SectionFive from "./page/SectionFIve/SectionFive";
import SectionFour from "./page/SectionFour/SectionFour";
import SectionOne from "./page/SectionOne/SectionOne";
import SectionSeven from "./page/SectionSeven/SectionSeven";
import SectionSix from "./page/SectionSIx/SectionSix";
import SectionThree from "./page/SectionThree/SectionThree";
import SectionTwo from "./page/SectionTwo/SectionTwo";

function App() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <main className="main">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
