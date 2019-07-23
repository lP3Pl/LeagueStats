<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar>

        <q-toolbar-title class="q-mt-md">
          <img class="logo" src="https://lolstatic-a.akamaihd.net/riotbar/prod/1.6.330/images/navigation/icon-game-lol.png?1558482503" @click="$router.replace('/')">
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>

  export default {
  }
</script>

<style>
  q-toolbar-title img{
    margin-left: 20px;
    margin-bottom: 8px;
  }

  .logo{
    height: 52px;
    width: 52px;

  }
  .header{
    background-color: #002a32;
  }
</style>
