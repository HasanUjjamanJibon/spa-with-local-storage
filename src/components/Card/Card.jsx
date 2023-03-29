import React, { useEffect, useState } from "react";
import CartSummary from "../CartSummary/CartSummary";
import SingleCard from "../SingleCard/SingleCard";

const Card = () => {
  const [movies, setCard] = useState([]);
  const [times, setTimes] = useState("");
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  const handleBookNow = (watchTime) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("Watch-time"));

    if (previousWatchTime) {
      const newWatchtime = previousWatchTime + watchTime;
      localStorage.setItem("Watch-time", newWatchtime);
      setTimes(newWatchtime);
    } else {
      localStorage.setItem("Watch-time", watchTime);
      setTimes(watchTime);
    }
  };

  return (
    <div className="lg:grid grid-cols-5 gap-4 container mx-auto my-9">
      <div className="col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <SingleCard
            handleBookNow={handleBookNow}
            movie={movie}
            key={movie.id}
          ></SingleCard>
        ))}
      </div>
      <div className="col-span-1">
        <CartSummary times={times}></CartSummary>
      </div>
    </div>
  );
};

export default Card;
