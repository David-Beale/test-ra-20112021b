import { useSelector } from "react-redux";
import { ErrorContainer } from "./ErrorStyle";

export default function Error() {
  const sidePanelOpen = useSelector(({ favourites }) => favourites.open);
  return (
    <ErrorContainer sidePanelOpen={sidePanelOpen}>
      Oops, something went wrong 🤨
    </ErrorContainer>
  );
}
