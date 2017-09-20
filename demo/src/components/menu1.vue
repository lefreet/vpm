<template>
  <div class="menu1">
    <h1>{{msg}}</h1>
    <a @click="$router.push('/menu2')" style="color: blue; text-decoration: underline; cursor: pointer;">click here to menu2</a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'this is menu1.'
      }
    }
  }
</script>