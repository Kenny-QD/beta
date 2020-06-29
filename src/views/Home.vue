<template>
<b-container>
  <b-row class="schelendar">
    <ButtonCal/>
  </b-row>
  <b-row>
    <b-col cols='7'>
  <div class="home">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa
    qui officia deserunt mollit anim id est laborum.
  </div>
    </b-col>
    <b-col cols="4">
      <CareCard/>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import CareCard from '@/components/CareCard.vue';
import ButtonCal from '@/components/ButtonCal.vue';

export default {
  name: 'Home',
  components: {
    CareCard,
    ButtonCal,
  },
};
</script>

<style scoped>
.schelendar{
  margin-top: 500px;
}
</style>
