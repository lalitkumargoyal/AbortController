import React, { useEffect, useState } from "react";

const CancelApi = () => {
  const [count, setCount] = useState<number>(1);
  const handleClick = (): void => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    const api = `https://jsonplaceholder.typicode.com/todos/${count}`;
    const abortController = new AbortController();
    const { signal } = abortController;
    const fetchData = async () => {
      await fetch(api, { signal })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.error(`error: ${err.message}`);
        });
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [count]);

  return (
    <>
      <div className="text-3xl text-center">Cancel Api</div>
      <div className="flex justify-center my-8">
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Call API
        </button>
      </div>
    </>
  );
};

export default CancelApi;
