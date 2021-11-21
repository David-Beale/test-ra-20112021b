import styled from "styled-components";
import star from "../../../../Assets/images/star.svg";
import redStar from "../../../../Assets/images/redStar.svg";

export const CardContainer = styled.div`
  position: absolute;
  height: 540px;
  width: 300px;
  background: rgb(236, 240, 243);
  border-radius: 25px;
  margin: 25px 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 13px 13px 20px rgb(223 206 209), -13px -13px 20px rgb(255 255 255);
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;

  @media only screen and (min-width: 480px) {
    margin: 25px;
    &:hover {
      transform: scale(1.05);
      box-shadow: 13px 13px 40px rgb(223 206 209),
        -13px -13px 40px rgb(255 255 255);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-size: 18px;
  padding: 10px;
  overflow: hidden;
`;

export const Button = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
  border: 1px solid #fff;
  border-radius: 50%;
  background: url(${({ favourite }) => (favourite ? redStar : star)}) 50% 50%
    no-repeat;
  background-color: rgba(0, 0, 0, 0.2);
  background-size: 60%;
  cursor: pointer;
  @media only screen and (min-width: 480px) {
    &:hover {
      background-color: rgba(236, 29, 36, 0.3);
      background-color: rgba(
        236,
        29,
        36,
        ${({ favourite }) => (favourite ? "0.3" : "0.7")}
      );
    }
  }
`;
