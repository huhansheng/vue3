import {
  defineComponent,
  ref,
  reactive
} from 'vue'

interface Props {
  btnText: string
}

export default defineComponent({
  setup (props: Props, context) {
    const state = reactive({
      btnText: props.btnText || '提交'
    })

    const handleSubmit = function () {
      context.emit('handle-submit', 'hello')
    }

    return {
      state,
      handleSubmit
    }
  }
})
