
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import "../style.css";
import { useEffect} from 'react';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These are some of the skills I have mastered in the field of web development</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                              <span className="text-center">                            
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="35px" height="35px" />
                              </span>
                              <h5>HTML</h5>
                            </div>
                            <div className="item">
                              <span className="text-center">                            
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" width="35px" height="35px" />
                              </span>
                              <h5>CSS</h5>
                            </div>
                            <div className="item">
                              <span className="text-center">                            
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="35px" height="35px" />
                              </span>
                              <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                              <span className="text-center">                            
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" width="35px" height="35px" />
                              </span>
                              <h5>PHP</h5>
                            </div>
                            <div className="item">
                              <span className="text-center">                            
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" width="35px" height="35px" />
                              </span>
                              <h5>MYSQL</h5>
                            </div>
                            <div className="item">
                              <span className="text-center">                            
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" width="35px" height="35px" />
                              </span>
                              <h5>BOOTSTRAP</h5>
                            </div>
                            <div className="item">
                              <span className="text-center">                            
                                <img src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg" width="35px" height="35px" />
                              </span>
                              <h5>MATERIALIZE</h5>
                            </div>
                            <div className="item">
                              <span className="text-center">                            
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="35px" height="35px" />
                              </span>
                              <h5>TAILWIND CSS</h5>
                            </div>
                            <div className="item">
                              <span className="text-center">                            
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="35px" height="35px" />
                              </span>
                              <h5>REACT JS</h5>
                            </div>
                            <div className="item">
                              <span className="text-center">                            
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" width="35px" height="35px" />
                              </span>
                              <h5>LARAVEL</h5>
                            </div>
                            <div className="item">
                              <span className="text-center">                            
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width="35px" height="35px" />
                              </span>
                              <h5>SASS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
