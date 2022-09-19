<template lang="pug">
h3 Pre-processing of other languages
<p><em>Answers: </em>1, 2</p>
details
  summary
    p
      a(href="https://github.com/sveltejs/svelte-preprocess/blob/main/docs/preprocessing.md#preprocessing") Svelte can precompile other languages out of the box
  p 
  | Pug can be used by adding 
  code lang="pug"
  |  to the template tag
  p 
    em Note:
    |  Styling of the heading was done with stylus
h3 Configuring postcss
p
  | To add postcss you have to add the following to svelte.config.js 
  code preprocess: <br>preprocess&#40;&#123;<br>postcss: &#123; plugins: &#91;autoprefixer&#40;'&#62; 0.01%'&#41;&#93; &#125;<br>&#125&#41;
</template>

<style lang="stylus">
h3
  color red
  display grid
</style>
