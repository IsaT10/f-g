import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <div>
      <div className="relative">
        <h2 className=" text-center text-8xl font-bold uppercase text-lightGray">
          Best Riders
        </h2>
        <h3 className="absolute top-1/2  right-1/2 translate-x-16  text-xl font-bold text-dark ">
          Our Fast Team
        </h3>
      </div>
      <p>{teams.length}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {teams.map((teamMember) => (
          <TeamCard key={teamMember.id} teamMember={teamMember} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
