import { Vue, Options } from "vue-class-component";

@Options()
export default class Home extends Vue {
  render() {
    return (
      <div>
        <p>hello, world</p>
      </div>
    );
  }
}
