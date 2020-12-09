let app = new Vue(
  {
    el: '#wrapper',
    data: {
      currentImg: 0,
      images: ['img/pink.jpg', 'img/blue.jpg', 'img/purple.jpg', 'img/red.jpg'],
    },
    methods: {
      nextImage: function() {
        this.currentImg++;
        if (this.currentImg == this.images.length) {
          this.currentImg = 0;
        }
      },
      prevImage: function() {
        this.currentImg--;
        if (this.currentImg == -1) {
          this.currentImg = this.images.length - 1;
        }
      }
    }
  }
);
