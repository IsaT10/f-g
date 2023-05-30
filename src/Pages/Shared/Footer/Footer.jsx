import React from "react";

const Footer = () => {
  return (
    <div className="footer-section mt-16">
      <footer className="footer  px-10 bg-dark text-white pl-36 py-32">
        <div className="text-gray">
          <img src="" alt="" />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          {/* <div className="flex gap-4 text-2xl">
            <FaFacebook className=" hover:text-white duration-100" />
            <FaTwitter className=" hover:text-white duration-100" />
            <FaInstagram className=" hover:text-white duration-100" />
            <FaLinkedin className=" hover:text-white duration-100" />
          </div> */}
        </div>
        <div>
          <span className="footer-title mb-6">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title mb-6">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title mb-6">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
