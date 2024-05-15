"use client"

import { useState } from "react";

export default function Home() {

  const [name, setNmae] = useState("Sami")

  const ChangeName = () => {
    setNmae("Sherzaman")

  }

  return (
    <div className="text-center mt-20 justify-center items-center">
      <h1 className=" font-bold text-4xl text-blue-500">UseState</h1>
      <h2 className="text-lg font-bold text-blue-500"> React hook</h2>
      <br />
      <p className="text-3xl">{name}</p>
      <button onClick={ChangeName} className="bg-blue-700 hover:bg-blue-400 rounded-md p-2"> Click Button</button>

    </div>
  );
}
