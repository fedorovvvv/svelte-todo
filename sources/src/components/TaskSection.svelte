<script>
  import { taskArr } from "../stores.js";
  import Task from "./Task.svelte";
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";

  let className = "";
  export { className as class };

  const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
      };
    },
  });
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<template lang="pug">
    section.task-section(class='{className}')
        .container.task-section__grid
            ul.task-section__col
                +each("$taskArr.filter(d => !d.done) as task (task.id)")
                    li(in:receive="{{key: task.id}}" out:send="{{key: task.id}}" animate:flip="{{duration: 300}}").task-section__item-box
                        Task(
                          text="{task.text}"
                          color="{task.color ? task.color : null}"
                          id="{task.id}"
                          date="{task.date}"
                          class="task-section__item"
                        )
            ul.task-section__col
                +each("$taskArr.filter(d => d.done) as task (task.id)")
                    li(in:receive="{{key: task.id}}" out:send="{{key: task.id}}" animate:flip="{{duration: 300}}").task-section__item-box
                        Task(
                          text="{task.text}"
                          color="{task.color ? task.color : null}"
                          id="{task.id}"
                          disabled=true date="{task.date}"
                          class="task-section__item"
                        )
</template>

<!-- svelte-ignore css-unused-selector -->
<style lang="sass">
    .task-section
        &__grid
            display: grid
            grid-template-columns: 1fr 1fr
            column-gap: 50px
        &__item
          &-box
            margin-bottom: 19px
            &:last-child
                margin-bottom: 0
                :global(.task-section__item)
                  margin-bottom: 0
            &:first-child
                :global(.task-section__item)
                  margin-top: 0
</style>
