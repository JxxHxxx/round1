<script setup>
const props = defineProps(['name', 'onClick', 'className']);
</script>
<template>
    <button :class="props.className" @click="onClick">{{ props.name }}</button>
</template>
