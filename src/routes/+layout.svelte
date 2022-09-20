<script>
	import { afterNavigate } from '$app/navigation'
	import '$lib/stylesheets/global.css'

	let isQuestionsPage = false
	afterNavigate(() => {
		isQuestionsPage = window.location.pathname === '/questions'
	})
</script>

<nav id="page-nav" aria-labelledby="Page navigation">
	<a href="/">Answers</a>
	<a href="/questions#top">Questions</a>
</nav>
<nav id="heading-nav" aria-labelledby="Heading navigation">
	<a aria-current="page" href={`#${isQuestionsPage ? '' : '1'}file-organization`}>File organization</a>
	<a aria-current="page" href={`#${isQuestionsPage ? '' : '1'}state-management`}>State management</a>
	<a aria-current="page" href={`#${isQuestionsPage ? '' : '1'}server-side`}>Server side</a>
	<a aria-current="page" href={`#${isQuestionsPage ? '' : '1'}svelte-specific`}>Svelte specific</a>
	<a aria-current="page" href={`#${isQuestionsPage ? '' : '1'}pre-processing`}>Pre processing</a>
	<a aria-current="page" href={`#${isQuestionsPage ? '' : '1'}other`}>Other</a>
</nav>

<h1>Learning svelte website</h1>
<slot />

<style lang="sugarss">
	nav
		display: flex
		gap: 1em
		background: linear-gradient(15deg, rgba(255,255,255,0.27) 0%, rgba(255,255,255,0.42) 48%, rgba(255,255,255,0.30) 100%)
		backdrop-filter: saturate(50%) blur(8px)
		border: 0.5px solid #ffffff50
		border-bottom: none
		position: fixed

	#page-nav
		padding: 0.75em 2em 0.5em 2em
		border-radius: 21px 21px 0 0
		bottom: 0

	#heading-nav
		border-radius: 0 21px 21px 0
		padding: 2em 0.75em 2em 0.5em
		flex-direction: column
		left: 0
		top: 50%
		translate: 0 -50%
</style>
