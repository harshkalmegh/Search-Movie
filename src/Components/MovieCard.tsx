import React from "react";

function MovieCard(props: any) {
  if (!props.data[0]) {
    return null;
  }
  return (
    <div className="container">
      {props.data.map((ele: any) => {
        return (
          <div key={ele.imdbID} className="card-container">
            <img src={ele.Poster} width="150px" height="150px" alt="" />
            <p>Title : {ele.Title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MovieCard;
