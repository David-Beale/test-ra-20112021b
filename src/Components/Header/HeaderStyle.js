import styled from "styled-components";
import star from "../../Assets/images/star.svg";

export const HeaderContainer = styled.header`
  background: #ec1c23;
  text-align: center;
  padding: 0 40px;
  position: relative;
  height: 64px;
`;
export const SiteHeading = styled.h1`
  margin: 0;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  font-size: 21px;
  line-height: 64px;
  @media only screen and (min-width: 480px) {
    font-size: 32px;
  }
`;
export const Button = styled.button`
  position: absolute;
  top: 50%;
  margin-top: -18px;
  right: 20px;
  width: 36px;
  height: 36px;
  border: 3px solid #fff;
  border-radius: 50%;
  background: url(${star}) 50% 50% no-repeat;
  background-size: 60%;
`;
