import { useEffect, useState } from 'react';
import {
  getDataFromLocalStorage,
  setDataOnLocalStorage,
} from '../utils/localStorage';

const KEY = 'FAV_AUTHORS';

export default function useFetch() {
  const [favAuthors, setFavAuthors] = useState({});

  const addToFavorite = (author) => {
    const newData = { [author._id]: author, ...favAuthors };
    setDataOnLocalStorage(KEY, newData);
    setFavAuthors(newData);
  };

  const removeFromFavorite = (author) => {
    const newData = { ...favAuthors };
    delete newData[author._id];
    setDataOnLocalStorage(KEY, newData);
    setFavAuthors(newData);
  };

  useEffect(() => {
    setFavAuthors(getDataFromLocalStorage(KEY, []));
  }, []);

  return { favAuthors, addToFavorite, removeFromFavorite };
}
