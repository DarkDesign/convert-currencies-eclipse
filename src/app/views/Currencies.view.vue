<template>
  <div
      class="currencies-view">

    <div
        class="currencies-header">

      <h1>Currencies</h1>

      <search-component
          placeholder="Поиск.."
          @search="setSearchQuery"/>

    </div>

    <template
        v-if="currencies.length > 0">

      <div
          class="currencies-list">

          <div
              class="currencies-item"
              v-for="currency in currencies"
              :key="`index-${currency.charCode}`">

            <currency-component
                :currency="currency"/>

          </div>



      </div>

  </template>

    <div
        class="currencies-none"
        v-else> Ничего нет :'( </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Getter, Mutation } from 's-vuex-class';

import { Currency } from '@/models';
import { GettersName } from '../store/getters';
import { MutationName } from '../store/mutations';
import CurrencyComponent from '../components/Currency.component.vue';
import SearchComponent from '../components/inputs/Search.component.vue';



@Options({
  components: {
    CurrencyComponent,
    SearchComponent
  }
})
export default class CurrenciesView extends Vue {

  @Getter(GettersName.GetFilteredCurrencies)
  public currencies!: Currency[];

  @Mutation(MutationName.SetSearchQuery)
  public setSearchQuery!: (value: string) => void;

  public beforeUnmount(): void {
    this.setSearchQuery('');
  }

}
</script>

<style scoped lang="scss">
.currencies-view {

  .currencies-header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 25px;
  }

  .currencies-list {
    grid-template-columns: repeat(3, 1fr);
    margin: 30px auto;
    grid-gap: 10px;
    display: grid;

    .currencies-item {
      padding-bottom: 10px;
    }
  }

  .currencies-none {
    font-size: 20px;
    font-weight: bold;
    color: #ccc;
    text-align: center;
    margin: 30px;
  }
}
</style>
