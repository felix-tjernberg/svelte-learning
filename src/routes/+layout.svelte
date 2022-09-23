<script>
	import '$lib/stylesheets/global.css'
	import { afterNavigate } from '$app/navigation'
	import { browser } from '$app/environment'
	import { locale } from 'svelte-intl-precompile'
	import { fly } from 'svelte/transition'

	const HEADING_NAV_FLY_SETTINGS = { x: -200, duration: 666 }
	const PAGE_NAV_FLY_SETTINGS = { y: 200, duration: 666 }

	let isQuestionsPage = false
	let uniqueId = ''
	let showHeaderNav = false
	let showPageNav = false
	let firstClientRenderDone = true

	afterNavigate(() => {
		isQuestionsPage = window.location.pathname === '/questions'
		showPageNav = true
		if (firstClientRenderDone && document.documentElement.clientWidth > 800) showHeaderNav = true
		firstClientRenderDone = false
	})

	$: if (browser) document.documentElement.lang = $locale
	$: uniqueId = isQuestionsPage ? '' : '1'
</script>

{#if !firstClientRenderDone && !showHeaderNav}
	<button
		id="outside-header-nav"
		in:fly={HEADING_NAV_FLY_SETTINGS}
		out:fly={HEADING_NAV_FLY_SETTINGS}
		on:click={() => {
			showHeaderNav = !showHeaderNav
		}}>></button>
{/if}
{#if showHeaderNav}
	<nav
		in:fly={HEADING_NAV_FLY_SETTINGS}
		out:fly={HEADING_NAV_FLY_SETTINGS}
		id="heading-nav"
		aria-labelledby="Heading navigation">
		<a aria-current="page" href={`#${uniqueId}file-organization`}>File organization</a>
		<a aria-current="page" href={`#${uniqueId}state-management`}>State management</a>
		<a aria-current="page" href={`#${uniqueId}server-side`}>Server side</a>
		<a aria-current="page" href={`#${uniqueId}svelte-specific`}>Svelte specific</a>
		<a aria-current="page" href={`#${uniqueId}pre-processing`}>Pre processing</a>
		<a aria-current="page" href={`#${uniqueId}other`}>Other</a>
		<button
			on:click={() => {
				showHeaderNav = !showHeaderNav
			}}>Minimize</button>
	</nav>
{/if}

{#if showPageNav}
	<nav in:fly={PAGE_NAV_FLY_SETTINGS} id="page-nav" aria-labelledby="Page navigation">
		<a href="/">Answers</a>
		<a href="/questions#top">Questions</a>
	</nav>
{/if}

<h1>Learning svelte website</h1>
<slot />

<style lang="sugarss">
	nav, #outside-header-nav
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

	#heading-nav, #outside-header-nav
		color: #393939
		border-radius: 0 21px 21px 0
		padding: 2em 0.75em 2em 0.5em
		flex-direction: column
		left: 0
		top: 50%
		translate: 0 -50%
</style>
