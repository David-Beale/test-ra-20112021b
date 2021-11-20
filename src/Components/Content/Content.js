import { useSelector } from "react-redux";
import { selectComicsIds } from "../../redux/comics";

import { useFetchComics } from "./Hooks/useFetchComics";

import { ContentContainer } from "./ContentStyle";

import Card from "./Components/Card/Card";

export default function Content() {
  useFetchComics();
  const comicIds = useSelector(selectComicsIds);
  const sidePanelOpen = useSelector(({ favourites }) => favourites.open);

  return (
    <ContentContainer sidePanelOpen={sidePanelOpen}>
      {comicIds.map((comicId) => (
        <Card key={comicId} comicId={comicId} />
      ))}
    </ContentContainer>
  );
}
