import styled from "styled-components";

export const CardContainer = styled.li`
  float: left;
  padding: 10px;
  width: 100%;
  @media only screen and (min-width: 480px) {
    width: 50%;
  }
`;
export const ComicCard = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 300;
  @media only screen and (min-width: 480px) {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  color: #fff;
  border: 0;
  background: #575757;
  &:active,
  &:focus,
  &:hover {
    background: #464646;
  }
`;
