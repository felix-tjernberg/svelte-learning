<script>
	import { createEventDispatcher } from 'svelte'
	import { hotPotatoGame } from '$lib/components/index/state-management/hotPotatoStore.js'
	export let playerNumber = 0
	const dispatch = createEventDispatcher()
</script>

{#if playerNumber === $hotPotatoGame.playerHoldingThePotato}
	<p>{playerNumber} holding a potato</p>
	<button on:click={hotPotatoGame.passThePotato}> Pass the 🥔 </button>
{:else}
	<p>{playerNumber} not holding potato</p>
{/if}
