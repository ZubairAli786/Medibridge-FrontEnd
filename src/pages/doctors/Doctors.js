import React from "react";
import "./Doctors.css";
import DoctorCard from "../../components/DoctorCard";

const Doctors = () => {
  const doctorData = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="dctors">
      <div className="doctorheader">
        <h1>Doctors</h1>
      </div>
      <div className="doctorbody">
        {doctorData.map(() => {
          return <DoctorCard />;
        })}
      </div>
    </div>
  );
};

export default Doctors;
