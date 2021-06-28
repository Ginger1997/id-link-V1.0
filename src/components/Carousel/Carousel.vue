<template>
 <div id="demo" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>

  <!-- The slideshow -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img v-bind:src="require('../../assets/pictures/1.jpg')" alt="">
    </div>
    <div class="carousel-item">
       <img v-bind:src="require('../../assets/pictures/2.jpg')" alt="">
    </div>
    <div class="carousel-item">
       <img v-bind:src="require('../../assets/pictures/3.jpg')" alt="">
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>

</div>
</template>

<script>
export default {
    name:'Carousel',
    
}
</script>
<style src="./Carousel.css" lang="css"/>