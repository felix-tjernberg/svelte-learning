<script>
	import LocallyStyledRedText from '$lib/components/LocallyStyledRedText.svelte'
	const redText = "Hi I'm red text"
</script>

<h3>Static assets and <code>$lib</code></h3>
<p><em>Answers:</em> 1, 2, 3</p>
<details>
	<summary>
		<p>
			"Global" css or javascript should be imported in the top level <code>+layout.svelte</code> file using the script
			tag
			<br />
		</p>
	</summary>
	<p>
		<em>Note: </em>
		Static assets can also be linked and used by placing them in the static folder and then linking to them with
		<a href="https://kit.svelte.dev/docs/project-structure#project-files"><code>%sveltekit.assets%</code></a> in the
		<code>app.html</code>
		file
		<br />
		example: <code>&lt link rel="stylesheet" href="%sveltekit.assets%/reset.css" /&gt</code>
		<br />
		<em>Note:</em> These files should be treated like very static files during development as sveltekit does not preprocess
		files in this folder
	</p>
	<br />
	<p>Below is an example of 2 p elements being styled globally and locally</p>
	<p class="red-text">{redText}</p>
	<LocallyStyledRedText text={redText} />
	<p>
		Notice that <code>LocallyStyledRedText</code> component is placed in lib directory which is aliased with
		<a href="https://kit.svelte.dev/docs/modules#$lib"><code>$lib</code></a>, this is where components and other
		utilities which are accesed by multiple components are placed
	</p>
</details>
