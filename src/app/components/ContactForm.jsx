"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Network error. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xl-6 col-lg-12 col-md-6">
          <div className="contact-form-item mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <i className="fa-regular fa-user"></i>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12 col-md-6">
          <div className="contact-form-item mb-4">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <i className="fa-regular fa-user"></i>
          </div>
        </div>
        <div className="col-12">
          <div className="contact-form-item mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <i className="fa-regular fa-envelope"></i>
          </div>
        </div>
        <div className="col-12">
          <div className="contact-form-item mb-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <i className="fa-solid fa-phone"></i>
          </div>
        </div>
        <div className="col-12">
          <div className="contact-form-item mb-4">
            <textarea
              name="message"
              placeholder="Type your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <div className="col-12">
          <div className="contact-form-item pt-10">
            <button type="submit">Submit the details</button>
          </div>
        </div>
      </div>
      {status && <p>{status}</p>}
    </form>
  );
}
