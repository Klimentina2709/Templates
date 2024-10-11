import React from "react";
import Banner from "./components/TemplateFiles/Banner";
import DetailsBlock from "./components/TemplateFiles/DetailsBlock";
import PlacesContainer from "./components/TemplateFiles/PlacesContainer";
import "./css/main.scss";
import Footer from "./components/TemplateFiles/Footer";

const App: React.FC = () => {
  return (
    <>
      <Banner title="Summer vacation" heading="Nomad nation" />
      <DetailsBlock
        heading="Stories of Adventure"
        img="https://picsum.photos/id/18/900/900"
      />
      <PlacesContainer />
      <DetailsBlock
        heading="Popular Adventures"
        img="https://picsum.photos/id/28/1000/1000"
      />
      <Footer />
    </>
  );
};

export default App;
