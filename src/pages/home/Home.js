import React from "react";
import "./Home.css";
import DiseaseCard from "../../components/DiseaseCard";

const Home = () => {
  const DisaseData = [1, 2, 3, 4, 5];

  return (
    <div className="home">
      <div className="homeheader">
        <h1>Home</h1>
      </div>
      <div className="homebody">
        {DisaseData.map(() => {
          return <DiseaseCard />;
        })}
      </div>
    </div>
  );
};

export default Home;
