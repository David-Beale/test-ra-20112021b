import { useSelector } from "react-redux";
import Content from "./Components/Content/ContentGrid";
import Error from "./Components/Error/Error";
import FavouritesPanel from "./Components/Favourites Panel/FavouritesPanel";
import Header from "./Components/Header/Header";

export default function App() {
  const error = useSelector(({ comics }) => comics.error);
  return (
    <>
      <Header />
      {!error ? <Content /> : <Error />}
      <FavouritesPanel />
    </>
  );
}
