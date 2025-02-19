import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "", // Alterado de "messages" para "message" para corresponder ao template do EmailJS
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { name, email, message } = contactData;

  const onChange = (e) =>
    setContactData({ ...contactData, [e.target.name]: e.target.value });

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }

    if (!isValidEmail(email)) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }

    setError(false);

    // Enviar e-mail via EmailJS
    emailjs.send(
      "service_iajkfw9", // Substitua pelo seu Service ID do EmailJS
      "template_kck78db", // Substitua pelo seu Template ID
      {
        name: name, // Corresponde ao {{name}} no template do EmailJS
        email: email, // Corresponde ao {{email}} no template do EmailJS
        message: message, // Corresponde ao {{message}} no template do EmailJS
      },
      "RcdwlFpcV51EqTjIr" // Substitua pelo seu Public Key do EmailJS
    )
    .then(() => {
      setSuccess(true);
      setContactData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    })
    .catch(() => {
      setError(true);
      setTimeout(() => setError(false), 2000);
    });
  };

  return (
    <section className="section section-bg section-parallax section-parallax-2" id="contact-section">
      <div className="container">
        <div className="m-titles">
          <h2 className="m-title">Contact Me</h2>
        </div>
        <div className="row row-custom">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
            <div className="numbers-items contacts-items">
              <div className="numbers-item">
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-phone" />
                </div>
                <div className="num">+55 (81) 99892-7976</div>
              </div>
              <div className="numbers-item">
                <div className="icon">
                  <i aria-hidden="true" className="fas fa-at" />
                </div>
                <div className="num">everaldoneto201@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
            <div className="contacts-form">
              <form id="cform" onSubmit={onSubmit}>
                <label>
                  Name
                  <input type="text" name="name" placeholder="Enter your full name" value={name} onChange={onChange} />
                  {error && !name && <label className="error">This field is required.</label>}
                </label>
                <label>
                  Email Address
                  <input type="email" name="email" value={email} onChange={onChange} placeholder="Enter your email address" />
                  {error && !email && <label className="error">This field is required.</label>}
                  {error && email && !isValidEmail(email) && <label className="error">Enter a valid email.</label>}
                </label>
                <label>
                  Message
                  <textarea name="message" value={message} onChange={onChange} placeholder="Enter your message here" />
                  {error && !message && <label className="error">This field is required.</label>}
                </label>
                <button type="submit" className="btn">Submit</button>
              </form>
            </div>
            {success && (
              <div className="alert-success">
                <p>Thanks, your message is sent successfully.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
