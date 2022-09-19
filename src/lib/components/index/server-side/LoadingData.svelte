<h3>Loading data on server side and updating data on client side</h3>
<p><em>Answers:</em> 3</p>
<details>
	<summary>
		<p>
			Loading/Updating data should in most cases be done in the <a href="https://kit.svelte.dev/docs/load"
				>load functions</a>
		</p>
	</summary>
	<p>
		Load functions will not be rerun during client side navigation, there are a few exceptions like <a
			href="https://kit.svelte.dev/docs/load#input-methods-parent">
			chaining load functions awaiting on the parent property
		</a>, <a href="https://kit.svelte.dev/docs/load#invalidation">read more about invalidation</a>
	</p>
	<p>
		<em>Note:</em> If you have any data you want to lazy load put them in the lifecycle method
		<a href="https://svelte.dev/docs#run-time-svelte-onmount"><code>onMount</code></a>; lifecycle methods does not run
		on the server with the exception of <code>onDestroy</code>.
	</p>
	<aside>
		<em>Sidenote:</em> Remeber to clean up timers or intervals using <code>onDestroy</code>
	</aside>
</details>
