<template>
  <div
      class="select">

    <select
        :value="modelValue"
        @change="changeValue($event.target.value)">

      <option
          v-for="item in items"
          :key="item.value"
          :value="item.value">{{ item.name }}</option>

    </select>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';


@Options({
  props: {
    items: Array,
    modelValue: String
  },
  emits: ['update:modelValue']
})
export default class SelectComponent extends Vue {
  public changeValue(value: string): void {
    this.$emit('update:modelValue', value);
  }
}
</script>

<style scoped lang="scss">
.select {
  width: 100%;

  select {
    width: 100%;
    padding: 15px;
    border-radius: 7px;
    border: 1px solid #ccc;
  }
}
</style>
