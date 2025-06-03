<template>
    <div>
        <h1>결재함입니다</h1>
    </div>
    <div>
        <TableV1 :tableData="myRoleList" :columns="columns"></TableV1>
        </div>
</template>

<script setup>
import TableV1 from '@/components/feature/TableV1.vue';
import { reactive, ref } from 'vue';


const myRoleList = reactive([{
    systemName: '그룹웨어',
    ownerName: '김땡땡',
    roleName: '읽기',
    startDate: '2025-06-03',
    endDate: '2026-06-02'
},
{
    systemName: '서버접근제어',
    ownerName: '김땡땡',
    roleName: '기본',
    startDate: '2025-06-03',
    endDate: '2026-06-02'
}]);

const columns = ref(['시스템명', '권한 보유자', '권한 명', '시작일자', '종료일자'])


</script>

<style lang="scss" scoped></style>