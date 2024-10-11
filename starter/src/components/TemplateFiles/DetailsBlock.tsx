import React from "react";
import "../../css/main.scss";

interface BlockType {
  heading: string;
  img: string;
}

const DetailsBlock = (props: BlockType) => {
  return (
    <section className="sectionBlock">
      <div className="paragraphPart">
        <span>About</span>
        <h2>{props.heading}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          eveniet hic vitae rerum nulla aperiam ipsa quis, impedit molestias
          dolorum reprehenderit excepturi? Sapiente eligendi magni quidem
          repellendus voluptatibus corporis suscipit ullam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
          repudiandae.
        </p>
      </div>
      <div className="imagePart">
        <img src={props.img} alt="AboutImage" className="image" />
      </div>
    </section>
  );
};

export default DetailsBlock;
// "https://picsum.photos/id/18/500/500"
