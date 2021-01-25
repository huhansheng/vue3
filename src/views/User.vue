<script>
import { Vue, Options } from "vue-class-component";
import { mapState, mapMutations, mapActions } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

// class + jsx写法
// Options空白 需要Options()，没文档说明??
@Options({
  computed: mapState("user"),
  methods: mapActions(["getUserInfo"])
})
export default class Counter extends Vue {
  count = 0;

  // 生命周期
  mounted() {
    console.log("开始");
  }
  handleIncrement() {
    this.count++;
  }
  queryUserInfo() {
    this.getUserInfo();
  }
  render() {
    return (
      <div>
        <h5>{this.count}</h5>
        <button onClick={this.handleIncrement}>increment</button>
        <HelloWorld msg="I am ok" />
        <button onClick={this.queryUserInfo}>请求</button>
      </div>
    );
  }
}
</script>
