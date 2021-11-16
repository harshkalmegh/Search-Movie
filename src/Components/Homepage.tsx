import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { GetRequest } from "./Utilities/Network/Index";
import "./Homepage.css";

function Homepage() {
  var apiKey = "288a710d";
  const [name, setName] = useState("");
  const [movie, setMovie] = useState<any>([]);

  const _handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setName(value);
  };

  const _handleSearchDetail = async () => {
    const response = await GetRequest(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${name}`
    );
    if (!response.Search) {
      return;
    }
    setMovie(response.Search);
  };

  return (
    <>
      <div className="input-btn-container">
        <input
          className="input-box"
          type="text"
          placeholder="Enter Movie Name"
          onChange={_handleInputChange}
        />
        <button className="btn" type="submit" onClick={_handleSearchDetail}>
          Search
        </button>
      </div>
      <MovieCard data={movie} />
    </>
  );
}

export default Homepage;
