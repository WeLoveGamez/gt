<template>
  <div class="landing">
    <div style="margin: 4%">
      <h1>Landing 111 - THE GAME</h1>
    </div>
    <div class="card card-default w-75" style="margin-left: 12.5%">
      <div class="card-header header"><h2>Landing 111</h2></div>
      <div class="card-body">
        <div style="margin: 2%">
          Landing 111 is a browser game in which you are the captain of your own ship and you against hordes of non-terrestrial competitors have to
          enforce. Play alone against everyone or join one Space Fleet and conquer the universe together.
        </div>
        <div class="row align-items-end">
          <form @submit.prevent="register()" autocomplete="off" class="col-6">
            <div>No account yet? Register for free!</div>
            <div class="container">
              <button class="btn" type="submit">
                <a>Register for free!</a>
              </button>
            </div>
          </form>
          <form @submit.prevent="login()" autocomplete="off" class="col-6">
            <div class="m-4 alert alert-danger text-center" v-if="error">Username or password is not correct</div>
            <div class="container">
              <div><EmailInput placeholder="email" v-model="email" required></EmailInput></div>
              <div><PasswordInput placeholder="password" v-model="password" minlength="6" required></PasswordInput></div>
              <div v-if="!loggingIn">
                <button class="btn" type="submit" v-if="!loggingIn" style="margin-left: 0px">
                  <a v-if="!loggingIn">enter your ship.</a>
                </button>
              </div>
            </div>
            <div class="loader" v-if="loggingIn">
              <div class="inner one"></div>
              <div class="inner two"></div>
              <div class="inner three"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-header">
        <a href="https://discord.gg/G3UHhTaUNf">Join us on discord</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import * as API from '../API';
import router, { currentUser } from '../router';
import * as music from '../music';
import { EmailInput, PasswordInput } from 'custom-mbd-components';

const password = ref('');
const email = ref('');
const error = ref(false);
const loggingIn = ref(false);

if (currentUser) {
  router.push('/home');
}
music.ButtonSound(50);

async function login() {
  error.value = false;
  loggingIn.value = true;
  try {
    await API.login(email.value, password.value);
    email.value = '';
    password.value = '';
    router.push('/home');
  } catch (e) {
    await API.logout;
    error.value = true;
    console.error({ "couldn't login": e });
  } finally {
    password.value = '';
    loggingIn.value = false;
  }
}
function register() {
  router.push('/register');
}
</script>

<style lang="scss" scoped>
* {
  color: white;
}

// card

.card {
  background-image: url(/img/uiol/spaceshipinside.png);
  background-size: cover;
}
.header {
  background: rgba(39, 39, 39, 0.5);
}
.card-body {
  background: rgba(39, 39, 39, 0.5);
}
// Buttons
.container .btn {
  position: relative;
  width: 100%;
  height: 55px;
  margin: 20px;
}

.container .btn a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  color: #fff;
  z-index: 1;
  font-size: 400;
  font-weight: 300;
  letter-spacing: 1px;
  text-decoration: none;
  overflow: hidden;
  transition: 0.2s;
  backdrop-filter: blur(15px);
}

.container .btn:hover a {
  letter-spacing: 3px;
}

.container .btn a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
  transform: skewX(45deg) translateX(0);
  transition: 0.2s;
}

.container .btn:hover a::before {
  transform: skewX(45deg) translateX(200%);
}
.container .btn::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -5px;
  width: 30px;
  height: 10px;
  background: #f00;
  border-radius: 10px;
  transition: 0.2s;
  transition-delay: 0s;
}
.container .btn:hover::before {
  bottom: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
  transition-delay: 0.1s;
}

.container .btn::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -5px;
  width: 30px;
  height: 10px;
  background: #f00;
  border-radius: 10px;
  transition: 0.2s;
  transition-delay: 0s;
}
.container .btn:hover::after {
  top: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
  transition-delay: 0.2 s;
}

.container .btn:nth-child(1)::before,
.container .btn:nth-child(1)::after {
  background: #2bd2ff;
  box-shadow: 0 0 5px #2bd2ff, 0 0 15px #2bd2ff, 0 0 30px #2bd2ff, 0 0 60px #2bd2ff;
}
// footer
.footer {
  color: white;
  background-color: rgba(255, 255, 255, 0.103);
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
