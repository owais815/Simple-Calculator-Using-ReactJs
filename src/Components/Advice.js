import React, { useState } from "react";
import "../styles.css";

const Advice = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    if (result !== null) {
      setInput(value);
      setResult(null);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Note: Using eval can be dangerous. Avoid in real-world applications.
      setInput("");
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="bg-gray-800 w-full h-screen flex justify-center items-center font-signature">
      <div className="relative flex flex-col justify-center items-center gap-4 bg-gray-700 text-slate-300 p-6 sm:p-8 rounded-lg max-w-xs md:max-w-md lg:max-w-lg">
        
      <div className="justify-center items-center flex relative">
          <input
            type="text"
            readOnly
            value={input || result || ""}
            id="default-input"
            className="bg-gray-50 m-2 border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button onClick={handleClear} className="btn btn-calc">
            <span className="btn-inner">AC</span>
          </button>
          <button onClick={handleBackspace} className="btn btn-calc">
            <span className="btn-inner">DE</span>
          </button>
          <button onClick={() => handleClick("%")} className="btn btn-calc">
            <span className="btn-inner">%</span>
          </button>
          <button onClick={() => handleClick("/")} className="btn btn-calc">
            <span className="btn-inner">/</span>
          </button>
          <button onClick={() => handleClick("7")} className="btn btn-gradient">
            <span className="btn-inner">7</span>
          </button>
          <button onClick={() => handleClick("8")} className="btn btn-gradient">
            <span className="btn-inner">8</span>
          </button>
          <button onClick={() => handleClick("9")} className="btn btn-gradient">
            <span className="btn-inner">9</span>
          </button>
          <button onClick={() => handleClick("*")} className="btn btn-calc">
            <span className="btn-inner">x</span>
          </button>
          <button onClick={() => handleClick("4")} className="btn btn-gradient">
            <span className="btn-inner">4</span>
          </button>
          <button onClick={() => handleClick("5")} className="btn btn-gradient">
            <span className="btn-inner">5</span>
          </button>
          <button onClick={() => handleClick("6")} className="btn btn-gradient">
            <span className="btn-inner">6</span>
          </button>
          <button onClick={() => handleClick("-")} className="btn btn-calc">
            <span className="btn-inner">-</span>
          </button>
          <button onClick={() => handleClick("1")} className="btn btn-gradient">
            <span className="btn-inner">1</span>
          </button>
          <button onClick={() => handleClick("2")} className="btn btn-gradient">
            <span className="btn-inner">2</span>
          </button>
          <button onClick={() => handleClick("3")} className="btn btn-gradient">
            <span className="btn-inner">3</span>
          </button>
          <button onClick={() => handleClick("+")} className="btn btn-calc">
            <span className="btn-inner">+</span>
          </button>
          <button
            onClick={() => handleClick("0")}
            className="btn btn-gradient "
          >
            <span className="btn-inner">0</span>
          </button>
          <button onClick={() => handleClick(".")} className="btn btn-gradient">
            <span className="btn-inner">•</span>
          </button>
          <button onClick={handleCalculate} className="btn btn-calc col-span-2">
            <span className="btn-inner">=</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advice;
