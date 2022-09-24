<h3>Progressive Web Application</h3>
<p><em>Answers: 3</em></p>
<details>
	<summary>
		<p>
			By adding <code>manifest.webmanifest</code> to <code>/static</code> and <code>service-worker.js</code> to
			<code>/src</code> you can fulfill the requirements for PWA
		</p>
	</summary>
	<p>
		<em>Note:</em> service-worker.js does not have acces to variables within the app like stores so creating reload
		prompts is not trivial, <a href="https://github.com/antfu/vite-plugin-pwa">vite-plugin-pwa</a> package will help with
		this and also setup resonable defaults
	</p>
	<p>
		I did not use that package because it was not really ready when I created this app, I also got the opportunity to
		get a better understanding for service workers by creating a naive implementation
	</p>
	<p>
		My naive implementation will update content when the user reloads the app and navigates to <code>/</code> if for some
		reason you manage to navigate to a page that does not exist
	</p>
</details>
