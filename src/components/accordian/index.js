import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const handleClick = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };
  return (
    <div className="text-xl font-semibold">
      <button className="bg-green-700 rounded-lg hover:opacity-95 p-3 my-4">
        Enable
      </button>
      <div>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="my-5 max-w-[450px] mx-auto ">
              <div
                className="bg-slate-700 rounded-lg gap-8 flex p-3 items-center justify-center"
                onClick={() => handleClick(item.id)}
              >
                <h3 className="text-white">{item.question}</h3>
                <span className="text-white text-lg cursor-pointer">+</span>
              </div>
              {selected === item.id ? (
                <div>
                  <p className="text-white bg-slate-400 rounded-lg p-3 my-2">
                    {item.answer}
                  </p>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <h1 className="text-red-500 font-semibold">No data present</h1>
        )}
      </div>
    </div>
  );
}
