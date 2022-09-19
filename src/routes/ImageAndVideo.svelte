<script>
	// @ts-nocheck
	import srcsetAvif from '$lib/assets/images/tony-litvyak-SNTMtVQjDt4-unsplash.jpg?w=500;700;900;1200&avif&srcset'
	import srcsetWebp from '$lib/assets/images/tony-litvyak-SNTMtVQjDt4-unsplash.jpg?w=500;700;900;1200&webp&srcset'
	import { src, width, height } from '$lib/assets/images/tony-litvyak-SNTMtVQjDt4-unsplash.jpg?width=300&metadata'
</script>

<h3>How to setup automatic conversion of images to scrset sizes and .avif / .webp formats?</h3>
<p><em>Answers: </em> 3</p>
<details>
	<summary>
		<a href="https://github.com/JonasKruckenberg/imagetools">Vite imagetool</a> can be used to create srcset compatilble
		images
	</summary>
	<picture>
		<source type="image/avif" srcset={srcsetAvif} />
		<source type="image/webp" srcset={srcsetWebp} />
		<img alt="Macro shot of leaves on a fir tree" {src} {height} {width} />
	</picture>
</details>

<h3>How to setup automatic conversion of videos to 720, 480, 360 sizes and .avif / .webm formats?</h3>
<p><em>Answers: </em> 4</p>
<p>
	Could not find a lot of information about this, what I found was ffmpeg and there are a few javascript implementations
	of it, which means that I have to build a vite plugin for that which I'm not ready for currently
</p>

<style lang="sugarss">
	picture
		display: flex
		place-content: center
</style>
