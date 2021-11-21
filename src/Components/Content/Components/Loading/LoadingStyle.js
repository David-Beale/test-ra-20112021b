import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

export const LoadingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 590px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
`;
export const Progress = styled(CircularProgress)`
  color: #ec1d24 !important;
`;
