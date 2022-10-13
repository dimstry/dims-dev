import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/zoro.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from "../assets/img/github.svg";
import "../style.css";

export const Footer = () => {
  const Tahun = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center section-fo">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/dimas-triana-233172241"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://github.com/dimstry"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={github} alt="Icon" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100032103882689"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="https://instagram.com/dimstr__?igshid=YmMyMTA2M2Y="
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright &copy; {Tahun}. Dimas 💙</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
