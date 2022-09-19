<script>
	let food = 'pancakes'
	let color = 'black'
	let list = ['one', 'two', 'three']

	$: catString = `cat ate the ${food}`
	$: {
		if (food === 'these nuts') {
			color = 'red'
		}
	}
</script>

<h3>Reactivity</h3>
<p><em>Answers: 1</em></p>
<details>
	<summary>
		<p>
			Svelte wraps assigments of variables in automagic that updates the DOM and any depedning variables when the
			variable is reassigned
		</p>
	</summary>
	<p>You can also use reactive statements that runs when a variable inside the block updates</p>
	<p style="color:{color}">{catString}</p>
	<button
		on:click={(event) => {
			food = 'these nuts'
			// @ts-ignore
			event.target.parentNode.removeChild(event.target)
		}}>Make an assigment</button>
	<br />
	<p>
		<em>Note:</em> Using array methods like push and splice won't cause an update, the list has to be reassigned to
		update
		<br />
		<em>Notice</em> that if you click push to list then reassign list, it will get two four strings added as the push caused
		the list to be mutated but not updated
	</p>
	<p>list: {list}</p>
	<button
		on:click={() => {
			list.push('four')
		}}>
		Push to list
	</button>
	<button
		on:click={() => {
			list = [...list, 'four']
		}}>
		Reassign list
	</button>
	<button
		on:click={() => {
			list = ['one', 'two', 'three']
		}}>
		Reset list
	</button>
</details>
