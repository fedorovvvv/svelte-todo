<script>
	import Header from '../components/Header.svelte';
    import '../styles/app.sass';

    let className = "";
    export { className as class };
</script>

<Header/>

<main class="{className}">
    <slot/>
</main>

<template lang="pug">
</template>
<!-- svelte-ignore css-unused-selector -->
<style lang="sass">
</style>
