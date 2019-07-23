<template>
  <div class="row justify-center">
    <div class="col-6 q-mt-xl" style="max-width:400px">
      <q-card>
        <q-card-section>
          <div class="registerTitle text-center">Registro</div>
        </q-card-section>
        <q-card-section>
          <form class="q-gutter-md">
            <q-input
              type="text"
              filled
              label="Nombre de usuario"
              v-model="username"
            />

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
              ref="summoner"
              filled
              type="text"
              v-model="summoner"
              label="Nombre de invocador"
            />
            <q-separator />
            <q-card-actions class="justify-center">
              <div>
                <q-btn outline label="Enviar" type="submit" @click="enviar" color="primary" class="q-ml-sm"/>
                <q-btn outline label="Iniciar Sesion" color="primary" class="q-ml-sm" @click="$router.replace('/login')"/>
                <q-btn outline label="Oauth" type="reset" color="primary" class="q-mx-sm" />
              </div>
            </q-card-actions>
          </form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
  import { required, sameAs, minLength, email } from 'vuelidate/lib/validators'

  export default {
    data () {
      return {
        username: "",
        password: "",
        repeatPassword: "",
        summoner: "",
      };
    },
    validations: {
      username: {
        required
      },
      password:{
        required,
        minLength: minLength(6)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      },
      summoner: {
        required
      }
    },

    methods: {
      enviar() {
        fetch('http://localhost:3000/signIn', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({username: this.username, password: this.password, summoner: this.summoner})
            }
          ).then(response => {
            if (response.status == '200') {
              this.$router.push({path: '/home'})
            } else {
              error404
            }
          })
      }
    }
  }
</script>

<style scoped>
  .registerTitle{
    font-size: 24px;
    font-weight: 700;
  }

</style>
