/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Latar krem/kertas hangat
        paper: "#F6EEDC",
        cream: "#FDF7E9",
        // Teks & border
        ink: "#111111",
        // Aksen utama kraft (BLUEPRINT 4.2)
        kraft: {
          DEFAULT: "#D49B45",
          dark: "#A9742A",
          light: "#EAC27E",
        },
        // Aksen kedua dari foto: pink/blush kursi plastik di foto produk
        blush: {
          DEFAULT: "#E8A0B4",
          dark: "#C9728B",
          light: "#F6CBD6",
        },
        // Merah logo INSOMNIA
        blood: "#E10600",
        night: "#0B0B0B",
        leaf: "#2E7D4F",
      },
      fontFamily: {
        display: ['Syne', '"Space Grotesk"', "sans-serif"],
        sans: ['"Space Grotesk"', '"Plus Jakarta Sans"', "sans-serif"],
        body: ['"Plus Jakarta Sans"', '"Space Grotesk"', "sans-serif"],
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        // Hard shadow neobrutalism: tanpa blur
        hard: "5px 5px 0 0 #111111",
        "hard-sm": "3px 3px 0 0 #111111",
        "hard-lg": "8px 8px 0 0 #111111",
        "hard-kraft": "5px 5px 0 0 #D49B45",
        "hard-blush": "5px 5px 0 0 #E8A0B4",
        "hard-none": "0 0 0 0 #111111",
      },
      backgroundImage: {
        // Tekstur halftone dot (radial-gradient, bukan gradien warna ungu-biru)
        halftone: "radial-gradient(#111111 1px, transparent 1.2px)",
        "halftone-kraft": "radial-gradient(#D49B45 1.2px, transparent 1.4px)",
        "halftone-paper": "radial-gradient(rgba(17,17,17,0.16) 1px, transparent 1.2px)",
      },
      backgroundSize: {
        halftone: "14px 14px",
      },
      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        "stamp-pop": {
          "0%": { transform: "scale(0.6) rotate(-8deg)", opacity: "0" },
          "70%": { transform: "scale(1.06) rotate(-2deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(-3deg)", opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "stamp-pop": "stamp-pop 0.45s cubic-bezier(0.2, 1.4, 0.4, 1) both",
      },
    },
  },
  plugins: [],
};
