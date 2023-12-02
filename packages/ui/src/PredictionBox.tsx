import React from "react";

const PredictionBox = ({ predictionRate }: any) => {
  const getBackgroundColor = () => {
    const rate = parseInt(predictionRate);
    if (rate >= 10 && rate <= 30) {
      return "bg-red-800";
    } else if (rate >= 31 && rate <= 60) {
      return "bg-yellow-500";
    } else if (rate >= 61 && rate <= 80) {
      return "bg-lime-300";
    } else if (rate >= 81 && rate <= 100) {
      return "bg-green-500";
    } else {
      return "bg-black";
    }
  };
  return (
    <div className="flex justify-center space-x-4">
      <div className="border-2 border-gray-400 p-4 m-4 rounded-md">
        <h2 className="text-lg font-bold text-black">Prediction Rate</h2>
        <p className={`text-xl rounded-lg text-center text-white ${getBackgroundColor()}`}>
          {predictionRate}
        </p>
      </div>
    </div>
  );
};

export default PredictionBox;
