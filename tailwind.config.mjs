/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        "heading": ["Righteous", "mono"],
        "sans": ["Unbounded", "sans-serif"]
      },
		},
	},
	plugins: [],
}
