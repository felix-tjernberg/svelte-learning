<script>
	import '$lib/stylesheets/global.css'
</script>

<h1>Learning svelte website</h1>
<slot />
<nav>
	<a data-sveltekit-reload href="/">Answers</a>
	<a data-sveltekit-reload href="/questions#top">Questions</a>
</nav>

<style>
	nav {
		display: flex;
		gap: 1em;
		position: fixed;
		bottom: 0;
	}
</style>
