<template>
  <VueHeader></VueHeader>
  <div class="content">
    <div class="menu-card">
      <VueMenu></VueMenu>
    </div>
    <div class="main-card">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import VueHeader from "./header/VueHeader.vue";
import VueMenu from "./menu/VueMenu.vue";
import { ref } from "vue";
</script>

<style lang="scss" scoped>
.content {
  display: flex;
}
.menu-card {
  width: 200px;
}
.main-card {
  flex: 1;
  overflow: auto;
  height: calc(100vh - 60px);
}
</style>
