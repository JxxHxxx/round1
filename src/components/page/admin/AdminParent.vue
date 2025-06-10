<template>
    <div>
        <h1>부모입니다</h1>
        <AdminChild @update-message="emitHandle"/>
    </div>
</template>

<script setup>
import AdminChild from './AdminChild.vue';

const emitHandle = (message) => {
    message.value = '123'
}

</script>
