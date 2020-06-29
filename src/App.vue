<script>
import Vue from 'vue';
import HeaderImg from '@/components/HeaderImg.vue';
import BootstrapSidebar from './components/vue-bootstrap-sidebar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    BootstrapSidebar,
    HeaderImg,
  },
  data() {
    return {
      initialShow: true,
      header: '<h3>Child Care</h3>',
      links: [
        { name: 'Home', href: { name: 'Home' }, faIcon: ['fas', 'home'] },
        { name: 'Calendar', href: { name: 'Calendar' }, faIcon: 'calendar' },
        { name: 'Contact', href: { name: 'contact' }, faIcon: 'phone' },
      ],
    };
  },
  methods: {
    onSidebarChanged() {
    },
  },
});
</script>

<template>
  <div id="App">
    <HeaderImg/>
    <BootstrapSidebar
      :initial-show="initialShow"
      :links="links"
      :header="header"
      :fa="true"
      @sidebarChanged="onSidebarChanged"
    >


      <template v-slot:content>
        <b-container style="margin-top: 56px">
          <router-view />
        </b-container>
      </template>
    </BootstrapSidebar>
  </div>
</template>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import './scss/default-theme';
</style>
