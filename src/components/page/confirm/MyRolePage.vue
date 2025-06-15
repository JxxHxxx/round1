<script setup>
import ListV1 from '@/components/feature/ListV1.vue';
import TableV1 from '@/components/feature/TableV1.vue';
import { reactive, ref } from 'vue';

const role = reactive({
    myList: [{
        systemName: '그룹웨어',
        ownerName: '김땡땡',
        roleName: '읽기'
    },
    {
        systemName: '서버접근제어',
        ownerName: '김땡땡',
        roleName: '기본'
    },
    {
        systemName: '이클릭',
        ownerName: '이땡땡',
        roleName: '읽기'
    }]
});
// 담은 역할을 관리하는 상태
const roleCart = reactive({
    addList: []
})

function handleOnclickTableElement(item) {
    console.log('onClick Talbe Element:', item.systemName);
    if (roleCart.addList.includes(item)) {
        console.log('already added item:', item.systemName);
    }
    else {
        roleCart.addList.push(item);
    }
}

const checkedAll = ref(false);

// 전체 체크박스 선택
function handleOnClickAllCheckBox() {

    const existingSystemNames = new Set(roleCart.addList.map(item => item.systemName));
    const newItems = role.myList.filter(item => !existingSystemNames.has(item.systemName));
    roleCart.addList.push(...newItems);
    // 체크박스 표시 여부 
    checkedAll.value = checkedAll.value ? false : true;
}

</script>

<template>
    <div>
        <h1>테이블 컴포넌트 설계</h1>
        <p>개발자 도구를 통해 TableV1 컴포넌트 상태를 확인하세요.</p>
    </div>
    <div style="display: flex; justify-items: flex-start; gap: 10px;">
        <div class="defaultBorderBox defaultInnerSpace tableContainer">
            <div>
                <h1>권한 리스트</h1>
            </div>
            <TableV1 :data="role.myList" :columns="[{ 'systemName': '시스템명' }, { 'roleName': '권한 명' }]"
                :onClick="(item) => handleOnclickTableElement(item)">
                <template #checkAllBox>
                    <input type="checkbox" :onclick="handleOnClickAllCheckBox" />
                </template>
                <template #checkBox>
                    <input type="checkbox" :checked="checkedAll" />
                </template>
            </TableV1>
        </div>
        <div class="defaultBorderBox defaultInnerSpace listContainer">
            <div>
                <h1>담은 권한</h1>
            </div>
            <ListV1 :items="roleCart.addList" :keys="['systemName', 'roleName']" />
        </div>
    </div>
</template>
