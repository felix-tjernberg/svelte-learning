<h3>Dynamic components</h3>
<p><em>Answers: 7</em></p>
<details>
	<summary>
		<p>
			Components can be put into the dom dynamically using &lt;svelte:component this=&#123;componentName &#125;/&gt;
		</p>
	</summary>
	<div>
		<a data-sveltekit-reload href="/dynamic-component/a">Se component a</a>
		<a data-sveltekit-reload href="/dynamic-component/b">Se component b</a>
		<a data-sveltekit-reload href="/dynamic-component/c">Se component c</a>
		<a data-sveltekit-reload href="/dynamic-component/d">Se component d</a>
	</div>
</details>

<style lang="sugarss">
  a
    margin-top: 1em
  div
    display: flex
    flex-direction: column
    align-items: center
</style>
