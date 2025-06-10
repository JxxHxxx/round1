

<script setup>
import AdminChild from './AdminChild.vue';

const emitHandle = (message) => {
    message.value = '123'
}

</script>
<template>
    <div>
        <h1>부모입니다</h1>
        <slot name="header"></slot>
        <slot name="footer"></slot>
        <AdminChild @update-message="emitHandle"/>
    </div>
</template>
