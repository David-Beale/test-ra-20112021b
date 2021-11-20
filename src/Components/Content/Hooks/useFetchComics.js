import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchComics } from "../../../redux/comics";

export const useFetchComics = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComics());
  }, [dispatch]);
};
