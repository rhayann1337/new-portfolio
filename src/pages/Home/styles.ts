import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 58px;

  a {
    font-family: Poppins, sans-serif;
    display: none;
    align-items: center;
    margin: 0 16px;
    cursor: pointer;

    img {
      right: 0;
      transform: translateX(0);
      transition: transform 0.3s;
    }

    img:hover {
      animation: slideRight 1s linear infinite;
    }

    @media (min-width: 1024px) {
      justify-content: "center";
      display: flex;
    }
  }

  @keyframes slideRight {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(25px);
    }
    100% {
      transform: translateX(0);
    }
  }

  button {
    display: flex;
    align-items: center;
    margin-left: 0;

    svg {
      cursor: pointer;
      color: white;
    }
  }

  @media (min-width: 1024px) {
    height: 92px;
    justify-content: center;
    button {
      margin-left: 32px;
    }
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  width: fit-content;
  background-color: rgba(16, 16, 16, 0.8);

  a {
    font-size: 28px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  color: white;
  top: 40px;
  right: 32px;
  cursor: pointer;
`;

export const ContainerHome = styled.div`
  width: 100%;
  height: calc(100vh - 58px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    height: calc(100vh - 92px);
  }
`;

export const Photo = styled.div`
  display: none;

  img {
    width: 340px;
    height: 400px;
    border-radius: 16px;
    transition: opacity 1s;
  }

  img:hover {
    opacity: 0.5;
  }

  @media (min-width: 1024px) {
    width: 425px;
    height: 500px;
    display: flex;

    img {
      width: 425px;
      height: 500px;
    }
  }
`;

export const Description = styled.div`
  padding: 0 32px;
  height: 294px;
  width: 100%;
  border-radius: 16px;

  h3 {
    font-size: 48px;
    line-height: 54px;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    text-align: left;
  }

  p {
    min-width: 90%;
    font-size: 20px;
    overflow: hidden;
    padding-right: 10px;
    color: #ffffff;
    text-align: left;
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
  }

  @media (min-width: 1024px) {
    margin-left: 32px;
    max-width: 500px;
    min-width: 500px;

    p {
      min-width: 500px;
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;

export const ScrollAnimation = styled.div`
  display: flex;
  position: absolute;
  bottom: 32px;
  animation: bounce 1s infinite;
  cursor: pointer;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(5px);
    }
  }
`;

export const ContainerExperiences = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  align-items: flex-start;
  padding: 40px;

  h3 {
    font-size: 32px;
    line-height: 44px;
    font-weight: 400;
  }
`;

export const Experiences = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;

  img {
    max-height: 35px;
    max-width: 125px;
    min-height: 35px;
    margin: 16px;
    cursor: pointer;
    filter: grayscale(100%);
    transition: filter 0.3s;
  }

  img:hover {
    filter: grayscale(0%);
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    img {
      margin: 0 32px;
    }
  }
`;

export const Technologies = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 16px 0;

  h3 {
    margin: 0;
  }

  @media (min-width: 1024px) {
    margin: 40px 0;

    h3 {
      line-height: 16px;
    }
  }
`;

export const ContainerGrid = styled.div`
  display: grid;
  gap: 8px;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(9, 1fr);
  font-size: 12px;

  .grid-item {
    border-bottom: 1px solid #000;
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.5);
    padding: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 70px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    font-size: initial;

    .grid-item {
      padding: 20px;
      height: initial;
      width: initial;
    }
  }
`;

export const ContainerLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* background-color: #ffffff; */
  flex-direction: column;

  h3 {
    font-size: 32px;
    font-weight: 400;
    color: #ffffff;
    margin: 0;

    animation: pulse 1.5s infinite;

    @keyframes pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }

    span {
      display: inline-block;
      width: 0;
      animation: grow-shrink 1.5s infinite;
    }

    @keyframes grow-shrink {
      0%,
      100% {
        width: 0;
      }
      50% {
        width: 1em;
      }
    }
  }
`;

export const ContainerLottie = styled.div`
  width: 100%;
  display: flex;
  overflow-x: hidden;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: initial;
    div {
      animation: slide 5s linear forwards;
      animation-fill-mode: forwards;
      margin: 0;
    }

    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(600%);
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 32px 32px 48px 32px;

  @media (min-width: 1024px) {
    padding: 200px 0;
  }
`;

export const Contact = styled.div`
  width: 80%;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  border-radius: 8px;

  @media (min-width: 1024px) {
    align-items: flex-start;
    padding: 128px 160px;
    width: 70%;
    border-radius: 32px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid rgba(46, 46, 46, 1);
    padding-bottom: 20px;
    width: fit-content;

    @media (min-width: 1024px) {
      align-items: flex-start;

      h3 {
        line-height: 40px;
      }
    }
  }

  h3 {
    font-size: 16px;

    font-weight: 200;
    margin-bottom: 16px;

    @media (min-width: 1024px) {
      font-size: 24px;
      line-height: 16px;
    }
  }

  button {
    border-radius: 24px;
  }

  a {
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
    cursor: pointer;
    margin-bottom: 8px;
  }
`;
