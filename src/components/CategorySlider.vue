<template>
    <div class="category-slider">
        <!-- Start Single Category -->
        <a href="category.html" class="single-cat">
            <div class="icon">
                <img src="./assets/images/categories/car.svg" alt="#">
            </div>
            <h3>Vehicle</h3>
            <h5 class="total">35</h5>
        </a>
        <!-- End Single Category -->
        <!-- Start Single Category -->
        <a href="category.html" class="single-cat">
            <div class="icon">
                <img src="" alt="#">
            </div>
            <h3>Electronics</h3>
            <h5 class="total">22</h5>
        </a>
        <!-- End Single Category -->
        <!-- Start Single Category -->
        <a href="category.html" class="single-cat">
            <div class="icon">
                <img src="./assets/images/categories/matrimony.svg" alt="#">
            </div>
            <h3>Matrimony</h3>
            <h5 class="total">55</h5>
        </a>
        <!-- End Single Category -->
        <!-- Start Single Category -->
        <a href="category.html" class="single-cat">
            <div class="icon">
                <img src="./assets/images/categories/furniture.svg" alt="#">
            </div>
            <h3>Furnitures</h3>
            <h5 class="total">21</h5>
        </a>
        <!-- End Single Category -->
        <!-- Start Single Category -->
        <a href="category.html" class="single-cat">
            <div class="icon">
                <img src="./assets/images/categories/jobs.svg" alt="#">
            </div>
            <h3>Jobs</h3>
            <h5 class="total">44</h5>
        </a>
        <!-- End Single Category -->
        <!-- Start Single Category -->
        <a href="category.html" class="single-cat">
            <div class="icon">
                <img src="./assets/images/categories/real-estate.svg" alt="#">
            </div>
            <h3>Real Estate</h3>
            <h5 class="total">65</h5>
        </a>
        <!-- End Single Category -->
        <!-- Start Single Category -->
        <a href="category.html" class="single-cat">
            <div class="icon">
                <img src="./assets/images/categories/laptop.svg" alt="#">
            </div>
            <h3>Education</h3>
            <h5 class="total">35</h5>
        </a>
        <!-- End Single Category -->
        <!-- Start Single Category -->
        <a href="category.html" class="single-cat">
            <div class="icon">
                <img src="./assets/images/categories/hospital.svg" alt="#">
            </div>
            <h3>Health & Beauty</h3>
            <h5 class="total">22</h5>
        </a>
        <!-- End Single Category -->
        <!-- Start Single Category -->
        <a href="category.html" class="single-cat">
            <div class="icon">
                <img src="./assets/images/categories/tshirt.svg" alt="#">
            </div>
            <h3>Fashion</h3>
            <h5 class="total">25</h5>
        </a>
        <!-- End Single Category -->
        <!-- Start Single Category -->
        <a href="category.html" class="single-cat">
            <div class="icon">
                <img src="./assets/images/categories/education.svg" alt="#">
            </div>
            <h3>Education</h3>
            <h5 class="total">42</h5>
        </a>
        <!-- End Single Category -->
        <!-- Start Single Category -->
        <a href="category.html" class="single-cat">
            <div class="icon">
                <img src="./assets/images/categories/controller.svg" alt="#">
            </div>
            <h3>Gadgets</h3>
            <h5 class="total">32</h5>
        </a>
        <!-- End Single Category -->
        <!-- Start Single Category -->
        <a href="category.html" class="single-cat">
            <div class="icon">
                <img src="./assets/images/categories/travel.svg" alt="#">
            </div>
            <h3>Backpacks</h3>
            <h5 class="total">15</h5>
        </a>
        <!-- End Single Category -->
        <!-- Start Single Category -->
        <a href="category.html" class="single-cat">
            <div class="icon">
                <img src="./assets/images/categories/watch.svg" alt="#">
            </div>
            <h3>Watches</h3>
            <h5 class="total">65</h5>
        </a>
        <!-- End Single Category -->
    </div>
</template>

<script>
import { tns } from 'tiny-slider/src/tiny-slider';

export default {
  // Composant Vue.js
  mounted() {
    // Code de configuration de Tiny Slider
    tns({
      container: '.category-slider',
      items: 3,
      slideBy: 'page',
      autoplay: false,
      mouseDrag: true,
      gutter: 0,
      nav: false,
      controls: true,
      controlsText: ['<i class="lni lni-chevron-left"></i>', '<i class="lni lni-chevron-right"></i>'],
      responsive: {
          0: {
              items: 1,
          },
          540: {
              items: 2,
          },
          768: {
              items: 4,
          },
          992: {
              items: 5,
          },
          1170: {
              items: 6,
          }
      }
    });
  }
};
</script>