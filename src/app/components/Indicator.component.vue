<template>
  <div
      class="indicator" :class="text">

    <div
       class="indicator-icon">

      <span
          class="material-icons">{{ text }}</span>

    </div>

    <div
        class="indicator-text">

      <slot/>

    </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';


@Options({
  props: {
    newValue: Number,
    oldValue: Number
  }
})
export default class IndicatorComponent extends Vue {
  public newValue!: number;

  public oldValue!: number;

  public get text(): string {
    if (this.newValue > this.oldValue) return 'expand_less';
    if (this.newValue < this.oldValue) return 'expand_more';
    return 'minimize';
  }
}
</script>

<style scoped lang="scss">
.indicator {
  display: flex;
  gap: 5px;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: row;

  .indicator-icon {
    display: flex;
    align-items: center;
  }

  &.expand_less {
    .indicator-icon, .indicator-text {
      color: green;
    }
  }

  &.expand_more {
    .indicator-icon, .indicator-text {
      color: red;
    }
  }
}
</style>
