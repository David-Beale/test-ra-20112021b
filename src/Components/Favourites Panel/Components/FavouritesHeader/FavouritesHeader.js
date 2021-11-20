import { useDispatch } from "react-redux";
import { toggleOpen } from "../../../../redux/favourites";
import { CloseButton, HeaderContainer, Title } from "./FavouritesHeaderStyle";

export default function FavouritesHeader() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleOpen());
  };
  return (
    <HeaderContainer>
      <Title>Favourites</Title>
      <CloseButton onClick={onClick} />
    </HeaderContainer>
  );
}
