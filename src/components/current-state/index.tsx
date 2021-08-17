// import { useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import "chartjs-adapter-moment";

export default function CurrentState() {
  const { data } = useAppSelector((state) => state.houseTemp);

  return (
    <div className="bg-white border-transparent rounded-lg shadow-xl p-10 h-full">
      <h2>Current state:</h2>
    </div>
  );
}
