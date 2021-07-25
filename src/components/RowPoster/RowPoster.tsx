import "./rowPoster.scss";
import { BASE_IMG_URL, FALLBACK_IMG_URL } from "../../requests";
import { FaPlus, FaMinus, FaPlay, FaChevronDown } from "react-icons/fa";
import useGenreConversion from "../../hooks/useGenreConversion";
import { Link } from "react-router-dom";

interface Item {
  title: string;
  original_name: string;
  original_title: string;
  name: string;
  genre_ids: number;
  poster_path: string;
  backdrop_path: string;
}

interface Props {
  item: Item;
  isLarge: boolean;
  isFavourite: boolean;
}

const RowPoster = ({ item, isLarge, isFavourite }: Props) => {
  let fallbackTitle =
    item.title || item.original_title || item.name || item.original_name;
  const genresConverted = useGenreConversion(item.genre_ids);

  const handleAdd = (event: any) => {
    event.stopPropagation();
  };
  const handleRemove = (event: any) => {
    event.stopPropagation();
  };
  const handlePlayAction = (event: any) => {
    event.stopPropagation();
  };

  return (
    <div className={`Row__poster ${isLarge ? "Row__poster--big" : ""}`}>
      {isLarge ? (
        item.poster_path ? (
          <img
            src={`${BASE_IMG_URL}/${item.poster_path}`}
            alt={fallbackTitle}
          />
        ) : (
          ""
        )
      ) : item.backdrop_path ? (
        <img
          src={`${BASE_IMG_URL}/${item.backdrop_path}`}
          alt={fallbackTitle}
        />
      ) : (
        <>
          <img src={FALLBACK_IMG_URL} alt={fallbackTitle} />
          <div className="Row__poster__fallback">
            <span>{fallbackTitle}</span>
          </div>
        </>
      )}
      <div className="Row__poster-info">
        <div className="Row__poster-info--iconswrp">
          <Link
            className="Row__poster-info--icon icon--play"
            onClick={handlePlayAction}
            to={"/play"}
          >
            <FaPlay />
          </Link>
          {!isFavourite ? (
            <button
              className="Row__poster-info--icon icon--favourite"
              onClick={handleAdd}
            >
              <FaPlus />
            </button>
          ) : (
            <button
              className="Row__poster-info--icon icon--favourite"
              onClick={handleRemove}
            >
              <FaMinus />
            </button>
          )}
          <button className="Row__poster-info--icon icon--toggleModal">
            <FaChevronDown />
          </button>
        </div>
        <div className="Row__poster-info--title">
          <h3>{fallbackTitle}</h3>
        </div>
        <div className="Row__poster-info--genres">
          {genresConverted &&
            genresConverted.map((genre) => (
              <span key={`Genre--id_${genre}`} className="genre-title">
                {genre}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RowPoster;
