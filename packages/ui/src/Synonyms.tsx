"use client";

import { useState } from "react";
import axios from "axios";

const Synonyms = () => {
  const [synData, setSynData] = useState("");
  const [data, setData] = useState([]);
  const [word, setWord] = useState([]);
  const handleInputChange = (e: any) => {
    setSynData(e.target.value);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      sendText();
    }
  };

  const sendText = async () => {
    if (synData.trim() !== "") {
      try {
        const response = await axios.get(
          `http://localhost:3001/meaning/${synData}`
        );
        setData(response.data.synonyms);
        setWord(response.data.word);
      } catch (error) {
        console.error("Error fetching synonyms:", error);
        setData([]);
        setWord([]);
      }
    } else {
      setData([]);
      setWord([]);
    }
  };

  const value = Array.from(
    { length: data.length - 1 },
    (_, index) => index + 1
  );

  return (
    <>
      <div className="flex justify-center fixed bottom-0 left-0 w-full p-4 h-20">
        <div className="relative md-w-1/2 lg-w-1/2 xl:w-1/2">
          <input
            type="text"
            value={synData}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter text..."
            className="w-full text-lg text-white bg-slate-800 font-medium rounded-2xl px-4 py-2 focus:outline-none border-2 border-slate-500 focus:border-slate-500 pr-12"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-wrap lg:flex-wrap xl:flex-wrap bg-slate-900 h-full md:h-screen lg:h-screen xl:h-screen justify-center space-x-4">
        <div className="flex justify-center justify-items-center md:mt-20 w-full">
          <div className="flex w-4/6 justify-center justify-items-center space-x-4 flex-wrap">
            {value.map((i) => (
              <div
                key={i}
                className="bg-white h-fit border-2 border-gray-400 p-4 m-4 rounded-lg"
              >
                <h2 className="text-lg font-bold text-black">Synonyms</h2>
                <p className="text-black bg-blue-200 rounded-lg mb-2 pr-2 pl-2 text-lg font-bold">
                  {word}
                </p>
                <p className="text-xl rounded-lg text-center text-black bg-rose-300 pl-2 pr-2">
                  {data[i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Synonyms;
