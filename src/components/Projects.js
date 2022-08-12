import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project/1.png";
import projImg2 from "../assets/img/project/2.jpg";
import projImg3 from "../assets/img/project/3.png";
import projImg4 from "../assets/img/project/4.png";
import projImg5 from "../assets/img/project/5.jpg";
import projImg6 from "../assets/img/project/6.png";
import projImg7 from "../assets/img/project/7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Dims Film",
      description: "This website is made with React JS and React boostrap for style",
      imgUrl: projImg1,
      projectLink: "https://dimstry.github.io/DimsFilms/",
    },
    {
      title: "Minimart App",
      description: "A sales website, for making direct payments, created using PHP",
      imgUrl: projImg4,
      projectLink: "https://github.com/dimstry/minimart-app/",
    },
    {
      title: "My Idol",
      description: "A K-Pop Idol Web Profile created using the Next.js",
      imgUrl: projImg3,
      projectLink: "https://dimstry.github.io/DimsFilms/",
    },
  ];

  const projects2 = [
    {
      title: "MY - AESPA",
      description: "This website was created to promote girl groups",
      imgUrl: projImg2,
      projectLink: "https://dimstry.github.io/aespa-page/",
    },
    {
      title: "Absensi Scan",
      description: "Source code for the development of an Attendance application with the barcode scan method",
      imgUrl: projImg5,
      projectLink: "https://github.com/Zx-Akito/AbsensiScan",
    },
    {
      title: "Al Qur'an Online",
      description: "a website of the Qur'an created with the help of Rest API",
      imgUrl: projImg6,
      projectLink: "https://dimstry.github.io/Al-Qur-anOn/",
    },
  ];
  const projects3 = [
    {
      title: "Sidebar - SCSS",
      description: "a sidebar that is made according to the design",
      imgUrl: projImg7,
      projectLink: "https://github.com/dimstry/tStsidebar/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A history of making a Web that I made while studying, which was made personally or with a teams</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard     
                                  key={index}
                                  {...project}
                                  />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <ProjectCard     
                                    key={index}
                                    {...project}
                                    />
                              )
                            })
                          }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                          {
                            projects3.map((project, index) => {
                              return (
                                <ProjectCard     
                                    key={index}
                                    {...project}
                                    />
                              )
                            })
                          }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container> 
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
