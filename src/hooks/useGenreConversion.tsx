import { genresList } from "../dataConfig";

const useGenreConversion = (genreIds: any) => {
  const genresConvertedList: string[] = [];
  genreIds
    .slice(0, 3)
    .map((genreId: number) =>
      genresList
        .filter((el) => el.id === genreId)
        .map((el) => genresConvertedList.push(el.name))
    );

  return genresConvertedList;
};

export default useGenreConversion;
