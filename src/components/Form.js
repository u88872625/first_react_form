import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <div className="form">
      <h1>My First React Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form_container">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="output">
        <span>{data.name}</span>
        <span>{data.email}</span>
      </div>
    </div>
  );
};

export default Form;
