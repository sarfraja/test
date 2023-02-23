import React, { useState } from "react";
import "../source/css/contactus.css";
import contactimg from '../source/images/contact-main-img.webp'


export default function Contactus() {
  const [formname, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [message, setMessage] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [companyValid, setCompanyValid] = useState(false);
  const [messageValid, setMessageValid] = useState(false);

  const handleNameChange = (event) => {
    const name = event.target.value;
    setFormName(name);
    setNameValid(name !== "");
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setFormEmail(email);
    setEmailValid(validateEmail(email));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameValid && emailValid && phoneValid && companyValid && messageValid) {
      console.log("Form submitted successfully!");
      // you can submit your form data here
    } else {
      console.log("Form validation failed!");
    }
  };

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  return (
    <div>
      <main>
        <section className="banner contactUs">
          <h1 className="heading">Start a conversation today!</h1>
        </section>

        <section className="formWrapper">
          <p className="formWrapper_text">
            Want to try out our software solutions? Or speak to one of our sales
            representatives who can quickly understand your requirements?{" "}
            <strong>Fill out the form below to register your interest!</strong>
          </p>
          <div className="formWrapper_container">
            <div className="imageContainer">
              <img
                className="lazy-hidden"
                src={contactimg}
                alt="contact-main-img"
                width="685"
                height="765"
              />
            </div>
            <div className="formContainer">
              <h2 className="formContainer_heading">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="inputWrapper">
                  <input
                    type="text"
                    id="txtName"
                    value={formname}
                    onChange={handleNameChange}
                  />
                  <label>Name</label>
                  {!nameValid && (
                    <span className="error">Please enter your name</span>
                  )}
                </div>
                <div className="inputWrapper">
                  <input
                    type="text"
                    id="txtEmail"
                    value={formEmail}
                    onChange={handleEmailChange}
                  />
                  <label>Email Address</label>
                  {!emailValid && (
                    <span className="error">
                      Please enter a valid email address
                    </span>
                  )}
                </div>

                <div className="inputWrapper">
                  <input
                    type="text"
                    id="txtPhone"
                    value={formPhone}
                    onChange={(e) => {
                      const phone = e.target.value;
                      setFormPhone(phone);
                      setPhoneValid(/^\d{10}$/.test(phone)); // validate if phone number has 10 digits
                    }}
                  />
                  <label>Phone Number</label>
                  {!phoneValid && (
                    <span className="error">
                      Please enter a valid phone number
                    </span>
                  )}
                </div>
                <div className="inputWrapper">
                  <input
                    type="text"
                    id="txtCompanyName"
                    value={formCompany}
                    onChange={(e) => {
                      const company = e.target.value;
                      setFormCompany(company);
                      setCompanyValid(company !== ""); // validate if company name is not empty
                    }}
                  />
                  <label>Company Name</label>
                  {!companyValid && (
                    <span className="error">
                      Please enter your company name
                    </span>
                  )}
                </div>

                <div className="inputWrapper">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="1"
                    value={message}
                    onChange={(e) =>{ setMessage(e.target.value)
                        setMessageValid(message !== ""); 
                    }}
                    
                  />
                  <label>Message</label>
                </div>
                <div className="inputWrapper">
                  <button id="cmdSubmit" className="btn whiteBtn" type="submit">
                    REQUEST FREE TRIAL
                  </button>
                </div>
                <span id="formInput" className="text">
                  {" "}
                  Form Input:{" "}
                </span>
                <div className="formInputData">
                  <p>Name: {formname}</p>
                  <p>Email: {formEmail}</p>
                  <p>Phone Number: {formPhone}</p>
                  <p>Company Name: {formCompany}</p>
                  <p>Message: {message}</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
