<template>
  <el-button
  v-bind="$attrs"
  :loading="submitLoading"
  @click="handleClick"
  >
    <slot/>
  </el-button>
</template>

<script setup lang="ts" name="TButton">
import { ref } from 'vue'
const props: any = defineProps({
  autoLoading: {
    type: Boolean,
    default: true
  },//是否需要loading
})


// 抛出事件
const emits = defineEmits(['update:modelValue','doBtn'])
const submitLoading = ref(false)
function handleClick() {
  if (props.autoLoading) {
    submitLoading.value = true
    emits('doBtn', () => {
      submitLoading.value = false
    }) 
  }else{
    emits('doBtn')
  }
}

</script>
<style lang="scss" scoped>

</style>
