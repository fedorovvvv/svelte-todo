<svelte:options immutable={true}/>

<script context="module">
	import { getStyle } from './../func.js';
	let taskFunc = new Set()
    function closeAllEdit() {
		taskFunc.forEach(task => {
            task.edit(false)
        })
	}
</script>

<script>
    import { taskArr, colors } from "../stores.js";
    // import {autoResizeTextarea} from "../func.js"
    import { onMount } from "svelte";

    let className = ''
    export { className as class }

    export let text = ''
    export let color = '#0029FF'
    export let disabled = false
    export let id = null
    export let date = ''

    let oldText = text

    let isInfoOpen = false
    let infoContainer
    let isEdit = false
    let сhanged = false
    let isSave = false
    let textareaLoad = false

    let textareaEl

    let saveTimeout
    let inputTimeout

    const handleClick = () => {
        if (isEdit === false) {
            let newArr = $taskArr.map(task => {
                id === task.id && (task.done = !task.done)
                return task
            })
            taskArr.set(newArr)
        }
    }
    
    const del = () => {
        let newArr = $taskArr.filter(task => task.id != id)
        taskArr.set(newArr)
    }

    function edit(state) {
        isEdit = state ?? !isEdit
        isEdit === false && save()
        // toggleOpen(true)
    }

    
    const changeColor = (color) => {
        let newArr = $taskArr.map(task => {
            id === task.id && (task.color = color)
            return task
        })
        taskArr.set(newArr)
    }
    
    function toggleOpen(state) {
        isInfoOpen = state ?? !isInfoOpen
        let height = 0
        
        infoContainer.childNodes.forEach(child => height += child.clientHeight)
        
        infoContainer.style.setProperty('--taskInfoHeight', `${isInfoOpen ? height : 0}px`)
    }

    function save() {
        if (сhanged) {
            let val = text
            let promise = updateTextTask(val)
            promise.then(() => {
                сhanged = false
                console.log(text.split('\n'))
                console.log(text.split('\n').join('</br>'))
                clearTimeout(saveTimeout)
                isSave = true
                saveTimeout = setTimeout(() => {isSave = false}, 500)
            })
        }
    }
    
    function updateTextTask(val) {
        if (typeof val === 'string') {
            return new Promise((resolve) => {
                saveOldText()
                taskArr.set($taskArr.map((task) => {
                    task.id === id && (task.text = val)
                    return task
                }))
                resolve()
            })
        } else {
            throw new Error('The value is not equal to the string')
        }
    }
    
    function handleContentKeydown(event) {
        let ctrl = event.ctrlKey ? false : event.metaKey
        let code = event.keyCode
        
        if (ctrl && code === 83) {
            event.preventDefault()
            save()
            return false
        }

        clearTimeout(inputTimeout)

        inputTimeout = setTimeout(() => save(), 5000)
    }
    
    function checkChanged(val = text) {
        return сhanged = !(val === oldText)
    }

    function autoResizeTextarea() {
        textareaEl.rows = 1
        const paddingTopBottom = parseFloat(getStyle(textareaEl, 'padding-top')) + parseFloat(getStyle(textareaEl, 'padding-bottom'))
        const height = textareaEl.scrollHeight - paddingTopBottom
        let lineHeight = parseFloat(getStyle(textareaEl, 'line-height'))

        lineHeight === 'normal' && (lineHeight = parseFloat(getStyle(textareaEl, 'font-size')))
        textareaEl.rows = height / lineHeight
        saveOldText()
    }

    function saveOldText() {
        oldText = text
    }

    function getHTMLtext(val) {
        return val.split('\n').join('<br/>')
    }

    onMount(() => {
        autoResizeTextarea()
        textareaLoad = true
    })

    taskFunc.add({
        save() {
            save()
        },
        edit(state) {
            edit(state)
        }
    })
</script>

