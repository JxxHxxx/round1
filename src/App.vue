<template>
  <AppHeader />
  <AppMain />
</template>

<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/layout/AppHeader.vue';
import './assets/css/index.css';
import './assets/css/tag.css';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<style>
  
</style>
