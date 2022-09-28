<template>
  <div class="card">
    <div class="col m12 card-panel">
      <div class="col m4">
        <h1>Parking's List</h1>
      </div>
    </div>
    <div class="profile">
      <img src="public/profile-image.jpg" alt="ProfileImg" style="width: 200px; height: 200px; margin: 30px">

    </div>
  </div>
  <div class="wrapper">
    <div class="item">parking-1</div>
    <div class="item">parking-2</div>
    <div class="item">parking-3</div>
    <div class="item">parking-4</div>
    <div class="item">parking-5</div>
    <div class="item">parking-6</div>
    <div class="item">parking-7</div>
    <div class="item">parking-8</div>
    <div class="item">parking-9</div>
    <div class="item">parking-10</div>
    <div class="item">parking-11</div>
    <div class="item">parking-12</div>
    <div class="item">parking-13</div>
    <div class="item">parking-14</div>
    <div class="item">parking-15</div>
    <div class="item">parking-16</div>
    <div class="item">parking-17</div>
    <div class="item">parking-18</div>
    <div class="item">parking-19</div>
    <div class="item">parking-20</div>
  </div>

  <div class="button">
    <pv-button label="Look for other options" class="p-button-raised p-button-rounded  mr-2" @click="openNew"/>
    <pv-button label="Parking Graph" class="p-button-raised p-button-rounded  mr-2" @click="openNew"/>
  </div>



</template>

<script>
export default {
}
</script>

<style scoped>
.wrapper{
  max-height: 400px;
  border: 1px solid #dddddd;
  display: flex;
  overflow-x: auto;
}

.wrapper .item{
  min-width: 400px;
  height: 350px;
  line-height: 200px;
  text-align: center;
  color: black;
  background-color: #dddddd;
  margin-right: 5px;
  margin-left: 5px;
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