<template lang="pug">
    article.task(class='{className}' class:isDisabled="{disabled}" class:isInfoOpen class:isEdit)
        .task__main(
            on:click="{handleClick}"
            class:isEdit
        )
            .task__main-container
                .task__main-content-wrapper
                    p.task__main-content.addTransition(
                        class:isEdit
                    ) {@html getHTMLtext(oldText)}
                    textarea.task__main-content(
                        bind:this="{textareaEl}"
                        bind:value="{text}"
                        class:addTransition!="{textareaLoad}"
                        on:input!="{() => {checkChanged(); autoResizeTextarea();}}"
                        on:keydown!="{(e) => {handleContentKeydown(e);}}"
                        disabled="{!isEdit}"
                    )
            .task__info(bind:this="{infoContainer}")
                .task__info-content
                    span {date}

        .task__circle.task__menu(
            class:isOpen="{isEdit}"
        )
            button(on:click|preventDefault="{del}").task__menu-btn.task__menu-btn_del
                span.svg-image-del
            button.task__menu-btn.task__menu-btn_edit(
                on:click|preventDefault!="{() => {isEdit === false && closeAllEdit(); edit()}}"
                class:isSelect="{isEdit}"
                class:isChanged="{сhanged}"
                class:isSave
            )
                span.svg-image-pen
        ul.task__circle.task__circle_visible.task__circle_r-t.task__color(
            style="{`background-color: ${color}`}"
            class:isOpen="{isEdit}"
        )
            +each("$colors.filter(c => c.color != color) as c (c.id)")
                li.task__color-item
                    button.task__color-btn(style="{`background-color: ${c.color}`}" on:click|preventDefault="{changeColor(c.color)}")
        button.task__info-open(
            on:click|preventDefault!="{() => toggleOpen()}"
            class:isHidden="{isEdit}"
        )
            span
</template>

