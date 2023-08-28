import { url } from 'inspector'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors: {
        roofblue: '#05106D',
        roofyelow: '#FF8B00',
        roofgreen: '#008F75',
      },
      backgroundImage: {
        "footerBg": 'url("/footerbg.png")',
        "heroBg": 'url("/hero.jpg")',
        "howitworksBg": 'url("/howitworks.png")'
      },
    },
  },
  plugins: [],
}
export default config