import { useEffect, useState } from "react";

export function TinoVista() {
  const rainbow_colors = [
    "text-red-300",
    "text-orange-300",
    "text-yellow-300",
    "text-green-300",
    "text-blue-300",
    "text-indigo-300",
    "text-violet-300",
  ];
  const [color_idx, set_color] = useState(Math.floor(Math.random() * rainbow_colors.length));

  useEffect(() => {
    const i = setInterval(() => set_color(color_idx + 1), 100);
    return () => clearInterval(i);
  });
  
  return (
    <h1 className={`text-9xl font-heading ${rainbow_colors[color_idx % rainbow_colors.length]}`}>
      TinoVista Tech
    </h1>
  );
}