<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';

export default defineComponent({
  setup() {
    onMounted(() => {
      console.log('welcom to vue 3');
    });
    return {};
  },
});
</script>
