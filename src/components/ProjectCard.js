/* eslint-disable jsx-a11y/alt-text */
import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  projectLink,
  alt,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        href={projectLink}
        target={"_blank"}
        className="text-white"
        rel="noreferrer"
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt={alt} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
