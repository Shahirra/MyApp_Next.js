"use client";

import React from "react";

export default function Spinner({ size = 40, color = "border-green-600" }) {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className={`animate-spin rounded-full border-4 ${color} border-t-transparent`}
        style={{
          width: size,
          height: size,
        }}
      ></div>
    </div>
  );
}
