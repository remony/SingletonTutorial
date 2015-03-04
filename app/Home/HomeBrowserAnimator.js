/**
 * Creates the Factory
 */
var HomeBrowserAnimator = function() {

    this.inWindows = function () {
        if (navigator.userAgent.match(/Windows/i)){
            return true;
        }
        else {
            return false;
        }
    };

    this.backgroundAnimation = {
        '0'     : { 'background-color'  : '#03A9F4' },
        '500'   : { 'background-color'  : '#fff' },
        '2500'  : { 'background-color'  : '#fff' },
        '3000'  : { 'background-color'  : '#fff' },
        '4000'  : { 'background-color'  : '#fff' },
        ease    :'easeOutQuad'
    };

    this.arrowAnimations = {
        ease    : 'easeOutQuad',
        '20'    : {opacity: 1 },
        '600'  : { opacity : 0 }
    }
    this.videoAnimations = {
        ease    : 'easeOutQuad',
        '20'    : {opacity: 1 },
        '600'  : { opacity : 0 }
    }

    this.sunAnimation = {
        ease    : 'easeOutQuad',
        '20'    : { width :'80vw',  height : '80vw',    top : '10em', left: '10vw', 'background-color' : '#FFFF00', ease: 'easeOutSine' },
        '130'   : { width :'30vw',  height : '30vw',    top : '9em', left: '35vw', 'background-color' : '#FFFF00', ease: 'easeOutSine'},
        '1000'  : { width :'3em',   height : '3em',     top : '5em', left: '3vw', 'background-color' : '#FFFF00', ease: 'easeOutSine' },
        '2000'  : { width :'3em',   height : '3em',     left : '20vw', top: '2em', 'background-color' : '#FFEA00', ease: 'easeOutSine' },
        '3000'  : { width :'3em',   height : '3em',     left : '50vw', top: '0.5em', 'background-color' : '#F57F17', ease: 'easeOutSine' },
        '4000'  : { width :'3em',   height : '3em',     left : '60vw', top: '2em', 'background-color' : '#F57F17', opacity : '1.0', ease: 'easeOutSine' },
        '5000'  : { width :'3em',   height : '3em',     left : '80vw', top : '5em', 'background-color'  : '#FFEB3B', opacity : '0.0', ease : 'easeOutSine'},
        '5001'  : { width :'3em',   height : '3em',     top : '5em', left: '3vw', 'background-color' : '#FFF', ease: 'easeOutSine' },
        '6000'  : { width :'3em',   height : '3em',     left : '20vw', top: '2em', 'background-color' : '#fff', ease: 'easeOutSine' },
        '7000'  : { width :'3em',   height : '3em',     left : '50vw', top: '0.5em', 'background-color' : '#fff', ease: 'easeOutSine' },
        '8000'  : { width :'3em',   height : '3em',     left : '60vw', top: '2em', 'background-color' : '#fff', opacity : '1.0', ease: 'easeOutSine' },
        '9000'  : { width :'3em',   height : '3em',     left : '80vw', top : '5em', 'background-color'  : '#fff', opacity : '0.0', ease : 'easeOutSine'},
        '9001'  : { width :'3em',   height : '3em',     top : '5em', left: '3vw', 'background-color' : '#FFFF00', ease: 'easeOutSine' },
        '10000'  : { width :'3em',   height : '3em',     left : '20vw', top: '2em', 'background-color' : '#FFEA00', ease: 'easeOutSine' },
        '11000'  : { width :'3em',   height : '3em',     left : '50vw', top: '0.5em', 'background-color' : '#F57F17', ease: 'easeOutSine' },
        '12000'  : { width :'3em',   height : '3em',     left : '60vw', top: '2em', 'background-color' : '#F57F17', opacity : '1.0', ease: 'easeOutSine' },
        '13000'  : { width :'3em',   height : '3em',     left : '80vw', top : '5em', 'background-color'  : '#FFEB3B', opacity : '0.0', ease : 'easeOutSine'}
    };

    this.titleAnimation = {
        ease:'easeOutQuad',
        '420': { top: '0px', 'font-size': '3em', color: '#fff' },
        '350': { color: '#5d5d5d' },
        '200': { top: '5em', 'font-size': '6em', color: '#333', ease: 'linear' }
    };

    this.skyAnimation = {
        '0'   : {
            'background-color'  : '#81D4FA',
            opacity             : '0.0'
        },
        '220'  : {
            "background-color"  : '#81D4FA',
            opacity             : '0.0'
        },
        '320' : {
            "background-color"  : '#81D4FA',
            opacity             : '1.0'
        },
        '1000' : {
            "background-color"  : '#4FC3F7',
            opacity             : '1.0'
        },
        '2000' : {
            "background-color"  : '#29B6F6',
            opacity             : '1.0'
        },
        '2500' : {
            "background-color"  : '#03A9F4',
            opacity             : '1.0'
        },
        '3000' : {
            "background-color"  : '#D84315',
            opacity             : '1.0'
        },
        '3500' : {
            "background-color"  : '#BF360C',
            opacity             : '1.0'
        },
        '4000' : {
            "background-color"  : '#1A237E',
            opacity             : '1.0'
        },
        '5000' : {
            "background-color"  : '#333',
            opacity             : '1.0'
        },
        '6000'   : {
            'background-color'  : '#81D4FA',
            opacity             : '1.0'
        },
        '7000'  : {
            "background-color"  : '#81D4FA',
            opacity             : '1.0'
        },
        '8000' : {
            "background-color"  : '#81D4FA',
            opacity             : '1.0'
        },
        '9000' : {
            "background-color"  : '#4FC3F7',
            opacity             : '1.0'
        },
        '10000' : {
            "background-color"  : '#29B6F6',
            opacity             : '1.0'
        },
        '11000' : {
            "background-color"  : '#03A9F4',
            opacity             : '1.0'
        },
        '12000' : {
            "background-color"  : '#D84315',
            opacity             : '1.0'
        },
        '13000' : {
            "background-color"  : '#BF360C',
            opacity             : '1.0'
        },
        '14000' : {
            "background-color"  : '#1A237E',
            opacity             : '1.0'
        },
        '15000' : {
            "background-color"  : '#333',
            opacity             : '1.0'
        },
        ease  :'easeOutQuad'
    };

    this.sectionOne = {
        '0' : {
            opacity             : '1.0'
        },
        '400' : {
            opacity             : '1.0'
        },
        '600' : {
            opacity             : '1.0'
        },
        '900' : {
            opacity             : '1.0'
        },
        ease  :'easeOutQuad'
    };

    this.sectionTwo = {
        '0' : {
            opacity             : '1.0'
        },
        '1300' : {
            opacity             : '1.0'
        },
        '1600' : {
            opacity             : '1.0'
        },
        '2600' : {
            opacity             : '1.0'
        },
        ease  :'easeOutQuad'
    };


    this.sectionThree = {
        '0' : {
            opacity             : '1.0'
        },
        '2300' : {
            opacity             : '1.0'
        },
        '2600' : {
            opacity             : '1.0'
        },
        '3600' : {
            opacity             : '1.0'
        },
        ease  :'easeOutQuad'
    };

    this.sectionFour = {
        '0' : {
            opacity             : '1.0'
        },
        '3300' : {
            opacity             : '1.0'
        },
        '3600' : {
            opacity             : '1.0'
        },
        '4600' : {
            opacity             : '1.0'
        },
        ease  :'easeOutQuad'
    };

    this.sectionFive = {
        '0' : {
            opacity             : '1.0'
        },
        '4300' : {
            opacity             : '1.0'
        },
        '4600' : {
            opacity             : '1.0'
        },
        '5600' : {
            opacity             : '1.0'
        },
        ease  :'easeOutQuad'
    };

    this.quizAnimation = {
        '0' : {
            opacity             : '1.0'
        },
        '5300' : {
            opacity             : '1.0'
        },
        '5600' : {
            opacity             : '1.0'
        },
        ease  :'easeOutQuad'
    };

    this.navigationAnimations ={
        '20'    : {left: '-250px',
                    opacity: 0},
        '600'  : { left : '0em',
        opacity: 1}
    };

    return this;
};

// Injects the Dependencies (in a way that can be compressed)
HomeBrowserAnimator.$inject = [];

// Declares the module
angular.module('app.home.browser', [])
    .factory('HomeBrowserAnimator', HomeBrowserAnimator);