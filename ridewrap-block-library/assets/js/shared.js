/**
 * Shared.js.
 * 
 * Shared scripts for block functionality.
 * To contribute, prefix functions with `rw`.
 */
document.addEventListener('DOMContentLoaded', function () {

    /**
     * Utility to check if element is in viewport.
     */
    function rwCheckElementinView() {
        let frameProtectionEl = document.querySelectorAll('.wp-block-ridewrap-block-panel-slider')
        if ( frameProtectionEl ) {
            for ( let i = 0; i < frameProtectionEl.length; i++ ) {
                window.addEventListener('scroll', function(){
                    var distanceFromTop = frameProtectionEl[i].getBoundingClientRect().top;
                    // if element distance from the top is 0 or less, add the dynamic class.
                    if ( distanceFromTop <= 150 ) {
                        frameProtectionEl[i].classList.add( 'in_view' );
                    }
                }, true)
            }
        }
    }

    rwCheckElementinView();

    /**
     * Frame protection animation scroll in animation.
     */
    function  rwFrameProtectionAnimation() {
        let frameProtectionEl = document.querySelectorAll('.frame-protection-anim')
        if ( frameProtectionEl ) {
            for ( let i = 0; i < frameProtectionEl.length; i++ ) {
                window.addEventListener('scroll', function(){
                    var distanceFromTop = frameProtectionEl[i].getBoundingClientRect().top;
                    // if element distance from the top is 0 or less, add the dynamic class.
                    if ( distanceFromTop <= 250 ) {
                        frameProtectionEl[i].classList.add( 'first' );
                    } else {
                        frameProtectionEl[i].classList.remove( 'first' );
                    }
                }, true)
            }
        }
    }

    rwFrameProtectionAnimation();

    /**
     * Blog Post CTA Block slide in on scroll.
     */
    function postCTASlideIn() {
        let postCTA = document.querySelectorAll( '.wp-block-ridewrap-block-post-cta-sticky' )
        if ( postCTA ) {
            for ( let i = 0; i < postCTA.length; i++ ) {
                window.addEventListener('scroll', function(){
                    var distanceFromTop = this.scrollY;
                    if ( distanceFromTop >= 1100 ) {
                        postCTA[i].classList.add( 'in_view' );
                    } else {
                        postCTA[i].classList.remove( 'in_view' );
                    }
                }, true)
            }
        }
    }

    postCTASlideIn();

    /**
     * 
     */
    function bannerRevealSuperChecker() {
        let revealBtn = document.getElementById( 'js-banner-reveal-super-checker' );
        let superCheckerBlock = document.querySelector( '.block-super-checker' );

        if ( revealBtn ) {
            revealBtn.addEventListener('click', function () {
                superCheckerBlock.classList.toggle( 'block-super-checker-visible' );
            });
        }
    }

    bannerRevealSuperChecker();

});