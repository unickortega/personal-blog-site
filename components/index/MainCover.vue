<template>
    <div class="background">
      <img src="/background.jpeg" ref="image">
      <div class="gradient"></div>
    </div>
</template>
<script>
import jQuery from 'jquery'

export default {
    methods: {
        resizeImage(){
            var w = this.$refs['image'].width
            var h = this.$refs['image'].height
            var hquotient = h / w

            var wh = jQuery(this.$refs['image']).parent().width() * hquotient

            if(wh < jQuery(this.$refs['image']).parent().height()){
                jQuery(this.$refs['image']).css({
                height: '101%',
                width: 'initial'
                })
            }
            else{
                jQuery(this.$refs['image']).css({
                width: '101%',
                height: 'initial'
                })
            }
        }
    },
    mounted(){
        this.resizeImage()
        window.resizeables.push(this.resizeImage)
    }
}
</script>

<style lang="scss" scoped>
.background{
  height: 100vh;
  position: fixed;
  width: 100%;
  overflow: hidden;
  .gradient{
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
    background-image: linear-gradient(to bottom right, #5a5753, #214d63);
    opacity: 0.3;
  }
  img{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%,-50%);
    transition: 500ms ease all;
  }
}
</style>
