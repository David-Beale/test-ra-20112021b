import { LoadingContainer, Progress } from "./LoadingStyle";

export default function Loading({ style }) {
  return (
    <LoadingContainer top={style.top} left={style.left}>
      <Progress size={100} thickness={2} />
    </LoadingContainer>
  );
}
