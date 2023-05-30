import React from "react";

const TeamCard = ({ teamMember }) => {
  const { id, img, name, work } = teamMember;
  return (
    <div>
      <div className="card card-compact w-[360px] p-4 rounded-md bg-lightGray shadow-md">
        <figure>
          <img
            className="rounded-md w-80 h-96 object-cover duration-200"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="mt-5 text-center">
          <h2 className="text-xl font-bold text-darkGray">{name}</h2>
          <p className="my-3 text-orange  text-base">{work}</p>
        </div>
        {/* <div className="flex justify-center gap-2 mt-2 mb-3  ">
          <FaFacebook className="w-7 h-7 cursor-pointer" />
          <FaTwitter className="w-7 h-7 cursor-pointer" />
          <FaLinkedin className="w-7 h-7 cursor-pointer" />
          <FaInstagram className="w-7 h-7 cursor-pointer" />
        </div> */}
      </div>
    </div>
  );
};

export default TeamCard;
