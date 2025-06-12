<script setup>
import { provide, ref } from "vue";
import AdminParent from "./AdminParent.vue";
import SimpleHeader from "./SimpleHeader.vue";
import SimpleFooter from "./SimpleFooter.vue";
import SimpleButton from "./SimpleButton.vue";
import SimpleInput from "./SimpleInput.vue";


const message = ref("안녕 난 JxxHxxx");
const headerValue = ref("난 헤더야");
const footerValue = ref("난 푸터터야");

// provide 테스트를 위한 로직 start
function updateMessage(updateMessage) {
  message.value = updateMessage;
}

provide("message", { message, updateMessage });
// provide 테스트를 위한 로직 end

function updateFooterMessage(message) {
  footerValue.value = message;
}

function updateHeaderMessage(message) {
  headerValue.value = message;
}

const handleFooterToggleButton = () => {
  updateFooterMessage(footerValue.value === '푸터 메시지를 변경!' ? '난 푸터터야' : '푸터 메시지를 변경!')
}

</script>

<template>
  <div>
    <AdminParent>
      <template #header>
        <div class="header-row">
          <div class="header-input">
            <SimpleInput name="헤더 값을 입력해주세요 : " :keyupEnter="(event) => updateHeaderMessage(event.target.value)" />
          </div>
          <SimpleHeader :message="headerValue" />
        </div>
      </template>
      <template #footer>
        <div class="footer-row">
          <SimpleButton name="푸터 토글 버튼" :onClick="handleFooterToggleButton" />
          <SimpleFooter :message="footerValue" />
        </div>
      </template>
    </AdminParent>
  </div>
</template>

<style scoped>
.header-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-input input {
  padding: 4px 8px;
  font-size: 14px;
}

.footer-row {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
