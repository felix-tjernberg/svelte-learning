<h1>Learning svelte website</h1>
<slot />
<nav>
	<a href="/">Answers</a>
	<a href="/questions">Questions</a>
</nav>

<style>
	nav {
		display: flex;
		gap: 1em;
		position: fixed;
		bottom: 0;
	}
</style>
