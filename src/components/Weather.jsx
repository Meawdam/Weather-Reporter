import { useState, useEffect } from "react";

export default function Weather({ data }) {
  const [temp, setTemp] = useState("");
  const [refresh, setRefresh] = useState(true);
  console.log(data);

  if (!data) {
    return <p>Loading</p>;
  }

  return (
    <>
      {data.hourly.time.map((temp, index) => {
        return <p key={index}>{data.hourly.temperature_2m[index]}°C</p>;
      })}
    </>
  );
}
