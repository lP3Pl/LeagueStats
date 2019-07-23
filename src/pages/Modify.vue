<template>
  <div class="row justify-center">
    <div class="col-6 q-mt-xl" style="max-width:400px">
      <q-card>
        <q-card-section>
          <div class="modifyTitle text-center">Modificación de Perfil</div>
        </q-card-section>
        <q-card-section>
          <form class="q-gutter-md">

            <q-input
              ref="password"
              filled
              type="password"
              v-model="password"
              label="Contraseña"
            />

            <q-input
              ref="repeatPassword"
              filled
              type="password"
              v-model="repeatPassword"
              label="Repetir Contraseña"
            />

            <q-input
              ref="invocator"
              filled
              type="text"
              v-model="summoner"
              label="Nombre de invocador"
            />
            <q-separator />
            <q-card-actions class="justify-center">
              <div>
                <q-btn outline label="Guardar" type="submit" @click="onSubmit" color="primary" class="q-ml-sm"/>
              </div>
            </q-card-actions>
          </form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
  import { required, sameAs, minLength } from 'vuelidate/lib/validators'

  export default {
    data () {
      return {
        password: '',
        repeatPassword: '',
        summoner: '',

      }
    },
    validations: {
      password:{
        required,
        minLength: minLength(6)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      }
    },

    methods: {
      onSubmit () {
        this.$v.password.touch();

        if(this.$v.password.$error) {
          this.$q.notify("Please review fields again")
          return;
        }

      }
    }
  }
</script>

<style scoped>
  .modifyTitle{
    font-weight: 700;
    font-size: 24px;
  }
</style>
