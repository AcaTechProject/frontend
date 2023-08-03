"use client";

import { useEffect } from "react";
import Chart from "../components/Chart/Chart";

export default function Page() {
  useEffect(() => {
    Chart;
  }, []);

  return (
    <section
      style={{
        marginLeft: "248px",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#dddddd",
      }}
    >
      <h2> Hello, Schedule Page!</h2>

      <Chart />
    </section>
  );
}
