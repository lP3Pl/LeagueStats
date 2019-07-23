<template>
  <div class="row justify-center">
    <div class="col-6 q-mt-xl" style="max-width: 400px">
      <q-card>
        <q-card-section>
          <div class="loginTitle text-center">Iniciar Sesion</div>
        </q-card-section>
        <q-card-section>
          <form class="q-gutter-md">
            <q-input
              ref="username"
              filled
              v-model="username"
              label="Nombre de usuario"
            />
            <q-input
              ref="password"
              filled
              type="password"
              v-model="password"
              label="Contraseña"
              lazy-rules
                />
            <q-separator />
            <q-card-actions class="justify-center">
              <div>
                <q-btn outline label="Enviar" type="submit" color="primary" @click="enviar" class="q-ml-sm"/>
                <q-btn outline label="Crear Cuenta" color="primary" class="q-ml-sm" @click="$router.replace('/register')"/>
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
  import { LocalStorage, SessionStorage } from 'quasar'

  export default {
    data() {
      return {
        username: '',
        password: '',
      }
    },

    methods: {
      enviar() {
        console.log(this.username, this.password)
        let data = JSON.stringify({username: this.username, password: this.password});
        let url = 'http://localhost:3000/login';
        this.$axios.post(url, data, {
          headers: {
            'Content-Type': 'application/json',
          }
        })
          .then(response =>  {
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
      },
    }
  }
</script>

<style scoped>
  .loginTitle{
    font-weight: 700;
    font-size: 24px;
  }
</style>
