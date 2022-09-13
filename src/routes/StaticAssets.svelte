<script>
	import LocallyStyledRedText from '$lib/components/LocallyStyledRedText.svelte'
	const redText = "Hi I'm red text"
</script>

<h3>Static assets and <code>$lib</code></h3>
<p><em>Answers:</em> 1, 2, 3</p>
<details>
	<summary>
		<p>
			Static/global assets can be added by creating links that refer to <a
				href="https://kit.svelte.dev/docs/project-structure#project-files"><code>%sveltekit.assets%</code></a>
			<br />
			example: <code>&lt link rel="stylesheet" href="%sveltekit.assets%/reset.css" /&gt</code>
		</p>
	</summary>
	<br />
	<p>Below is an example of a p element being styled globally and localy</p>
	<p class="red-text">{redText}</p>
	<LocallyStyledRedText text={redText} />
	<p>
		Notice that <code>LocallyStyledRedText</code> component is placed in lib directory which is aliased with
		<a href="https://kit.svelte.dev/docs/modules#$lib"><code>$lib</code></a>, this is where components and other
		utilities which are accesed by multiple components are placed
	</p>
</details>
