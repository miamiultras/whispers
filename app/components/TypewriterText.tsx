"use client";
import { useEffect, useState } from "react";

function TypewriterText({ text }: { text: string }) {
  const [textObject, setTextObject] = useState("");

  useEffect(() => {
    let splittedText = text?.split("");
    let timerId = setTimeout(function tick() {
      setTextObject((prev) => prev + splittedText.shift());
      if (splittedText.length > 1) {
        timerId = setTimeout(tick, 50);
      } else {
        clearTimeout(timerId);
      }
    }, 50);
  }, []);

  return (
    <>
      <div className="text-transparent h-0">{text}{"||"}</div>
      <div>
        {textObject}
        <span className="animate-ping text-xl text-orange-600">|</span>
      </div>
    </>
  );
}

export default TypewriterText;
