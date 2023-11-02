import React, { RefObject, useEffect, useRef, useState } from "react";
import {
  Header,
  ModalContent,
  ContainerHome,
  Icon,
  Photo,
  Description,
  ScrollAnimation,
  Experiences,
  ContainerExperiences,
  Technologies,
  ContainerGrid,
  ContainerLoading,
  ContainerLottie,
  Contact,
  Footer,
} from "./styles";
import MenuIcon from "../../assets/menuIcon.svg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Modal,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ProfilePhoto from "../../assets/profile.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Ohubdev from "../../assets/ohubdevfooter.svg";
import Automac from "../../assets/automac.png";
import Arco from "../../assets/arco.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Lottie from "react-lottie";
import Astronaut from "../../assets/astronaut.json";

export const Home: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const experienceDiv = useRef<HTMLDivElement>(null);
  const technologiesDiv = useRef<HTMLDivElement>(null);
  const text =
    "Hello, Im Rhayann, an web and mobile developer and my journey is marked by challenges overcome, enriching experiences and an unwavering commitment to excellence.";
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [loadingFinished, setLoadingFinished] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingFinished(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (charIndex < text.length && progress === 100) {
        setDisplayText(displayText + text.charAt(charIndex));
        setCharIndex(charIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [charIndex, text, displayText, progress]);

  const handleScrollToDiv = (divRef: RefObject<HTMLDivElement>) => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Astronaut,
  };

  if (loadingFinished)
    return (
      <ContainerLoading>
        <ContainerLottie>
          <Lottie
            options={defaultOptions}
            height={250}
            width={250}
            style={{ margin: 0 }}
          />
        </ContainerLottie>

        <h3>Progress {progress}%</h3>
        <h3>
          Loading<span>...</span>
        </h3>
      </ContainerLoading>
    );

  return (
    <div>
      <Header>
        <>
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
        </>

        <button onClick={() => setShowMenu(true)}>
          <img src={MenuIcon} width={25} height={25} alt="Menu" />
        </button>
        <Modal open={showMenu} onClose={() => setShowMenu(false)}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              backgroundColor: "rgba(16, 16, 16, 0.9)",
            }}
          >
            <ModalContent>
              <Icon onClick={() => setShowMenu(false)}>
                <CloseIcon />
              </Icon>

              <a>Home</a>
              <a>About me</a>
              <a>Projects</a>
              <a>Instagram</a>
              <a>Github</a>
              <a>Linkedin</a>
            </ModalContent>
          </Box>
        </Modal>
      </Header>
      <ContainerHome>
        <Photo>
          <img src={ProfilePhoto} alt="ProfilePhoto" />
        </Photo>
        <Description>
          <h3>Freelance</h3>
          <h3>Software Engineer</h3>
          <p>{displayText}</p>
        </Description>
        <ScrollAnimation onClick={() => handleScrollToDiv(experienceDiv)}>
          <KeyboardDoubleArrowDownIcon sx={{ color: "white" }} />
        </ScrollAnimation>
      </ContainerHome>
      <ContainerExperiences ref={experienceDiv}>
        <h3>Experiences and projects</h3>
        <Experiences>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Gft_logo.svg"
            alt="Gft"
            onClick={() => window.open(" https://www.gft.com/int/en")}
          />
          <img
            src="https://brand.dasa.com.br/wp-content/uploads/2021/03/marca-dasa-02-azulclaro-fundoescuro.svg"
            alt="Dasa"
            onClick={() => window.open(" https://nav.dasa.com.br/")}
          />
          <img src={Ohubdev} alt="Ohubdev" />
          <img
            src={Automac}
            alt="Automac"
            onClick={() =>
              window.open("https://auto-mac.000webhostapp.com/login")
            }
          />
          <img
            src={Arco}
            alt="Arco"
            onClick={() => window.open("https://arcoeducacao.com.br/")}
          />
        </Experiences>

        <Technologies>
          <Accordion sx={{ boxShadow: "none" }} ref={technologiesDiv}>
            <AccordionSummary>
              <h3>
                Technologies{" "}
                <ExpandMoreIcon
                  onClick={() => handleScrollToDiv(technologiesDiv)}
                />
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <ContainerGrid>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://techstack-generator.vercel.app/react-icon.svg"
                    alt="icon"
                    width="40"
                    height="40"
                  />
                  React
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://techstack-generator.vercel.app/js-icon.svg"
                    alt="icon"
                    width="40"
                    height="40"
                  />
                  JavaScript
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://techstack-generator.vercel.app/cpp-icon.svg"
                    alt="icon"
                    width="40"
                    height="40"
                  />
                  C++
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://techstack-generator.vercel.app/webpack-icon.svg"
                    alt="icon"
                    width="40"
                    height="40"
                  />
                  Webpack
                </div>
                <div className="grid-item">
                  <img
                    src="https://techstack-generator.vercel.app/mysql-icon.svg"
                    alt="icon"
                    width="40"
                    height="40"
                  />
                  MySQL
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://techstack-generator.vercel.app/ts-icon.svg"
                    alt="icon"
                    width="40"
                    height="40"
                  />
                  TypeScript
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://techstack-generator.vercel.app/aws-icon.svg"
                    alt="icon"
                    width="40"
                    height="40"
                  />
                  AWS
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://techstack-generator.vercel.app/csharp-icon.svg"
                    alt="icon"
                    width="40"
                    height="40"
                  />
                  C#
                </div>
                <div className="grid-item">
                  <img
                    src="https://www.vectorlogo.zone/logos/elixir-lang/elixir-lang-icon.svg"
                    width="40"
                    height="40"
                    alt="Elixir"
                  />
                  Elixir
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
                    alt="icon"
                    width="40"
                    height="40"
                  />
                  Java
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://techstack-generator.vercel.app/github-icon.svg"
                    alt="icon"
                    width="40"
                    height="40"
                  />
                  Github
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://www.vectorlogo.zone/logos/bitbucket/bitbucket-icon.svg"
                    width="40"
                    height="40"
                    alt="Bitbucket"
                  />
                  Bitbucket
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
                    width="40"
                    height="40"
                    alt="Git"
                  />
                  Git
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://skillicons.dev/icons?i=laravel"
                    width="40"
                    height="40"
                    alt="Laravel"
                  />
                  Laravel
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://skillicons.dev/icons?i=html"
                    width="40"
                    height="40"
                    alt="HTML5"
                  />
                  HTML5
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://skillicons.dev/icons?i=css"
                    width="40"
                    height="40"
                    alt="css"
                  />
                  CSS
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://skillicons.dev/icons?i=bootstrap"
                    width="40"
                    height="40"
                    alt="bootstrap"
                  />
                  Bootstrap
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://techstack-generator.vercel.app/react-icon.svg"
                    width="40"
                    height="40"
                    alt="tailwind"
                  />
                  React Native
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://www.vectorlogo.zone/logos/reducer/reducer-icon.svg"
                    width="40"
                    height="40"
                    alt="Reducer"
                  />
                  Reducer
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://skillicons.dev/icons?i=mongodb"
                    width="40"
                    height="40"
                    alt="MongoDB"
                  />
                  MongoDB
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://skillicons.dev/icons?i=nodejs"
                    width="40"
                    height="40"
                    alt="Nodejs"
                  />
                  Nodejs
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://skillicons.dev/icons?i=php"
                    width="40"
                    height="40"
                    alt="PHP"
                  />
                  PHP
                </div>
                <div className="grid-item">
                  {" "}
                  <a href="#macropower-tech">
                    <img
                      src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
                      alt="icon"
                      width="40"
                      height="40"
                    />
                  </a>
                  SQLite
                </div>
                <div className="grid-item">
                  <img
                    src="https://skillicons.dev/icons?i=postgres"
                    width="40"
                    height="40"
                    alt="PostgreSQL"
                  />
                  PostgreSQL
                </div>
                <div className="grid-item">
                  <img
                    src="https://skillicons.dev/icons?i=jquery"
                    width="40"
                    height="40"
                    alt="jQuery"
                  />
                  jQuery
                </div>
                <div className="grid-item">
                  <img
                    src="https://www.vectorlogo.zone/logos/angular/angular-icon.svg"
                    width="40"
                    height="40"
                    alt="Angular"
                  />
                  Angular
                </div>
                <div className="grid-item">
                  {" "}
                  <img
                    src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
                    width="40"
                    height="40"
                    alt="Graph QL"
                  />
                  Graph QL
                </div>
              </ContainerGrid>
            </AccordionDetails>
          </Accordion>
        </Technologies>
      </ContainerExperiences>
      <Footer>
        <Contact className="Contact">
          <div>
            <h3>Take your ideas off paper and make them come to life</h3>
            <button>Contact</button>
          </div>
          <h3>Personal contact</h3>
          <a>Instagram</a>
          <a>Linkedin</a>
          <a>Github</a>
        </Contact>
      </Footer>
    </div>
  );
};
