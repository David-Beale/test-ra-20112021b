import { useSelector } from "react-redux";
import { selectComicsIds } from "../../redux/comics";

import { useFetchComics } from "./Hooks/useFetchComics";

import { ComicsList, ContentContainer } from "./ContentStyle";

import Card from "./Components/Card/Card";

export default function Content() {
  useFetchComics();
  const comicIds = useSelector(selectComicsIds);

  return (
    <ContentContainer>
      <ComicsList>
        {comicIds.map((comicId) => (
          <Card key={comicId} comicId={comicId} />
        ))}
      </ComicsList>
    </ContentContainer>
  );
}
