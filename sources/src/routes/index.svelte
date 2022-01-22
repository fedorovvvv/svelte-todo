<script>
  import TaskSection from "../components/TaskSection.svelte";
  import AddTodo from "../components/AddTodo.svelte";

  let className = '';
  export { className as class };
</script>

<svelte:head>
  <title>ТуДу</title>
</svelte:head>

<template lang="pug">
    section(class="{className}").mt-50
        .container
            AddTodo
    TaskSection.mt-50
</template>

<!-- svelte-ignore css-unused-selector -->
<style lang="sass">

</style>
