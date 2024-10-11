import React from "react";
import "../../css/main.scss";
import "../../css/main.scss";

import Place from "./Places";

export interface PlacesType {
  id: number;
  place: string;
  desc: string;
  img: string;
}
export interface State {
  posts: PlacesType[];
}

class PlacesContainer extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount(): void {
    fetch("http://localhost:5001/places")
      .then((res) => res.json())
      .then((data: PlacesType[]) => {
        this.setState({ posts: data });
      });
  }

  render() {
    return (
      <section className="placesContainer">
        {this.state.posts.map((place) => (
          <Place
            key={place.id}
            id={place.id}
            place={place.place}
            desc={place.desc}
            img={place.img}
          />
        ))}
      </section>
    );
  }
}

export default PlacesContainer;
