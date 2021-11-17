import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { GetRequest } from "./Utilities/Network/Index";
import "./Homepage.css";

function Homepage() {
  var apiKey = "288a710d";
  const [name, setName] = useState("");
  const [movie, setMovie] = useState<any>([]);
  const [pageNum, setPageNum] = useState(1);

  const _handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setName(value);
  };

  const _handleSearchDetail = async () => {
    const response = await GetRequest(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${name}&page=${pageNum}`
    );
    if (!response.Search) {
      return;
    }
    setMovie(response.Search);
  };

  const _handlePagePrevious = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
    _handleSearchDetail();
    console.log(pageNum);
    
  };

  const _handlePageNext = () => {
    
    setPageNum(pageNum + 1);
    _handleSearchDetail();
    console.log(pageNum);
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
      <div>
        <button className="btn" type="submit" onClick={_handlePagePrevious}>
          Previous
        </button>
        <button className="btn" type="submit" onClick={_handlePageNext}>
          Next
        </button>
      </div>
      <MovieCard data={movie} />
    </>
  );
}

export default Homepage;
