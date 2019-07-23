<template>
  <div class="row justify-center">
    <!-- Indice en la pagina principal donde estan todos los campeones.  -->
    <div class="col-6 q-mt-xl">
      <q-card class="champions">
        <q-card-section class="text-center champions-header text-white">
          <div>Campeones</div>
        </q-card-section>
        <q-card-section class="q-mt-md">
          <img class="championImg" src="http://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Aatrox.png" @click="redirectChampion()"/>
          <img class="championImg" src="../statics/images/Ahri.png"/>
          <img class="championImg" src="../statics/images/Akali.png"/>
          <img class="championImg" src="../statics/images/Alistar.png"/>
          <img class="championImg" src="../statics/images/Ammumu.png"/>
          <img class="championImg" src="../statics/images/Anivia.png"/>
          <img class="championImg" src="../statics/images/Annie.png"/>
          <img class="championImg" src="../statics/images/Ashe.png"/>
          <img class="championImg" src="../statics/images/Aurelion.png"/>
          <img class="championImg" src="../statics/images/Azir.png"/>
          <img class="championImg" src="../statics/images/Bard.png"/>
          <img class="championImg" src="../statics/images/Blitz.png"/>
          <img class="championImg" src="../statics/images/Brand.png"/>
          <img class="championImg" src="../statics/images/Braum.png"/>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style>
  .championImg{
    height: 64px;
    width: 64px;
    margin-left: 10px;
    border-radius: 50%;
  }

  .champions-header{
    background-color: #061E36;
  }

  .champions{
    background-color: #060e1f;
  }

  .champions-header div{
    font-size: 28px;
  }
</style>

<script>
export default {
  name: 'PageIndex',

  methods: {
    redirectChampion () {
      let newUrl = this.$route.path == '/' ? 'champion' : this.$route.path+'/champion'

      this.$router.push({path: newUrl, query: {name: 'aatrox'}})
    }

  }
}
</script>
