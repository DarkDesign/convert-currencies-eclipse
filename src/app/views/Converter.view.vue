<template>
  <div
      class="converter-view">

    <h1>Converter</h1>

    <div
        class="converter-body">

      <div
          class="currency">

        <select-component
            v-model="converterValues.from.name"
            :items="currencyNames"/>

        <input-component
            v-model="converterValues.from.quantity"
            type="number"/>


      </div>

      <div
          @click="switchBlocks()"
          class="switch">

         <span
             class="material-icons">swap_horiz</span>

      </div>

      <div
          class="currency">

        <select-component
            v-model="converterValues.to.name"
            :items="currencyNames"/>

        <input-component
            v-model="converterValues.to.quantity"
            :disabled="true"
            type="number"/>

      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Getter } from 's-vuex-class';
import { GettersName } from '../store/getters';
import { Currency } from '@/models';
import InputComponent from '../components/inputs/Input.component.vue';
import SelectComponent from '../components/inputs/Select.component.vue';
import { interfaces } from '../store';


@Options({
  components: {
    InputComponent,
    SelectComponent
  },
  watch: {
    converterValues: {
      handler() {
        this.convert();
      },
      deep: true
    }
  }
})
export default class ConverterView extends Vue {

  public converterValues = {
    from: {
      name: '',
      quantity: ''
    },
    to: {
      name: '',
      quantity: ''
    }
  }


  @Getter(GettersName.GetCurrencies)
  public currencies!: Currency[];

  @Getter(GettersName.GetCurrencyList)
  public currencyList!: interfaces.ICurrencyList;

  public get currencyNames(): readonly {name: string; value: string}[] {
    return this.currencies.map((currency) => ({
      name: currency.name,
      value: currency.charCode
    }));
  }

  public convert(): void {
    const { from, to } = this.converterValues;
    const currencyFrom = this.currencyList[from.name];
    const currencyTo = this.currencyList[to.name];

    if (!currencyFrom || !currencyTo) return;

    const fromQuantity = parseInt(from.quantity);

    if (!from.quantity) {
      to.quantity = '';
      return;
    }

    to.quantity = (
        currencyFrom.unitPrice / currencyTo.unitPrice * fromQuantity
    ).toFixed(4);

  }

  public switchBlocks(): void {
    let cv = this.converterValues;
    [cv.from.name, cv.to.name] = [cv.to.name, cv.from.name];
  }

}
</script>

<style scoped lang="scss">
.converter-view {
  .converter-body {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    .switch {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .currency {
      width: 40%;
      padding: 10px;
      border-radius: 7px;
      border: 1px solid #ccc;

      * + * {
        margin-top: 10px;
      }
    }
  }
}
</style>
