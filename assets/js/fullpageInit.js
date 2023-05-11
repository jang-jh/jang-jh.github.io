$(document).ready(function () {

    function fullpage_init() {

        $('#contents').fullpage({
            //options here
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            autoScrolling: true,
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['main', 'about me', 'tech&skills', 'portfolio','greeting'],
            showActiveTooltip: true,
            scrollingSpeed: 1000,
            scrollOverflow: true,
            fixedElements: '#header, .footer',
            responsiveWidth: 1000, //1000px 이하에서 fullpage 해제
            responsiveHeight: 969,
        });
    }
    fullpage_init();
});