<script>
	import { fastLoremIpsumGenerator } from '$lib/components/LoremIpsumGenerator'
	import fastLoremIpsum from 'fast-lorem-ipsum'
	let loremIpsumText = 'Nothing here...'
	let loremIpsumTesxt2 = fastLoremIpsum('10w')
</script>

<h3>Importing and using node packages</h3>
<p><em>Answer:</em> 4</p>
<details>
	<summary>
		<p>
			Importing and using node packages is done in .ts/js files like in any other node application or inside directly
			inside of <code>&lt script &gt</code> tags in .svelte files
		</p>
	</summary>
	<p>
		All cjs modules are transpiled to esm modules as svelte is using a plugin for that so require() does not exist in
		svelte
		<br />
		<em>note</em>: that when using ts you have to declare the module in app.d.ts
	</p>
	<p>{loremIpsumText}</p>
	<button
		on:click={(event) => {
			loremIpsumText = fastLoremIpsumGenerator()
			// @ts-ignore
			event.target.parentNode.removeChild(event.target)
		}}>Generate more lorem</button>
	<p>{loremIpsumTesxt2}</p>
</details>
