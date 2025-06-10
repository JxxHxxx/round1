<template>
    <div>
        헤더 : {{ props.message }}
    </div>
</template>

<script setup>

const props = defineProps(['message']);

</script>
