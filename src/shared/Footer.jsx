import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-100 h-auto text-white">
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center font-semibold p-5 gap-3 lg:gap-0">
        <div> &copy; 2025 All Rights Reserved</div>
        <div className="flex justify-center items-center lg:justify-end">
          <a href="www.linkedin.com/in/melwentabraham">LinkedIn</a>&nbsp;/&nbsp;
          <a href="https://github.com/MelwenAbraham">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
