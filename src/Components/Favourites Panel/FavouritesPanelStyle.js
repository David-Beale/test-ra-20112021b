import styled from "styled-components";

export const FavouritesPanelContainer = styled.div`
  position: fixed;
  z-index: 2;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100% - 64px);
  background: #ecf0f3;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: ${({ open }) => (open ? 360 : 0)}px;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
`;
