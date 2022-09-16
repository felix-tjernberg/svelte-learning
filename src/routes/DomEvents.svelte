<script>
	import ComponentEvent from './ComponentEvent.svelte'
	import ComponentEventForward from './ComponentEventForward.svelte'

	let count = 1
	let componentEventValue = ''
	let componentEventForwardValue = ''
</script>

<h3>Events</h3>
<details>
	<summary>
		<p>Events can be used with <code>on:eventname</code></p>
	</summary>
	<p>
		You can have multiple <code>on:/code> events like here <code>mouseenter</code> and <code>mouseleave</code> </code>
	</p>
	<button
		on:mouseenter={(event) => {
			// @ts-ignore
			event.target.style.display = 'none'
		}}
		on:mouseleave={(event) => {
			setTimeout(() => {
				// @ts-ignore
				event.target.style.display = 'block'
			}, 200)
		}}>You can't click me and see the awesome thing! muhahaha</button>
	<p>
		You can use <code>on:click|once</code> to only run the event once
	</p>
	<button
		on:click|once={() => {
			count += 1
		}}>My value is {count}</button>
	<p>Components can also dispatch events to their parents with <code>createEventDispatcher</code></p>
	<ComponentEvent
		on:eventName={(event) => {
			componentEventValue = event.detail.someKey
			setTimeout(() => {
				componentEventValue = ''
			}, 1000)
		}} />
	{#if componentEventValue}
		<p>{componentEventValue}</p>
	{/if}
	<p>
		Child components can also forward events happend on them to their parents by defining an action but not binding any
		function to the action in this case <code>on:click</code>
	</p>
	<ComponentEventForward
		on:click={() => {
			componentEventForwardValue = 'This is nice purr purr purr'
			setTimeout(() => {
				componentEventForwardValue = ''
			}, 1000)
		}} />
	{#if componentEventForwardValue}
		<p>{componentEventForwardValue}</p>
	{/if}
</details>
