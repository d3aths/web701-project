import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        type: "",
        password: "",

    })
    const navigate = useNavigate();

// These methods will update the state properties.
function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  
  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the register url, we'll add a new record to the database.
    const newPerson = { ...form };
  
    await fetch("http://localhost:5000/user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({ name: "", email: "", type: "", password: "" });
    navigate("/")
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>New member form</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            value={form.password}
            onChange={(e) => updateForm({ password: e.target.value })}
          />
        </div>
        <div className="form-check form-check-inline">
          <label htmlFor="typeProvider">
            <input
              type="radio"
              name="typeOptions"
              classname="form-check-input"
              id="typeProvider"
              value="Provider"
              checked={form.type === "Provider"}
              onChange={(e) => updateForm({ type: e.target.value })}
            />
            Provider
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label htmlFor="typeMember">
            <input
              type="radio"
              name="typeOptions"
              classname="form-check-input"
              id="typeMember"
              value="Member"
              checked={form.type === "Member"}
              onChange={(e) => updateForm({ type: e.target.value })}
            />
            Member
          </label>
          </div>
        <div className="form-group">
         <input
           type="submit"
           value="Register"
           className="btn btn-primary"
         />
       </div>
      </form>
    </div>
  );
}