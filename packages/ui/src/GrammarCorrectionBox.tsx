import React from "react";

const GrammarCorrectionBox = ({ correctData }: any) => {
  return (
    <div className="flex justify-center space-x-4">
      <div className="border-2 border-gray-400 p-4 m-4 rounded-md">
        <h2 className="text-lg font-bold">Correction Rate</h2>
        <p className="text-xl rounded-lg text-center text-white">
          {correctData}
        </p>
      </div>
    </div>
  );
};

export default GrammarCorrectionBox;
