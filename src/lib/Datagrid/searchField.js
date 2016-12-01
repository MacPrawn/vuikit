const searchField = {
  functional: true,
  props: [],
  render (h, { parent: vm, props }) {
    return (
        <div class="uk-form-controls uk-text-right">
          <div class="uk-form-icon">
              <i class="uk-icon-search"></i>
              <input type="text" on-keyup={e => {
                vm.search(e.target.value)
              }}/>
          </div>
        </div>
    )
  }
}
export default searchField

