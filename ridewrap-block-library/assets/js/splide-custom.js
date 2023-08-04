/**
 * Splide.js Carousel Functionality and definitions.
 * https://splidejs.com/documents/
 */
document.addEventListener('DOMContentLoaded', function () {
  // Default values to use across all carousels.
  Splide.defaults = {
    perPage: 3,
    gap: '15px',
    perMove: 1,
  }

  /**
   * Splide Carousel definitions and instance checker.
   * 
   * Add to the below list each time a new Splide instance is created and used on page. Each instance needs to be unique.
   */

  // Generic splide checker.
  const splideExists = document.querySelector( '.splide' );

  // [1]
  const splideBikesWeProtect = document.querySelector( '#splide_bikes_we_protect' );
  
  // [2]
  const splideRidewrapFeatures = document.querySelector( '#splide_ridewrap_features' );

  // [3]
  const splideDegreesOfProtection = document.querySelector( '#splide_degrees_of_protection' );

  // [4]
  const splideProtectionBenefits = document.querySelector( '#splide_protection_benefits' );

  // [5]
  const splideSeenOn = document.querySelector( '#main-carousel' );

  // [6]
  const splideStories = document.querySelector( '#main-carousel-sec' );

  // [7]
  // const splideCart = document.querySelector( '#splide_you_may_be_interested_in...' );

  // [8]
  const splideProductsFrameProtection = document.querySelector( '#splide_frame_protection' );

  // [9]
  const splideTailored = document.querySelector( '#splide_tailored_protection' );

  // [10]
  const splideCovered = document.querySelector( '#splide_covered_protection' );

  // [11]
  const splideEssential = document.querySelector( '#splide_essential_protection' );

  // [12]
  const splideOnePiece = document.querySelector( '#splide_one_piece_protection' );

  if ( splideExists ) {

    // [1] Splide Carousel: Bikes we protect.
    if ( splideBikesWeProtect ) {
      var splideBWP = new Splide('#splide_bikes_we_protect', {
        breakpoints: {
          1575: {
            perPage: 3,
            width: '1000px',
          },
          1400: {
            perPage: 3,
            width: '875px',
          },
          1200: {
            destroy: true,
            perPage: 1,
          },
        },
      });
      splideBWP.mount();
    }

    // [2] Splide Carousel: Ridewrap features.
    if ( splideRidewrapFeatures ) {
      var splideDOP = new Splide('#splide_ridewrap_features', {
        perPage: 4,
        perMove: 1,
        gap: 0,
        breakpoints: {
          1575: {
            perPage: 3,
            width: '1000px',
          },
          1400: {
            perPage: 3,
            width: '875px',
          },
          1200: {
            destroy: true,
            perPage: 4,
            width: '1000px',
          },
        },
      });
      splideDOP.mount();
    }

    // [3] Splide Carousel: Degrees of protection.
    if ( splideDegreesOfProtection ) {
      var splideDOP = new Splide('#splide_degrees_of_protection', {
        breakpoints: {
          1575: {
            perPage: 3,
            width: '1000px',
          },
          1400: {
            perPage: 3,
            width: '875px',
          },
          1200: {
            destroy: true,
            perPage: 1,
          },
        },
      });
      splideDOP.mount();
    }

    // [4] Splide Carousel: Protection Benefits.
    if ( splideProtectionBenefits ) {
      var splidePB = new Splide('#splide_protection_benefits', {
        perPage: 4,
        perMove: 1,
        gap: 0,
        breakpoints: {
          1575: {
            perPage: 3,
            width: '1000px',
          },
          1400: {
            perPage: 3,
            width: '875px',
          },
          1200: {
            destroy: true,
            perPage: 4,
            width: '1000px',
          },
        },
      });
      splidePB.mount();
    }

    // [5] Splide Carousel: Seen on.
    if ( splideSeenOn ) {
      var splidemc = new Splide("#main-carousel", {
        pagination: true,
        perPage: 1,
        arrows: false,
        breakpoints: {
            600: {
                perPage: 1,
            },
            1250: {
                perPage: 1,
            },
            2000: {
                perPage: 1,
            },
        },
      });

      var thumbnails = document.getElementsByClassName("splide-desktop-thumbnail");
      var current;

      for (var i = 0; i < thumbnails.length; i++) {
        initThumbnail(thumbnails[i], i);
      }

      function initThumbnail(thumbnail, index) {
        thumbnail.addEventListener("click", function () {
          splidemc.go(index);
        });
      }

      splidemc.on("mounted move", function () {
        var thumbnail = thumbnails[splidemc.index];

        if (thumbnail) {
          if (current) {
            current.classList.remove("is-active");
          }

          thumbnail.classList.add("is-active");
          current = thumbnail;
        }
      });

      splidemc.mount();
    }

    // [6] Splide Carousel: Stories & News.
    if ( splideStories ) {
      var splidemcs = new Splide("#main-carousel-sec", {
        gap: '0px',
        pagination: true,
        perPage: 1,
        arrows: false,
        breakpoints: {
          600: {
              perPage: 1,
          },
          1250: {
              perPage: 1,
          },
          2000: {
              perPage: 1,
          },
        },
      });

      var thumbnailsSec = document.getElementsByClassName("splide-desktop-thumbnail-sec");
      var currentSec;

      for (var i = 0; i < thumbnailsSec.length; i++) {
        initThumbnailSec(thumbnailsSec[i], i);
      }

      function initThumbnailSec(thumbnailSec, index) {
        thumbnailSec.addEventListener("click", function () {
          splidemcs.go(index);
        });
      }

      splidemcs.on("mounted move", function () {
        var thumbnailSec = thumbnailsSec[splidemcs.index];

        if (thumbnailSec) {
          if (currentSec) {
            currentSec.classList.remove("is-active");
          }

          thumbnailSec.classList.add("is-active");
          currentSec = thumbnailSec;
        }
      });

      splidemcs.mount();
    }

    // [7] Splide Carousel: Cart.
    // if ( splideCart ) {
    //   var splideYMBII = new Splide('#splide_you_may_be_interested_in', {
    //     perPage: 4,
    //     perMove: 1,
    //     gap: 0,
    //     breakpoints: {
    //       1575: {
    //         perPage: 3,
    //         width: '1000px',
    //       },
    //       1400: {
    //         perPage: 3,
    //         width: '875px',
    //       },
    //       1200: {
    //         destroy: true,
    //         perPage: 4,
    //         width: '1000px',
    //       },
    //     },
    //   });
    //   splideYMBII.mount();
    // }   

    // [8] Splide Carousel: Products - Frame Protection.
    if ( splideProductsFrameProtection ) {
      var splidePFP = new Splide('#splide_frame_protection', {
        breakpoints: {
          1575: {
            perPage: 3,
            width: '1000px',
          },
          1400: {
            perPage: 3,
            width: '875px',
          },
          1200: {
            destroy: true,
            perPage: 1,
          },
        },
      });
      splidePFP.mount();
    }  

    // [9] Splide Carousel: Products - Tailored Protection.
    if ( splideTailored ) {
      var splidetp = new Splide('#splide_tailored_protection', {
        perPage: 2,
        breakpoints: {
          1575: {
            perPage: 2,
            width: '1000px',
          },
          1400: {
            perPage: 2,
            width: '875px',
          },
          1200: {
            destroy: true,
            perPage: 1,
          },
        },
      });
      splidetp.mount();
    }

    // [10] Splide Carousel: Products - Covered Protection.
    if ( splideCovered ) {
      var splidecp = new Splide('#splide_covered_protection', {
        perPage: 2,
        breakpoints: {
          1575: {
            perPage: 2,
            width: '1000px',
          },
          1400: {
            perPage: 2,
            width: '875px',
          },
          1200: {
            destroy: true,
            perPage: 1,
          },
        },
      });
      splidecp.mount();
    }

    // [11] Splide Carousel: Products - Essential Protection.
    if ( splideEssential ) {
      var splideep = new Splide('#splide_essential_protection', {
        perPage: 3,
        breakpoints: {
          1575: {
            perPage: 3,
            width: '1000px',
          },
          1400: {
            perPage: 3,
            width: '875px',
          },
          1200: {
            destroy: true,
            perPage: 1,
          },
        },
      });
      splideep.mount();
    }

    // [12] Splide Carousel: Products - One Piece Protection.
    if ( splideOnePiece ) {
      var splideop = new Splide('#splide_one_piece_protection', {
        perPage: 3,
        breakpoints: {
          1575: {
            perPage: 3,
            width: '1000px',
          },
          1400: {
            perPage: 3,
            width: '875px',
          },
          1200: {
            destroy: true,
            perPage: 1,
          },
        },
      });
      splideop.mount();
    }

  }
});
