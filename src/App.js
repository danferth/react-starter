import React from "react";
import { printToday } from "./util.js";

const App = () => {
  return (
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">
          Hello {printToday()} Morning!
        </h1>
        <p className="text-base text-gray-700 leading-normal">Good day?</p>
      </div>
    </div>
  );
};

export default App;
