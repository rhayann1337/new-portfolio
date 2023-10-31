import React, { useEffect, useState } from "react";
import {
  Header,
  ModalContent,
  ContainerHome,
  Icon,
  Photo,
  Description,
  ScrollAnimation,
} from "./styles";
import MenuIcon from "../../assets/menuIcon.svg";
import { Box, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ProfilePhoto from "../../assets/profile.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export const Home: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const text =
    "Hello, Im Rhayann, an web and mobile developer and my journey is marked by challenges overcome, enriching experiences and an unwavering commitment to excellence.";
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayText(displayText + text.charAt(charIndex));
        setCharIndex(charIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [charIndex, text, displayText]);

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
        <ScrollAnimation>
          <KeyboardDoubleArrowDownIcon sx={{ color: "white" }} />
        </ScrollAnimation>
      </ContainerHome>
    </div>
  );
};
