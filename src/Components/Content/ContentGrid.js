import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FixedSizeGrid, areEqual } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

import { StyledOuter, StyledInner } from "./ContentStyle";
import Card from "./Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchComics, selectComicsIds } from "../../redux/comics";
import Loading from "./Components/Loading/Loading";

const ROW_HEIGHT = 590;
const OuterElement = forwardRef(({ children, onScroll }, ref) => {
  const sidePanelOpen = useSelector(({ favourites }) => favourites.open);
  return (
    <StyledOuter onScroll={onScroll} sidePanelOpen={sidePanelOpen}>
      {children}
    </StyledOuter>
  );
});

const InnerElement = (props) => {
  return <StyledInner {...props} />;
};

const Row = React.memo(function Row(props) {
  const { data, rowIndex, columnIndex, style } = props;
  const { items, columns } = data;
  const comicId = items[rowIndex * columns + columnIndex];
  if (!comicId) {
    if (columnIndex === 0) {
      return <Loading style={style} />;
    }
    return null;
  }
  return <Card key={comicId} comicId={comicId} style={style} />;
}, areEqual);

export default function ContentGrid() {
  const dispatch = useDispatch();
  const comicIds = useSelector(selectComicsIds);

  const sidePanelOpen = useSelector(({ favourites }) => favourites.open);
  const hasNextPage = useSelector(({ comics }) => !comics.finished);

  const [resize, setResize] = useState([]);

  const loadMoreItems = useCallback(() => {
    dispatch(fetchComics());
  }, [dispatch]);

  const isItemLoaded = useCallback(
    (index) => !hasNextPage || index < comicIds.length,
    [hasNextPage, comicIds]
  );

  useEffect(() => {
    const onResize = () => {
      setResize([]);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const dimensions = useMemo(() => {
    const colWidth = window.innerWidth > 480 ? 350 : 300;
    const xPadding = window.innerWidth > 480 ? 50 : 10;
    const yPadding = 50;
    const yMargin = 50;

    const sidePanelAdj = sidePanelOpen ? -350 : 0;
    const width = window.innerWidth - xPadding + sidePanelAdj;
    const height = window.innerHeight - yPadding - yMargin;
    const colCount = Math.max(Math.floor(width / colWidth), 1);

    const itemCount = hasNextPage
      ? comicIds.length + colCount
      : comicIds.length;

    const rowCount = Math.ceil(itemCount / colCount);
    return { itemCount, width, height, colCount, colWidth, rowCount };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sidePanelOpen, hasNextPage, comicIds.length, resize]);

  const customOnItemsRendered = useCallback(
    (infiniteOnItemsRendered) =>
      ({
        visibleColumnStartIndex,
        visibleColumnStopIndex,
        visibleRowStartIndex,
        visibleRowStopIndex,
      }) => {
        const visibleStartIndex =
          visibleRowStartIndex * dimensions.colCount + visibleColumnStartIndex;
        const visibleStopIndex =
          visibleRowStopIndex * dimensions.colCount + visibleColumnStopIndex;
        infiniteOnItemsRendered({
          visibleStartIndex,
          visibleStopIndex,
        });
      },
    [dimensions.colCount]
  );

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={dimensions.itemCount}
      loadMoreItems={loadMoreItems}
      threshold={3}
    >
      {({ onItemsRendered, ref }) => (
        <FixedSizeGrid
          ref={ref}
          height={dimensions.height}
          width={dimensions.width}
          columnCount={dimensions.colCount}
          columnWidth={dimensions.colWidth}
          rowCount={dimensions.rowCount}
          rowHeight={ROW_HEIGHT}
          itemCount={dimensions.itemCount}
          onItemsRendered={customOnItemsRendered(onItemsRendered)}
          outerElementType={OuterElement}
          innerElementType={InnerElement}
          itemData={{
            items: comicIds,
            columns: dimensions.colCount,
          }}
        >
          {Row}
        </FixedSizeGrid>
      )}
    </InfiniteLoader>
  );
}
