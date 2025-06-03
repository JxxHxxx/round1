<template>
    <div>
        <table>
            <thead>
                <tr>
                    <td  v-for="(item, index) in data.columns" :key="index">{{ item }}</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data.tableData" :key="index">
                   <td>{{ item.systemName }}</td>
                   <td>{{ item.ownerName }}</td>
                   <td>{{ item.roleName }}</td>
                   <td>{{ item.startDate }}</td>
                   <td>{{ item.endDate }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
  const data = defineProps({
    columns : {
        type : Array
    },
    tableData : {
        type : Array
    }
  });

</script>
<style lang="scss" scoped></style>