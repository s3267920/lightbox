(function() {
  let imgData = [
    { id: 0, src: 'https://images.unsplash.com/photo-1540153448870-af780343526e?w=800' },
    { id: 1, src: 'https://images.unsplash.com/photo-1505259839540-04105fcd8ba3?w=800' },
    { id: 2, src: 'https://images.unsplash.com/photo-1501707305551-9b2adda5e527?w=800' },
    { id: 3, src: 'https://images.unsplash.com/photo-1551725301-5183dc1dbb83?w=800' },
    { id: 4, src: 'https://images.unsplash.com/photo-1522162363424-d29ded2ad958?w=800' },
    { id: 5, src: 'https://images.unsplash.com/photo-1442522772768-9032b6d10e3e?w=800' }
  ];
  new Vue({
    el: '#app',
    data() {
      return {
        imgList: imgData,
        currentImgIndex: 0,
        modalDisplay: false
      };
    },
    computed: {
      totalImg() {
        return this.imgList.length;
      },
      currentImg() {
        return this.imgList[this.currentImgIndex].src;
      }
    },
    methods: {
      goForward() {
        if (this.currentImgIndex === this.totalImg - 1) {
          this.currentImgIndex = 0;
        } else this.currentImgIndex = this.currentImgIndex + 1;
      },
      goBack() {
        if (this.currentImgIndex === 0) {
          this.currentImgIndex = this.totalImg - 1;
        } else {
          this.currentImgIndex = this.currentImgIndex - 1;
        }
      }
    }
  });
})(Vue);
