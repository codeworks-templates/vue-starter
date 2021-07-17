<template>
  <header>
    <Navbar />
    <Test />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
body{
  background: url('https://s3-alpha-sig.figma.com/img/954c/c496/f7e7783a32d2f0e961d4f73a8dc25948?Expires=1626048000&Signature=D2ua8dyKQSN9Odqt5ayutWpSTu27lDzdt7xktn3CS6NJTaLvzKQ6EiPp7LiNqox2bp959Wzd3dft43wUJz4VCQEqQ9JtoNEyzKGgpPqfO44OLYIBB8XeN6vMUB62UgXDplcBucyL0RygQbwEMjvDNb5oPHNTFofVpuQKFt2ZecyPps6bW068Dmk5Lu7euzUk24~SMR309VNOibZ3wvttM1GmNbmCvwv0DpU~W6aLNKzsnzO0ViKBjhGre8Zc~ifexwcsNPYz8FtOPSQCqKwQhCrEq85x5wOpXjNuTqky3Bwte~-h9jIyJvbj4MwouZlVU6gLImndk~Mi4vflCy2yTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
}

</style>
