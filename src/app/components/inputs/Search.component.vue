<template>
  <div
      class="search">

    <input
        :placeholder="placeholder"
        @input="debounceChange($event.target.value)"/>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { debounce } from "../../../utils/functions";


@Options({
  props: {
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
  },
  emits: ['search']
})
export default class SearchComponent extends Vue {

  public debounceChange = debounce<
      (value: string) => void
  >(
      (value: string) => this.$emit('search', value),
      700
  );
}
</script>

<style scoped lang="scss">
.search {
  width: 100%;

  input {
    width: 100%;
    padding: 15px;
    border-radius: 7px;
    border: 1px solid #ccc;
  }
}
</style>
