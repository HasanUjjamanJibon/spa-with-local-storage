import React from "react";

const SingleCard = ({ movie, handleBookNow }) => {
  return (
    <div className="card w-full shadow-xl">
      <figure className="">
        <img className="h-40 " src={movie.poster} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movie.movieName}</h2>
        <p>{movie.description}</p>
        <div className="my-6">
          <p>Category : {movie.category}</p>
          <p>IMDB Rating : {movie.imdbRating}</p>
          <p>Watch: {movie.watchTime} times.</p>
        </div>
        <div className="card-actions justify-end">
          <div
            onClick={() => handleBookNow(movie.watchTime)}
            className="badge badge-outline cursor-pointer btn btn-primary "
          >
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
