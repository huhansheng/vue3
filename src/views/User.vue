<script>
import { Vue, Options } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";

// class + jsx写法
// Options空白 需要Options()，没文档说明??
@Options()
export default class Counter extends Vue {
  count = 0;

  // 生命周期
  mounted() {
    console.log("开始");
  }
  increment() {
    this.count++;
  }
  render() {
    return (
      <div>
        <h5>{this.count}</h5>
        <button onClick={this.increment}>increment</button>
        <HelloWorld msg="I am ok" />
      </div>
    );
  }
}
</script>
