<template>
    <div>
        <AdminParent></AdminParent>
    </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import AdminParent from './AdminParent.vue';

const message = ref('안녕 난 JxxHxxx');

function updateMessage(updateMessage) {
    message.value = updateMessage;
}


provide('message', {message, updateMessage})
    
</script>
