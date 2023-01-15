<template>
  <div
      class="input">

    <input
        :placeholder="placeholder"
        :value="modelValue"
        @input="changeValue($event.target.value)"
        :disabled="disabled"
        :type="type"/>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';


@Options({
  props: {
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: String
  },
  emits: ['update:modelValue']
})
export default class InputComponent extends Vue {

  public changeValue(value: string): void {
    this.$emit('update:modelValue', value);
  }
}
</script>

<style scoped lang="scss">
.input {
  width: 100%;

  input {
    width: 100%;
    padding: 15px;
    border-radius: 7px;
    border: 1px solid #ccc;
  }
}
</style>
