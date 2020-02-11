<script>
export default {
  props: {
    /**
     * This must be ignored.
     * @ignore
     */
    foo: {
      type: String,
      default: 'foo'
    },
    /**
     * Not ignored.
     */
    bar: {
      type: Number,
      default: Infinity
    }
  },
  methods: {
    baz() {
      /**
       * This must be ignored.
       * @ignore
       */
      this.$emit('baz')

      /**
       * Not ignored.
       */
      this.$emit('qux')
    }
  }
}
</script>

<template>
  <div>
    <!--
      @slot Slots can't be ignored for now.
      @ignore
    -->
    <slot />
  </div>
</template>
