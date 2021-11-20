import styled from "styled-components";

export const ContentContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  display: flex;
  margin-top: 75px;
  padding: 25px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  left: ${({ sidePanelOpen }) => (!sidePanelOpen ? "0" : "360px")};
  width: ${({ sidePanelOpen }) =>
    !sidePanelOpen ? "100%" : "calc(100% - 360px)"};
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
`;
