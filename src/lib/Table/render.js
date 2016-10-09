import Header from './Header'
import Row from './Row'

export default function (h) {
  return (
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
        { this.rows.map(row => h(Row, { props: { row } })) }
      </tbody>
    </table>
  )
}
