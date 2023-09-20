import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Register = ({ setUser }) => {
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};
    if (!values.userName) {
      errors.userName = "Required";
    } else if (values.userName.length > 15) {
      errors.userName = "Must be 15 characters or less";
    }

    if (values.number.length > 20) {
      errors.number = "Must be 20 characters or less";
    }

    /*  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    } */
    if (!values.mode) {
      errors.mode = "Required";
    }
    return errors;
  };

  const labelStyles = {
    color: "#4cceac",
    margin: "3px 0px",
  };
  const inputStyle = {
    padding: "6px 4px",
    fontSize: "12px",
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      number: "",
      mode: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      setUser(values);
      navigate("/game");
    },
  });
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70%",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label style={labelStyles} htmlFor="userName">
            User Name
          </label>
          <input
            style={inputStyle}
            id="userName"
            name="userName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.userName}
            required
          />
          <small style={{ color: "red" }}>{formik.errors["userName"]}</small>
          <label style={labelStyles} htmlFor="email">
            Email Address
          </label>
          <input
            style={inputStyle}
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <small style={{ color: "red" }}>{formik.errors["email"]}</small>
          <label style={labelStyles} htmlFor="number">
            Mobile Number
          </label>
          <input
            style={inputStyle}
            id="number"
            name="number"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.number}
          />
          <small style={{ color: "red" }}>{formik.errors["number"]}</small>
          <label style={labelStyles} htmlFor="mode">
            Game Mode
          </label>
          <select
            style={inputStyle}
            id="mode"
            name="mode"
            placeholder="select game mode"
            required={true}
            onChange={formik.handleChange}
            value={formik.values.mode}
          >
            <option value={"easy"}>Easy</option>
            <option value={"med"}>Medium</option>
            <option value={"hard"}>Hard</option>
          </select>
          <small style={{ color: "red" }}>{formik.errors["mode"]}</small>
          <button style={{ margin: "18px", padding: "6px 3px" }} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
