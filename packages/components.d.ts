
import TSelect from './select/src/index.vue'
import TButton from './button/src/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    TSelect: typeof TSelect,
    TButton: typeof TButton,
  }
}