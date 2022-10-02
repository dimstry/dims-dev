import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Swal from "sweetalert2";

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");

  const fetchGo = () => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxK-c9X-v8cjbDjEeddO9R5891H7_bIRgjFUk21vuyWSYMRrjuG4EKng5QyzSMBDsKO/exec";
    const form = document.forms["dims-code"];
    function myTrigger() {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent!",
        icon: "success",
        confirmButtonText: "oke",
      });
    }
    form.addEventListener("submit", (e) => {
      setButtonText("Sending...");
      e.preventDefault();
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          console.log(response);
          setButtonText("Send");
          form.reset();
          myTrigger();
        })
        .catch((error) => {
          console.error("Error!", error.message);
          setButtonText("Send");
          Swal.fire({
            title: "Error!",
            text: "Your message has not been sent!",
            icon: "error",
            confirmButtonText: "oke",
          });
        });
    });
  };

  useEffect(() => {
    fetchGo();
  });

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form name="dims-code" autoComplete="off">
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          name="fisrt-name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          name="last-name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          placeholder="Phone No."
                          name="no"
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          name="massage"
                          required
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
