export default {
  header: 'Breadcrumbs',
  headerText: 'The <code>v-breadcrumbs</code> component is a navigational helper for pages. It can accept a <strong>Material Icons</strong> icon or characters as a divider. An array of objects containing the fields <em>href</em>, <em>text</em> and optional <em>disabled</em> can be passed to the <strong>items</strong> property of the component.  Additionally, a regular slot exists for more control of the breadcrumbs, either utilizing <code>v-breadcrumbs-item</code> or other custom markup.',
  props: {
    divider: 'Specifies the dividing character',
    icons: 'Specifies that the dividers are icons',
    justifyCenter: 'Align the breadcrumbs center',
    justifyEnd: 'Align the breadcrumbs at the end',
    large: 'Increase the font-size of the breadcrumb item text'
  }
}