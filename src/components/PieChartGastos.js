import React from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-svg";
import { categories } from "../data/categories";

export default function PieChartGastos({ data }) {
  const gastosPorCategoria = {};
  data.forEach((tx) => {
    if (tx.type === "expense") {
      gastosPorCategoria[tx.category] =
        (gastosPorCategoria[tx.category] || 0) + tx.amount;
    }
  });

  const pieData = Object.entries(gastosPorCategoria).map(
    ([cat, value], index) => {
      const color =
        categories.find((c) => c.name === cat)?.color.replace("bg-", "") ||
        "gray";
      return {
        key: `${cat}-${index}`,
        value,
        svg: { fill: color },
        arc: { outerRadius: "100%", padAngle: 0.02 },
        label: cat,
      };
    }
  );
}
