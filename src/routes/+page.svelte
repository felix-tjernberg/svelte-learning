<script>
	import ImportingAndUsingNodePackages from './ImportingAndUsingNodePackages.svelte'
	import StaticAssets from './StaticAssets.svelte'
	import ReactivityAndStores from './ReactivityAndStores.svelte'
	import Stores from './Stores.svelte'
	import LocalStorage from './LocalStorage.svelte'
	import Routing from './Routing.svelte'
	import ApiEndpoint from './ApiEndpoint.svelte'
	import LoadingData from './LoadingData.svelte'
	import DomEvents from './DomEvents.svelte'
	import PreProcessing from './questions/PreProcessing.svelte'
	import Bindings from './Bindings.svelte'
	import ImageAndVideo from './ImageAndVideo.svelte'
</script>

<a data-sveltekit-reload href="/questions#file-organization">
	<h2 id="file-organization">File organization</h2>
</a>
<StaticAssets />
<ImportingAndUsingNodePackages />

<a data-sveltekit-reload href="/questions#state-management">
	<h2 id="state-management">State management</h2>
</a>
<ReactivityAndStores />
<Stores />
<LocalStorage />

<a data-sveltekit-reload href="/questions#server-side">
	<h2 id="server-side">Server side</h2>
</a>
<Routing />
<ApiEndpoint />
<LoadingData />

<a data-sveltekit-reload href="/questions#svelte-specific">
	<h2 id="svelte-specific">Svelte specific</h2>
</a>
<DomEvents />
<Bindings />

<template lang="pug">
	a(data-sveltekit-reload href="/questions#pre-processing")
		h2(id="pre-processing") Pre-processing
</template>
<PreProcessing />
<ImageAndVideo />
