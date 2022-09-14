// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { browser } from '$app/environment'
import { writable } from 'svelte/store'

export function persistedWritable(storageKey, initialValue) {
	// Check if stored value exists else use initialValue
	const storedValue = browser ? window.localStorage[storageKey] : ''
	const store = writable(storedValue || initialValue)

	// TODO Figure out if there needs to be a unsubscribe function
	store.subscribe((value) => {
		if (browser) {
			window.localStorage[storageKey] = value
		}
	})

	return store
}
