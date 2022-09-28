<template>
  <div class="card">
    <div class="col m12 card-panel">
      <div class="col m4">
        <h1>Parking's List</h1>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="item">box-1</div>
    <div class="item">box-2</div>
    <div class="item">box-3</div>
    <div class="item">box-4</div>
    <div class="item">box-5</div>
    <div class="item">box-6</div>
    <div class="item">box-7</div>
    <div class="item">box-8</div>
    <div class="item">box-9</div>
    <div class="item">box-10</div>
    <div class="item">box-11</div>
    <div class="item">box-12</div>
    <div class="item">box-13</div>
    <div class="item">box-14</div>
    <div class="item">box-15</div>
    <div class="item">box-16</div>
    <div class="item">box-17</div>
    <div class="item">box-18</div>
    <div class="item">box-19</div>
    <div class="item">box-20</div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.wrapper{
  max-height: 200px;
  border: 1px solid #dddddd;
  display: flex;
  overflow-x: auto;
}

.wrapper::-webkit-scrollbar{
  width: 1;
}

.wrapper .item{
  min-width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: black;
  background-color: #dddddd;
  margin-right: 5px
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