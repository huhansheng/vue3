<template>
  <div>
    <h5>{{ message }}</h5>
    <p>{{ sex }}</p>
    <input v-model="info" />
    <button @click="onClick">click</button>
    <HelloWorld :msg="msg" @submit="submit" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from './components/HelloWorld.vue'
import { log } from '@/hooks/class-component-decorator'

// 不能直接使用vue-class-component的Component渲染不出来, 官方文档不对?? - github的issus说舍弃
@Options({
  components: {
    HelloWorld
  }
})
export default class User extends Vue {
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next()
  }
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave')
    next()
  }
  // 写法-响应undefined后续改变不会触发重新渲染，为了避免可以使用其他值
  message = null;
  name = 'handsome';
  sex = '男';
  id = '';

  // 原来输入框的值
  startInputName = '';
  // 正在输入的值
  endInputName = '';

  // 或者data支持undefined响应
  data () {
    return {
      msg: undefined
    }
  }

  // computed赶脚-java的类？？
  get info () {
    return this.startInputName + ' ' + this.endInputName
  }
  // value: 原来的值 + 正在输入的值
  set info (value) {
    console.log(value)
    const splitted = value.split(' ')
    this.startInputName = splitted[0]
    this.endInputName = splitted[1]
  }

  @log
  submit () {
    this.message = 'hello, world'
    this.msg = 'I am fine'
    console.log('222')
  }
}
</script>
