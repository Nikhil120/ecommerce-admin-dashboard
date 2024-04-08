import React from "react";

function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-5 divide-y divide-strokes">
      <div className="text-center pb-5">
        <h2 className="font-semibold text-sm">
          Hello there, admin@example.com
        </h2>
        <h3 className="text-xs font-medium">
          Here is some information we gathered about your store
        </h3>
      </div>
      <div className="h-full flex justify-center items-center">
        <div className="flex flex-col gap-y-1 border border-strokes rounded w-2/5 p-5">
          <div className="flex justify-between text-sm font-medium">
            <span>Sales</span>
            <span>$802</span>
          </div>
          <span className="text-xs">Today</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
