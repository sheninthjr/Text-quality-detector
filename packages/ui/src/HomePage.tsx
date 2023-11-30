"use client";
import React, { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [prediction, setPrediction] = useState("");
  const [sentimentScore, setSentimentScore] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      sendText();
    }
  };

  const sendText = async() => {
    if (inputValue.trim() !== "") {
       const  data = await axios.post("http://localhost:3003/predict", { text: inputValue })
      console.log(data.data.average_rate)
       setPrediction(data.data.average_rate)
    } else {
      setPrediction("");
      setSentimentScore("");
    }
  };

  return (
    <>
      <div className="flex justify-center fixed bottom-0 left-0 w-full p-4 h-20">
        <div className="relative w-1/2">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter text..."
            className="w-full text-lg text-white bg-slate-800 font-medium rounded-2xl px-4 py-2 focus:outline-none border-2 border-slate-500 focus:border-slate-500 pr-12"
          />
        </div>
        <div>
          {prediction && (
            <div>
              <p>Prediction: {prediction}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
