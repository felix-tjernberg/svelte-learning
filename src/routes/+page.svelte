<script>
	import ImportingAndUsingNodePackages from '$lib/components/index/file-organization/ImportingAndUsingNodePackages.svelte'
	import StaticAssets from '$lib/components/index/file-organization/StaticAssets.svelte'
	import ReactivityAndStores from '$lib/components/index/state-management/ReactivityAndStores.svelte'
	import Stores from '$lib/components/index/state-management/Stores.svelte'
	import LocalStorage from '$lib/components/index/state-management/LocalStorage.svelte'
	import Routing from '$lib/components/index/server-side/Routing.svelte'
	import ApiEndpoint from '$lib/components/index/server-side/ApiEndpoint.svelte'
	import LoadingData from '$lib/components/index/server-side/LoadingData.svelte'
	import DomEvents from '$lib/components/index/svelte-specific/DomEvents.svelte'
	import PreProcessing from '$lib/components/index/pre-processing/PreProcessing.svelte'
	import Bindings from '$lib/components/index/svelte-specific/Bindings.svelte'
	import ImageAndVideo from '$lib/components/index/pre-processing/ImageAndVideo.svelte'
	import DynamicComponents from '$lib/components/index/svelte-specific/DynamicComponents.svelte'
	import Internationalization from '$lib/components/index/other/Internationalization.svelte'
	import Seo from '$lib/components/index/other/Seo.svelte'
</script>

<svelte:head>
	<title>Answers</title>
	<meta name="description" content="The answers Felix Tjernberg had about sveltekit" />
</svelte:head>

<a href="/questions#file-organization">
	<h2 id="1file-organization">File organization</h2>
</a>
<StaticAssets />
<ImportingAndUsingNodePackages />

<a href="/questions#state-management">
	<h2 id="1state-management">State management</h2>
</a>
<ReactivityAndStores />
<Stores />
<LocalStorage />

<a href="/questions#server-side">
	<h2 id="1server-side">Server side</h2>
</a>
<Routing />
<ApiEndpoint />
<LoadingData />

<a href="/questions#svelte-specific">
	<h2 id="1svelte-specific">Svelte specific</h2>
</a>
<DomEvents />
<Bindings />
<DynamicComponents />

<template lang="pug">
	a(href="/questions#pre-processing")
		h2(id="1pre-processing") Pre-processing
</template>
<PreProcessing />
<ImageAndVideo />

<a href="/questions#other">
	<h2 id="1other">Other</h2>
</a>
<Internationalization />
<Seo />
