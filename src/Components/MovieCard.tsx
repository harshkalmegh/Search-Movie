import React from "react";

function MovieCard(props: any) {
  if (!props.data[0]) {
    return null;
  }
  return (
    <div className="container">
      {props.data.map((item: any) => {
        return (
          <div key={item.imdbID} className="card-container">
            <img src={item.Poster} width="150px" height="150px" alt="" />
            <p>Title : {item.Title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MovieCard;
