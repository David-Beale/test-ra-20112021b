import { useDispatch, useSelector } from "react-redux";
import { selectComicById } from "../../../../redux/comics";
import {
  addFavourite,
  removeFavourite,
  selectFavouriteById,
} from "../../../../redux/favourites";
import { Button, CardContainer, Image, Title } from "./CardStyle";

export default function Card({ comicId }) {
  const dispatch = useDispatch();

  const comic = useSelector((state) => selectComicById(state, comicId));
  const favourite = useSelector((state) => selectFavouriteById(state, comicId));

  const onClick = () => {
    if (favourite) dispatch(removeFavourite(comicId));
    else {
      const payload = {
        id: comic.id,
        title: comic.title,
      };
      dispatch(addFavourite(payload));
    }
  };
  return (
    <CardContainer>
      <Image
        src={`${comic.thumbnail.path}/portrait_uncanny.jpg`}
        alt={`${comic.title} image`}
      />
      <Title>{comic.title}</Title>
      <Button onClick={onClick} favourite={favourite}></Button>
    </CardContainer>
  );
}
