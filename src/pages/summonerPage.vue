<template>
  <div class="row justify-center">
    <div class="row q-mt-xl">
      <q-card class="sideContent">
        <q-card-section>
          <div class="row justify-center">
            <img class="profileIcon" src="../statics/images/profileIcon.png"/>
          </div>
        </q-card-section>
        <q-card-separator></q-card-separator>
        <q-card-section class="rankingBox">
          <div class="row q-py-sm ">
            <div class="leagueIcon col-6">
              <img src="../statics/images/gold.png"/>
            </div>
            <div class="rankedInfo text-left col-6">
              <div class="text-grey-6">Ranked Solo</div>
              <div class="rankedDivision text-blue-6">Gold 3</div>
              <div>0 LP / 13W 12L</div>
              <div>Win Ratio 52%</div>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="rankingBox">
          <div class="row q-py-sm ">
            <div class="leagueIcon col-6">
              <img src="../statics/images/gold.png"/>
            </div>
            <div class="rankedInfo text-left col-6">
              <div class="text-grey-6">Ranked Flex 5v5</div>
              <div class="rankedDivision text-blue-6">Gold 2</div>
              <div>49 LP / 20W 20L</div>
              <div>Win Ratio 50%</div>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="championStats">
          <div class="row q-pt-sm">
            <div><img src="http://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Aatrox.png"/></div>
            <div class="q-ml-md q-mt-sm championName">Aatrox</div>
            <div class="q-ml-md ">
              <div class="text-grey-8 fontChampion">3.96:1 KDA</div>
              <div class="" style="font-size: 15px;">6.0 /4.2/10.5</div>
            </div>
            <div class="q-ml-md">
              <div class="q-ml-md text-grey-8 fontChampion">50%</div>
              <div style="font-size: 15px;">5 Played</div>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="championStats">
          <div class="row q-pt-sm">
            <div><img src="../statics/images/Aatrox.png"/></div>
            <div class="q-ml-md q-mt-sm championName">Aatrox</div>
            <div class="q-ml-md ">
              <div class="text-grey-8 fontChampion">3.96:1 KDA</div>
              <div class="" style="font-size: 15px;">6.0 /4.2/10.5</div>
            </div>
            <div class="q-ml-md">
              <div class="q-ml-md text-grey-8 fontChampion">50%</div>
              <div style="font-size: 15px;">5 Played</div>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="championStats">
          <div class="row q-pt-sm">
            <div><img src="../statics/images/Aatrox.png"/></div>
            <div class="q-ml-md q-mt-sm championName">Aatrox</div>
            <div class="q-ml-md ">
              <div class="text-grey-8 fontChampion">3.96:1 KDA</div>
              <div class="" style="font-size: 15px;">6.0 /4.2/10.5</div>
            </div>
            <div class="q-ml-md">
              <div class="q-ml-md text-grey-8 fontChampion">50%</div>
              <div style="font-size: 15px;">5 Played</div>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="championStats">
          <div class="row q-pt-sm">
            <div class=""><img src="../statics/images/Aatrox.png" /></div>
            <div class="q-ml-md q-mt-sm championName">Aatrox</div>
            <div class="q-ml-md">
              <div class="text-grey-8 fontChampion">3.96:1 KDA</div>
              <div class="" style="font-size: 15px;">6.0 /4.2/10.5</div>
            </div>
            <div class="q-ml-md">
              <div class="q-ml-md text-grey-8 fontChampion">50%</div>
              <div style="font-size: 15px;">5 Played</div>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <!-- Contenedor de las partidas jugadas por el usuario -->
      <q-card class="mainContent">
        <q-card-section class="gameResume row q-mb-md" v-for="number in 20">
          <!-- Estadisticas de la partida (tipo, tiempo, resultado). -->
          <div class="gameStats q-pt-sm">
            <div class="gameType q-mb-md">Flex 5v5 Ranked</div>
            <div class="q-mb-xs text-bold">Defeat</div>
            <div>26m 10s</div>
          </div>
          <!-- Campeon, runas y summoners del usuario -->
          <div class="gameSettingSummoner row q-pt-xs q-ml-md">
            <div class="summonerChampion">
              <img src="http://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Aatrox.png""/>
            </div>
            <div class="summonerSpells">
              <div class="spell">
                <img src="../statics/images/Teleport.png"/>
              </div>
              <div class="spell">
                <img src="http://ddragon.leagueoflegends.com/cdn/9.12.1/img/spell/SummonerFlash.png"/>
              </div>
            </div>
            <div class="runes">
              <div class="rune">
                <img src="../statics/images/Conqueror_rune.png"/>
              </div>
              <div class="rune">
                <img src="../statics/images/Resolve_icon.png"/>
              </div>
            </div>
            <div class="championName q-pl-md">Aatrox</div>
          </div>
          <!-- KDA y KDA Ratio del usuario en la partida -->
          <div class="KDA text-center justify-center q-pt-md q-ml-md">
            <div class="gameKDA">
              3 / 7 / 1
            </div>
            <div class="KDARatio q-mt-sm">
              0.57:1 KDA
            </div>
          </div>
          <!-- Información de la partida propia   -->
          <div class="gamePlayerStats text-center q-ml-md">
            <div class="level">
              Level 15
            </div>
            <div class="CS">
              226(8.6) CS
            </div>
            <div class="killParticipation text-red-6">
              P/Kill 20%
            </div>
            <div class="MMR">
              Tier Average
              <br>
              Platinum 4
            </div>
          </div>
          <!--  Lista de objetos  -->
          <div class="ItemList q-ml-sm q-pt-sm">
            <div class="item">
              <img src="../statics/images/1028.png"/>
            </div>
            <div class="item">
              <img src="../statics/images/1028.png"/>
            </div>
            <div class="item">
              <img src="../statics/images/1028.png"/>
            </div>
            <div class="item">
              <img src="../statics/images/1028.png"/>
            </div>
            <div class="item">
              <img src="../statics/images/1028.png"/>
            </div>
            <div class="item">
              <img src="../statics/images/1028.png"/>
            </div>
            <div class="item">

            </div>
          </div>
          <!-- Equipos, sus campeones y nombres de invocador  -->
          <div class="gamePlayers q-ml-md">
            <div class="team">
              <div class="summoner">
                <div class="championImage">
                  <img src="../statics/images/Aatrox.png"/>
                </div>
                <div class="summonerName">
                  Liquid fîve
                </div>
              </div>
              <div class="summoner">
                <div class="championImage">
                  <img src="../statics/images/Aatrox.png"/>
                </div>
                <div class="summonerName">
                  Liquid fîve
                </div>
              </div>
              <div class="summoner">
                <div class="championImage">
                  <img src="../statics/images/Aatrox.png"/>
                </div>
                <div class="summonerName">
                  Liquid fîve
                </div>
              </div>
              <div class="summoner">
                <div class="championImage">
                  <img src="../statics/images/Aatrox.png"/>
                </div>
                <div class="summonerName">
                  Liquid fîve
                </div>
              </div>
              <div class="summoner">
                <div class="championImage">
                  <img src="../statics/images/Aatrox.png"/>
                </div>
                <div class="summonerName">
                  Liquid fîve
                </div>
              </div>
            </div>
            <div class="team q-pl-sm">
              <div class="summoner">
                <div class="championImage">
                  <img src="../statics/images/Aatrox.png"/>
                </div>
                <div class="summonerName">
                  Liquid fîve
                </div>
              </div>
              <div class="summoner">
                <div class="championImage">
                  <img src="../statics/images/Aatrox.png"/>
                </div>
                <div class="summonerName">
                  Liquid fîve
                </div>
              </div>
              <div class="summoner">
                <div class="championImage">
                  <img src="../statics/images/Aatrox.png"/>
                </div>
                <div class="summonerName">
                  Liquid fîve
                </div>
              </div>
              <div class="summoner">
                <div class="championImage">
                  <img src="../statics/images/Aatrox.png"/>
                </div>
                <div class="summonerName">
                  Liquid fîve
                </div>
              </div>
              <div class="summoner">
                <div class="championImage">
                  <img src="../statics/images/Aatrox.png"/>
                </div>
                <div class="summonerName">
                  Liquid fîve
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>

    </div>
  </div>
