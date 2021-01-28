<template>
  <div>
    <select class="vh-select" v-model="currentValue"  @change="handleSelect">
      <option :value="item[value]" v-for="item in options" :key="item[value]">{{item[label]}}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    options: Array,
    value: {
      type: String,
      default: 'value'
    },
    label: {
      type: String,
      default: 'label'
    },
    defalutValue: {
      type: [String, Number],
      default: ''
    }
  }
})
export default class Select extends Vue {
  currentValue: defalutValue;

  handleSelect (value) {
    console.log(this.currentValue)
  }
}
</script>
