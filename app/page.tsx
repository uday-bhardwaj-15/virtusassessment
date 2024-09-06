"use client";
// import ThreeScene from "@/components/game";
import Game from "@/components/game";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-black">Welcome to My 3D App</h1>
      <Game />
    </div>
  );
}
