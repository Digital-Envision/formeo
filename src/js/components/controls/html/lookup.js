import Control from '../control'

class LookupControl extends Control {
  constructor() {
    super({
      tag: 'input',
      attrs: {
        required: false,
        type: 'text',
        className: 'lookup-field',
      },
      config: {
        label: 'Lookup Field',
      },
      meta: {
        group: 'html',
        icon: 'text-input',
        id: 'html-lookup',
      },
    })
  }
}

export default LookupControl
