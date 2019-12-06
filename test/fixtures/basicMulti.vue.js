import Vue from 'vue'

export const MyButton1 = {
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

export const MyButton2 = {
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

// NOTE: vue-docgen-api cannot handle default exports (is it expected behavor or bug? idk...)
// export default MyButton
