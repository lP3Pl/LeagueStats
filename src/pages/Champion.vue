<template>
  <div class="row justify-center">
    <div class="row q-mt-xl">
      <q-card class="championContainer">
        <q-card-section>
          <div class="row ">
            <div class="championNameContainer text-left ">
              <img src="http://ddragon.leagueoflegends.com/cdn/9.12.1/img/champion/Aatrox.png"/>
              <div class="championName"> AATROX</div>
              <div class="championSubname"> THE DARKIN BLADE </div>
            </div>
            <div class="championStatistics">
              <div class="statisticsTitle q-mb-sm">Base Statistics</div>
              <div class="statisticColumn">
                <div>Health <!--<span>580(+90)</span>--></div>
                <div>Health Regen. <!--<span>3(+0.75)</span>--></div>
                <div>Range <!--<span>175</span>--></div>
                <div>Attack Damage <!--<span>60(+5)</span>--></div>
              </div>
              <div class="statisticColumn">
                <div class="statisticValue">580(+90)</div>
                <div class="statisticValue">3(+0.75)</div>
                <div class="statisticValue">175</div>
                <div class="statisticValue">60(+5)</div>
              </div>
              <div class="statisticColumn">
                <div>Attack Speed<!-- <span>0.651(+2.5%)</span>--></div>
                <div>Armor <!--<span>38(+3.25)</span>--></div>
                <div>Magic Resist <!--<span>32.1(+1.25)</span>--></div>
                <div>Move.Speed <!--<span>345</span>--></div>
              </div>
              <div class="statisticColumn">
                <div class="statisticValue">0.651(+2.5%)</div>
                <div class="statisticValue">38(+3.25)</div>
                <div class="statisticValue">32.1(+1.25)</div>
                <div class="statisticValue">345</div>
              </div>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="skill">
          <div class="skillName">
            Death Bringer Stance
          </div>
          <div class="row">
            <div class="skillImg">
              <img src="../statics/images/Aatrox/Deathbringer_Stance.png"/>
            </div>
            <div class="skillDescription">
              INNATE: Aatrox periodically empowers his next basic attack to gain Range icon 50 bonus range and deal 5% − 12% (based on level) of the target's maximum health as Attack damage bonus physical damage on-hit, capped at 100 against monsters, and Heal power healing him for the bonus physical damage dealt.
              Deathbringer Stance's Cooldown reduction icon cooldown is reduced by 2 seconds whenever Aatrox hits a champion or large monster with a basic attack or an ability, doubled if he hits with the edge of The Darkin Blade The Darkin Blade. The cooldown reduction for The Darkin Blade The Darkin Blade applies only once and prioritizes for the unit hit by the edge.
            </div>
          </div>
        </q-card-section>
        <q-card-section class="skill">
          <div class="skillName">
            The Darkin Blade
          </div>
          <div class="row">
            <div class="skillImg">
              <img src="../statics/images/Aatrox/The_Darkin_Blade.png"/>
            </div>
            <div class="skillDescription">
              ACTIVE: Aatrox swings his greatsword in the target direction, striking enemies in a line. The Darkin Blade can then be reactivated twice within 4 seconds, with each cast refreshing the timer. The second cast strikes enemies in a cone and the third in the target area. There's a 1 second cooldown between each cast.
              The Darkin Blade 2
              Each strike deals physical damage, with Minion icon minions taking 50% − 0% (based on level) reduced damage. All units take 25% increased damage on the second cast and 50% on the third.
              The Darkin Blade 3
              Hitting enemies at the far end of the first two casts and the center of the third deals 50% bonus damage and Airborne icon knocks up enemies for 0.25 seconds, doubled to 0.5 seconds against Monster icon monsters.
            </div>
          </div>
        </q-card-section>
        <q-card-section class="skill">
          <div class="skillName">
            Infernal Chains
          </div>
          <div class="row">
            <div class="skillImg">
              <img src="../statics/images/Aatrox/Infernal_Chains.png"/>
            </div>
            <div class="skillDescription">
              ACTIVE: Aatrox smashes the ground in the target direction, creating a chain that stops on the first enemy hit, dealing physical damage, doubled against Minion icon minions, and Slow icon slowing them by 25% for 1.5 seconds.
              If Infernal Chains hits a Champion icon champion or large monster, they are chained to the impact area. If the chained enemy is still in the impact area after 1.5 seconds, they are Airborne icon dragged to the center and take the same damage again.
            </div>
          </div>
        </q-card-section>
        <q-card-section class="skill">
          <div class="skillName">
            Umbral Dash
          </div>
          <div class="row">
            <div class="skillImg">
              <img src="../statics/images/Aatrox/Umbral_Dash.png"/>
            </div>
            <div class="skillDescription">
              PASSIVE: Aatrox Heal power heals for a percentage of the non-periodic damage he deals against champions.
              <br>
              ACTIVE: Aatrox Dash dashes in the target direction.
              Umbral Dash resets Aatrox's basic attack timer and can be cast during his other spell casts without interruption.
            </div>
          </div>
        </q-card-section>
        <q-card-section class="skill">
          <div class="skillName">
            World Ender
          </div>
          <div class="row">
            <div class="skillImg">
              <img src="../statics/images/Aatrox/World_Ender.png"/>
            </div>
            <div class="skillDescription">
              ACTIVE: Aatrox unleashes his true demonic form for 10 seconds, Flee icon fearing nearby enemy Minion icon minions for 3 seconds, and gaining Movement speed icon bonus movement speed, decaying over the duration.
              While transformed Aatrox gains increased size and bonus attack damage, and receives increased Heal power self-healing.
              With each enemy champion takedown, World Ender is extended by 5 seconds, refreshing its effects, up to the original amount. Additionally if at least one champion has been taken down, taking lethal damage during World Ender Revival icon revives Aatrox over 3.25 seconds, during which he is Playful untargetable, Silence iconDisarm icon pacified and Slow icon slowed by 99% while healing himself for 30% of his maximum health. While reviving, The Darkin Blade The Darkin Blade's recast timer is locked.
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
    export default {
/*      methods: {
        doSomething() {
          console.log($router.currentRoute.query.name)
        }
      }*/
      mounted() {
        console.log(this.$router.currentRoute.query.name);

      }
    }
</script>

<style scoped>
  .championContainer {
    width: 1000px;
  }

  .championNameContainer {
    width: 100%;
    margin-bottom: 20px;
  }

  .championName {
    color: #555e5e;
    font-size: 28px;
  }

  .championSubname {
    font-size: 20px;
    color: #555e5e;
  }

  .championStatistics {
    width: 60%;
  }


  .statisticsTitle{
    font-size: 18px;
    color: #555e5e;
  }

  .statisticColumn div {
    color: #c9aa71;
    font-weight: 700;
  }

  .statisticColumn .statisticValue{
    color: #555e5e;
  }

  .statisticColumn {
    width: 25%;
    float: left;
  }

  .skill{
    margin-top: 20px;
    padding-top: 10px;
    background: #f2f2f2;
  }

  .skillName{
    margin-bottom: 18px;
    font-size: 16px;
    color: #c9aa71;
    font-weight: 700;
  }

  .skillImg{
    width: 10%;
  }

  .skillDescription{
    width: 90%;
  }
</style>
