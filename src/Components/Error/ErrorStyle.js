import styled from "styled-components";

export const ErrorContainer = styled.div`
  position: absolute;
  z-index: 1;
  height: calc(100% - 75px);
  margin-top: 75px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  left: ${({ sidePanelOpen }) => (!sidePanelOpen ? "0" : "360px")};
  width: ${({ sidePanelOpen }) =>
    !sidePanelOpen ? "100%" : "calc(100% - 360px)"};
`;
