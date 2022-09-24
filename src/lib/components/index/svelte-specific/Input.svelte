<script>
	export let exportedValue
	let internalValue = 1
	exportedValue = internalValue
	$: exportedValue = internalValue
</script>

<input type="range" bind:value={internalValue} min="0" max="10" aria-label="Value for b" />
