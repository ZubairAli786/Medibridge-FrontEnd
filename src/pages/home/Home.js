import React from "react";
import "./Home.css";
import DiseaseCard from "../../components/DiseaseCard";
import heart_attack from "../../assets/heart attack.jpg";
import neck from "../../assets/neck.jpg";
import cdc from "../../assets/cdc.jpg";
import diphteria from "../../assets/diphteria.jpg";
import laung from "../../assets/laung.jpg";
import polio from "../../assets/polio.jpg";
import hepatities from "../../assets/hepatities.jpg";
import bloodpressure from "../../assets/bloodpressure.jpg";
const Home = () => {
  const DisaseData = [
    {
      diseaseName: "Heart Attack",
      img: heart_attack,
      type: "",
      description:
        "Chest pain or discomfort; Shortness of breath; Pain or discomfort in the jaw, neck, back, arm, or shoulder; Feeling nauseous, light-headed, or unusually tired.",
      remainingdata: "GKHSG",
    },

    {
      diseaseName: "Blood Pressure problem in Pakistan",
      img: bloodpressure,
      type: "",
      description:
        "The prevalence of hypertension in the Pakistani population of more than 15 years of age is 18%, with its prevalence in the rural population being 16.2% and the urban population at 21.6%. The number of patients with controlled hypertension is very low in Pakistan.",
      remainingdata: "GKHSG",
    },
    {
      diseaseName: "How to detect the laung cancer",
      img: laung,
      type: "",
      description:
        "The only recommended screening test for lung cancer is low-dose computed tomography (also called a low-dose CT scan, or LDCT). During an LDCT scan, you lie on a table and an X-ray machine uses a low dose (amount) of radiation to make detailed images of your lungs. The scan only takes a few minutes and is not painful.",
      remainingdata: "GKHSG",
    },
    {
      diseaseName: "Polio",
      img: polio,
      type: "",
      description:
        "Polio, or poliomyelitis, is a disabling and life-threatening disease caused by the poliovirus. The virus spreads from person to person and can infect a person's spinal cord, causing paralysis (can't move parts of the body).",
      remainingdata: "GKHSG",
    },
    {
      diseaseName: "Hepatities",
      img: hepatities,
      type: "",
      description:
        "Hepatitis is a general term used to describe inflammation of the liver. Liver inflammation can be caused by several viruses (viral hepatitis), chemicals, drugs, alcohol, certain genetic disorders or by an overactive immune system that mistakenly attacks the liver, called autoimmune hepatitis.",
      remainingdata: "GKHSG",
    },
    {
      diseaseName: "Heart Attack",
      type: "",
      description: "dkg fhEIO SHIGH",
      remainingdata: "GKHSG",
    },
  ];

  return (
    <div className="home">
      <div className="homeheader">
        <h2>TRENDING STORIES</h2>
      </div>
      <div className="homebody">
        <div className="bodytop">
          <div className="left">
            <div className="imgcontainer">
              <img
                src={neck}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="right">
            <h1 style={{ fontSize: "2.5em" }}>Reasons why your Neck hurts</h1>
            <p style={{ fontSize: "1.3em" }}>
              When your Neck Hurts you know it.But what brought on that
              pain?Find out more about the posible causes and there treatment
            </p>
          </div>
        </div>
        <div className="homeheader">
          <h2>TRENDING TOPICS</h2>
        </div>
        <div className="topics">
          <h2>abc</h2>
          <h2>bcd</h2> <h2>abc</h2>
          <h2>bcd</h2> <h2>abc</h2>
          <h2>bcd</h2>
        </div>
        <div className="CDC">
          <dic className="cdctop">
            <img
              src={cdc}
              alt=""
              style={{ width: "90%", height: "100%", objectFit: "cover" }}
            />
          </dic>
          <div className="cdcbottum">
            <p
              style={{
                fontSize: "1.7em",
              }}
            >
              An epidemiologist conducts HIV-related contact tracing in
              Pakistan. Photo by Eisha Mansoor/Pakistan Field Epidemiology and
              Laboratory Training Program. The Centers for Disease Control and
              Prevention (CDC) has engaged with partners in Pakistan for more
              than three decades and placed staff in-country in 2016. CDC works
              with several key public health institutions in Pakistan, including
              the National Institute of Health (NIH) and provincial and district
              level offices. Alongside partners, CDC works to strengthen
              capacity and infrastructure for key public health issues,
              including workforce development, hepatitis surveillance, emergency
              and pandemic preparedness, and polio eradication.
            </p>
          </div>
        </div>
        <div className="bodytop">
          <div className="left">
            <div className="imgcontainer">
              <img
                src={diphteria}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="right">
            <h1 style={{ fontSize: "2.5em" }}>
              Which Disease is highest in Pakistan
            </h1>
            <p style={{ fontSize: "1.3em" }}>
              As of 2023, the number of reported diphtheria cases in Pakistan
              has increased by 50% compared to the previous year. The majority
              of cases are being reported from the Sindh and Punjab provinces.
              The incidence of diphtheria is highest among children under the
              age of 10.
            </p>
          </div>
        </div>
        <div className="homeheader">
          <h2>TRENDING FEATURES</h2>
        </div>
        <div className="diseaseCardParent">
          {DisaseData.map((item) => {
            return (
              <DiseaseCard
                diseaseName={item.diseaseName}
                diseaseimg={item.img}
                type={item.type}
                description={item.description}
                remainingdata={item.remainingdata}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
