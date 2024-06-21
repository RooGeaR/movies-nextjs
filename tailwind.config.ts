import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
				gurosBlue: {
					500: "var(--guros-blue-500)"
				},
        gurosPink: {
					500: "var(--guros-pink-500)"
				},
				gurosGray: {
					200: "var(--guros-gray-200)",
					500: "var(--guros-gray-500)",
          950: "var(--guros-gray-950)"
				}
			}
    },
  },
  plugins: [],
};
export default config;
