<template>
    <div>
        <h3>자식입니다</h3>
        {{ message }}
        <button v-on:click="handleOnClickUpdateMessage">업데이트 버튼!</button>
        <button v-on:click="handleOnClikcUpdateMessageEvent">업데이트 버튼! emit 버전전</button>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const {message, updateMessage} = inject('message');

const handleOnClickUpdateMessage = () => {
    updateMessage('짜잔 업데이트 합니다!')
}

const emit = defineEmits('update-message');

const handleOnClikcUpdateMessageEvent = () => {
    emit('update-message', message);
}

</script>
