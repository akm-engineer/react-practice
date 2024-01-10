import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [toBeEnabled, setToBeEnabled] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleClick = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultipleSelection = (currentId) => {
    let copyMultiple = [...multiple];
    const findIndexOfMultiple = copyMultiple.indexOf(currentId);

    if (findIndexOfMultiple === -1) copyMultiple.push(currentId);
    else copyMultiple.splice(findIndexOfMultiple, 1);

    setMultiple(copyMultiple);
  };
  return (
    <div className="text-xl font-semibold">
      <button
        onClick={() => setToBeEnabled(!toBeEnabled)}
        className="bg-green-700 rounded-lg hover:opacity-95 p-3 my-4"
      >
        Enable
      </button>
      <div>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="bg-slate-700 rounded-lg my-5 max-w-[450px] mx-auto shadow-lg ">
              <div
                className="  flex p-3 items-center justify-between gap-8 cursor-pointer"
                onClick={
                  toBeEnabled
                    ? () => handleMultipleSelection(item.id)
                    : () => handleClick(item.id)
                }
              >
                <h3 className="text-white">{item.question}</h3>
                <span className="text-white text-lg cursor-pointer">+</span>
              </div>
              {toBeEnabled
                ? multiple.indexOf(item.id) !== -1 && (
                    <div>
                      <p className="text-white  rounded-lg p-3 ">
                        {item.answer}
                      </p>
                    </div>
                  )
                : selected === item.id && (
                    <div>
                      <p className="text-white  rounded-lg p-3 ">
                        {item.answer}
                      </p>
                    </div>
                  )}
              {/* {selected === item.id ? (
                <div>
                  <p className="text-white  rounded-lg p-3 ">{item.answer}</p>
                </div>
              ) : null} */}
            </div>
          ))
        ) : (
          <h1 className="text-red-500 font-semibold">No data present</h1>
        )}
      </div>
    </div>
  );
}
