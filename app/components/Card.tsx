import React from "react";

function Card({ children }: React.PropsWithChildren) {
  return (
    <div className="bg-white p-8 border-2 border-black rounded-lg flex flex-col justify-between gap-6">
      {children}
    </div>
  );
}

export default Card;
