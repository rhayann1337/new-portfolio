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
      right: 0; /* Posicionar a imagem no canto direito do link */
      transform: translateX(0); /* Definir a transformação inicial como zero */
      transition: transform 0.3s; /* Adicionar uma transição suave para a animação */
    }

    img:hover {
      animation: slideRight 1s linear infinite; /* Aplicar a animação infinita */
    }

    @keyframes slideRightAndBack {
      0%,
      100% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(25px);
      }
    }
  }

  button {
    display: flex;
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
    margin-left: 32px;
  }

  @media (min-width: 767px) {
    height: 92px;
  }
`;
