import "./App.css";
import AboutRow from "./components/AboutRow";
import CarouselRow from "./components/CarouselRow";
import Footer from "./components/Footer";
import GetInRow from "./components/GetInRow";
import NavigationBar from "./components/NavigationBar";
import OurServicesRow from "./components/OurServicesRow";
import PortofolioRow from "./components/PortofolioRow";
import TeamRow from "./components/TeamRow";
import ValueRow from "./components/ValueRow";
import WorkflowRow from "./components/WorkflowRow";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <CarouselRow />
      <OurServicesRow />
      <WorkflowRow />
      <PortofolioRow />
      <AboutRow />
      <TeamRow />
      <ValueRow />
      <GetInRow />
      <Footer />
    </div>
  );
}

export default App;
