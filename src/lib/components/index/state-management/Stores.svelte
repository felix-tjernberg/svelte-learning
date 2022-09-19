<script>
	import HotPotatoPlayer from './HotPotatoPlayer.svelte'
	import { hotPotatoGame } from './hotPotatoStore.js'
	const playerList = [1, 2, 3, 4, 5]
	hotPotatoGame.setPlayers(playerList)
</script>

<h3>Custom stores</h3>
<p><em>Answers:</em> 2</p>
<details>
	<summary>
		<p>
			State shared between components can if needed be shared using <a
				href="https://svelte.dev/docs#run-time-svelte-store">sveltes different store functions</a>
		</p>
	</summary>
	<p>
		This example shows how to create a custom store and a example on how much cleaner the .svelte files becomes if you
		put your store logic in a seperate file
	</p>
	{#if $hotPotatoGame.playerList}
		{#if $hotPotatoGame.timeToBlow > 0}
			{#each $hotPotatoGame.playerList as player}
				<HotPotatoPlayer playerNumber={player} />
			{/each}
		{:else}
			<p>BOOM {$hotPotatoGame.playerHoldingThePotato} died</p>
			<button
				on:click={() => {
					hotPotatoGame.reset()
					hotPotatoGame.setPlayers(playerList)
				}}>
				Reset game
			</button>
		{/if}
	{/if}
</details>
