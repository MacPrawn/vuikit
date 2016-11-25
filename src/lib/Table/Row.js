import { isFunction } from '../../helpers/util'

const Row = {
  functional: true,
  props: ['row'],
  render (h, { parent: vm, props }) {
    const { fieldsDef } = vm
    const { row } = props
    return h('tr', {
      class: {
        'uk-active': vm.isSelected(row)
      },
      on: {
        click: e => {
          if (e.target.tagName === 'TD') {
            vm.$emit('clickrow', vm.getRowId(row), row)
          }
        }
      }
    }, fieldsDef.map(field =>
      h(Cell, { props: { field, row } })
    ))
  }
}

const Cell = {
  functional: true,
  props: ['row', 'field'],
  render (h, { props }) {
    const { row, field } = props
    const fieldName = field.name
    return h('td', { class: field.cellClass }, [
      field.component
        ? h(field.component, { props: { fieldName: row[ fieldName ] } })
        : isFunction(field.cell)
          ? h({
            functional: true,
            props: ['row', 'field'],
            render: field.cell
          }, { props: { row, field } })
          : field.cell || row[ fieldName ]
    ])
  }
}

export default Row
