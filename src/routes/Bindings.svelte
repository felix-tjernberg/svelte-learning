<script>
	// @ts-nocheck
	import { onMount } from 'svelte'
	import katex from 'katex'
	import Input from './Input.svelte'
	let a = 1
	let b = 2
	let c = Math.pow(a, 2) + b
	let elementReference
	onMount(() => {
		elementReference.textContent = `Paragraph above is ${elementClientHeightReference} tall`
	})
	$: c = Math.pow(a, 2) + b
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"
		integrity="sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X"
		crossorigin="anonymous" />
</svelte:head>

<h3>Bindings</h3>
<p><em>Answers:</em> 5, 6</p>
<details>
	<summary>You can bind to form values with the <code>bind:value</code> syntax</summary>
	<p><em>Note:</em> You can bind to any exported value on a svelte component</p>
	<div>
		<div>
			<div>
				{@html katex.renderToString(`a=`, { displayMode: true })}<input type="range" bind:value={a} min="0" max="10" />
			</div>
			<div>
				{@html katex.renderToString(`b=`, { displayMode: true })}
				<Input bind:exportedValue={b} />
			</div>
		</div>
		{@html katex.renderToString(`a^2+b=c`, { displayMode: true })}
		{@html katex.renderToString(`${a}^2+${b}=${c}`, { displayMode: true })}
	</div>
	<p>You can bind to this to get an element reference, but you can only access the element after it has been mounted</p>
	<p>
		Note: You can also bind to element attributes with the <code>bind:attribute</code> syntax, like clientHeight
	</p>
	<p bind:this={elementReference} />
</details>

<style>
	div {
		max-width: 50ch;
	}
	div > div {
		display: flex;
		place-content: space-between;
	}
	input {
		margin: auto;
	}
</style>
