import { useDispatch, useSelector } from "react-redux";
import { toggleOpen } from "../../redux/favourites";
import { Button, HeaderContainer, SiteHeading } from "./HeaderStyle";

export default function Header() {
  const dispatch = useDispatch();
  const open = useSelector(({ favourites }) => favourites.open);

  const onClick = () => {
    dispatch(toggleOpen());
  };
  return (
    <HeaderContainer>
      <SiteHeading>Red Ant Comics</SiteHeading>
      <Button onClick={onClick} open={open} />
    </HeaderContainer>
  );
}
