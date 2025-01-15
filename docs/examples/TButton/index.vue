<template>
  <el-row class="mb-4">
    <t-button @doBtn="submit">Default</t-button>
    <t-button @doBtn="submit" type="primary">Primary</t-button>
    <t-button @doBtn="submit" type="success">Success</t-button>
    <t-button @doBtn="submit" type="info">Info</t-button>
    <t-button @doBtn="submit" type="warning">Warning</t-button>
    <t-button @doBtn="submit" type="danger">Danger</t-button>
  </el-row>

  <el-row class="mb-4">
    <t-button plain>Plain</t-button>
    <t-button type="primary" plain>Primary</t-button>
    <t-button type="success" plain>Success</t-button>
    <t-button type="info" plain>Info</t-button>
    <t-button type="warning" plain>Warning</t-button>
    <t-button type="danger" plain>Danger</t-button>
  </el-row>

  <el-row class="mb-4">
    <t-button round>Round</t-button>
    <t-button type="primary" round>Primary</t-button>
    <t-button type="success" round>Success</t-button>
    <t-button type="info" round>Info</t-button>
    <t-button type="warning" round>Warning</t-button>
    <t-button type="danger" round>Danger</t-button>
  </el-row>

  <el-row>
    <t-button icon="Search" circle/>
    <t-button type="primary" icon="Edit" circle />
    <t-button type="success" icon="Check" circle />
    <t-button type="info" icon="Message" circle />
    <t-button type="warning" icon="Star" circle />
    <t-button type="danger" icon="Delete" circle />
  </el-row>
  <t-button type="text" tag="span" @doBtn="submit">撒打算</t-button>
</template>
<script setup lang="ts" name="Index">
import { ref } from 'vue'
function submit(done:any) {
// 这里供业务组件处理一些事情,比如ajax请求,此处用setTimeout模拟,    执行done()方法消失loading
    setTimeout(() => {
        done()
    }, 2000)
}

</script>

