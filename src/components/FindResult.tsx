import React from "react";

function FindResult({ data, name }: { data: any; name: string }) {
  return (
    <div className="z-10 flex max-w-[600px] flex-col gap-4 text-white">
      <div className="z-10">
        <h2 className="text-neutral-400">Perfiles similares a <span className="text-white font-bold">&quot;{name}&quot;</span></h2>
        <p className="text-xs font-medium text-neutral-400">
          Estos son los siguientes perfumes que mas favorecen a el perfume solicitado:
        </p>
      </div>

      {data.map((perfum: any, index: number) => (
        <div key={perfum.id} className="z-10 flex max-w-[600px] flex-col items-start justify-start gap-2 rounded-lg bg-white/5 p-4 text-[13px] font-medium backdrop-blur-sm">
          <div className="flex items-start justify-start gap-2">
            <div className="rounded-lg border-[1px] border-green-500 bg-green-400 px-3 py-1.5">
              <span className="font-black text-black">{index + 1}</span>
            </div>
            <div>
              {perfum.name}{" "}
              <span className="rounded-lg bg-neutral-500 px-2 font-mono text-xs text-white">
                {perfum.id}
              </span>
              <p className="text-xs text-neutral-400">{perfum.reason}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FindResult;
