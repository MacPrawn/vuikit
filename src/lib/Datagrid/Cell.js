import { isFunction } from '../../helpers/util'

const Cell = {
  functional: true,
  props: ['row', 'field'],
  render (h, { props }) {
    const { row, field } = props
    return h('td', { class: field.cellClass }, [
      // default or custom render
      isFunction(field.cell)
        ? h({
          functional: true,
          props: ['row', 'field'],
          render: field.cell
        }, { props: { row, field } })
        : field.cell || row[ field.name ]
    ])
  }
}

export default Cell
