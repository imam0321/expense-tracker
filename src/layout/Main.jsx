import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import Form from "../components/SubmissionForm/Form";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Form />
      </div>
    </>
  );
};

export default Main;
