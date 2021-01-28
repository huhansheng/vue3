import { Vue, Options } from 'vue-class-component'
import { mapState, mapActions } from 'vuex'

@Options({
  computed: mapState(['materialList']),
  methods: mapActions(['getMaterialList'])
})
export default class Home extends Vue {
  value: string = '';
  selectValue: string = '';

  mounted () {
    this.getMaterialList()
  }

  handleSubmit () {
    console.log(this.value)
  }

  render () {
    return (
      <div>
        <p>hello, world</p>
        <div style={{ margin: '16px 0' }}>
          <select class='vh-select' v-model={this.selectValue}>
            {
              this.materialList.map(item => {
                return <option value={item.id} >{item.name}</option>
              })
            }
          </select>
        </div>
        <input v-model={this.value}></input>
        <button onClick={this.handleSubmit}>click</button>
      </div>
    )
  }
}
