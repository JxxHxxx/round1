<script setup>
import { provide, reactive, ref } from "vue";
import AdminParent from "./AdminParent.vue";
import SimpleHeader from "./SimpleHeader.vue";
import SimpleFooter from "./SimpleFooter.vue";
import SimpleButton from "./SimpleButton.vue";
import SimpleInput from "./SimpleInput.vue";


const headerValue = ref("난 헤더야");

const footer = reactive({
  'message': '기본 메시지',
  'toggle': true
})

// provide 테스트를 위한 로직 start
// const message = ref("안녕 난 JxxHxxx");
// function updateMessage(updateMessage) {
//   message.value = updateMessage;
// }

// provide("message", { message, updateMessage });
// provide 테스트를 위한 로직 end

function updateFooterMessage(message) {
  footer.message = message;
}

function updateHeaderMessage(message) {
  headerValue.value = message;
}

const handleFooterToggleButton = () => {
  footer.toggle ? footer.toggle = false : footer.toggle = true;

  updateFooterMessage(footer.message === '푸터 메시지를 변경!' ? '난 푸터터야' : '푸터 메시지를 변경!');
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
          <SimpleButton :className="footer.toggle ? 'toggleOn' : 'toggleOff'" name="푸터 토글 버튼"
            :onClick="handleFooterToggleButton" />
          <SimpleFooter :message="footer.message" />
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

.toggleOn {
  background-color: plum;
}

.toggleOff {
  background-color: skyblue;
}
</style>
