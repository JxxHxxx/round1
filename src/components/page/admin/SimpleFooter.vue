<template>
    <div>
        푸터 : {{ props.message }}
    </div>
</template>

<script setup>

const props = defineProps(['message']);

</script>
