import { useDispatch, useSelector } from "react-redux";
import {
  removeFavourite,
  selectFavouriteById,
} from "../../../../../redux/favourites";
import { Title } from "../../../../Content/Components/Card/CardStyle";
import { FavouriteContainer, RemoveButton } from "./FavouriteStyle";

export default function Favourite({ favouriteId }) {
  const dispatch = useDispatch();
  const favourite = useSelector((state) =>
    selectFavouriteById(state, favouriteId)
  );
  const onClick = () => {
    dispatch(removeFavourite(favouriteId));
  };

  return (
    <FavouriteContainer>
      <Title>{favourite.title}</Title>
      <RemoveButton onClick={onClick} />
    </FavouriteContainer>
  );
}