</template>

<script>
    export default {
        name: "summonerPage"
    }
</script>

<style scoped>
  .rankingBox {
    padding-top: 0px;
    margin-top: 10px;
    background: #f2f2f2;
  }

  .sideContent {
    width: 350px;
  }

  .profileIcon{
    margin: auto;
    border-radius: 50%;
    height: 128px;
    width: 128px;
  }

  .leagueIcon img{
    width: 134px;
    height: 148px;
    margin-left: -10px;
  }

  .rankedInfo {
    margin-top: 25px;
    font-size: 14px;
  }

  .rankedInfo div{
    padding-top: 4px;
  }

  .rankedDivision{
    font-size: 20px;
  }

  .championStats {
    padding-top: 0px;
    padding-bottom: 8px;
    margin-top: 10px;
    background: #f2f2f2;
  }

  .championStats img{
    height: 45px;
    width: 45px;
    border-radius: 50%;
  }

  .championName {
    font-size: 20px;
    color: #555e5e;
  }

  .fontChampion {
    font-size: 18px;
  }


  .mainContent {
    width: 740px;
    margin-left: 20px;
  }

  .gameResume {
    background: #f2f2f2;
  }

  .gameStats {
    width: 90px;
    text-align: center;
    font-size: 14px;
    color: #555;
    line-height: 18px;
    height: 96px;
  }

  .gameType {
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .gameSettingSummoner {
    width: 100px;
    height: 96px;
    vertical-align: middle;
  }

  .gameSettingSummoner img {
    height: 22px;
    width: 22px;
  }

  .summonerChampion img{
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .summonerSpells {
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
  }

  .runes {
    display: inline-block;
    vertical-align: middle;
    margin-left: 4px;
  }

  .KDA {
    height: 96px;
  }

  .gameKDA{
    font-size: 15px;
    color: #879292;
  }

  .KDARatio {
    font-size: 12px;
    color: #555e5e;
  }


  .gamePlayerStats {
    width: 100px;
    line-height: 20px;
    color: #555e5e;
  }


  .ItemList {
    height: 96px;
    width: 96px;
  }

  .item{
    display: inline-block;
    width: 22px;
    height: 22px;
    border-radius: 3px;
    margin-top: 2px;
    margin-right: 2px;
    overflow: hidden;
    background-color: #b4b4b4;
  }

  .gamePlayers{
    width: 170px;
    height: 96px;
  }

  .team {
    float: left;
    width: 50%;
  }

  .summoner {
    display: block;
    width: 80px;
    height: 18px;
    margin-left: 3px;
    text-align: left;
    white-space: nowrap;
  }

  .championImage {
    display: inline-block;
    vertical-align: middle;
  }

  .championImage img {
    width: 18px;
    height: 18px;
    margin-right: 3px;
  }

  .summonerName {
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    margin-bottom: 3px;
  }

  .mainContent .q-card__section {
    padding-top: 16px;
  }

</style>
