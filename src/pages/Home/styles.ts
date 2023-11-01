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

    @media (min-width: 767px) {
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

  @media (min-width: 767px) {
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

  @media (min-width: 767px) {
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

  @media (min-width: 767px) {
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

  @media (min-width: 767px) {
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
  background-color: #ffffff;
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

  @media (min-width: 767px) {
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
  margin: 40px 0;

  h3 {
    line-height: 16px;
  }
`;
