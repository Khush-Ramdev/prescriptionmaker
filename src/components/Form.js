import React, { useState } from "react";

const Form = React.forwardRef((props, ref) => {
  const [patientName, setPatientName] = useState("");
  const [patientGender, setPatientGender] = useState("male");
  const [patientAge, setPatientAge] = useState(10);
  const [patientAddress, setPatientAddress] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="form" ref={ref}>
      <div className="inputs">
        <label className="label hide" htmlFor="hospitalname">
          Name of Hospital:
        </label>
        <input
          name="hospitalname"
          type="text"
          placeholder="Name of the Hospital"
          className="hospitalName  border-none"
        ></input>
      </div>
      <div style={{ display: "none" }} className="inputs show">
        <label className="label hide">Doctor's Name:</label>
        <div className="doctorName">
          Dr. John Killer<span className="degrees">(MBBS , MS ortho)</span>
        </div>
      </div>

      <div style={{ display: "none" }} className="inputs show">
        <label className="label hide">Address Of Hospital:</label>
        <div className="address">
          751 Victoria 123 street,south statue 204 <br></br>Hometown us 1234{" "}
          <br></br>PH: (207) 808 2014 2014 <br></br>FAX: (207) 808 2014 2014
        </div>
      </div>

      <div style={{ position: "relative", flexGrow: 1 }}>
        <div style={{ display: "none" }} className="serialNo show">
          S.No:<div className="underline"></div>
        </div>
        <div className="inputs patientNameFull">
          <div className="label" htmlFor="patientName">
            Patient Name:
          </div>
          <input
            name="patientName"
            type="text"
            placeholder="Patient's Name"
            className="patientName  border-none"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          ></input>
        </div>
        <div className="inputs ageFull">
          <div className="label" htmlFor="age">
            Age:
          </div>
          <input
            name="age"
            type="number"
            defaultValue={patientAge}
            onChange={(e) => setPatientAge(e.target.value)}
            className="age  border-none"
          ></input>
        </div>
        <div className="inputs genderFull">
          <div className="label" htmlFor="gender">
            Gender:
          </div>
          <select
            name="gender"
            placeholder="Patient's Gender"
            className="gender  border-none"
            value={patientGender}
            onChange={(e) => setPatientGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="inputs patientaddressFull">
          <div className="label" htmlFor="patientAddress">
            Address:
          </div>
          <input
            name="patientAddress"
            type="text"
            placeholder="Patient's Address"
            className="patientAddress  border-none"
            defaultValue={patientAddress}
            onChange={(e) => setPatientAddress(e.target.value)}
          ></input>
        </div>
        <div className="inputs dateFull">
          <div className="label" htmlFor="date">
            Date:
          </div>
          <input
            name="date"
            type="date"
            className="date  border-none"
            defaultValue={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>
        <div style={{ display: "none" }} className="doctorSignature show">
          Doctor's Signature<div className="underline"></div>
        </div>
        <div style={{ display: "none" }} className="footer show">
          www.hospitalName@mail.com
        </div>
      </div>
    </div>
  );
});

export default Form;
