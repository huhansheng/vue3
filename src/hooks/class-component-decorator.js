import { createDecorator } from 'vue-class-component'

// 接收3个值：options，key, parameterIndex 自动触发this.$emit('xxx', arg);
export const emit = createDecorator((options, key) => {
  // 拿vue class原始的key方法
  const originMethod = options.methods[key]
  // 扩展当前this[key]能力
  options.methods[key] = function wrapperMethod (...arg) {
    console.log(this.$emit)
    // 调用原先方法, originMethod逻辑处理数据后，再回传父组件怎么处理??
    // originMethod.apply(this, arg);
    // this.$emit(key, arg);

    // 调用原先方法-originMethod return值的方式处理
    const data = originMethod.apply(this, arg)
    // 事件回传
    this.$emit(key, data)
  }
})

// 接收3个值：options，key, parameterIndex
export const log = createDecorator((options, key) => {
  // 拿vue class原始的key方法
  const originMethod = options.methods[key]
  // 扩展当前this[key]能力
  options.methods[key] = function wrapperMethod (...arg) {
    // 先打印
    console.log(`Invoke: ${key} ${JSON.stringify(arg)}`)

    // 调用原先方法
    originMethod.apply(this, arg)
  }
})
