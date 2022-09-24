import { imagetools } from 'vite-imagetools'
import precompileIntl from 'svelte-intl-precompile/sveltekit-plugin'
import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'

const config: UserConfig = {
	plugins: [imagetools(), sveltekit(), precompileIntl('src/lib/locales')]
}

export default config