<!-- svelte-ignore css-unused-selector -->
<style lang="sass">
    .task
        $task: &
        width: 100%
        position: relative
        transition: .3s ease-in-out
        transition-property: margin, opacity
        &:hover
            @media (min-width: $sm)
                #{$task}
                    &__circle
                        opacity: 1
                    &__info
                        &-open
                            opacity: 1
                            pointer-events: auto
        &.isEdit
            margin-top: 50px
            margin-bottom: 50px
        &.isDisabled
            opacity: .5
            &:hover
                @media (min-width: $sm)
                    opacity: 1
        &:not(.isDisabled)
            #{$task}
                &__main
                    &:hover
                        @media (min-width: $sm)
                            box-shadow: 0px 10px 30px -5px rgba(140, 140, 140, 0.4)
        &.isInfoOpen
            #{$task}
                &__info
                    border-color: #D6D6D6
                    &-open
                        &::before
                            top: 50%
                            transform: translateY(-50%)
                        &::after
                            bottom: 50%
                            transform: translateY(50%)
        &__main
            background: #FFFFFF
            box-shadow: 0px 4px 20px rgba(140, 140, 140, 0.25)
            border-radius: 6px
            cursor: pointer
            transition: .3s ease-in-out
            transition-property: background-color, box-shadow, color
            &.isEdit
                cursor: default
            &-container
                padding: 13px 55px 13px 18px
            &-content
                display: block
                overflow: hidden
                font-weight: 500
                font-size: 14px
                line-height: 17px
                color: #3D3D3D
                background: none
                border: none
                width: 100%
                resize: none
                transition: none
                &.addTransition
                    transition: .3s ease-in-out
                    transition-property: background-color, border, border-radius, padding, color, opacity
                &::before
                    display: inline-block
                    content: 's'
                    width: 0
                    overflow: hidden
                    pointer-events: none
                    opacity: 0
                @at-root p#{&}
                    &.isEdit
                        opacity: 0
                        pointer-events: none
                        padding: 10px 15px
                @at-root textarea#{&}
                    opacity: 0
                    position: absolute
                    top: 4px
                    left: 0
                    &:not([disabled])
                        opacity: 1
                        background: #F5F5F5
                        padding: 10px 15px
                        border-radius: 5px
                        color: #686868
                        cursor: text
                        &:hover
                            @media (min-width: $sm)
                                color: #3D3D3D
                        &:focus
                            background: #EFEFEF
                            color: #3D3D3D
                &-wrapper
                    position: relative
        &__color
            $color: &
            position: relative
            overflow: visible
            &:hover, &.isOpen
                &::after
                    pointer-events: auto
                #{$color}
                    &-item
                        width: 50px
                        opacity: 1
                        pointer-events: auto
            &::after
                content: ''
                display: block
                width: 85px
                height: 85px
                border-radius: 50%
                position: absolute
                z-index: 1
                left: 50%
                top: 50%
                transform: translate(-50%, -50%)
                pointer-events: none
            &-item
                position: absolute
                z-index: 2
                left: 0
                bottom: 0
                flex: none
                display: block
                width: 19px
                height: 100%
                display: flex
                justify-content: flex-end
                transform-origin: calc(0% + 10px) center
                transform: rotate(-90deg)
                opacity: 0
                pointer-events: none
                transition: .3s ease-in-out
                transition-property: opacity, width
                $n: 0
                @while $n + 2 < 11
                    $deg: -135 + $n * 45
                    &:nth-child(#{$n})
                        transform: rotate(#{$deg}deg)
                        transition-delay: 50ms * $n
                    $n: $n + 1
            &-btn
                cursor: pointer
                display: block
                flex: none
                height: 19px
                width: 19px
                border-radius: 50%
                position: relative
                z-index: 3
                background: red
                transition: .3s ease-in-out
                transition-property: transform, opacity
                &:hover
                    @media (min-width: $sm)
                        opacity: .7
                        transform: translateX(3px)
        &__circle
            display: flex
            width: 19px
            height: 19px
            border-radius: 30px
            position: absolute
            background-color: #000
            z-index: 2
            top: 9px
            transform: translateY(-100%)
            left: -8px
            opacity: 0
            box-shadow: 0px 2px 4px rgba(132, 132, 132, 0.25)
            transition: .3s ease-in-out
            transition-property: opacity, width, height, background-color, transform
            &_visible
                opacity: 1
            &_r-t
                left: auto
                right: -8px
        &__menu
            $menu: &
            overflow: hidden
            position: absolute
            display: flex
            align-items: center
            &::after
                content: ''
                display: block
                position: absolute
                top: 50%
                transform: translateY(-50%)
                left: 5px
                width: 9px
                pointer-events: none
                height: 4px
                background: no-repeat center center 100% auto
                background-image: url("data:image/svg+xml,%3Csvg width='9' height='4' viewBox='0 0 9 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='9' height='1' rx='0.5' fill='white'/%3E%3Crect y='3' width='9' height='1' rx='0.5' fill='white'/%3E%3C/svg%3E%0A")
                transition: opacity .3s ease-in-out
            &:hover, &.isOpen
                width: 60px
                &::after
                    opacity: 0
                #{$menu}
                    &-btn
                        opacity: 1
            &.isOpen
                opacity: 1
                transform: translate(5px, -25px)
            &-btn
                display: block
                cursor: pointer
                position: relative
                flex: none
                width: 19px
                height: 19px
                border-radius: 50%
                display: flex
                align-items: center
                justify-content: center
                opacity: 0
                transition: .3s ease-in-out
                transition-property: background-color, opacity
                &:first-child
                    border-top-left-radius: 0
                    border-bottom-left-radius: 0
                &:hover, &.isSelect
                    @media (min-width: $sm)
                        background-color: #ffffff50
                &_del
                    &:hover, &.isSelect
                        @media (min-width: $sm)
                            background-color: $red
                &_edit
                    &:hover, &.isSelect
                        @media (min-width: $sm)
                            background-color: $orange
                    &.isSelect
                        background-color: $orange
                        &:hover
                            @media (min-width: $sm)
                                background-color: $orangeHover
                    &.isSave
                        background-color: $greenDark!important
                        span
                            transform: translate(1px, -1px) rotate(-35deg)

                    &.isChanged
                        background-color: $red
                span
                    display: block
                    width: 80%
                    pointer-events: none
                    transition: .25s ease-in-out
                    transition-property: transform
        &__info
            max-height: var(--taskInfoHeight, 0px)
            overflow: hidden
            border-top: 1px solid #D6D6D600
            transition: .3s ease-in-out
            transition-property: border-color, max-height
            &-content
                padding: 8px 13px
                display: flex
                align-items: center
                span
                    font-weight: 400
                    font-size: 10px
                    color: #8E8E8E
            &-open
                opacity: 0
                pointer-events: non
                display: block
                width: 14px
                height: 10px
                position: absolute
                z-index: 2
                right: 8px
                bottom: 8px
                transition: opacity .3s ease-in-out
                &:hover
                    @media (min-width: $sm)
                        &::before, span, &::after
                            background-color: $blue
                &::before, &::after
                    content: ''
                &::before, span, &::after
                    display: block
                    width: 100%
                    height: 2px
                    border-radius: 10px
                    position: absolute
                    left: 0
                    background-color: #D6D6D6
                    transition: .3s ease-in-out
                    transition-property: background-color, opacity, transform, top, bottom
                &::before
                    top: 0
                span
                    top: 50%
                    transform: translateY(-50%)
                &::after
                    bottom: 0
                // &.isHidden
                //     opacity: 0!important
                //     pointer-events: none
                //     cursor: default
</style>