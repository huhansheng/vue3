<script>
import { Vue, Options } from "vue-class-component";
import { mapState, mapActions } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

// class + jsx写法
@Options({
  computed: mapState(["user"]),
  methods: mapActions(["getUserInfo"])
})
export default class Counter extends Vue {
  count = 0;

  // 生命周期
  mounted() {
    console.log("开始 ", this.user);
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
        <p>{this.user.name}</p>
      </div>
    );
  }
}
</script>
