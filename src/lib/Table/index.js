import searchField from './searchField'
import selectField from './selectField'
import Header from './Header'
import Row from './Row'
import { warn } from '../../helpers/util'
import { processFields, processSortOrder } from './helper'

export default {
  name: 'VkTable',
  props: {
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
    sortOrder: {
      type: Object,
      default: () => ({}) // field: asc|desc
    },
    pageRange: {
      type: Number,
      default: 3
    },
    perPage: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      filterKey: '',
      page: 1
    }
  },
  render (h) {
    return (
      <div staticClass="nibnut-datagrid">
        { this.searchable && h(searchField, { props: {} }) }
        <table staticClass="uk-table" class={{
          'uk-table-striped': this.striped,
          'uk-table-condensed': this.condensed,
          'uk-table-hover': this.hover
        }}>
          <thead>
            <tr>
              { this.fieldsDef.map(field => h(Header, { props: { field } })) }
            </tr>
          </thead>
          <tbody>
            { this.filteredRows.map(row => h(Row, { props: { row } })) }
          </tbody>
        </table>
        <vk-pagination total={ this.filteredRows.length }
          page-range={ this.pageRange }
          limit={ this.perPage }
          compact
          on-change={e => {
            console.log(arguments)
          }}>
        </vk-pagination>
      </div>
    )
  },
  created () {
    // check for rows id if selectable enabled
    if (warn && this.selectable) {
      this.rows.forEach(row => {
        if (row[this.trackBy] === undefined) {
          warn("Some of the Table rows have no 'id' set.")
        }
      })
    }
  },
  computed: {
    isAllSelected () {
      return this.rows.length && this.rows.every(row => this.isSelected(row))
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
      if (!this.filterKey) return this.rows
      this.filterKey = this.filterKey.toLowerCase()
      return this.rows.filter((row) => {
        return Object.keys(row).some((key) => {
          return String(row[key]).toLowerCase().indexOf(this.filterKey) > -1
        })
      })
    }
  },
  methods: {
    search (query) {
      console.log('SEARCH FOR:', query)
      this.filterKey = query
    },
    isSelected (row) {
      return this.selection[this.getRowId(row)]
    },
    getRowId (row) {
      return row[this.trackBy]
    },
    emitSort (field) {
      this.$emit('sort', processSortOrder(field, this.sortOrder))
    }
  }
}
