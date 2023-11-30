import React from "react";

const Box = ({ predictionRate }: any) => {
  const getBackgroundColor = () => {
    const rate = parseFloat(predictionRate);
    if (rate >= 10 && rate <= 30) {
      return "text-red-800";
    } else if (rate >= 31 && rate <= 60) {
      return "text-yellow-500";
    } else if (rate >= 61 && rate <= 80) {
      return "text-lime-300";
    } else if (rate >= 81 && rate <= 100) {
      return "text-green-500";
    } else {
      return "text-black";
    }
  };
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="border-2 border-gray-400 p-4 m-4 rounded-md">
        <h2 className="text-lg font-bold">Prediction Rate</h2>
        <p className={`text-xl rounded-lg text-center ${getBackgroundColor()}`}>
          {predictionRate}
        </p>
      </div>
    </div>
  );
};

export default Box;
