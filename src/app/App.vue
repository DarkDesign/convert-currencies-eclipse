<template>
  <div
      class="container">

    <nav>

      <router-link
          to="/">Currencies</router-link>

      <router-link
          to="/converter">Converter</router-link>

    </nav>

   <div
       class="container-body">

     <router-view/>

   </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Action} from 's-vuex-class';

import { ActionName } from './store/actions';



@Options({})
export default class CurrenciesView extends Vue {

  @Action(ActionName.GetCurrencies)
  public getCurrencies!: () => any;

  public created(): void {
    this.getCurrencies();
  }

}
</script>

<style scoped lang="scss">
#app {
  nav {
    border-radius: 7px;
    background-color: #fff;
    padding: 10px;
    display: flex;
    gap: 7px;

    a {
      display: block;
      padding: 5px 10px;
      border-radius: 7px;
      color: black;
      text-decoration: none;

      &:hover {
        background-color: #efefef;
      }

      &.router-link-active {
        background-color: #eee;
      }
    }
  }

  .container {
    margin: 20px 10px;

    &-body {
      margin-top: 10px;
      border-radius: 7px;
      background-color: #fff;
      padding: 10px;
    }
  }

}
</style>
