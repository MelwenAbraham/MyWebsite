import React from "react";
import ProjectCard from "../components/ProjectCard";

const myProjects = [
  {
    ID: "01",
    image: "My-Project-one.png",
    alt: "Project-Image",
    name: "Sharjah Police Human Resourse Management System",
    description:
      "An HRMS (Human Resource Management System) for a police department is a centralized software solution that manages personnel records, attendance, duty rosters, leave, training, performance evaluations, and compliance tracking, ensuring efficient workforce management and operational transparency",
  },
  {
    ID: "02",
    image: "My-Project-two.png",
    alt: "Project-Image",
    name: "CommandCore",
    description:
      "CommandCore is a business suite for HR, recruitment, and payroll management. It includes CommandCore HR, an HRMS for employee lifecycle management, CommandCore Hire, a recruitment tool for streamlined hiring, and CommandCore Pay, a payroll system for accurate salary processing and compliance.",
  },
  {
    ID: "03",
    image: "My-Project-three.png",
    alt: "Project-Image",
    name: "Auditorium Booking Web App– Mobile Design",
    description:
      "Designed a user-friendly mobile interface for an auditorium booking web application using React, HTML, and Tailwind CSS. Focused on creating an intuitive experience for seamless on-the-go bookings, collaborating closely with the development team to ensure alignment with overall functionality and UX goals.",
  },
];

const MyProjects = () => {
  return (
    <div className="bg-black w-100 h-auto text-white">
      <div className="flex flex-col justify-center items-center p-2 lg:p-10">
        <div className="text-4xl lg:text-5xl pb-10">
          My{" "}
          <span className="text-4xl lg:text-5xl font-extrabold">Projects</span>
        </div>
        <div>
          <ProjectCard projectList={myProjects} />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
