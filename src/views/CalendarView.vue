<template>
  <v-app>
    <v-content>
      <CalendarComponent/>
    </v-content>
  </v-app>
</template>

<script>
import CalendarComponent from '../components/Calendar.vue';

export default {
  name: 'Calendar',
  components: {
    CalendarComponent,
  },
  data: () => ({
    //
  }),
};
</script>
