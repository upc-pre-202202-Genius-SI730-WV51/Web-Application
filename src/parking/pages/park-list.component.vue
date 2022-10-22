<template>
  <div class="card">
    <div class="col m12 card-panel">
      <div class="col m4">
        <h1>Parking's List</h1>
      </div>
    </div>
  </div>
  <div class="wrapper" v-for="parkSpace in parkingSpaces">
    <pv-card class="m-2">
      <template #header>
        <img :alt="parkSpace.title" :src="parkSpace.image">
      </template>
      <template #title>
        <p>{{ parkSpace.name }}</p>
      </template>
      <template #content>
        <p>{{ parkSpace.location }}</p>
      </template>
    </pv-card>
  </div>

  <div class="button">
    <pv-button label="Look for other options" class="p-button-raised p-button-rounded  mr-2" @click="openNew"/>
    <pv-button label="Parking Graph" class="p-button-raised p-button-rounded mr-2" @click="openNew"/>

  </div>
</template>

<script>
import {ParkingApiService} from "../services/parking-api.service";

export default {
  name: "park-list.component",
  data() {
    return {
      parkingSpaces: [],
      parkingSpacesService: null
    };
  },
  created() {
    this.parkingSpacesService = new ParkingApiService();
    this.parkingSpacesService.getAll().then((response) => {
      this.parkingSpaces = response.data;
      console.log(this.parkingSpaces);
    });
  },

  methods: {
  }
}
</script>
<style scoped>
.wrapper{
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}


.button{
  margin: 15px;
}

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