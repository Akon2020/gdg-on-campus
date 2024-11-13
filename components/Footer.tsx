import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Prêt à Apprendre, <span className="text-purple">Grandir</span> et à
          vous Connecter?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Rejoins notre large communauté aujourd&apos;hui et ensemble créeons un
          environnement de quietude pour tous.
        </p>
        <a
          href="https://gdg.community.dev/e/mvr6h5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Nous Rejoindre"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="w-full pt-20 pb-10">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Je veux garder <span className="text-purple">le contact</span>
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Restez informer par rapport aux différentes actions et événements
            avenir en réjoingnant notre communauté sur WhatsApp
          </p>
          <a
            href="https://chat.whatsapp.com/ChRDbfO6d2QCu6PUydMGHQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Rejoindre WhatsApp"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-6 md:mb-0">
          Copyright © 2024 GDG On Campus UCB{" "} 💙
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
