<script setup>
const props = defineProps(['name', 'keyupEnter']);
</script>
<template>
    {{ props.name }}<input @keyup.enter="props.keyupEnter" />
</template>
