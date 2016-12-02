<template>
  <layouts-default>
    <div class="uk-block">
      <h2>Datagrid</h2>
      <hr class="uk-article-divider">
      <!-- DEMO -->
      <vk-datagrid
        id="datagrid"
        ref="datagrid"
        title="Example Datagrid"
        addNewTitle="Add Row"
        :fields="fields"
        :rows="rows"
        :searchable="props.searchable.demo.value"
        :editable="props.editable.demo.value"
        :selectable="props.selectable.demo.value"
        :selection="selection"
        :condensed="props.condensed.demo.value"
        :striped="props.striped.demo.value"
        :hover="props.hover.demo.value"
        :per-page="props.perPage.demo.value"
        @editrow="editRowEvent">
      </vk-datagrid>
      <!-- DESC -->
      <div class="uk-margin-large">
        The <code>vk-datagrid</code> component renders a table based on the provided fields
        definition and data.
      </div>
      <!-- TABS -->
      <vk-tabs
        :index="tabsIndex"
        @change="tabsIndex = arguments[0]">
        <vk-tabs-item name="Props">
          <vk-docs-props
            :props="props"
            @change="props[arguments[0]].demo.value = arguments[1]">
          </vk-docs-props>
        </vk-tabs-item>
        <vk-tabs-item name="Events">
          <vk-docs-events :events="events"></vk-docs-events>
        </vk-tabs-item>
        <vk-tabs-item name="Example">
          <vk-docs-code>{{ code }}</vk-docs-code>
        </vk-tabs-item>
      </vk-tabs>
    </div>
  </layouts-default>
</template>

<script>
import Component from '../lib/Datagrid'
import mixin from './_mixin'
import { mergeProps } from '../helpers/pages'

export default {
  name: 'PageDatagrid',
  mixins: [mixin],
  data: () => ({
    tabsIndex: 0,
    props: mergeProps(Component.props, props),
    events,
    example,
    selection: {},
    fields: [{
      name: 'name',
      sortBy: true
    }, {
      name: 'hits',
      sortBy: true,
      headerClass: 'vk-table-width-minimum'
    }, {
      name: 'desc',
      header: 'Description',
      cell (h, { props }) {
        return props.row[ props.field.name ]
      }
    }],
    rows: [
      { id: 1, name: 'Item A', hits: 100, desc: 'Description' },
      { id: 2, name: 'Item B', hits: 40, desc: 'Description' },
      { id: 3, name: 'Item C', hits: 700, desc: 'Description' }
    ]
  }),
  methods: {
    editRowEvent: (tableID, row, rowID) => {
      events.editrow.emited = true
      console.log('Edit row', tableID, row, rowID)
    }
  }
}

const props = {
  fields: {
    description: `A collection of <code>Objects</code> defining the fields as:
<pre>[{
  name: String,
  sortBy: [Boolean, String],
  headerClass: String,
  header: [Boolean, String, Function],
  cellClass: String,
  cell: [String, Function]
}]</pre>`
  },
  rows: {
    description: 'A collection of <code>Objects</code> representing the rows data.'
  },
  trackBy: {
    description: `A unique key for the rows to be tracked by used among others
      to optimize the rendering.`
  },
  searchable: {
    description: 'Whether to display the grid\'s search box.',
    demo: {
      value: true
    }
  },
  editable: {
    description: 'Whether to make rows editable.',
    demo: {
      value: true
    }
  },
  selectable: {
    description: 'Whether to display the rows select checkboxes.',
    demo: {
      value: true
    }
  },
  selection: {
    description: 'An <code>Object</code> of selected rows indexed by <code>trackBy</code> id.'
  },
  condensed: {
    description: 'Whether to display the rows compacted.',
    demo: {
      value: true
    }
  },
  striped: {
    description: 'Whether to display the rows with zebra-striping style.',
    demo: {
      value: false
    }
  },
  hover: {
    description: 'Whether to display a hover state on rows.',
    demo: {
      value: false
    }
  },
  perPage: {
    description: 'Number of rows per page.',
    demo: {
      type: 'Select',
      options: [
        { text: '1', value: 1 },
        { text: '5', value: 5 },
        { text: '10', value: 10 }
      ],
      value: 10
    }
  }
}

const events = {
  editrow: {
    description: `Emited when a click was performed on a row passing as argument it id and data.`,
    emited: false
  }
}

const example =
`<vk-datagrid {attrs}
  :fields="[{
    name: 'name',
    sortBy: true
  }, {
    name: 'hits',
    sortBy: true,
    headerClass: 'vk-table-width-minimum'
  }, {
    name: 'desc',
    header: 'Description'
  }]"
  :rows="[
    { id: 1, name: 'Item A', hits: 100, desc: 'Description' },
    { id: 2, name: 'Item B', hits: 40, desc: 'Description' },
    { id: 3, name: 'Item C', hits: 700, desc: 'Description' }
  ]"
  @editrow="
    selection[arguments[0]]
      ? $delete(selection, arguments[0])
      : $set(selection, arguments[0], true)
  ">
</vk-datagrid>`
</script>
