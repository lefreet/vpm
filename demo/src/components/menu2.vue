<template>
  <div class="menu1">
    <h1>{{msg}}</h1>
    <a @click="$router.push('/menu1')" style="color: blue; text-decoration: underline; cursor: pointer;">click here to menu1</a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'this is menu2.'
      }
    }
  }
</script>