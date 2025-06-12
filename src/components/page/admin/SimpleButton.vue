<script setup>
const props = defineProps(['name', 'onClick']);
</script>
<template>
    <button @click="onClick">{{ props.name }}</button>
</template>
