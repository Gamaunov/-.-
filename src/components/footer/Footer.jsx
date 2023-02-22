import React from "react";
import logo from "../../assets/logo.png";
import {
  footerLinksLeft,
  footerLinksRight,
  getYear,
  socialMedia,
} from "../../constants";

const Footer = () => {
  return (
    <div className=" w-full px-2 mx-auto ss:px-4  md:max-w-[1060px] lg:px-[1.25rem] lg:max-w-[1160px] xl:max-w-[1200px]">
      <div className="xs: flex flex-col items-start mb-5 md:p-4">
        <div className="xs:flex flex-col justify-between mb-24 relative  md:flex-row md:justify-between w-full md:mb-12 md:items-start">
          <img
            className="cursor-pointer w-40 mb-12 sm:w-56 md:mb-0 md:mt-[-30px] md:w[14.6875rem] md:h-[6.6875rem]"
            src={logo}
            alt="Кловери.Старт"
          />
          <div className="flex flex-col text-third mb-[1.25rem]  xs:absolute top-[25px] right-[40px] sm:right-[105px] md:static md:flex-row md:gap-6 md:mx-4">
            <div className="flex flex-col gap-3 mb-3">
              {footerLinksLeft.map((link, index) => (
                <a
                  className="cursor-pointer"
                  href={link.link}
                  key={link.id}
                  {...link}
                  index={index}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {footerLinksRight.map((link, index) => (
                <a
                  className="cursor-pointer"
                  href={link.link}
                  key={link.id}
                  {...link}
                  index={index}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <h4 className="mb-1 cursor-text md:text-lg">ask@cloveri.org</h4>
            <div className="flex items-center gap-3">
              {socialMedia.map((social) => (
                <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => window.open(social.link)}
                />
              ))}
            </div>
          </div>
        </div>
        <h4 className="font-manrope text-xl cursor-text text-third text-left">
          © ООО “Платформа развития”, 2018 - {getYear}
        </h4>
      </div>
    </div>
  );
};

export default Footer;
