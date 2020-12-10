let app = new Vue(
  {
    el: '#wrapper',
    data: {
      currentImg: 0,
      images: ['img/pink.jpg', 'img/blue.jpg', 'img/purple.jpg', 'img/red.jpg'],
      autoPlay:''
    },
    created: function () {
        this.autoplay = setInterval(() => {
          this.nextImage();
        },2000
      );
    },
    methods: {
      nextImageClick: () => {
        clearInterval(this.autoPlay);
        this.nextImage();
      },
      prevImageClick: () => {
        clearInterval(this.autoPlay);
        this.prevImage();
      },
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
      },
      dotsImage: function (dotsIndex) {
        this.currentImg = dotsIndex;
      }
    }
  }
);
