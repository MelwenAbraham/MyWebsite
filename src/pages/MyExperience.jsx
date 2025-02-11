import React from "react";
import MyExperienceCard from "../components/MyExperienceCard";

const jobExperience = [
  {
    companyName: "Software Engineer at Pit Solution",
    duration: "July 2022 - Present",
    description:
      "As a Full Stack Developer, I have played a key role in developing a user-friendly web application using .NET Core and React, delivering a seamless and efficient user experience. I integrated RESTful APIs to enhance functionality and built responsive, high-performance UI components. Collaborating with international teams, I actively contributed to project planning, development, and troubleshooting, ensuring high-quality, scalable solutions. My ability to optimize performance, streamline workflows, and solve complex technical challenges makes me a valuable asset in dynamic development environments",
  },
];

const MyExperience = () => {
  return (
    <div className="bg-black w-100 h-auto text-white">
      <div className="flex flex-col justify-center items-center p-2 lg:p-10">
        <div className="text-4xl lg:text-5xl pb-10">
          My{" "}
          <span className="text-4xl lg:text-5xl font-extrabold">
            Experience
          </span>
        </div>
        <div>
          <MyExperienceCard experiences={jobExperience} />
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
