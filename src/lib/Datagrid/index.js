import searchField from './searchField'
import VkTable from '../Table'
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
  components: {
    VkTable
  },
  data () {
    return {
      filterKey: '',
      sortOrder: {},
      page: 1
    }
  },
  render (h) {
    return (
      <div staticClass="nibnut-datagrid">
        <form staticClass="uk-form uk-form-horizontal">
          <div class="uk-grid">
            <div class="uk-width-1-2">
              <div class="uk-form-controls uk-form-controls-text">
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
        <vk-table ref="table"
          fields={ this.fields }
          rows={ this.filteredRows }
          trackBy={ this.trackBy }
          selectable={ this.selectable }
          selection={ this.selection }
          condensed={ this.condensed }
          striped={ this.striped }
          hover={ this.hover }
          sort-order={ this.sortOrder }
          on-clickRow={ (rowID, row) => {
            this.edit(rowID, row)
          } }
          on-sort={ (order) => {
            this.sort(order)
          } }
        ></vk-table>
        <vk-pagination ref="pagination" v-show={ this.rows.length > this.perPage } total={ this.rows.length }
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
    this.sortOrder[this.fields[0].name] = 'asc'
  },
  computed: {
    filteredRows () {
      const by = Object.keys(this.sortOrder)[0]
      const dir = this.sortOrder[by]
      var sortedRows = orderBy(this.rows, [item => item[by]], dir)

      this.filterKey = this.filterKey.toLowerCase()
      var visibleRows = sortedRows.filter((row) => {
        return Object.keys(row).some((key) => {
          return String(row[key]).toLowerCase().indexOf(this.filterKey) > -1
        })
      })

      var startAt = this.perPage * (this.page - 1)
      visibleRows = visibleRows.slice(startAt, startAt + this.perPage)

      return visibleRows
    }
  },
  methods: {
    search (query) {
      this.filterKey = query
    },
    edit (row, rowID) {
      if (!rowID && row) rowID = this.$refs.table.getRowId(row)
      if (this.editable) this.$emit('editrow', this.$el.id, rowID, row)
    },
    sort (order) {
      this.sortOrder = order
    }
  }
}
