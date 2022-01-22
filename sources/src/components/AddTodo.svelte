<script>
    import { taskArr, colors } from "../stores.js";
    import { getDateStr } from "../func.js"
    import { flip } from "svelte/animate";
    import { scale } from "svelte/transition";

    import Input from './Input.svelte';

    let className = ''
    export { className as class }

    let defaultColor = '#0029FF'
    let lockColor = false

    const handleSubmit = (e) => {
        let newTask = {
            id: Date.now(),
            text: e.detail.value,
            color: defaultColor,
            done: false,
            date: getDateStr(new Date(), 'dot')
        }
        
        taskArr.update(n => n = [newTask, ...n])
    }

    const changeColor = (color) => color && (defaultColor = color)
</script>

<template lang="pug">
    .add-todo(class='{className}')
        .add-todo__color-list(class:isOpen="{lockColor}")
            span.add-todo__color.add-todo__color_main(style="{`color: ${defaultColor}`}" on:click|preventDefault!="{() => lockColor = !lockColor}")
            +each("$colors.filter(c => c.color != defaultColor) as c, i (c.id)")
                button.add-todo__color(style="{`color: ${c.color}; transition-delay: ${50 * i}ms`}" animate:flip transition:scale on:click|preventDefault="{changeColor(c.color)}")
        Input(placeholder='Что куда зачем' btn="{{text: 'ЖМИ'}}" on:color!="{() => lockColor = !lockColor}" on:submit='{handleSubmit}').add-todo__input
</template>

<!-- svelte-ignore css-unused-selector -->
<style lang="sass">
    // :global(.add-todo__input)
    .add-todo
        position: relative
        &__color
            $color: &
            flex: none
            padding-right: 4px
            width: 23px
            color: #000
            cursor: default
            transition: .3s ease-in-out
            transition-property: color, opacity, transform
            &:last-child
                width: 19px
                padding-right: 0
            &:not(&_main)
                pointer-events: none
                opacity: 0
                transform: translateX(-10px)
            &::before
                content: ''
                display: block
                width: 19px
                height: 19px
                color: inherit
                cursor: pointer
                background: currentColor
                border-radius: 50%
                transition: .3s ease-in-out
                transition-property: opacity, background-color
            &_main
                color: $blue
                &:hover
                    @media (min-width: $sm)
                        &::after
                            opacity: 1
                &::after
                    content: ''
                    display: block
                    width: 7px
                    height: 7px
                    border-radius: 50%
                    background: #fff
                    position: absolute
                    top: 50%
                    left: 6px
                    opacity: 0
                    pointer-events: none
                    transform: translateY(-50%)
                    transition: .3s ease-in-out
                    transition-property: opacity
            &-list
                display: flex
                align-items: center
                position: absolute
                top: -9px
                left: -8px
                width: 19px
                &:hover
                    @media (min-width: $sm)
                        width: 100%
                        #{$color}
                            pointer-events: auto
                            opacity: 1
                            transform: none
                &.isOpen
                    width: 100%
                    #{$color}
                        pointer-events: auto
                        opacity: 1
                        transform: none
                        &_main
                            &::before
                                opacity: .7
                            &::after
                                opacity: 1
</style>