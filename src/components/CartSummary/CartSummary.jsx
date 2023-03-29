import React, { useEffect, useState } from "react";

const CartSummary = ({ times }) => {
  const [watchTime, setWatchTime] = useState(times);

  useEffect(() => {
    const getWatchTimeFroStorage = localStorage.getItem("Watch-time");
    setWatchTime(getWatchTimeFroStorage);
  }, [times]);
  
  return (
    <div>
      <h2 className="py-3 mb-4 bg-slate-100 text-center font-semibold text-xl capitalize">
        cart Summary
      </h2>
      <div>
        <h2 className="uppercase font-bold text-lg text-center">
          total watch time :
        </h2>
        <p className="text-xl font-bold text-center">{watchTime}</p>
      </div>
    </div>
  );
};

export default CartSummary;
