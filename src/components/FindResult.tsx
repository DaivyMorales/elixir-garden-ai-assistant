import React from "react";
import { FaBottleDroplet } from "react-icons/fa6";

function FindResult() {
  return (
    <div className="z-10 flex max-w-[600px] text-white flex-col gap-4">
      <div>
        <h2>Perfiles similares a "Invictus"</h2>
        <p className="text-xs font-medium text-neutral-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
          facere.
        </p>
      </div>
      <div className="z-10 flex max-w-[600px] flex-col items-start justify-start gap-2 rounded-lg p-4 text-[13px] font-medium backdrop-blur-sm bg-white/5">
        <div className="flex items-start justify-start gap-2">
          <div className="rounded-lg border-[1px] border-green-500 bg-green-400 px-3 py-1.5">
            <span className="font-black text-black">1</span>
          </div>
          <div>
            Invictus{" "}
            <span className="rounded-lg bg-neutral-500 px-2 font-mono text-xs text-white">
              M1
            </span>
            <p className="text-xs text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis sit vitae id. Quidem, commodi. Enim.
            </p>
          </div>
        </div>
      </div>
      <div className="z-10 flex max-w-[600px] flex-col items-start justify-start gap-2 rounded-lg bg-white p-4 text-[13px] font-medium backdrop-blur-sm bg-white/5">
        <div className="flex items-start justify-start gap-2">
          <div className="rounded-lg border-[1px] border-green-500 bg-green-400 px-3 py-1.5">
            {" "}
            <span className="font-black text-black">2</span>
          </div>
          <div>
            Invictus{" "}
            <span className="rounded-lg bg-neutral-500 px-2 font-mono text-xs text-white">
              M1
            </span>
            <p className="text-xs text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis sit vitae id. Quidem, commodi. Enim.
            </p>
          </div>
        </div>
      </div>
      <div className="z-10 flex max-w-[600px] flex-col items-start justify-start gap-2 rounded-lg backdrop-blur-sm bg-white/5  p-4 text-[13px] font-medium">
        <div className="flex items-start justify-start gap-2">
          <div className="rounded-lg border-[1px] border-green-500 bg-green-400 px-3 py-1.5">
            {" "}
            <span className="font-black text-black">3</span>
          </div>
          <div>
            One Million Men{" "}
            <span className="rounded-lg bg-neutral-500 px-2 font-mono text-xs text-white">
              H22
            </span>
            <p className="text-xs text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis sit vitae id. Quidem, commodi. Enim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindResult;
