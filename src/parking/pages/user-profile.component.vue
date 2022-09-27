<template>
  <div class="row">
    <div class="col m12 card-panel">
      <div class="col m4">
        <label>Name</label>
        <input type="text" v-model="name">
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>