<template>
  <div class="hello">
    <el-input v-model="input" placeholder="Please input" />
    <el-switch v-model="value1" />
    <el-card class="box-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{ "List item " + o }}</div>
    </el-card>
    <el-button :plain="true" @click="open2">success</el-button>
    <div class="slider-demo-block">
      <span class="demonstration">Default value</span>
      <el-slider v-model="value2" />
    </div>
    <el-time-select
      v-model="value3"
      start="08:30"
      step="00:30"
      end="18:30"
      placeholder="Select time"
    />
    <el-calendar v-model="value4" />
    <div class="name-box" @click="getName">确认</div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { message } from "../utils/message";
onMounted(() => {
  console.log(input.value);
  console.log(value1.value);
  console.log(obj);
});
const open2 = () => {
  message("this is a message.");
};
const input = ref("2");
const value1 = ref(true);
const value2 = ref(0);
const value3 = ref("");
const value4 = ref(new Date());
const obj = reactive({
  name: "xiaofeng",
  age: 24,
});

const getName = () => {
  alert("小明");
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
.slider-demo-block .demonstration {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  line-height: 44px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
.slider-demo-block .demonstration + .el-slider {
  flex: 0 0 70%;
}
.name-box {
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background: #42b983;
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
