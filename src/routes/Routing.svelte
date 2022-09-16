<a href="https://kit.svelte.dev/docs/routing">
	<h3>Routing</h3>
</a>
<p><em>Answers:</em> 1</p>
<details>
	<summary>
		<p>
			Sveltekit uses folder based routing and within those folders you can place "magic" files (represented with a +)
			that sveltekit then compiles into routes, route logic and api endpoints
		</p>
	</summary>
	<a href="https://kit.svelte.dev/docs/routing#page">
		<h4>+page</h4>
	</a>
	<p>
		<code>+page.svelte</code> files does what it says on the tin, creates html/css/js templates for corresponding folder
		path
	</p>
	<p>
		<code>+page.svelte</code> can be accompanied with <code>+page.js</code> or <code>+page.server.js</code> these
		javascript files use <code>exported function load</code> that runs on server side render or client side navigation.
		The <a href="https://kit.svelte.dev/docs/load">load function</a> has access to different route specific data that is
		usefull to make fetches or add logic based on routeId or route paramaters
	</p>
	<a href="https://kit.svelte.dev/docs/routing#error">
		<h4>+error</h4>
	</a>
	<p>
		+error.svelte pages are rendered if there was an error thrown during a load function like in <a
			href="https://kit.svelte.dev/docs/routing#page-page-server-js">this example</a>
	</p>
	<a href="https://kit.svelte.dev/docs/routing#layout">
		<h4>+layout</h4>
	</a>
	<p>
		<code>+layout.svelte</code> are components that stick around during page navigation and wraps its route
		<code>+page.svelte</code>
		using a <code> &lt slot &gt </code> element. This is usefull for navigation or footers that should stick around during
		page navigation
	</p>
	<p>
		<code>+layout.svelte</code> can also be accompanied with <code>+layout.js</code> or <code>+layout.server.js</code> to
		share route based logic between child routes
	</p>
	<a href="https://kit.svelte.dev/docs/routing#server">
		<h4>+server</h4>
	</a>
	<p>
		<code>+server.js</code> are files that are referred to as API endpoints these files gives you full control over the
		http verbs <code>GET</code> <code>POST</code> <code>PATCH</code> <code>PUT</code> and <code>DELETE</code> of the route
	</p>
</details>
