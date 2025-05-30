<template>
    <div>
        <h1>{{ word }}</h1>
        <!-- <p> {{ user }}</p> -->
    </div>
    <div>
        <!-- <div>
            <RouterLink to="/approval">Home</RouterLink>
        </div>
        <div>
            <RouterLink to="/HelloWorld">HelloWorld</RouterLink>
        </div>
        <RouterView /> -->
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const word = ref('Hello World!!');

const user = reactive({'id' : '1' , 'username' : 'JH'})

</script>
<style lang="">
    
</style>