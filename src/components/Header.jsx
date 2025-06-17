import { useState, useEffect } from "react";
import { FaRegSun } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";

export default function Header() {
  return (
    <header>
      <h1>Weather Reporter</h1>
      <button><FaSun /></button>
    </header>
  );
}
