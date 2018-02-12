import React from "react";

const MovieDetail = props => {
  console.log("title", props.title);
  if(!props.title){
    return (
      <div className="text-center">
        <h3> No Movie Found </h3>
      </div>
    )
  }
  return (
  <div className="text-center">
    <img
      alt={props.title}
      className="img-responsive"
      src={props.src}
      style={{ margin: "0 auto" }}
    />
    <h3>
      Director(s): {props.director}
    </h3>
    <h3>
      Genre: {props.genre}
    </h3>
    <h3>
      Released: {props.released}
    </h3>
  </div>
);
}

export default MovieDetail;
