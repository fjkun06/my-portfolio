import Image from "next/image";

const ProjectCardImage = ({ src }: { src: string }) => {
  return (
    <div className="image">
      <Image
        src={src}
        width={400}
        height={200}
        alt="project-picture"
        priority
        quality={100}
      />
    </div>
  );
};

export default ProjectCardImage;
