import { RatedFilmData } from "../../types";
import CardImage from "../CardImage/CardImage";
import CardRating from "../CardRating/CardRating";
import CardTitle from "../CardTitle/CardTitle";
import MyListPageCardStyled from "./MyListPageCardStyled";

interface MyListCardProps {
  film: RatedFilmData;
  isLazy: "lazy" | "eager";
}

const MyListCard = ({ film, isLazy }: MyListCardProps): React.ReactElement => {
  return (
    <MyListPageCardStyled>
      <CardTitle releaseDate={film.release_date} title={film.title} />
      <CardRating comment={film.comment} rate={film.rate} />

      <CardImage film={film} isLazy={isLazy} />
    </MyListPageCardStyled>
  );
};

export default MyListCard;
