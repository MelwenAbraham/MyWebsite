import React from "react";
import SkillsButton from "../components/SkillsButton";

const MySkills = () => {
  return (
    <div
      className="p-2 md:pt-5 md:px-[100px] md:pb-[50px]"
      style={{ marginTop: "100px" }}
    >
      <div className="flex justify-center items-center">
        <div className="text-5xl">
          My <span className="font-extrabold">Skill</span>
        </div>
      </div>
      <div className="flex justify-center lg:justify-center flex-wrap gap-3 mt-10 ">
        <SkillsButton
          icon={"icon-dotnet.svg"}
          label={".NET Core"}
          alt={"DotNetLogo"}
        />
        <SkillsButton
          icon={"icon-react.svg"}
          label={"React"}
          alt={"React Logo"}
        />
        <SkillsButton icon={"icon-sql.svg"} label={"SQL"} alt={"Sql Logo"} />
        <SkillsButton
          icon={"icon-postgresql.svg"}
          label={"PostgreSQL"}
          alt={"PostgreeSql Logo"}
        />
        <SkillsButton
          icon={"icon-javscript.svg"}
          label={"JavaScript"}
          alt={"JavaScript Logo"}
        />
        <SkillsButton
          icon={"icon-typescript.svg"}
          label={"TypeScript"}
          alt={"TypeScript Logo"}
        />
        <SkillsButton
          icon={"icon-mongodb.svg"}
          label={"MongoDB"}
          alt={"Mongo DB Logo"}
        />
        <SkillsButton icon={"icon-html.svg"} label={"HTML"} alt={"HTML Logo"} />
        <SkillsButton icon={"icon-CSS.svg"} label={"CSS"} alt={"CSS Logo"} />
        <SkillsButton
          icon={"icon-tailwindcss.svg"}
          label={"Tailwind"}
          alt={"Tailwind Logo"}
        />
        <SkillsButton
          icon={"bootstrap-logo-black.svg"}
          label={"Bootstrap"}
          alt={"Bootstrap Logo"}
        />
        <SkillsButton icon={"icon-git.svg"} label={"Git"} alt={"Git Logo"} />
        <SkillsButton
          icon={"icon-redis.svg"}
          label={"Redis"}
          alt={"Redis Logo"}
        />
        <SkillsButton
          icon={"icon-redux.svg"}
          label={"Redux"}
          alt={"Redux Logo"}
        />
      </div>
    </div>
  );
};

export default MySkills;
