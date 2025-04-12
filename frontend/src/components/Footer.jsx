
import alight from "./image/alight.svg";

const Footer = () => {
  return (
    <div className="bg-blue-700/5">
      <div className="max-w-[1280px] w-[90%] px-6 py-10 mx-auto">
        <div className="flex flex-col justify-between sm:flex-row">
          <div>
            <h2 className="font-semibold">Alight Coding School.</h2>
            <p className="flex items-center">
              <span className="mr-1">Powered by</span>
              <a href="https://www.wearealight.org/rwanda" target="_blank">
                <img className="h-4" src={alight} alt="Alight" />
              </a>
            </p>
          </div>
          <div>&copy;{new Date().getFullYear()}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
