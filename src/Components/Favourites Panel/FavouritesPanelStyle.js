import styled from "styled-components";

export const FavouritesPanelContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  max-width: 320px;
  background: #fff;
  transform: translatex(${({ open }) => (open ? 0 : 100)}%);
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
`;
