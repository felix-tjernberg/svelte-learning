// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import ComponentA from './ComponentA.svelte'
import ComponentB from './ComponentB.svelte'
import ComponentC from './ComponentC.svelte'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	let component
	switch (params.selectedComponent) {
		case 'a':
			component = ComponentA
			break
		case 'b':
			component = ComponentB
			break
		case 'c':
			component = ComponentC
			break
		default:
			throw error(404, 'Not found')
	}

	return { selectedComponent: component }
}
