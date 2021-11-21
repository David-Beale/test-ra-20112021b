import styled from "styled-components";

export const StyledOuter = styled.div`
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
  height: calc(100% - 75px);
  margin-top: 75px;
  padding: 25px;
  overflow: auto;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  left: ${({ sidePanelOpen }) => (!sidePanelOpen ? "0" : "360px")};
  width: ${({ sidePanelOpen }) =>
    !sidePanelOpen ? "100%" : "calc(100% - 360px)"};
`;
export const StyledInner = styled.div`
  position: relative;
`;
