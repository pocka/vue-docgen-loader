import Vue from 'vue'

export default Vue.extend({
  props: {
    /**
     * Foo the number.
     */
    foo: {
      type: Number,
      default: -1
    }
  },
  template: '<span>{{foo}}</span>'
})
