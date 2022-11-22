import "mapbox-gl/dist/mapbox-gl.css";
import React from "react";
import Map from "../components/Map";
import SuggestionInput from "../components/SuggestionInput";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div style={{ margin: "10px 20px " }}>
        <SuggestionInput />
      </div>

      <div style={{ margin: "10px 20px " }}>
        <Map />
      </div>
    </Layout>
  );
};

export default Home;
