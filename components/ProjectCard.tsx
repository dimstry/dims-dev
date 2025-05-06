/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

interface projectCardProps {
  data: {
    title: string;
    description: string;
    imgUrl: string;
    projectLink: string;
    alt: string;
  };
}

export const ProjectCard = ({
  data: { title, description, imgUrl, projectLink, alt },
}: projectCardProps) => {
  return (
    <div>
      <a
        href={projectLink}
        target={"_blank"}
        className="text-white"
        rel="noreferrer"
      >
        <div className="proj-imgbx shadow-sm shadow-light-blue-200">
          <img src={imgUrl} alt={alt} loading="lazy" />
          <div className="proj-txtx">
            <h2 className="text-lg">{title}</h2>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </div>
  );
};
