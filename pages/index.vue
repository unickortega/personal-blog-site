<template>
  <section class="">
    <main-cover/>
    <div class="cover-content">
      <h1 style="font-family: 'Lobster', cursive; position:relative; z-index: 13; color: white;">
        Uelmar Ortega
      </h1>
    </div>
    <fixed-background gradient="gray" source="/footer-background.jpg">
      <div class="container">
        <div class="col-md-5">
          <tract/>
        </div>
      </div>
    </fixed-background>
    <fixed-background gradient="violet" source="/3.jpg">
      <h1 style="font-family: 'Libre Barcode 39', cursive; color:white;">
        Sample
      </h1>
    </fixed-background>
    <div class="position-relative">
      <div class="bg-white min-vh">
        <div class="container">
          <blogs/>
        </div>
      </div>
      <div class="container-fluid bg-secondary" style="box-shadow: 0px -12px 20px -9px rgba(0, 0, 0, 0.19);">
        <div class="row">
          <div class="col-md-8 p-0">
            <photo-grid/>
          </div>
          <div class="col-md-4 p-0">
            <flat-card class="card-gray">
              <template v-slot:header>Lorem ipsum</template>
              Have you ever wanted to aesthetically group together multiple elements on a page? Have you ever wanted to look classy while you do it? Now you can!
            </flat-card>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainCover from '~/components/index/MainCover'
import FlatCard from '~/components/index/FlatCard'
import PhotoGrid from '~/components/index/PhotoGrid'
import Blogs from '~/components/index/Blogs'
import FixedBackground from '~/components/index/FixedBackground'
import Tract from '~/components/index/Tract'
export default {
  components:{
    FlatCard,
    MainCover,
    PhotoGrid,
    Blogs,
    FixedBackground,
    Tract
  },
}
</script>

<style lang="scss" scoped>
.cover-content {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.min-vh{
  min-height: 100vh;
}
</style>
