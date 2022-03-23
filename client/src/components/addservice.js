import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Addservice() {
    const [form, setForm] = useState({
        title: "",
        category: "",
        details: "",
        tokens: 0,
        date: ""

    })
    const navigate = useNavigate();

    //this page should only appear to those accounts who have isAdmin and isProvider set to true

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
    const newService = { ...form };
  
    await fetch("http://localhost:5000/services/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({ title: "", category: "", details: "", tokens: "", date: "" });
    navigate("/")
  }

  //form for adding the new service
  return (
    <div>
      <h3>New service form</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title of the service</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={form.title}
            onChange={(e) => updateForm({ title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={form.category}
            onChange={(e) => updateForm({ category: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="details">Details</label>
          <input
            type="text"
            className="form-control"
            id="details"
            value={form.details}
            onChange={(e) => updateForm({ details: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Tokens">Tokens</label>
            <input
              type="number"
              step="1"
              classname="form-control"
              id="tokens"
              value={form.tokens}
              onChange={this.value = parseInt(this.value), (e) => updateForm({ tokens: e.target.value })}
            />
        </div>
        <div className="form-group">
          <label htmlFor="Date">Date</label>
            <input
              type="text"
              classname="form-control"
              id="date"
              value={form.date}
              onChange={(e) => updateForm({ date: e.target.value })}
            />
          </div>
        <div className="form-group">
         <input
           type="submit"
           value="Create"
           className="btn btn-primary"
         />
       </div>
      </form>
    </div>
  )
}