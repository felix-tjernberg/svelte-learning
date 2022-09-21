<script>
	import { t, locale } from 'svelte-intl-precompile'
	let language = 'en'
	$: $locale = language
</script>

<h3>Internationalization</h3>
<details>
	<summary>
		<p>Sveltekit has a plan to implement i18 after 1.0 is released, so for now a package is the way to go</p>
	</summary>
	<p>
		I choose to use <a href="https://github.com/cibernox/svelte-intl-precompile">svelte-intl-precompile</a> to drive as it
		precompiles the translations instead of having to parse it during re-renders
	</p>
	<p><code>$: if (browser) document.documentElement.lang = $locale</code> is used to update the html lang tag</p>
	<p>
		<em>Note:</em> Be sure to set initialLocale during server render
		<a
			href="https://github.com/cibernox/svelte-intl-precompile#note-for-automatic-browser-locale-detection-when-server-side-rendering"
			>looking at request headers</a>
	</p>
	<p>{$t('message')}</p>
	<div>
		{#each ['en', 'se', 'fr'] as value}
			<label>
				<input type="radio" bind:group={language} {value} />
				{value}
			</label>
		{/each}
	</div>
</details>

<style>
	div {
		display: flex;
	}
</style>
