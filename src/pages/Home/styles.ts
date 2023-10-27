import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 58px;

  a {
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
    margin-left: 32px;

    svg {
      cursor: pointer;
      color: white;
    }
  }

  @media (min-width: 767px) {
    height: 92px;
  }
`;
