<template>
    <button class="bg-green-600 bg-opacity-100 rounded-lg text-white p-2" :class="className">
    <slot />
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: ['className']

}
</script>

<style>

</style>