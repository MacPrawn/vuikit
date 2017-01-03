import searchField from './searchField'
import Header from '../Table/Header'
import Row from '../Table/Row'
import selectField from '../Table/selectField'
import { processFields, processSortOrder } from '../Table/helper'
import { warn } from '../../helpers/util'
import { orderBy } from 'lodash'

export default {
  name: 'VkDatagrid',
  props: {
    title: {
      type: String,
      default: ''
    },
    addNewTitle: {
      type: String,
      default: ''
    },
    fields: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    },
    trackBy: {
      type: String,
      default: 'id'
    },
    searchable: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Boolean,
      default: false
    },
    selection: {
      type: Object,
      default: () => ({})
    },
    condensed: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    perPage: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      _rows: [],
      filterKey: '',
      sortOrder: {},
      page: 1
    }
  },
  render (h) {
    return (
      <div staticClass="nibnut-datagrid" class={{
        'nibnut-datagrid-editable': this.editable
      }}>
        <form staticClass="uk-form uk-form-horizontal">
          <div class="uk-grid">
            <div class="uk-width-1-2">
              <div class="uk-form-controls uk-form-controls-text uk-margin-remove">
                <h2 class="uk-margin-remove">
                  { this.title }
                  <vk-button
                    v-show={ this.editable && this.addNewTitle }
                    active
                    color="primary"
                    size="mini"
                    nativeOnClick={e => {
                      this.edit()
                    }}
                    class="uk-margin-small-left">{ this.addNewTitle }</vk-button>
                </h2>
              </div>
            </div>
            <div class="uk-width-1-2">
              { this.searchable && h(searchField, { props: {} }) }
            </div>
          </div>
        </form>
        <table
          staticClass="uk-table"
          class={{
            'uk-table-striped': this.striped,
            'uk-table-condensed': this.condensed,
            'uk-table-hover': this.hover
          }}
        >
          <thead>
            <tr>
              { this.fieldsDef.map(field => h(Header, { props: { field } })) }
            </tr>
          </thead>
          <tbody>
            { this.filteredRows.map(row => h(Row, { props: { row } })) }
          </tbody>
        </table>
        <vk-pagination ref="pagination" v-show={ this._rows.length > this.perPage } total={ this._rows.length }
          page={ this.page }
          limit={ this.perPage }
          compact
          on-change={o => {
            this.page = o.page
          }}>
        </vk-pagination>
      </div>
    )
  },
  created () {
    this._rows = this.rows || []

    this.$on('clickRow', (rowID, row) => {
      this.edit(rowID, row)
    })
    this.$on('deleted', (rowID, row) => {
      this.deleteRow(rowID, row)
    })
    this.$on('emitSort', (field) => {
      this.sort(field)
    })

    this.sortOrder[this.fields[0].name] = 'asc'
    // check for rows id if selectable enabled
    if (warn && this.selectable) {
      this._rows.forEach(row => {
        if (row[this.trackBy] === undefined) {
          warn("Some of the Table rows have no 'id' set.")
        }
      })
    }
  },
  computed: {
    isAllSelected () {
      return this._rows.length && this._rows.every(row => this.isSelected(row))
    },
    fieldsDef () {
      const fields = processFields(this.fields)
      // add selectable field if
      // required and no provided
      if (this.selectable) {
        fields.unshift(selectField)
      }
      return fields
    },
    filteredRows () {
      console.log('filteredRows - 1', this._rows)
      const by = Object.keys(this.sortOrder)[0]
      const dir = this.sortOrder[by]
      var rows = this._rows;

      rows = orderBy(rows, [item => item[by]], dir)

      this.filterKey = this.filterKey.toLowerCase()
      rows = rows.filter((row) => {
        return Object.keys(row).some((key) => {
          return String(row[key]).toLowerCase().indexOf(this.filterKey) > -1
        })
      })

      var startAt = this.perPage * (this.page - 1)
      rows = rows.slice(startAt, startAt + this.perPage)

      console.log('filteredRows - 2', rows)
      return rows
    }
  },
  methods: {
    isSelected (row) {
      return this.selection[this.getRowId(row)]
    },
    getRowId (row) {
      return row[this.trackBy]
    },
    search (query) {
      this.filterKey = query
    },
    edit (rowID, row) {
      if (!rowID && row) rowID = this.getRowId(row)
      if (this.editable) this.$emit('editrow', this.$el.id, rowID, row)
    },
    deleteRow (rowID, row) {
      console.log('deleteRow - 1', this._rows.splice)
      if (!rowID && row) rowID = this.getRowId(row)
      if (this.editable) {
        for (var loop = 0; loop < this._rows.length; loop++) {
          if (this.getRowId(this._rows[loop]) === rowID) {
            this._rows.splice(loop, 1)
            break
          }
        }
        console.log('deleteRow - 2', this._rows)
        this.$emit('deleterow', this.$el.id, rowID, row)
      }
    },
    emitSort (field) {
      this.sortOrder = processSortOrder(field, this.sortOrder)
    }
  }
}
