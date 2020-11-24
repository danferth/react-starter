import React from "react";
import { printToday } from "./util.js";
import { ReactComponent as AkioSVG } from "./images/svg/akio.svg";
const App = () => {
  return (
    <div className="max-w-md mx-auto flex items-center p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <AkioSVG className="h-8 w-auto text-red-600 fill-current" />
      <div className="ml-6">
        <h1 className="text-2xl text-blue-700 leading-tight">
          Hello {printToday()} Morning!
        </h1>
        <p className="text-base text-red-700 leading-normal">Good day?</p>
      </div>
    </div>
  );
};

export default App;
