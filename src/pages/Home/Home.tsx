import React from "react";
import { Header } from "./styles";
import MenuIcon from "../../assets/menuIcon.svg";

export const Home: React.FC = () => {
  return (
    <div>
      <Header>
        <a>Instagram</a>
        <a>Github</a>
        <a>Linkedin</a>
        <a>
          Lets talk
          <img
            src="https://www.okler.net/previews/porto/9.9.3/img/demos/personal-portfolio-1/svg/arrow.svg"
            width={25}
            height={25}
            alt="Arrow"
          />
        </a>
        <button>
          <img src={MenuIcon} width={25} height={25} alt="Menu" />
        </button>
      </Header>
    </div>
  );
};
