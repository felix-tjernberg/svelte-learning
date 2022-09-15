<script>
	// @ts-nocheck
	import { name } from './localStorageStore.js'
	import { persistBrowserLocal } from '@macfja/svelte-persistent-store'
	import { writable } from 'svelte/store'
	import { disableWarnings } from '@macfja/svelte-persistent-store'
	disableWarnings()

	let nameSveltePersistentStore = persistBrowserLocal(writable('svelte persisted store felix'), 'nameStore')
</script>

<h3>Local Storage</h3>
<p><em>Answers:</em> 3</p>
<p>Local storage is abit problematic when using sveltekit as writeables get rendered during the server render</p>
<p>So if you don't save user local storage data on the server, the writeable will always flash the inital value</p>
<br />
<button
	on:click={() => {
		localStorage.clear()
		location.reload()
	}}>Reset local storage</button>

<h4>svelte-persistent-store</h4>
<p>{$nameSveltePersistentStore}</p>
<button
	on:click={() => {
		$nameSveltePersistentStore = 'Felix'
	}}>Change name to Felix</button>

<h4>Custom persistedWritable function</h4>
{#if $name}
	<p>{$name}</p>
{:else}<p>Loading...</p>{/if}
<button
	on:click={() => {
		$name = 'Felix'
	}}>Change name to Felix</button>
