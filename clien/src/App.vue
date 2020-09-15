<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      flat
    >
    <!-- <v-toolbar-title>Title</v-toolbar-title>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-layout row>
      <v-flex xs6 class="text-center" mt-5>
        <v-card flat>
          COLLECTOR
        </v-card>
      </v-flex>
      <v-flex xs3 class="text-center" mt-5>
        <v-card flat>
          <v-btn text @click="callapi">search</v-btn>
        </v-card>
        
      </v-flex>
    </v-layout> -->
    </v-app-bar>

    <v-content class="text-center">
      <!-- <HelloWorld/> -->
      <v-card flat>
          <v-btn text @click="callapi">search</v-btn>
        </v-card>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import getUser from './api/getUser'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
  methods: {
    async callapi() {
      const b = await getUser('1234')
      alert(JSON.stringify(b))
    }
  }
};
</script>
