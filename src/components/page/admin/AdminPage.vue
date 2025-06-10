<script setup>
import { provide, ref } from 'vue';
import AdminParent from './AdminParent.vue';
import SimpleHeader from './SimpleHeader.vue';
import SimpleFooter from './SimpleFooter.vue';

const message = ref('안녕 난 JxxHxxx');
const headerValue = ref('난 헤더야');
const footerValue = ref('난 푸터터야');

function updateMessage(updateMessage) {
    message.value = updateMessage;
}

provide('message', {message, updateMessage})
    
</script>

<template>
    <div>
        <AdminParent>
            <template #header>
                <SimpleHeader :message="headerValue"></SimpleHeader>
            </template>
            <template #footer>
                <SimpleFooter :message="footerValue"></SimpleFooter>
            </template>
        </AdminParent>
    </div>
</template>

