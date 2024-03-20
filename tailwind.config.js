/** @type {import('tailwindcss').Config} */
export default {
  content: ["../index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#41729F",

          secondary: "#5885AF",

          accent: "#9ca3af",

          neutral: "#274472",

          "base-100": "#f5f5f4",

          info: "#5887DC",

          success: "#34d399",

          warning: "#ea580c",

          error: "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
