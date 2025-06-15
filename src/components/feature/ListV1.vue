<template>
    <ul v-for="(item, index) in props.items" :key="index">
        <li v-for="(key) in props.keys" :key="key">
            {{ item[key] }}
        </li>
    </ul>
</template>

<script setup>

const props = defineProps({
    // items 요소들은 key, value 형태의 객체여야 합니다.
    items: {
        type: Array,
        required: true,
    },
    // keys 요소들은 문자열이며 items 요소의 key 값 중 하나여야 합니다.
    keys: {
        type: Array,
        required: true
    }
})

</script>
