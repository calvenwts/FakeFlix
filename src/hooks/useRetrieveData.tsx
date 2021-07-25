import { useEffect, useState } from "react";
import {
  fetchMovieDataConfig,
  fetchPopularDataConfig,
  fetchSeriesDataConfig,
} from "../dataConfig";

export const useRetrieveData = (type: any) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    let selectedConfigArray = null;
    switch (type) {
      case "movies":
        selectedConfigArray = fetchMovieDataConfig;
        break;
      case "series":
        selectedConfigArray = fetchSeriesDataConfig;
        break;
      case "popular":
        selectedConfigArray = fetchPopularDataConfig;
        break;
      default:
        break;
    }

    const rowsData = selectedConfigArray?.map((el: any) => {
      return {
        id: el.id,
        title: el.title,
        genre: el.genre,
        isLarge: el.isLarge,
        url: el.url,
      };
    });
    setData(rowsData);
  }, [type]);

  return data;
};
