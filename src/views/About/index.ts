import {
  defineComponent,
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  watchEffect,
  watch
} from 'vue'
import Button from '@/components/Button/1.0.0/index.vue'

export default defineComponent({
  data () {
    return {
      count: 0,
      name: ''
    }
  },
  methods: {
    onClick () {
      this.count++
    },
    onEdit () {
      this.name = 'handsome'
    },
    onSubmit (value) {
      console.log(value)
    }
  },
  components: {
    Button
  }
})
