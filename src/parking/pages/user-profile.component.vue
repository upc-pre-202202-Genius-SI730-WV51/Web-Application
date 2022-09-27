<template>
  <div class="row">
    <div class="col m12 card-panel">
      <div class="col m4">
        <label>Nombre</label>
        <input type="text" v-model="name">
      </div>
    </div>
  </div>
</template>

<script>
import {FilterMatchMode} from "primevue/api";
import {TutorialsApiService} from "@/parking/services/tutorials-api.service";
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