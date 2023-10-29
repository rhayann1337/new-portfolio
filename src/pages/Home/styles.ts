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
  height: 100%;
`;
