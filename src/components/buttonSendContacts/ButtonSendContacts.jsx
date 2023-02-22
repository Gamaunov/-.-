const ButtonSendContacts = () => (
  <a
    href="https://start.cloveri.com/projects/"
    target={"_blank"}
    className="cursor-pointer hover:shadow-md h-auto px-[1.875rem] pt-[1.875rem] w-full pb-[2.5rem] font-raleway flex flex-col justify-between  bg-secondary rounded-xl  xs:w-[27.4375rem] min-[17.75rem] ss:w-[36.1875rem] sm:w-[37.5rem] md:w-[28.75rem] md:h-[12.0625rem] lg:w-[35rem] lg:h-[12.0625rem] lg:justify-center"
  >
    <h4 className="font-medium text-white text-[1.25rem] mb-[.9375rem] md:mb-3 lg:mb-0">
      Не нашли проект для старта? Пришлем письмо на почту, когда появится новый
      набор
    </h4>
    <p className="text-fifth text-base font-normal mb-4 lg:mb-0">
      Оставить контакты<span className="ml-2">&#8594;</span>
    </p>
  </a>
);

export default ButtonSendContacts;
