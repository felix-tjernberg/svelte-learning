<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
</script>

<button
	on:click={() => {
		dispatch('eventName', { someKey: 'I have haz aal the cheezburgr :3' })
	}}>Pet me please</button>
