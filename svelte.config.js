import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import * as path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			ssr: {
				noExternal: ['three']
			},
			resolve: {
				alias: {
					$svgs: path.resolve('./src/svgAssets'),
					$components: path.resolve('./src/components'),
					$scripts: path.resolve('./src/scripts')
				}
			}
		},
	}
};

export default config;
