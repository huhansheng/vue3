import {
  defineComponent,
  ref,
  reactive,
  onBeforeMount,
  onMounted,
  watchEffect,
  watch
} from 'vue'

export default defineComponent({
  setup () {
    // 相当于data
    const state = reactive({
      count: 1,
      user: {
        name: 'handsome'
      }
    })

    // 属性计算
    // const computedPlus = computed(() => {});

    onBeforeMount(() => {
      console.log('渲染')
    })
    // mounted
    onMounted(() => {
      console.log('请求')
    })

    // 立即执行传入的一个函数(优先执行于onMounted,但在onBeforeMount之后)，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。
    watchEffect(
      () => {
        console.log(state.count)
      }, {
        flush: 'post' // post-默认 sync-同步运行 pre-组件更新前执行
      }
    )

    // watch
    watch(
      // () => state.count,
      // (state, prev) => {
      //     console.log(state, prev);
      // }
      // 组合监听
      [state.count, state.user],
      ([newA, newB], [prevA, prevB]) => {
        console.log(newA, prevA)
        console.log(newB, prevB)
      }
    )

    // methods模块化
    const methods = {
      onClick () {
        state.count++
      },
      onEdit () {
        state.user.name = 'hello, handsome'
      }
    }

    return {
      state,
      ...methods
    }
  }
})
