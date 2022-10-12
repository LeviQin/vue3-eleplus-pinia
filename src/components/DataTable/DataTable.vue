<template>
  <el-table :data="props.data">
    <slot name="el-column"></slot>
  </el-table>
  <div class="pagination-card">
    <slot name="pagination"></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  data: Array,
});
</script>

<style lang="scss" scoped>
.pagination-card {
  margin: 20px 0 40px 0;
}
</style>
