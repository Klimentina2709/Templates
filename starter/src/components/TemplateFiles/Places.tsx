import PlacesContainer from "./PlacesContainer";
import { PlacesType, State } from "./PlacesContainer";
import "../../css/main.scss";

const Place = (props: PlacesType) => {
  return (
    <div className="placeImage">
      <img src={props.img} alt="image" />
      <div className="placeText">
        <h3>{props.place}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Place;
