<script>
</script>

<template lang="pug">
    header.header
        .container
            span.f-f-rubikMono.header__logo тудушка
</template>

<!-- svelte-ignore css-unused-selector -->
<style lang="sass">
    .header
        padding-top: 22px
        &__logo
            text-transform: uppercase
            font-size: 24px
            font-weight: 700
            position: relative
            cursor: pointer
            &:hover
                @media (min-width: $sm)
                    &::after
                        width: 100%
                        right: 0
            &::after
                content: ''
                width: 13px
                height: 13px
                display: block
                border-radius: 50%
                background-color: $blue
                position: absolute
                top: -2px
                right: -2px
                transition: .3s ease-in-out
                transition-property: width, right
            
</style>