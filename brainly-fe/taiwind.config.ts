import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
       blue:{
        300:"#4643dd",
        500:"#dbe4fe",
        600:"#5046e4"
       }
      },
    },
  },
  plugins: [],
};

export default config;