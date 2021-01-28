export default {
  setUserInfo (state, action: object): void {
    state.user = action
  },
  setMaterialList (state, action: Array<object>): void {
    state.materialList = action
  }
}
