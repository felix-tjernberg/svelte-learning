/* eslint-disable @typescript-eslint/ban-ts-comment */
import { init, register } from 'svelte-intl-precompile'

export function load() {
	register('en', () => import('$lib/locales/en.js'))
	register('se', () => import('$lib/locales/se.js'))
	init({
		fallbackLocale: 'en'
	})
}
