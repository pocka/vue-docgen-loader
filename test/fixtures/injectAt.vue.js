import Vue from 'vue'

const MyButton = Vue.extend({
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

export { MyButton }
