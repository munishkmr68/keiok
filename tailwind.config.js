/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        brandon: ["Brandon Grotesque", "sans-serif"],
      },
      colors: {
        t1: "#000000",
        t2: "#1C1C1C",
        t3: "#333333",
        t4: "#4B4B4B",
        t5: "#808080",
        input1: "#6B6B6B",
        input2: "#BFBFBF",
        bg1: "#636057",
        bg2: "#F3F9FC",
        bg3: "#F6F6F6",
        bg4: "#ECE6DB",
        blue: "#1990C6",
        gray: "#D8D8D8",
        inputcolor: "#CFCFCF",
        pink: "#FDE4F3",
        red: "#B80000",
        lock: "#F2C35B",
        green: "#51C96D",
        linedark: "#373737",
        line: "#8CC8E3",
      },
      boxShadow: {
        img: "0px 1px 4px 0px rgba(0, 0, 0, 0.24)",
      },
    },
  },
  plugins: [],
};
