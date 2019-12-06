import Vue from 'vue'

export default {
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
}
