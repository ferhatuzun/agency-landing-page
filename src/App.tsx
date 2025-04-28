import "./App.css";
import Achievements from "./components/Achievements";
import Banner from "./components/Banner";
import Calender from "./components/Calender";
import Community from "./components/Community";
import CommunityUpdates from "./components/CommunityUpdates";
import Customers from "./components/Customers";
import HeaderSlider from "./components/HeaderSlider";
import Introduction from "./components/Introduction";
import OurClient from "./components/OurClient";

function App() {
  return (
    <>
      <HeaderSlider />
      <OurClient />
      <Community />
      <Introduction />
      <Achievements />
      <Calender />
      <Customers />
      <CommunityUpdates />
      <Banner />
    </>
  );
}

export default App;
