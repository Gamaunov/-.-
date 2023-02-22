import logo from "../../assets/logo.png";
import Button from "../button/Button";

const Header = () => {
  return (
    <>
      <div className="mx-auto px-2 flex flex-col gap-3 mb-[3.125rem] justify-between items-center xs:flex-row ss:px-4 md:max-w-[1060px] lg:max-w-[1160px] xl:max-w-[1200px]">
        <a href="https://start.cloveri.com/" target={"_blank"}>
          <img src={logo} alt="Кловери.старт" />
        </a>
        <a href="https://t.me/cloveri_start_chat" target={"_blank"}>
          <Button />
        </a>
      </div>
    </>
  );
};

export default Header;
