import styled from "styled-components";
import close from "../../../../Assets/images/close.svg";

export const HeaderContainer = styled.div`
  height: 64px;
  background: #575757;
  color: #fff;
  text-align: center;
  line-height: 64px;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 50%;
  margin-top: -18px;
  right: 20px;
  width: 36px;
  height: 36px;
  border: 3px solid #fff;
  border-radius: 50%;
  background: url(${close}) 50% 50% no-repeat;
  background-size: 45%;
`;
