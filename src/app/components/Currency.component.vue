<template>
  <div
      class="currency">

    <div
        class="header">

      <div
          class="header-value">

        {{ currencyValue }}

      </div>

      <div
          class="header-switch"
          @click="switchCurrency = !switchCurrency">

        <span
            class="material-icons">swap_horiz</span>

      </div>

      <div
          class="header-value">

        {{ mainValue }}


      </div>

    </div>

    <div
        class="footer">

      <div>

        {{ currency.name }}

      </div>

      <indicator-component
          :new-value="currency.value"
          :old-value="currency.previous">

        {{ difference }}

      </indicator-component>

    </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Currency } from '@/models';
import IndicatorComponent from './Indicator.component.vue';


@Options({
  components: {
    IndicatorComponent
  },
  props: {
    currency: Currency
  }
})
export default class CurrencyComponent extends Vue {
  public currency!: Currency;

  public switchCurrency: boolean = false;

  public get difference(): string {
    return (this.currency.value - this.currency.previous).toFixed(2);
  }

  public get currencyValue(): string {
    if (this.switchCurrency) return `1 ${ this.currency.mainCharCode }`
    return `1 ${ this.currency.charCode }`;
  }

  public get mainValue(): string {
    if (this.switchCurrency){
      const {
        charCode, unitPrice,
      } = this.currency;
      const value = +(1 / unitPrice).toFixed(4);
      return `${ value } ${ charCode }`
    }
    return `${ this.currency.unitPrice } ${ this.currency.mainCharCode }`;
  }
}
</script>

<style scoped lang="scss">
.currency {
  width: 100%;
  border-radius: 7px;
  border: 1px solid #ccc;

  & > * {
    padding: 10px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    gap: 10px;

    .header-name {
      font-size: 14px;
      font-weight: bold;
    }

    .header-value {
      font-size: 14px;
    }
    .header-switch {
      cursor: pointer;
    }
  }

  .footer {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
}
</style>
