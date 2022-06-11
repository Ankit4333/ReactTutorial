import React, { useState, useEffect } from "react";

const Hook = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    var timer = setTimeout(() => {
      console.log("use Effect is called");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Cleaning up previous stage cleared");
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {console.log("Rendering is happen")}
      <h1>Counter Value is : {count} </h1>
    </>
  );
};

export default Hook;
