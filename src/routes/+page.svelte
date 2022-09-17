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
</script>

<a href="/questions#file-organization">
	<h2 id="file-organization">File organization</h2>
</a>
<StaticAssets />
<ImportingAndUsingNodePackages />

<a href="/questions#state-management">
	<h2 id="state-management">State management</h2>
</a>
<ReactivityAndStores />
<Stores />
<LocalStorage />

<a href="/questions#server-side">
	<h2 id="server-side">Server side</h2>
</a>
<Routing />
<ApiEndpoint />
<LoadingData />

<a href="/questions#svelte-specific">
	<h2 id="svelte-specific">Svelte specific</h2>
</a>
<DomEvents />

<template lang="pug">
	a(href="/questions#pre-processing")
		h2(id="pre-processing") Pre-processing
</template>
<PreProcessing />
