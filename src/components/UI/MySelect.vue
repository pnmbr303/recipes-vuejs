/* eslint-disable */

<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options"
            :key="option.number"
            :value="option.number">
      {{option.number}}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", parseInt(event.target.value))
    }
  }
}
</script>

<style scoped>

</style>
