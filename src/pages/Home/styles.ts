import styled from "styled-components";

type HeaderProps = {
  isMobile?: boolean;
};

export const Header = styled.div<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ isMobile }) => (isMobile ? "flex-end" : "center")};
  width: 100%;
  height: 58px;

  a {
    font-family: Poppins, sans-serif;
    display: flex;
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
    justify-content: center;
    margin-left: ${({ isMobile }) => (isMobile ? 0 : "32px")};

    svg {
      cursor: pointer;
      color: white;
    }
  }

  @media (min-width: 767px) {
    height: 92px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  width: fit-content;

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
  display: flex;
  width: 340px;
  height: 400px;

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

    img {
      width: 425px;
      height: 500px;
    }
  }
`;

export const Description = styled.div`
  height: 300px;
  padding: 0 32px;
  max-width: 500px;
  min-width: 500px;

  p {
    min-width: 500px;
    font-size: 20px;
    overflow: hidden;
    padding-right: 10px;
    color: #ffffff;
    animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
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
