<template>
    <div>
        <table>
            <thead>
                <tr>
                    <td v-if="$slots.checkAllBox && $slots.checkBox">
                        <slot name="checkAllBox"></slot>
                    </td>
                    <td v-for="(columnName, index) in columnNameList" :key="index">{{ columnName }}</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in props.data" :key="index" :onclick="() => onClick(item)">
                    <slot name="checkBox"></slot>
                    <td v-for="(key) in columnKeyList" :key="key">
                        {{ item[key] }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const props = defineProps({
    columns: Array,
    data: Array,
    onClick: Function
});

const columnNameList = props.columns.map(col => Object.values(col)[0]);
const columnKeyList = props.columns.map(col => Object.keys(col)[0]);


</script>
<style lang="scss" scoped></style>