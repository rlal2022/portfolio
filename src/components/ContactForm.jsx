import React, { useState } from "react";
import "../css/App.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailaddress: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:your-email@example.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
      formData.name
    )}%0AEmail:%20${encodeURIComponent(
      formData.emailaddress
    )}%0AMessage:%20${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-form mb-3">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="emailaddress" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailaddress"
            placeholder="name@example.com"
            value={formData.emailaddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="col-12 d-flex justify-content-center ">
          <button type="submit" className="btn btn-dark mb-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
