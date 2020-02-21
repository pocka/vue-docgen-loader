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
      @slot This must be ignored.
      @ignore
    -->
    <slot />
  </div>
</template>
