import { features } from "../../constants/index";
import ButtonSendContacts from "../buttonSendContacts/ButtonSendContacts";

const FeatureCard = ({ link, title, content, info, index }) => (
  <a
    href={link}
    target={"_blank"}
    className="cursor-pointer h-auto hover:shadow-md px-[1.875rem] pt-[1.875rem] w-full pb-[2.5rem] font-raleway flex flex-col justify-between  bg-gray-200 rounded-xl  xs:w-[27.4375rem] min-[17.75rem] ss:w-[36.1875rem] sm:w-[37.5rem] md:w-[28.75rem] md:h[12.0625rem] lg:w-[35rem] lg:h-[12.0625rem] lg:justify-center"
  >
    <h4 className="font-medium text-[2rem] mb-[.9375rem] text-primary lg:mb-0">
      {title}
    </h4>
    <p className="text-third text-base font-normal mb-4 sm:mb-2 md:mb-3">
      {content}
    </p>
    <p className="text-secondary  font-bold">
      {info}
      <span className="ml-2">&#8594;</span>{" "}
    </p>
  </a>
);

const Content = () => (
  <>
    <div className="mx-auto px-2 w-full mb-5 ss:px-4 lg:mb-7 md:max-w-[1060px] lg:max-w-[1160px] xl:max-w-[1200px]">
      <h1 className="text-left text-primary font-semibold text-[2.875rem] font-raleway pt-4 pb-[2.8125rem mb-[5.625rem]">
        Открытые проекты
      </h1>
      <div className="flex flex-wrap gap-2.5 justify-center items-center  lg:gap-5">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
        <ButtonSendContacts />
      </div>
    </div>
  </>
);

export default Content;
