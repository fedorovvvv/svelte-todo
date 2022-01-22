<script>
  import { createEventDispatcher } from 'svelte'
  
  let className = '';
  export { className as class };

  export let placeholder = "Placeholer";
  export let btn = null;

  let container
  let value
  let isError = false
  let input

  const dispatch = createEventDispatcher()

  const submit = () => {
    if (value) {
        dispatch('submit', {
            value: value
        })
        value = ''
    } else {
        isError = true
    }
  };

  const handleInput = () => {
    isError = false
  }

  const handleKeydownInput = (event) => {
    let key = event.key
    let ctrl = event.ctrlKey
    let shift = event.shiftKey
    let code = event.keyCode

    if (ctrl && shift) dispatch('color')
    key === 'Enter' && submit()
  }
  
</script>
<!-- svelte-ignore a11y-invalid-attribute -->
<template lang="pug">
    .input-group(bind:this='{container}' class='{className}' class=`{btn ? 'input-group_btn' : ''}` class:isError)
        input({placeholder} bind:value on:input="{handleInput}" on:keydown="{handleKeydownInput}")
        +if('btn')
            button(on:click|preventDefault="{submit}").btn
                +if('btn.text')
                    | {btn.text}
</template>

<!-- svelte-ignore css-unused-selector -->
<style lang="sass">
    .input-group
        display: flex
        align-items: stretch
        width: 100%
        border: 2px solid #000
        border-radius: 8px
        width: 100%
        height: 44px
        transition: border-color .3s ease-in-out
        &:hover
            @media (min-width: $sm)
                border-color: $blue
        &.isError
            border-color: $red
    input
        display: block
        flex: 1
        height: 100%
        padding: 0 18px
        font-weight: 500
        font-size: 14px
        color: #000
        &::placeholder
            color: #ACACAC
    button
        padding: 0 35px
        flex: none
        height: 100%
        margin: 4px
        margin-left: 0
        text-transform: lowercase
</style>
