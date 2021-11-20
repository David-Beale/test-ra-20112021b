import { useSelector } from "react-redux";
import FavouritesContent from "./Components/FavouritesContent/FavouriteContent";
import FavouritesHeader from "./Components/FavouritesHeader/FavouritesHeader";
import { FavouritesPanelContainer } from "./FavouritesPanelStyle";

export default function FavouritesPanel() {
  const open = useSelector(({ favourites }) => favourites.open);

  return (
    <FavouritesPanelContainer open={open}>
      <FavouritesHeader />
      <FavouritesContent />
    </FavouritesPanelContainer>
  );
}
