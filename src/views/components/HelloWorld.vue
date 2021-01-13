<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <button @click="submit(2)">点击</button>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import { emit } from "@/hooks/class-component-decorator";

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  @emit
  submit(value) {
    return value++;
  }
}
</script>

<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
