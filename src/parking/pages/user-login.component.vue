<template>
  <div class="text-center p-4">
    <span  class="p-float-label p-4">
      <pv-input-text placeholder="Username" type="text" id="UserId" />
    </span>
    <span class="p-float-label p-4">
    <pv-input-text placeholder="Password" type="text" id="Password"/>
    </span>
    <router-link to="/UserProfile">
      <pv-button>Login</pv-button>
    </router-link>
    <span>
      <h1 class="p-4" style="font-size:1vw">Don't have a account?<a href="src/parking/pages/user-prof"> click here</a></h1>
    </span>
  </div>

</template>
<script>
export default{
  data(){

  }
}
</script>
