import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Form from "./Form";

const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="formWrapper">
      <Form ref={componentRef} />
      <button onClick={handlePrint} className="printButton">
        Print Prescription
      </button>
    </div>
  );
};
export default Print;
