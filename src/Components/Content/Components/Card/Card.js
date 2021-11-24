import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import VanillaTilt from "vanilla-tilt";
import { selectComicById } from "../../../../redux/comics";
import {
  addFavourite,
  removeFavourite,
  selectFavouriteById,
} from "../../../../redux/favourites";
import { Button, CardContainer, Image, Title } from "./CardStyle";

const options = {
  scale: 1.05,
  speed: 1000,
  glare: true,
  "max-glare": 0.5,
  max: 10,
};

export default function Card({ comicId, style }) {
  const dispatch = useDispatch();
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);

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
    <CardContainer top={style.top} left={style.left} ref={tilt}>
      <Image
        src={`${comic.thumbnail.path}/portrait_uncanny.jpg`}
        alt={`${comic.title} image`}
      />
      <Title>{comic.title}</Title>
      <Button onClick={onClick} favourite={favourite}></Button>
    </CardContainer>
  );
}
