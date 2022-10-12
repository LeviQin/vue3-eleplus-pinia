<template>
  <div class="dashboard">
    <DataTable :data="dataMap.tableData">
      <template #el-column>
        <el-table-column sortable prop="id" label="ID">
          <el-table-column prop="id">
            <template #header>
              <el-input
                v-model="idSearch"
                ref="idRef"
                placeholder=" Enter id to search "
              />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column sortable prop="time" label="Time">
          <el-table-column prop="time">
            <template #header>
              <el-input
                v-model="timeSearch"
                ref="timeRef"
                placeholder=" Enter time to search "
              />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column sortable prop="test" label="Test">
          <el-table-column prop="test">
            <template #header>
              <el-input
                v-model="timeSearch"
                ref="timeRef"
                placeholder=" Enter time to search "
              />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column sortable prop="name" label="Name" align="center">
          <el-table-column prop="name">
            <template #header>
              <el-input
                v-model="nameSearch"
                ref="nameRef"
                placeholder=" Enter name to search "
              />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column sortable prop="name" label="Name" align="center">
          <el-table-column prop="name">
            <template #header>
              <el-input
                v-model="nameSearch"
                ref="nameRef"
                placeholder=" Enter name to search "
              />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column sortable prop="name" label="Name" align="center">
          <el-table-column prop="name">
            <template #header>
              <el-input
                v-model="nameSearch"
                ref="nameRef"
                placeholder=" Enter name to search "
              />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column sortable prop="name" label="Name" align="center">
          <el-table-column prop="name">
            <template #header>
              <el-input
                v-model="nameSearch"
                ref="nameRef"
                placeholder=" Enter name to search "
              />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column sortable prop="name" label="Name" align="center">
          <el-table-column prop="name">
            <template #header>
              <el-input
                v-model="nameSearch"
                ref="nameRef"
                placeholder=" Enter name to search "
              />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column sortable prop="name" label="Name" align="center">
          <el-table-column prop="name">
            <template #header>
              <el-input
                v-model="nameSearch"
                ref="nameRef"
                placeholder=" Enter name to search "
              />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column sortable prop="name" label="Name" align="center">
          <el-table-column prop="name">
            <template #header>
              <el-input
                v-model="nameSearch"
                ref="nameRef"
                placeholder=" Enter name to search "
              />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column sortable prop="name" label="Name" align="center">
          <el-table-column prop="name">
            <template #header>
              <el-input
                v-model="nameSearch"
                ref="nameRef"
                placeholder=" Enter name to search "
              />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column sortable prop="name" label="Name" align="center">
          <el-table-column prop="name">
            <template #header>
              <el-input
                v-model="nameSearch"
                ref="nameRef"
                placeholder=" Enter name to search "
              />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column sortable prop="name" label="Name" align="center">
          <el-table-column prop="name">
            <template #header>
              <el-input
                v-model="nameSearch"
                ref="nameRef"
                placeholder=" Enter name to search "
              />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column sortable prop="name" label="Name" align="center">
          <el-table-column prop="name">
            <template #header>
              <el-input
                v-model="nameSearch"
                ref="nameRef"
                placeholder=" Enter name to search "
              />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column sortable prop="name" label="Name" align="center">
          <el-table-column prop="name">
            <template #header>
              <el-input
                v-model="nameSearch"
                ref="nameRef"
                placeholder=" Enter name to search "
              />
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column sortable prop="name" label="Name" align="center">
          <el-table-column prop="name">
            <template #header>
              <el-input
                v-model="nameSearch"
                ref="nameRef"
                placeholder=" Enter name to search "
              />
            </template>
          </el-table-column>
        </el-table-column>
      </template>
      <template #pagination>
        <el-pagination
          :page-sizes="dataMap.paginationDatas.pageSizes"
          :small="dataMap.paginationDatas.small"
          :disabled="dataMap.paginationDatas.disabled"
          :background="dataMap.paginationDatas.background"
          :layout="dataMap.paginationDatas.layout"
          :total="dataMap.paginationDatas.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </template>
    </DataTable>
  </div>
</template>

<script setup>
import DataTable from "@/components/DataTable/DataTable";
import { onMounted, reactive, ref, watch } from "vue";

onMounted(() => {
  getServiceData();
});

const dataMap = reactive({
  tableData: [],
  paginationDatas: {
    pageSizes: [10, 15, 20, 100, 300, 500],
    small: false,
    disabled: false,
    total: 0,
    layout: "total, sizes, prev, pager, next, jumper",
    background: true,
  },
});

let data = [];
let timer = null;
let page = ref(1);
let idSearch = ref("");
let timeSearch = ref("");
let nameSearch = ref("");
let searchText = ref("");
let searchType = ref("");
let pageSize = ref(10);

const getServiceData = () => {
  for (let i = 0; i < 1000000; i++) {
    data.push({
      id: i,
      name: `levi${i}`,
      time: new Date().getTime() + i,
      test:
        "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
    });
  }
  dataMap.paginationDatas.total = data.length;
  getTableData();
};
const getTableData = () => {
  dataMap.tableData = [];
  let firstIndex = pageSize.value * page.value - pageSize.value; // 开始查找的数据下标
  dataMap.tableData = data.slice(firstIndex, pageSize.value + firstIndex); // 截取分页数据
};
const getSearch = () => {
  // 过滤搜索数据
  const fliterData = data.filter((item) => {
    return item[searchType].toString().includes(searchText);
  });
  dataMap.paginationDatas.total = fliterData.length;
  let firstIndex = pageSize.value * page.value - pageSize.value; // 开始查找的数据下标
  dataMap.tableData = fliterData.slice(firstIndex, pageSize.value + firstIndex); // 截取分页数据
};

const handleSizeChange = (val) => {
  pageSize.value = val;
  getTableData();
};
const handleCurrentChange = (val) => {
  page.value = val;
  getTableData();
};
watch(idSearch, (newVal) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("searching...");
    searchText = newVal;
    searchType = "id";
    getSearch();
  }, 500);
});
watch(timeSearch, (newVal) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("searching...");
    searchText = newVal;
    searchType = "time";
    getSearch();
  }, 500);
});
watch(nameSearch, (newVal) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("searching...");
    searchText = newVal;
    searchType = "name";
    getSearch();
  }, 500);
});
</script>

<style lang="scss" scoped></style>
