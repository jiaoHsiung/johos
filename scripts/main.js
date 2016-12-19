angular.module("joho", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/en');
    $urlRouterProvider.when('/en', '/en/0/0');

    $stateProvider.state('en', {//这是第一层路由
        url: '/en',
        templateUrl: 'en/en.html',
        controller: 'module2Ctrl',
    }).state('en.0', {// 这是第二层路由
        url: '/0/0',
        templateUrl: 'en/0/0.html',
        controller: 'module1Ctrl',
    }).state('en.1', {// 这是第二层路由
        url: '/1',
        templateUrl: 'en/1/1.html',

    }).state('en.1.0', {// 这是第三层路由
        url: '/0',
        templateUrl: 'en/1/01.html',
        controller: 'module21Ctrl',
    }).state('en.1.1', {// 这是第三层路由
        url: '/1',
        templateUrl: 'en/1/02.html',
        controller: 'module202Ctrl',
    }).state('en.1.2', {// 这是第三层路由
        url: '/2',
        templateUrl: 'en/1/03.html',
        controller: 'module22Ctrl',
    }).state('en.1.3', {// 这是第三层路由
        url: '/3',
        templateUrl: 'en/1/04.html',
        controller: 'module23Ctrl',
    }).state('en.1.4', {// 这是第三层路由
        url: '/4',
        templateUrl: 'en/1/05.html',
        controller: 'module24Ctrl',
    }).state('en.2', {// 这是第二层路由
        url: '/2',
        templateUrl: 'en/2/2.html',

    }).state('en.2.0', {// 这是第三层路由
        url: '/0',
        templateUrl: 'en/2/01.html',
        controller: 'module31Ctrl',
    }).state('en.2.1', {// 这是第三层路由
        url: '/1',
        templateUrl: 'en/2/02.html',
        controller: 'module32Ctrl',
    }).state('en.2.2', {// 这是第三层路由
        url: '/2',
        templateUrl: 'en/2/03.html',
        controller: 'module33Ctrl',
    }).state('en.2.3', {// 这是第三层路由
        url: '/3',
        templateUrl: 'en/2/04.html',
        controller: 'module34Ctrl',
    }).state('en.3', {// 这是第二层路由
        url: '/3',
        templateUrl: 'en/3/3.html',

    }).state('en.3.0', {// 这是第三层路由
        url: '/0',
        templateUrl: 'en/3/01.html',
        controller: 'module41Ctrl',
    }).state('en.3.1', {// 这是第三层路由
        url: '/1',
        templateUrl: 'en/3/02.html',
        controller: 'module42Ctrl',
    }).state('en.3.2', {// 这是第三层路由
        url: '/2',
        templateUrl: 'en/3/03.html',
        controller: 'module43Ctrl',
    }).state('en.3.3', {// 这是第三层路由
        url: '/3',
        templateUrl: 'en/3/04.html',
        controller: 'module44Ctrl',
    }).state('en.3.4', {// 这是第三层路由
        url: '/4',
        templateUrl: 'en/3/05.html',
        controller: 'module45Ctrl',
    }).state('en.3.5', {// 这是第三层路由
        url: '/5',
        templateUrl: 'en/3/06.html',
        controller: 'module46Ctrl',
    }).state('en.3.6', {// 这是第三层路由
        url: '/6',
        templateUrl: 'en/3/07.html',
        controller: 'module47Ctrl',
    }).state('en.3.7', {// 这是第三层路由
        url: '/7',
        templateUrl: 'en/3/08.html',
        controller: 'module48Ctrl',
    }).state('en.4', {// 这是第三层路由
        url: '/4',
        templateUrl: 'en/4/4.html',
    }).state('en.4.0', {// 这是第三层路由
        url: '/0',
        templateUrl: 'en/4/01.html',
        controller: 'module51Ctrl',
    }).state('en.4.1', {// 这是第三层路由
        url: '/1',
        templateUrl: 'en/4/02.html',
        controller: 'module52Ctrl',
    }).state('en.4.2', {// 这是第三层路由
        url: '/2',
        templateUrl: 'en/4/03.html',
        controller: 'module53Ctrl',
    }).state('en.5', {// 这是第三层路由
        url: '/5',
        templateUrl: 'en/5/5.html',
    }).state('en.5.0', {// 这是第三层路由
        url: '/0',
        templateUrl: 'en/5/01.html',
        controller: 'module61Ctrl',
    }).state('en.5.1', {// 这是第三层路由
        url: '/1',
        templateUrl: 'en/5/02.html',
        controller: 'module62Ctrl',
    }).state('en.5.2', {// 这是第三层路由
        url: '/2',
        templateUrl: 'en/5/03.html',
        controller: 'module63Ctrl',
    }).state('en.8', {// 这是第三层路由
        url: '/8',
        templateUrl: 'en/8/8.html',
    }).state('en.8.0', {// 这是第三层路由
        url: '/0',
        templateUrl: 'en/8/01.html',
        controller: 'module91Ctrl',
    }).state('en.8.1', {// 这是第三层路由
        url: '/1',
        templateUrl: 'en/8/02.html',
        controller: 'module92Ctrl',
    }).state('en.8.2', {// 这是第三层路由
        url: '/2',
        templateUrl: 'en/8/03.html',
        controller: 'module93Ctrl',
    }).state('en.8.3', {// 这是第三层路由
        url: '/3',
        templateUrl: 'en/8/04.html',
        controller: 'module94Ctrl',
    }).state('en.8.4', {// 这是第三层路由
        url: '/4',
        templateUrl: 'en/8/05.html',
        controller: 'module95Ctrl',
    }).state('en.8.5', {// 这是第三层路由
        url: '/5',
        templateUrl: 'en/8/06.html',
        controller: 'module96Ctrl',
    })
}).controller('JOHOCtrl', function ($rootScope, $location, $http, $scope,$timeout) {
    $rootScope.pageIndex = 1;
    $rootScope.chapterIndex = 0;
    $rootScope.scrollIndex = 1;
    $rootScope.pageNum = 1;
    $rootScope.chapter = 0;
    $rootScope.maskAnimate = function () {
        var animation = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        animation.setAttribute("attributeType", "XML");
        animation.setAttribute("attributeName", "points");
        animation.setAttribute("dur", "350ms");
        animation.setAttribute("fill", "freeze");
        animation.setAttribute("begin", "indefinite");
        return animation;
    }
    $rootScope.pageUpFlag = false;
    $rootScope.pageDownFlag = true;
    $rootScope.navigationChapters = [
        {
            index: '1',
            title1: ['o', 'ff'],
            title2: ['t', 'o'],
            title3: ['b', 'r', 'a', 'z', 'i', 'l'],
            page: [1, 2, 3, 4, 5]
        },
        {
            index: '2',
            title1: ['s', 'a', 'o'],
            title2: ['p', 'a', 'u', 'l', 'o'],
            page: [1, 2, 3, 4]
        },
        {
            index: '3',
            title1: ['o', 'n'],
            title2: ['d', 'u', 's', 't', 'y'],
            title3: ['r', 'o', 'a', 'd', 's'],
            page: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        {
            index: '4',
            title1: ['f', 'a', 'z', 'e', 'n', 'd', 'a1'],
            title2: ['s', 'a', 'o'],
            title3: ['s', 'i', 'l', 'v', 'e', 's1', 't', 'r', 'e1'],
            page: [1, 2, 3]
        },
        {
            index: '5',
            title1: ['t', 'h', 'e'],
            title2: ['j', 'o', 'h', 'n', '\'', 's'],
            title3: ['b', 'e', 'a', 'n'],
            page: [1, 2, 3]
        },
        {
            index: '8',
            title1: ['b', 'u', 'y'],
            title2: ['j', 'o', 'h', 'n', '\'', 's'],
            page: [1, 2, 3, 4, 5]
        }

    ]
    $timeout(function(){
        $('.microsite-content audio').get(0).play();
    },800)
    var soundFlag = true;
    $rootScope.toggleSound = function(){
        if(soundFlag){
            $('.switch').text('off');
            $('.microsite-content audio').get(0).pause();
            soundFlag=false;
        }
        else{
            $('.switch').text('on');
            $('.microsite-content audio').get(0).play();
            soundFlag=true;

        }
    }
}).directive('ngMouseWheelUp', function ($rootScope) {
    return function (scope, element, attrs) {
        element.bind("DOMMouseScroll mousewheel onmousewheel", function (event) {
            // cross-browser wheel delta
            var event = window.event || event; // old IE support
            var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
            if (delta > 0 && $rootScope.pageUpFlag) {
                $rootScope.pageUpFlag = false;
                scope.$apply(function () {
                    scope.$eval(attrs.ngMouseWheelUp);
                });

                // for IE
                event.returnValue = false;
                // for Chrome and Firefox
                if (event.preventDefault) {
                    event.preventDefault();
                }


            }
        });
    };
}).directive('ngMouseWheelDown', function ($rootScope) {
    return function (scope, element, attrs) {
        element.bind("DOMMouseScroll mousewheel onmousewheel", function (event) {
            // cross-browser wheel delta
            var event = window.event || event; // old IE support
            var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
            if (delta < 0 && $rootScope.pageDownFlag) {
                $rootScope.pageDownFlag = false;
                scope.$apply(function () {
                    scope.$eval(attrs.ngMouseWheelDown);
                });

                // for IE
                event.returnValue = false;
                // for Chrome and Firefox
                if (event.preventDefault) {
                    event.preventDefault();
                }

            }
        });
    };
}).run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$locationChangeStart', function (event, location) {
        //获取当前网址的子路径,即#后面的路径
        var currentUrl = $location.url();
        if(currentUrl!="/en/0/0"&&currentUrl!="/en/1/0"){
            if($('audio').attr('src')!="assets/audio/Traveling Light.mp3")
                $('audio').attr({'src':'assets/audio/Traveling Light.mp3','loop':'loop'}).get(0).play();
        }
        $rootScope.prevPage = function () {
            if (currentUrl == "/en/1/0") {
                $('.prev-page').attr('href', "#/en/0/0");
                $location.path('/en/0/0');
                $('audio').attr({'src':'assets/audio/Loud-birds-early-morning.mp3','loop':'loop'}).get(0).play();
            }
            else if (currentUrl == "/en/1/1") {
                $('.prev-page').attr('href', "#/en/1/0");
                $location.path('/en/1/0');
                $('audio').attr({'src':'assets/audio/airport.mp3','loop':'loop'}).get(0).play();
            }
            else if (currentUrl == "/en/1/2") {
                $('.prev-page').attr('href', "#/en/1/1");
                $location.path('/en/1/1');
            }
            else if (currentUrl == "/en/1/3") {
                $('.prev-page').attr('href', "#/en/1/2");
                $location.path('/en/1/2');
            }
            else if (currentUrl == "/en/1/4") {
                $('.prev-page').attr('href', "#/en/1/3");
                $location.path('/en/1/3');
            }
            else if (currentUrl == "/en/2/0") {
                $('.prev-page').attr('href', "#/en/1/4");
                $location.path('/en/1/4');
            }
            else if (currentUrl == "/en/2/1") {
                $('.prev-page').attr('href', "#/en/2/0");
                $location.path('/en/2/0');
            }
            else if (currentUrl == "/en/2/2") {
                $('.prev-page').attr('href', "#/en/2/1");
                $location.path('/en/2/1');
            }
            else if (currentUrl == "/en/2/3") {
                $('.prev-page').attr('href', "#/en/2/2");
                $location.path('/en/2/2');
            }
            else if (currentUrl == "/en/3/0") {
                $('.prev-page').attr('href', "#/en/2/3");
                $location.path('/en/2/3');
            }
            else if (currentUrl == "/en/3/1") {
                $('.prev-page').attr('href', "#/en/3/0");
                $location.path('/en/3/0');
            }
            else if (currentUrl == "/en/3/2") {
                $('.prev-page').attr('href', "#/en/3/1");
                $location.path('/en/3/1');
            }
            else if (currentUrl == "/en/3/3") {
                $('.prev-page').attr('href', "#/en/3/2");
                $location.path('/en/3/2');
            }
            else if (currentUrl == "/en/3/4") {
                $('.prev-page').attr('href', "#/en/3/3");
                $location.path('/en/3/3');
            }
            else if (currentUrl == "/en/3/5") {
                $('.prev-page').attr('href', "#/en/3/4");
                $location.path('/en/3/4');
            }
            else if (currentUrl == "/en/3/6") {
                $('.prev-page').attr('href', "#/en/3/5");
                $location.path('/en/3/5');
            }
            else if (currentUrl == "/en/3/7") {
                $('.prev-page').attr('href', "#/en/3/6");
                $location.path('/en/3/6');
            }
            else if (currentUrl == "/en/4/0") {
                $('.prev-page').attr('href', "#/en/3/7");
                $location.path('/en/3/7');
            }
            else if (currentUrl == "/en/4/1") {
                $('.prev-page').attr('href', "#/en/4/0");
                $location.path('/en/4/0');
            }
            else if (currentUrl == "/en/4/2") {
                $('.prev-page').attr('href', "#/en/4/1");
                $location.path('/en/4/1');
            }
            else if (currentUrl == "/en/5/0") {
                $('.prev-page').attr('href', "#/en/4/2");
                $location.path('/en/4/2');
            }
            else if (currentUrl == "/en/5/1") {
                $('.prev-page').attr('href', "#/en/5/0");
                $location.path('/en/5/0');
            }
            else if (currentUrl == "/en/5/2") {
                $('.prev-page').attr('href', "#/en/5/1");
                $location.path('/en/5/1');
            }
            else if (currentUrl == "/en/8/0") {
                $('.prev-page').attr('href', "#/en/5/2");
                $location.path('/en/5/2');
            }
            else if (currentUrl == "/en/8/1") {
                $('.prev-page').attr('href', "#/en/8/0");
                $location.path('/en/8/0');
            }
            else if (currentUrl == "/en/8/2") {
                $('.prev-page').attr('href', "#/en/8/1");
                $location.path('/en/8/1');
            }
            else if (currentUrl == "/en/8/3") {
                $('.prev-page').attr('href', "#/en/8/2");
                $location.path('/en/8/2');
            }
            else if (currentUrl == "/en/8/4") {
                $('.prev-page').attr('href', "#/en/8/3");
                $location.path('/en/8/3');
            }
            else if (currentUrl == "/en/8/5") {
                $('.prev-page').attr('href', "#/en/8/4");
                $location.path('/en/8/4');
            }
        }
        $rootScope.nextPage = function () {
            if (currentUrl == "/en/0/0") {
                $('.next-page').attr('href', "#/en/1/0");
                $location.path('/en/1/0');
                $('audio').attr({'src':'assets/audio/airport.mp3','loop':'loop'}).get(0).play();
            }
            else if (currentUrl == "/en/1/0") {
                $('.next-page').attr('href', "#/en/1/1");
                $location.path('/en/1/1');
            }
            else if (currentUrl == "/en/1/1") {
                $('.next-page').attr('href', "#/en/1/2");
                $location.path('/en/1/2');
            }
            else if (currentUrl == "/en/1/2") {
                $('.next-page').attr('href', "#/en/1/3");
                $location.path('/en/1/3');
            }
            else if (currentUrl == "/en/1/3") {
                $('.next-page').attr('href', "#/en/1/4");
                $location.path('/en/1/4');
            }
            else if (currentUrl == "/en/1/4") {
                $('.next-page').attr('href', "#/en/2/0");
                $location.path('/en/2/0');
            }
            else if (currentUrl == "/en/2/0") {
                $('.next-page').attr('href', "#/en/2/1");
                $location.path('/en/2/1');
            }
            else if (currentUrl == "/en/2/1") {
                $('.next-page').attr('href', "#/en/2/2");
                $location.path('/en/2/2');
            }
            else if (currentUrl == "/en/2/2") {
                $('.next-page').attr('href', "#/en/2/3");
                $location.path('/en/2/3');
            }
            else if (currentUrl == "/en/2/3") {
                $('.next-page').attr('href', "#/en/3/0");
                $location.path('/en/3/0');
            }
            else if (currentUrl == "/en/3/0") {
                $('.next-page').attr('href', "#/en/3/1");
                $location.path('/en/3/1');
            }
            else if (currentUrl == "/en/3/1") {
                $('.next-page').attr('href', "#/en/3/2");
                $location.path('/en/3/2');
            }
            else if (currentUrl == "/en/3/2") {
                $('.next-page').attr('href', "#/en/3/3");
                $location.path('/en/3/3');
            }
            else if (currentUrl == "/en/3/3") {
                $('.next-page').attr('href', "#/en/3/4");
                $location.path('/en/3/4');
            }
            else if (currentUrl == "/en/3/4") {
                $('.next-page').attr('href', "#/en/3/5");
                $location.path('/en/3/5');
            }
            else if (currentUrl == "/en/3/5") {
                $('.next-page').attr('href', "#/en/3/6");
                $location.path('/en/3/6');
            }
            else if (currentUrl == "/en/3/6") {
                $('.next-page').attr('href', "#/en/3/7");
                $location.path('/en/3/7');
            }
            else if (currentUrl == "/en/3/7") {
                $('.next-page').attr('href', "#/en/4/0");
                $location.path('/en/4/0');
            }
            else if (currentUrl == "/en/4/0") {
                $('.next-page').attr('href', "#/en/4/1");
                $location.path('/en/4/1');
            }
            else if (currentUrl == "/en/4/1") {
                $('.next-page').attr('href', "#/en/4/2");
                $location.path('/en/4/2');
            }
            else if (currentUrl == "/en/4/2") {
                $('.next-page').attr('href', "#/en/5/0");
                $location.path('/en/5/0');
            }
            else if (currentUrl == "/en/5/0") {
                $('.next-page').attr('href', "#/en/5/1");
                $location.path('/en/5/1');
            }
            else if (currentUrl == "/en/5/1") {
                $('.next-page').attr('href', "#/en/5/2");
                $location.path('/en/5/2');
            }
            else if (currentUrl == "/en/5/2") {
                $('.next-page').attr('href', "#/en/8/0");
                $location.path('/en/8/0');
            }
            else if (currentUrl == "/en/8/0") {
                $('.next-page').attr('href', "#/en/8/1");
                $location.path('/en/8/1');
            }
            else if (currentUrl == "/en/8/1") {
                $('.next-page').attr('href', "#/en/8/2");
                $location.path('/en/8/2');
            }
            else if (currentUrl == "/en/8/2") {
                $('.next-page').attr('href', "#/en/8/3");
                $location.path('/en/8/3');
            }
            else if (currentUrl == "/en/8/3") {
                $('.next-page').attr('href', "#/en/8/4");
                $location.path('/en/8/4');
            }
            else if (currentUrl == "/en/8/4") {
                $('.next-page').attr('href', "#/en/8/5");
                $location.path('/en/8/5');
            }
        }
    })

}]);

var navControlFlag = true;
var flag = true;
angular.module("joho").controller('module1Ctrl', function ($rootScope, $scope, $timeout) {
    $('.nav-overlay').css('opacity', '0');
    $ani = $rootScope.maskAnimate();
    var svg = $('.mask polygon');
    svg.append($ani);
    $('.mask polygon animate').attr('values', '0 0,1 0,1 0,0 0;0 0,1 0,1 1,0 .4;0 0,1 0,1 1,0 1').get(0).beginElement();
    $('#bg').delay(400).animate({
        'opacity': '1'
    }, 300, function () {
        $('.mask').css('z-index', '-1');
        $('#bg polygon').append($ani);
        $('#bg polygon animate').attr('values', '0 0,1 0,1 0,0 0;0 0,1 0,1 .4,0 1;0 0,1 0,1 1,0 1').get(0).beginElement();
        $timeout(function () {
            $('#bg').remove();
        }, 500)
        $('.bg').delay(520).animate({
            'opacity': '1',
            'height': '100%'
        }, 200, function () {
            $('.page-landing').animate({
                'opacity': '1'
            }, 300, function () {
                $timeout(function () {
                    changeX($('.joho-logo .joho-top'));
                    changeX($('.horning-bottom'));
                }, 200)
                $timeout(function () {
                    var len1 = $('.nav-box .regular:eq(0) span').length;
                    for (var j = 0; j < len1; j++) {
                        changeShow(j, $('.nav-box .regular:eq(0) span').eq(j), $('.nav-box .offset:eq(0) span').eq(j));
                    }
                    for (var j = 0; j < len1; j++) {
                        changeShow(j, $('.nav-box .regular:eq(1) span').eq(j), $('.nav-box .offset:eq(1) span').eq(j));
                    }
                    for (var j = 0; j < len1; j++) {
                        changeShow(j, $('.nav-box .regular:eq(2) span').eq(j), $('.nav-box .offset:eq(2) span').eq(j));
                    }
                    $('.copy-contents').delay(200).animate({
                        'opacity': '1',
                    }, 300)
                }, 200)
            })
        })
    })
    $('.m0 .nav-container a.nav-box').each(function (index) {
        $(this).mouseenter(function () {
            $('.m0 .nav-container .copy').eq(index).css('color', 'rgb(94,99,68)');
            $('.nav-container .nav-box .offset').eq(index).css({
                'transform': 'translateX(0) translateY(0)',
                'transition': 'all 500ms',
                '-webkit-transition': 'all 500ms',
                '-moz-transition': 'all 500ms',
                '-ms-transition': 'all 500ms',
                '-o-transition': 'all 500ms',
            })
            $('.mask-hover polygon animate').eq(index).attr('values', '0 0,1 0,1 0,0 0;0 0,1 0,1 1,0 .6;0 0,1 0,1 1,0 1').get(0).beginElement();

        })
    })
    $('.m0 .nav-container a.nav-box').each(function (index) {
        $(this).mouseleave(function () {
            $('.m0 .nav-container .copy').eq(index).css('color', '#fff');
            $('.nav-container .nav-box .offset').eq(index).css({
                'transform': 'translateX(5px) translateY(5px)',
                '-moz-transform': 'translateX(5px) translateY(5px)',
                'transition': 'all 500ms',
                '-webkit-transition': 'all 500ms',
                '-moz-transition': 'all 500ms',
                '-ms-transition': 'all 500ms',
                '-o-transition': 'all 500ms',
            })
            $('.mask-hover polygon animate').eq(index).attr('values', '0 0,1 0,1 1,0 1;0 0,1 0,1 .6,0 1;0 0,1 0,1 0,0 0').get(0).beginElement();
        })
    })
    $rootScope.pageDownFlag = true;
})
function maskShow($rootScope, $timeout, n) {
    $ani = $rootScope.maskAnimate();
    var svg = $('.mask polygon');
    svg.append($ani);
    if (n == 0)
        $('.mask polygon animate').attr('values', '0 0,1 0,1 0,0 0;0 0,1 0,1 1,0 .4;0 0,1 0,1 1,0 1').get(0).beginElement();
    else if (n == 1)
        $('.mask polygon animate').attr('values', '0 0,1 0,1 0,0 0;0 0,1 0,1 .4,0 1;0 0,1 0,1 1,0 1').get(0).beginElement();
    $timeout(function () {
        $('.mask').remove();
    }, 500)
    $('.nav-overlay').css('opacity', '1');
}
function maskHover($rootScope, $timeout, n) {
    $ani = $rootScope.maskAnimate();
    var svg = $('.mask-overlay .mask-hover polygon');
    svg.append($ani);
    if (n == 0)
        $('.mask-overlay .mask-hover polygon animate').attr('values', '0 0,1 0,1 1,0 1;0 0,.3 0,1 1,0 1;0 0,0 0,0 1,0 1').get(0).beginElement();
    else if (n == 1)
        $('.mask-hover polygon animate').attr('values', '1 0,1 0,1 1,1 1;0 0,1 0,1 1,.8 1;0 0,1 0,1 1,0 1').get(0).beginElement();
    else if (n == 2)
        $('.mask-hover polygon animate').attr('values', '0 0,0 0,0 1,0 1;0 0,.4 0,1 1,0 1;0 0,1 0,1 1,0 1').get(0).beginElement();
    else if (n == 3)
        $('.mask-hover polygon animate').attr('values', '0 0,1 0,1 1,0 1;0.9 0,1 0,1 1,0 1;1 0,1 0,1 1,1 1').get(0).beginElement();
    else if (n == 4) {
        $ani.setAttribute('dur','450ms');
        $('.mask-hover polygon animate').attr('values', '0 0,1 0,1 0,0 0;0 0,1 0,1 1,0 .4;0 0,1 0,1 1,0 1').get(0).beginElement();
    }
    else if (n == 5){
        $('.mask-hover polygon animate').attr('values', '0 1,1 1,1 1,0 1;0 .4,1 0,1 1,0 1;0 0,1 0,1 1,0 1').get(0).beginElement();
    }
    else if (n == 6){
        $('.mask-hover polygon animate').attr('values', '0 0,1 0,1 1,0 1;0 0,1 0,1 1,0 .4;0 0,1 0,1 0,0 0').get(0).beginElement();
    }
}
function imgmaskShow($rootScope, $timeout, n) {
    $svg = $('.imgMask polygon');
    $svg.each(function (index, ele) {
        $ani = $rootScope.maskAnimate();
        $ani.setAttribute('dur', '400ms');
        $(ele).append($ani);
        if (n == 0) {
            $('.imgMask polygon animate').eq(index).each(function () {
                $(this).attr('values', '0 0,1 0,1 0,0 0;0 0,1 0,1 1,0 .2;0 0,1 0,1 1,0 1').get(0).beginElement();
            })
        }
        else if (n == 1) {
            $('.imgMask polygon animate').eq(index).each(function () {
                $(this).attr('values', '0 0,1 0,1 0,0 0;0 0,1 0,1 .2,0 1;0 0,1 0,1 1,0 1').get(0).beginElement();
            })
        }
    })

    $timeout(function () {
        $('.imgMask').remove();
    }, 500)
}
/* -------- en.html -------------*/
angular.module("joho").controller('module2Ctrl', function ($rootScope, $scope, $timeout, $location) {
    var scrollTrue = true;
    $timeout(function () {
        $('.timeline-container .chapter-index .detify').eq(0).addClass('chapter-index-hover');
        $('.chapter-copy:eq(0) div').css('opacity', '1');
    }, 200)
    $('.en').bind("DOMMouseScroll mousewheel onmousewheel", function (event) {
        // cross-browser wheel delta
        var event = window.event || event; // old IE support
        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
        function m() {
            if ($rootScope.scrollIndex <= 4) {
                $rootScope.chapterIndex = 0;
                $rootScope.scrollIndex == 4 && delta > 0 ? $rootScope.pageIndex = 4 : "";
                return;

            }
            else if ($rootScope.scrollIndex <= 8) {
                $rootScope.scrollIndex == 5 && delta < 0 ?$rootScope.chapter=0:"";
                $rootScope.chapterIndex = 1;
                $rootScope.scrollIndex == 6 && delta < 0 ? ($rootScope.pageIndex = 1, $rootScope.chapter=1 ): "";
                $rootScope.scrollIndex == 6 && delta > 0 ? ($rootScope.pageIndex = 6,$rootScope.chapter=0) : "";
                return;
            }
            else if ($rootScope.scrollIndex <= 16) {
                $rootScope.chapterIndex = 2;
                $rootScope.scrollIndex == 10 && delta<0 ? ($rootScope.pageIndex = 1, $rootScope.chapter=2) : "";
                $rootScope.scrollIndex == 10 && delta > 0 ? ($rootScope.pageIndex = 5,$rootScope.chapter=1) : "";
                return;
            }
            else if ($rootScope.scrollIndex <= 19) {
                $rootScope.chapterIndex = 3;
                $rootScope.scrollIndex == 18 && delta < 0 ? ($rootScope.pageIndex = 1, $rootScope.chapter=3) : "";
                $rootScope.scrollIndex == 18 && delta > 0 ? ($rootScope.pageIndex = 9,$rootScope.chapter=2) : "";
                return;
            }
            else if ($rootScope.scrollIndex <= 22) {
                $rootScope.chapterIndex = 4;
                $rootScope.scrollIndex == 21 && delta < 0 ? ($rootScope.pageIndex = 1, $rootScope.chapter=4) : "";
                $rootScope.scrollIndex == 21 && delta > 0 ? ($rootScope.pageIndex = 4, $rootScope.chapter=3) : ""
                return;
            }
            else if ($rootScope.scrollIndex <= 29) {
                $rootScope.chapterIndex = 5;
                $rootScope.scrollIndex == 24 && delta < 0 ? ($rootScope.pageIndex = 1, $rootScope.chapter=5) : "";
                $rootScope.scrollIndex == 24 && delta > 0 ? ($rootScope.pageIndex = 4, $rootScope.chapter=4) : "";
                return;
            }
        }

        if (scrollTrue) {
            m();
            $('audio').attr({'src':'assets/audio/move.mp3'}).removeAttr('loop').get(0).play();
            if (delta > 0) {
                $rootScope.pageIndex != 1 ? $rootScope.pageIndex-- : "";
                $rootScope.scrollIndex--;
                if ($rootScope.scrollIndex < 1) {
                    $rootScope.scrollIndex = 1;
                }
                $rootScope.scrollIndex == 5 || $rootScope.scrollIndex == 9 || $rootScope.scrollIndex == 17 || $rootScope.scrollIndex == 20 || $rootScope.scrollIndex == 23 ? $('.timeline-container .chapter-index .detify').eq($rootScope.chapterIndex ).removeClass('chapter-index-hover') : "";
                $rootScope.scrollIndex == 5 || $rootScope.scrollIndex == 9 || $rootScope.scrollIndex == 17 || $rootScope.scrollIndex == 20 || $rootScope.scrollIndex == 23 ? $('.chapter-copy:eq(' + ($rootScope.chapterIndex) + ') div').each(function (index, ele) {
                    $timeout(function () {
                        $(ele).css(
                            {
                                'opacity': '0',
                                'transform': 'translateY(6px)',
                                '-webkit-transform': 'translateY(6x)',
                                '-ms-transform': 'translateY(6px)',
                                '-moz-transform': 'translateY(6px)',
                                'transition': 'all 500ms',
                                '-webkit-transition': 'all 500ms',
                                '-moz-transition': 'all 500ms',
                                '-ms-transition': 'all 500ms',
                                '-o-transition': 'all 500ms',
                            });
                    }, index * 16)
                }) : "";
                $('.timeline-progress').eq($rootScope.chapter).css({
                    height: ($rootScope.pageIndex-1) * 30 + 'px'
                })
                $('.part-divider-progress.vert').eq($rootScope.scrollIndex-1).css('width', '0')
            }
            else {
                $rootScope.scrollIndex < 29 ? $rootScope.pageIndex++ : "";
                $rootScope.scrollIndex++;
                if ($rootScope.scrollIndex > 29) {
                    $rootScope.scrollIndex = 29;
                }
                $rootScope.scrollIndex == 6 || $rootScope.scrollIndex == 10 || $rootScope.scrollIndex == 18 || $rootScope.scrollIndex == 21 || $rootScope.scrollIndex == 24 ? $('.timeline-container .chapter-index .detify').eq($rootScope.chapterIndex).addClass('chapter-index-hover') : "";
                $rootScope.scrollIndex == 6 || $rootScope.scrollIndex == 10 || $rootScope.scrollIndex == 18 || $rootScope.scrollIndex == 21 || $rootScope.scrollIndex == 24 ? $('.chapter-index-bounce').eq($rootScope.chapterIndex-1).css({
                    'opacity': '0',
                    'transform': 'scale(4)',
                    '-webkit-transform': 'scale(4)',
                    '-moz-transform': 'scale(4)',
                    '-ms-transform': 'scale(4)',
                    '-o-transform': 'scale(4)',
                    'transition': 'all 800ms',
                    '-webkit-transition': 'all 800ms',
                    '-moz-transition': 'all 800ms',
                    '-ms-transition': 'all 800ms',
                    '-o-transition': 'all 800ms',
                }) : "";
                $rootScope.scrollIndex == 6 || $rootScope.scrollIndex == 10 || $rootScope.scrollIndex == 18 || $rootScope.scrollIndex == 21 || $rootScope.scrollIndex == 24 ? $('.chapter-copy:eq(' + ($rootScope.chapterIndex) + ') div').each(function (index, ele) {
                    $timeout(function () {
                        $(ele).css(
                            {
                                'opacity': '1',
                                'transform': 'translateY(0px)',
                                '-webkit-transform': 'translateY(0x)',
                                '-ms-transform': 'translateY(0px)',
                                '-moz-transform': 'translateY(0px)',
                                'transition': 'all 500ms',
                                '-webkit-transition': 'all 500ms',
                                '-moz-transition': 'all 500ms',
                                '-ms-transition': 'all 500ms',
                                '-o-transition': 'all 500ms',
                            }
                        );
                    }, index * 16)
                }) : "";
                $('.timeline-progress').eq($rootScope.chapter).css({
                    height: ($rootScope.pageIndex-1) * 30 + 'px'
                })
                $('.part-divider-progress.vert').eq($rootScope.scrollIndex-2).css('width', '4px');


            }
            if($rootScope.chapterIndex==1&&$rootScope.pageIndex==6||$rootScope.chapterIndex==2&&$rootScope.pageIndex==5||$rootScope.chapterIndex==3&&$rootScope.pageIndex==9||$rootScope.chapterIndex==4&&$rootScope.pageIndex==4||$rootScope.chapterIndex==5&&$rootScope.pageIndex==4){
                $rootScope.pageNum=1;
            }
            else{
                $rootScope.pageNum=$rootScope.pageIndex;
            }
            $('.timeline').css({
                transform: 'translateY(' + (-$rootScope.scrollIndex * 30 - 5) + 'px)',
                transition: 'all 200ms'
            })
            // for IE
            event.returnValue = false;
            // for Chrome and Firefox
            if (event.preventDefault) {
                event.preventDefault();
            }
            scrollTrue = false;
        }
        $timeout(function () {
            scrollTrue = true;
        }, 300)
    });
    $('.nav-controls svg line').css('stroke', 'rgb(255,255,255)');
    $('.ui .copy .light').css('color', '#fff');
    $('.ui .copy .switch').css('color', '#fff');
    $('.nav-controls').each(function (index) {
        $(this).mouseenter(function () {
            if (index == 0) {
                $('#navLineTop').css({
                    'transform': 'translateY(-2px)',
                    '-webkit-transform': 'translateY(-2px)',
                    '-moz-transform': 'translateY(-2px)',
                    '-ms-transform': 'translateY(-2px)',
                    '-o-transform': 'translateY(-2px))',
                })
                $('#navLineBottom').css({
                    'transform': 'translateY(2px)',
                    '-webkit-transform': 'translateY(2px)',
                    '-moz-transform': 'translateY(2px)',
                    '-ms-transform': 'translateY(2px)',
                    '-o-transform': 'translateY(2px))',
                })
            }
        })
        $(this).mouseleave(function () {
            if (index == 0) {
                $('#navLineTop').css({
                    'transform': 'translateY(0px)',
                    '-webkit-transform': 'translateY(0px)',
                    '-moz-transform': 'translateY(0px)',
                    '-ms-transform': 'translateY(0px)',
                    '-o-transform': 'translateY(0px))',
                })
                $('#navLineBottom').css({
                    'transform': 'translateY(0px)',
                    '-webkit-transform': 'translateY(0px)',
                    '-moz-transform': 'translateY(0px)',
                    '-ms-transform': 'translateY(0px)',
                    '-o-transform': 'translateY(0px))',
                })
            }
        })
    })
    $('.select-chapter-button').bind('click', function () {
        $rootScope.pageUpFlag = true;
        $rootScope.pageDownFlag = true;
        $('.side-nav-background').css('z-index', '3');
        $('.side-nav').css('z-index', '1');
        if (navControlFlag) {
            $('.nav-controls svg line').css('stroke', 'rgb(255,255,255)');
        }
        else {
            $('.nav-controls svg line').css('stroke', 'rgb(239,67,77)');
        }
        $('.base-controls').css({
            'transform': 'translateX(0px)',
            '-moz-transform': 'translateX(0px)',
            '-ms-transform': 'translateX(0px)',
            'transition': 'all 500ms',
            '-moz-transition': 'all 500ms',
            '-ms-transition': 'all 500ms',
        })
        $('#crossBottom').attr({'x1': '23', 'y1': '13', 'x2': '23', 'y2': '13'});
        $('#crossTop').attr({'x1': '23', 'y1': '13', 'x2': '2', 'y2': '13'});

        $('.side-nav .select-chapter-button').css({
            opacity: '0',
            'transform': 'translateX(-50%) translateY(-20px)',
            '-webkit-transform': 'translateX(-50%) translateY(-20px)',
            '-moz-transform': 'translateX(-50%) translateY(-20px)',
            '-ms-transform': 'translateX(-50%) translateY(-20px)',
            '-o-transform': 'translateX(-50%) translateY(-20px))',
        })
        $('.side-nav .chapter-info h1').css({
            opacity: '0',
            'transform': 'translateY(-20px)',
            '-webkit-transform': 'translateY(-20px)',
            '-moz-transform': 'translateY(-20px)',
            '-ms-transform': 'translateY(-20px)',
            '-o-transform': 'translateY(-20px))'

        })
        $('.timeline-container').css({
            opacity: '0',
            'transform': 'translateY(-20px)',
            '-webkit-transform': 'translateY(-20px)',
            '-moz-transform': 'translateY(-20px)',
            '-ms-transform': 'translateY(-20px)',
            '-o-transform': 'translateY(-20px))',
        })
        $('.social-share').css({
            opacity: '0',
            'transform': 'translateY(-20px)',
            '-webkit-transform': 'translateY(-20px)',
            '-moz-transform': 'translateY(-20px)',
            '-ms-transform': 'translateY(-20px)',
            '-o-transform': 'translateY(-20px))',
        })
        $('.social-share .share').css({
            opacity: '0',
            'transform': 'translateY(-20px)',
            '-webkit-transform': 'translateY(-20px)',
            '-moz-transform': 'translateY(-20px)',
            '-ms-transform': 'translateY(-20px)',
            '-o-transform': 'translateY(-20px))',
        })
        $timeout(function () {
            $('.side-nav-background polygon animate').attr('values', '0 0,1 0,1 1,0 1;0 0,1 0,.4 1,0 1;0 0,0 0,0 1,0 1').get(0).beginElement();
            $('.side-nav').css('visibility', 'hidden');
        }, 200)
        $timeout(function () {
            $('.side-nav-background').css('z-index', '1');
        }, 700)

        flag = true;
        $timeout(function () {
            $location.path("/en/" + ($rootScope.chapterIndex==5?$rootScope.chapterIndex+3:$rootScope.chapterIndex+1) + "/" + ($rootScope.pageNum-1));
        }, 900)
    })
    $scope.togglesideNav = function () {
        if (flag) {
            $('audio').get(0).pause();
            $rootScope.pageUpFlag = false;
            $rootScope.pageDownFlag = false;
            $('.side-nav-background').css('z-index', '999');
            $('.side-nav').css('z-index', '999');
            $('.nav-controls svg line').css('stroke', 'rgb(204,204,204)');
            $('.base-controls').css({
                'transform': 'translateX(-100px)',
                '-moz-transform': 'translateX(-100px)',
                '-ms-transform': 'translateX(-100px)',
                'transition': 'all 500ms',
                '-moz-transition': 'all 500ms',
                '-ms-transition': 'all 500ms',
            })
            $('#crossBottom').attr({'x1': '2', 'y1': '23', 'x2': '23', 'y2': '2'});
            $('#crossTop').attr({'x1': '2', 'y1': '2', 'x2': '23', 'y2': '23'});
            $('.side-nav-background polygon animate').attr('values', '0 0,0 0,0 1,0 1;0 0,.4 0,.88 1,0 1;0 0,1 0,1 1,0 1').get(0).beginElement();
            $('.side-nav').css('visibility', 'visible');
            $('.nav-controls').mouseenter(function () {
                $(this).css({
                    'opacity': '.6',
                    'transform': 'scale(0.9)',
                    '-webkit-transform': 'scale(0.9)',
                    '-moz-transform': 'scale(0.9)',
                    '-ms-transform': 'scale(0.9)',
                    '-o-transform': 'scale(0.9)',
                    'transition': 'all 500ms',
                    '-webkit-transition': 'all 500ms',
                    '-moz-transition': 'all 500ms',
                    '-ms-transition': 'all 500ms',
                })
            })
            $('.nav-controls').mouseleave(function () {
                $(this).css({
                    'opacity': '1',
                    'transform': 'scale(1)',
                    '-webkit-transform': 'scale(1)',
                    '-moz-transform': 'scale(1)',
                    '-ms-transform': 'scale(1)',
                    '-o-transform': 'scale(1)',
                    'transition': 'all 500ms',
                    '-webkit-transition': 'all 500ms',
                    '-moz-transition': 'all 500ms',
                    '-ms-transition': 'all 500ms',
                })
            })
            $timeout(function () {
                $('.chapter-name').css({
                    opacity: '1',
                    'transform': 'translateY(0px)',
                    '-webkit-transform': 'translateY(0px)',
                    '-moz-transform': 'translateY(0px)',
                    '-ms-transform': 'translateY(0px)',
                    '-o-transform': 'translateY(0px)',
                    'transition': 'all 500ms',
                    '-webkit-transition': 'all 500ms',
                    '-moz-transition': 'all 500ms',
                    '-ms-transition': 'all 500ms',

                })
            }, 500)
            $timeout(function () {
                $('.part-name').css({
                    opacity: '1',
                    'transform': 'translateY(0px)',
                    '-webkit-transform': 'translateY(0px)',
                    '-moz-transform': 'translateY(0px)',
                    '-ms-transform': 'translateY(0px)',
                    '-o-transform': 'translateY(0px))',
                    'transition': 'all 500ms',
                    '-webkit-transition': 'all 500ms',
                    '-moz-transition': 'all 500ms',
                    '-ms-transition': 'all 500ms',
                })
            }, 700)
            $timeout(function () {
                $('.timeline-container').css({
                    opacity: '1',
                    'transform': 'translateY(0px)',
                    '-webkit-transform': 'translateY(0px)',
                    '-moz-transform': 'translateY(0px)',
                    '-ms-transform': 'translateY(0px)',
                    '-o-transform': 'translateY(0px))',
                    'transition': 'all 500ms',
                    '-webkit-transition': 'all 500ms',
                    '-moz-transition': 'all 500ms',
                    '-ms-transition': 'all 500ms',
                })
            }, 900)
            $timeout(function () {
                $('.social-share').css('opacity', '1');
                $('.social-share .share').eq(0).css({
                    opacity: '1',
                    'transform': 'translateY(0px)',
                    '-webkit-transform': 'translateY(0px)',
                    '-moz-transform': 'translateY(0px)',
                    '-ms-transform': 'translateY(0px)',
                    '-o-transform': 'translateY(0px))',
                    'transition': 'all 500ms',
                    '-webkit-transition': 'all 500ms',
                    '-moz-transition': 'all 500ms',
                    '-ms-transition': 'all 500ms',
                })
            }, 1100)
            $timeout(function () {
                $('.social-share .share').eq(1).css({
                    opacity: '1',
                    'transform': 'translateY(0px)',
                    '-webkit-transform': 'translateY(0px)',
                    '-moz-transform': 'translateY(0px)',
                    '-ms-transform': 'translateY(0px)',
                    '-o-transform': 'translateY(0px))',
                    'transition': 'all 500ms',
                    '-webkit-transition': 'all 500ms',
                    '-moz-transition': 'all 500ms',
                    '-ms-transition': 'all 500ms',
                })
            }, 1300)
            $timeout(function () {
                $('.social-share .share').eq(2).css({
                    opacity: '1',
                    'transform': 'translateY(0px)',
                    '-webkit-transform': 'translateY(0px)',
                    '-moz-transform': 'translateY(0px)',
                    '-ms-transform': 'translateY(0px)',
                    '-o-transform': 'translateY(0px))',
                    'transition': 'all 500ms',
                    '-webkit-transition': 'all 500ms',
                    '-moz-transition': 'all 500ms',
                    '-ms-transition': 'all 500ms',
                })
            }, 1500)
            $timeout(function () {
                $('.select-chapter-button').css({
                    opacity: '1',
                    'transform': 'translateX(-50%) translateY(0px)',
                    '-webkit-transform': 'translateX(-50%) translateY(0px)',
                    '-moz-transform': 'translateX(-50%) translateY(0px)',
                    '-ms-transform': 'translateX(-50%) translateY(0px)',
                    '-o-transform': 'translateX(-50%) translateY(0px))',
                    'transition': 'all 500ms',
                    '-webkit-transition': 'all 500ms',
                    '-moz-transition': 'all 500ms',
                    '-ms-transition': 'all 500ms',
                })
            }, 1700)
            flag = false;
        }
        else {
            if($location.url()=="/en/1/0")
                $('audio').attr({'src':'assets/audio/airport.mp3','loop':'loop'}).get(0).play();
            else{
                $('audio').attr({'src':'assets/audio/Traveling Light.mp3','loop':'loop'}).get(0).play();
            }
            $rootScope.pageUpFlag = true;
            $rootScope.pageDownFlag = true;
            $('.side-nav-background').css('z-index', '3');
            $('.side-nav').css('z-index', '1');
            if (navControlFlag) {
                $('.nav-controls svg line').css('stroke', 'rgb(255,255,255)');
            }
            else {
                $('.nav-controls svg line').css('stroke', 'rgb(239,67,77)');
            }
            $('.base-controls').css({
                'transform': 'translateX(0px)',
                '-moz-transform': 'translateX(0px)',
                '-ms-transform': 'translateX(0px)',
                'transition': 'all 500ms',
                '-moz-transition': 'all 500ms',
                '-ms-transition': 'all 500ms',
            })
            $('#crossBottom').attr({'x1': '23', 'y1': '13', 'x2': '23', 'y2': '13'});
            $('#crossTop').attr({'x1': '23', 'y1': '13', 'x2': '2', 'y2': '13'});

            $('.side-nav .select-chapter-button').css({
                opacity: '0',
                'transform': 'translateX(-50%) translateY(-20px)',
                '-webkit-transform': 'translateX(-50%) translateY(-20px)',
                '-moz-transform': 'translateX(-50%) translateY(-20px)',
                '-ms-transform': 'translateX(-50%) translateY(-20px)',
                '-o-transform': 'translateX(-50%) translateY(-20px))',
            })
            $('.side-nav .chapter-info h1').css({
                opacity: '0',
                'transform': 'translateY(-20px)',
                '-webkit-transform': 'translateY(-20px)',
                '-moz-transform': 'translateY(-20px)',
                '-ms-transform': 'translateY(-20px)',
                '-o-transform': 'translateY(-20px))'

            })
            $('.timeline-container').css({
                opacity: '0',
                'transform': 'translateY(-20px)',
                '-webkit-transform': 'translateY(-20px)',
                '-moz-transform': 'translateY(-20px)',
                '-ms-transform': 'translateY(-20px)',
                '-o-transform': 'translateY(-20px))',
            })
            $('.social-share').css({
                opacity: '0',
                'transform': 'translateY(-20px)',
                '-webkit-transform': 'translateY(-20px)',
                '-moz-transform': 'translateY(-20px)',
                '-ms-transform': 'translateY(-20px)',
                '-o-transform': 'translateY(-20px))',
            })
            $('.social-share .share').css({
                opacity: '0',
                'transform': 'translateY(-20px)',
                '-webkit-transform': 'translateY(-20px)',
                '-moz-transform': 'translateY(-20px)',
                '-ms-transform': 'translateY(-20px)',
                '-o-transform': 'translateY(-20px))',
            })
            $timeout(function () {
                $('.side-nav-background polygon animate').attr('values', '0 0,1 0,1 1,0 1;0 0,1 0,.4 1,0 1;0 0,0 0,0 1,0 1').get(0).beginElement();
                $('.side-nav').css('visibility', 'hidden');
            }, 200)
            $timeout(function () {
                $('.side-nav-background').css('z-index', '1');
            }, 700)

            flag = true;
        }
    }

});
function headline($timeout) {
    $timeout(function () {
        $('.headline-container .headline-copy').css({
            opacity: '1',
            'transform': 'translateY(0px)',
            '-webkit-transform': 'translateY(0px)',
            '-moz-transform': 'translateY(0px)',
            '-ms-transform': 'translateY(0px)',
            '-o-transform': 'translateY(0px))',
            'transition': 'all 1200ms',
            '-webkit-transition': 'all 1200ms',
            '-moz-transition': 'all 1200ms',
            '-ms-transition': 'all 1200ms',
        })
    }, 300)
}
function similar($rootScope, $timeout) {
    $timeout(function () {
        $('.show1').animate({
            'opacity': '1',
            'height': '100%',
        }, 300)
    }, 520)
    navControlFlag = true;
    $('.nav-controls svg line').css('stroke', 'rgb(255,255,255)');
    $('.ui .copy .light').css('color', '#fff');
    $('.ui .copy .switch').css('color', '#fff');
}
/* -------- 1/01.html -------------*/
angular.module("joho").controller('module21Ctrl', function ($rootScope, $scope, $timeout) {
    maskShow($rootScope, $timeout, 0);
    similar($rootScope, $timeout);
    headline($timeout);
    function show1(i) {
        $timeout(function () {
            $('#typography path').eq(i).css({
                opacity: '1',
                'transform': 'translateX(0px)',
                '-webkit-transform': 'translateX(0px)',
                '-moz-transform': 'translateX(0px)',
                '-ms-transform': 'translateX(0px)',
                '-o-transform': 'translateX(0px)',
                'transition': 'all 300ms',
                '-webkit-transition': 'all 300ms',
                '-moz-transition': 'all 300ms',
                '-ms-transition': 'all 300ms',
            });
        }, i * 80)
    }

    function show2(i, s) {
        $timeout(function () {
            $('#bottomLine path').eq(i).attr('d', s);
        }, i * 240)

    }

    $timeout(function () {
        var len1 = $('#typography path').length;
        for (var i = 0; i < len1; i++) {
            show1(i);
        }
    }, 300)
    $timeout(function () {
        var len2 = $('#bottomLine path').length;
        var arr = ['m159.99699,184.534c-1.229,0 -2.308,-0.89499 -2.502,-2.147c-0.214,-1.383 0.73399,-2.67799 2.11699,-2.892l50.99901,-7.883c1.38699,-0.207 2.67799,0.73399 2.892,2.118c0.214,1.38301 -0.73399,2.67801 -2.117,2.892l-50.99899,7.88301c-0.131,0.019 -0.26199,0.02899 -0.39,0.02899z',
            'm234.99699,173.295c-1.21701,0 -2.29001,-0.879 -2.49701,-2.118c-0.23,-1.381 0.703,-2.687 2.08301,-2.91701l7,-1.16699c1.381,-0.23201 2.686,0.702 2.91699,2.08299c0.23001,1.38101 -0.70299,2.68701 -2.08299,2.91701l-7,1.16699c-0.14099,0.02301 -0.282,0.035 -0.42,0.035z',
            'm267.99701,168.534c-1.237,0 -2.319,-0.90599 -2.504,-2.16699c-0.203,-1.38501 0.755,-2.672 2.13998,-2.875l258.00104,-37.811c1.383,-0.194 2.67297,0.756 2.875,2.141c0.203,1.385 -0.75604,2.672 -2.14099,2.87501l-258.00003,37.81099c-0.125,0.017 -0.24902,0.026 -0.371,0.026z',
            'm537.99701,128.965c-1.23901,0 -2.32202,-0.90799 -2.505,-2.17c-0.20099,-1.386 0.75903,-2.671 2.14301,-2.872l65,-9.431c1.39203,-0.208 2.672,0.758 2.87201,2.14301c0.20099,1.386 -0.75903,2.671 -2.14398,2.872l-65,9.431c-0.12305,0.019 -0.24506,0.02699 -0.36603,0.02699z'
        ]
        for (var j = 0; j < len2; j++) {
            show2(j, arr[j]);
        }
    }, 300)
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)

})
/* -------- 1/02.html -------------*/
angular.module("joho").controller('module202Ctrl', function ($rootScope, $scope, $timeout) {
    maskShow($rootScope, $timeout, 1);
    $timeout(function () {
        $('.show1').animate({
            'opacity': '1',
            'height': '100%',
        }, 300)
    }, 520)
    $timeout(function () {
        var len1 = $('.outlined .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.outlined .regular span').eq(j), $('.outlined .offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
function change(ele, attr) {
    if (attr == 'width') {
        setTimeout(function () {
            $(ele).css({
                'width': '100%',
                'transition': 'all 500ms',
                '-webkit-transition': 'all 500ms',
                '-moz-transition': 'all 500ms',
                '-ms-transition': 'all 500ms',
            })
        }, 200)
    }
    else {
        setTimeout(function () {
            $(ele).css({
                'height': '100%',
                'transition': 'all 500ms',
                '-webkit-transition': 'all 500ms',
                '-moz-transition': 'all 500ms',
                '-ms-transition': 'all 500ms',
            })
        }, 400)
    }

}
function changeShow(i, ele1, ele2) {
    if (i < 2) {
        change(ele1, 'width');
        change(ele2, 'width');

    }
    else {
        change(ele1, 'height');
        change(ele2, 'height');
    }
}
function changeX(ele) {
    $(ele).css({
        'opacity': '1',
        '-webkit-transform': 'translateY(0px)',
        '-moz-transform': 'translateY(0px)',
        '-ms-transform': 'translateY(0px)',
        '-o-transform': 'translateY(0px)',
        'transform': 'translateY(0px)',
        'transition': 'all 800ms',
        '-webkit-transition': 'all 800ms',
        '-moz-transition': 'all 800ms',
        '-ms-transition': 'all 800ms',
    })
}
function changeScaleEx(ele) {
    $(ele).css({
        'transform': 'scale(1.02,1.02)',
        '-webkit-transform': 'scale(1.02,1.02)',
        '-moz-transform': 'scale(1.02,1.02)',
        '-ms-transform': 'scale(1.02,1.02)',
        '-o-transform': 'scale(1.02,1.02)',
        'transition': 'all 1500ms',
        '-webkit-transition': 'all 1500ms',
        '-moz-transition': 'all 1500ms',
        '-ms-transition': 'all 1500ms',
    })
}
function changeScaleCol(ele) {
    $(ele).css({
        'transform': 'scale(1,1)',
        '-webkit-transform': 'scale(1,1)',
        '-moz-transform': 'scale(1,1)',
        '-ms-transform': 'scale(1,1)',
        '-o-transform': 'scale(1,1)',
        'transition': 'all 1500ms',
        '-webkit-transition': 'all 1500ms',
        '-moz-transition': 'all 1500ms',
        '-ms-transition': 'all 1500ms',
    })
}
function listenMove(ele, moveFlag) {
    $(document.body).get(0).addEventListener('mousemove', function (e) {
        if (e.clientX < ($(window).width() - 52) && e.clientY < $(window).height() - 52) {
            $(ele).css('cursor', 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAYAAACrpQYOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODRCQTI3OTYxODc3MTFFNUJGRENCQTAzNUVFREU4MTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODRCQTI3OTUxODc3MTFFNUJGRENCQTAzNUVFREU4MTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QUM1RDEwMERBRTIxMUU0ODhFM0ZEMkIwOEZFOEM1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QUM1RDEwMURBRTIxMUU0ODhFM0ZEMkIwOEZFOEM1RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp6/nagAAAN5SURBVHja7NzLahRBFAbgnuEgKuIN3HgBTXwXXQleIAERdOnaF8jGpc/ggIgKXkAE38O1iS50J1GMMaCQ9lSsDjE497r8f9U58NM9DTN099ddXdVQ02vbtiGvF355nfkg+uQIA81lnwHzgQjxvj/VLGlO+s/rmoOaZYNIj3BR89Vvc+vv/fqyQaRDWNSs7dm+6retMmJIIQhdrbFiSEEI1BhSGAIthhSIQIkhhSLQYUjBCFQYUjgCDYZUgECBIZUgwGNIRQjQGFIZAiyGVIgAiSGVIsBhSMUIUBhSOQIMhhgCBoYYAgaGGAIGhhgCBoYYAgaGGAIGhhgCBoYYAgaGGAIGhhgCBoYYAgaGGAIGhhgCBoYYAgaGGAIGhhgCBoYYAgaGFIDg5gG66VtfmDH6BdwJZzX3GpyJmR3Gkj9nQSGQm6Pjmluaw4DN1MQYQo7g6ofmTIM3VXmqZkrIEVy1+5aUGFJA76hXQm9KrIuKgSGGgIEhhoCBIYaAgdFBPAREOObHCP0xD+RzfnleszmkV+W+f0TzTfNJsw2EsaW502vb9rWuXNKc0nwHunLcib2ruaFZCPB7nzWPNA9AXoe4Our35a27Iw74K2Yb7Bb+qFnR3B8zRnBg7zSn/eBuWBfXHd9PwOPcfUa4P516rNnwV94HoP3b8hlVm3tG2BtEz4oF3zQNXNPUPSNuag75tgsNo8TqEJ45hKb59/3MNc0rj3HBzlUShN3u6/4XZYaRAeF/EIaRAWEYhGEkRhgFYRgJEcZBsGC0fv96rAiTQDBguAHac81vVoSdEecUf0n9UnMVcJzh3kmd8CNxSoRpIZAxGmaESZsme4BHRpgFwjAiIMwKYRiBEeaBMIyACPNCGEYghBAQNWMEQwgFUSNGUISQEDVhBEcIDVEDRhSEGBAlY0RDiAVRIkZUhJgQJWFER4gNUQJGEoQUEMwYyRBSQTBiJEVICcGEkRwhNQQDRhaEHBDIGNkQckEgYmRFyAmBhJEdITcEAgYEAgJETgwYBBSIHBhQCEgQKTHgENAgUmBAIiBCxMSARUCFiIEBjYAMERIDHgEdIgQGBQIDxDwYNAgsELNgUCEwQUyDQYfABjEJBiUCI8QojEVWBFfTTt1Cqm4amZs/52aUrrMisEO4eqK50vyd4utmlt5mPRB2CFdvNL98k0VbfwQYAIvcutMwaxfVAAAAAElFTkSuQmCC),none');
            $('.fs-container').css('cursor', 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAYAAACrpQYOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODRCQTI3OTYxODc3MTFFNUJGRENCQTAzNUVFREU4MTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODRCQTI3OTUxODc3MTFFNUJGRENCQTAzNUVFREU4MTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QUM1RDEwMERBRTIxMUU0ODhFM0ZEMkIwOEZFOEM1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QUM1RDEwMURBRTIxMUU0ODhFM0ZEMkIwOEZFOEM1RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp6/nagAAAN5SURBVHja7NzLahRBFAbgnuEgKuIN3HgBTXwXXQleIAERdOnaF8jGpc/ggIgKXkAE38O1iS50J1GMMaCQ9lSsDjE497r8f9U58NM9DTN099ddXdVQ02vbtiGvF355nfkg+uQIA81lnwHzgQjxvj/VLGlO+s/rmoOaZYNIj3BR89Vvc+vv/fqyQaRDWNSs7dm+6retMmJIIQhdrbFiSEEI1BhSGAIthhSIQIkhhSLQYUjBCFQYUjgCDYZUgECBIZUgwGNIRQjQGFIZAiyGVIgAiSGVIsBhSMUIUBhSOQIMhhgCBoYYAgaGGAIGhhgCBoYYAgaGGAIGhhgCBoYYAgaGGAIGhhgCBoYYAgaGGAIGhhgCBoYYAgaGGAIGhhgCBoYYAgaGFIDg5gG66VtfmDH6BdwJZzX3GpyJmR3Gkj9nQSGQm6Pjmluaw4DN1MQYQo7g6ofmTIM3VXmqZkrIEVy1+5aUGFJA76hXQm9KrIuKgSGGgIEhhoCBIYaAgdFBPAREOObHCP0xD+RzfnleszmkV+W+f0TzTfNJsw2EsaW502vb9rWuXNKc0nwHunLcib2ruaFZCPB7nzWPNA9AXoe4Our35a27Iw74K2Yb7Bb+qFnR3B8zRnBg7zSn/eBuWBfXHd9PwOPcfUa4P516rNnwV94HoP3b8hlVm3tG2BtEz4oF3zQNXNPUPSNuag75tgsNo8TqEJ45hKb59/3MNc0rj3HBzlUShN3u6/4XZYaRAeF/EIaRAWEYhGEkRhgFYRgJEcZBsGC0fv96rAiTQDBguAHac81vVoSdEecUf0n9UnMVcJzh3kmd8CNxSoRpIZAxGmaESZsme4BHRpgFwjAiIMwKYRiBEeaBMIyACPNCGEYghBAQNWMEQwgFUSNGUISQEDVhBEcIDVEDRhSEGBAlY0RDiAVRIkZUhJgQJWFER4gNUQJGEoQUEMwYyRBSQTBiJEVICcGEkRwhNQQDRhaEHBDIGNkQckEgYmRFyAmBhJEdITcEAgYEAgJETgwYBBSIHBhQCEgQKTHgENAgUmBAIiBCxMSARUCFiIEBjYAMERIDHgEdIgQGBQIDxDwYNAgsELNgUCEwQUyDQYfABjEJBiUCI8QojEVWBFfTTt1Cqm4amZs/52aUrrMisEO4eqK50vyd4utmlt5mPRB2CFdvNL98k0VbfwQYAIvcutMwaxfVAAAAAElFTkSuQmCC),none');
            var width = $(document.body).width();
            if (moveFlag) {
                $('.fs-container').css('cursor', 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAYAAACrpQYOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzBGOEFDQzcxODdCMTFFNUJGRENCQTAzNUVFREU4MTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzBGOEFDQzYxODdCMTFFNUJGRENCQTAzNUVFREU4MTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QUM1RDEwMERBRTIxMUU0ODhFM0ZEMkIwOEZFOEM1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QUM1RDEwMURBRTIxMUU0ODhFM0ZEMkIwOEZFOEM1RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvDuNvUAAANjSURBVHja7NwxbxMxGAbgpPoEbJCOMBH4BYz8AZiQgKHdCr+sXSqKRFsJsVdZGPkFbdlYihrUJRIDx2fVkaLA5e4S2/e+9mfpVZLTRTr7kc6fHeWGVVUNyNuxf33L3IktcoQDzUufA+aOCPG1H2l2NNv+87XmnmbXINIjPNVM/TH3/ty/3zWIdAhPNJcLxy/8sQtGDMkEYd4uWTEkIwRqDMkMgRZDMkSgxJBMEegwJGMEKgzJHIEGQwpAoMCQQhDgMaQgBGgMKQwBFkMKRIDEkEIR4DCkYAQoDCkcAQZDDAEDQwwBA0MMAQNDDAEDQwwBA0MMAQNDDAEDQwwBA0MMAQNDDAEDQwwBA0MMAQNDDAEDQwwBA0MMAQNDDAEDQwwBA0MMAQNDDAEDQwwBA0MMAQNjiwRhT3Pa8Tvuj/BXmocAGDt+LOube/JATY6q2zZecU6qPPLXctby/InmRvMA4NoHfgwrP6b/PYcBYZ6RZuYHuQlh5s8fAGUlBgtCWwxUhEYMJoQmDHSElRhsCHUYLAi1GPPydZ+sRJ36auiH5pfmrv88JSxtZ5r3DuKz5oXmvuaGqE53g/5N81zzlQhhEcON+U/NtltH3NEMNX/IOjLRPNOM/euEevnn71GH/p71mOQeuzwntC1tEeeJ/eXJ+oQEo25iZsL4Z7JePgEdo6k6YsBoLF/RMc5alqjIGK0XdKgYp/56Rh3WGW6v6Zh5iwMRY89v/HX5jtvwu2LZ9Bs2PPf1RPPal4jfCYvC+aKvzzb2C7ePq36TaILIAQMeoS2EYURG6AJhGBERukIYRiSEdSAMIwLCuhCGERhhEwjDCIiwKYRhBEIIAVE6RhCEUBClYgRDCAlRGkZQhNAQpWAER4gBkTtGFIRYELliREOICZEbRlSE2BC5YERHSAHBjpEEIRUEK0YyhJQQbBhJEVJDsGAkR+gDAh2jF4S+IFAxekPoEwINo1eEviFQMHpHQIDoGwMCAQWiLwwYBCSI1BhQCGgQqTDgEBAhYmNAIqBCxMKARUCGCI0BjYAOEQoDHoEBYlMMCgQWiHUxaBCYILpiUCGwQbTFoENghGjCoERghajDcI/dOWdEYIZYxBgNbp+uc82KwA7h2gfNK43rxCfNO9aOsEO49kXzW/OGuRN/BRgALxLHxcRiTwkAAAAASUVORK5CYII=),none');
                var cx = 0;
                if (width >= 800) {
                    if ($('.fs-container img').attr('src') == "http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/cLV2Jfa3yVt76ZmG5kSSmtGq1EDaPsEaxsRkABiudk8!/r/dHkBAAAAAAAA" || $('.fs-container img').attr('src') == "http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/tdqkf6lLmz101XzdNbVOBaCvC50XZPjjO4ZYiu2kge4!/r/dNoAAAAAAAAA" || $('.fs-container img').attr('src') == "http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/ZIbGF6FphBttZp.BrJGbFWk.quS0Lvo7qVFT07mFo6c!/r/dHwBAAAAAAAA" || $('.fs-container img').attr('src') == "http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/2WYHYSXEMUaNSCGqA*NJbChvN9UZSDMEHCgUr*neZnE!/r/dN0AAAAAAAAA" || $('.fs-container img').attr('src') == "http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/rcH0fWAMRaF1jq1U*m0OsY37oDrVQekQGiOqd6EoZdk!/r/dHgBAAAAAAAA" || $('.fs-container img').attr('src') == "http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/7bRRmFespv2*3fIjv2c7Vfh0ee.qhW0ekZvs*8P*Y3A!/r/dOUAAAAAAAAA" || $('.fs-container img').attr('src') == "http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/RB*JDvRKlCLx*gJZtUGwD9kZAS3SOavwjWdTa5g6mLU!/r/dHwBAAAAAAAA" || $('.fs-container img').attr('src') == "http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/9f8QSPDWv66ByptDN8PSzeXiVdsfHyH3wfK1BElgG9s!/r/dI0BAAAAAAAA" || $('.fs-container img').attr('src') == "http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/vyN6tlEmN2tcad4kO.4GuNsbuCHo4HKiUDErHRuOGaQ!/r/dN0AAAAAAAAA" || $('.fs-container img').attr('src') == "http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/vVAurw*7Mfuj5G6aaZrDn9PKhjrtYclwVaJ51MIOSow!/r/dHoBAAAAAAAA" || $('.fs-container img').attr('src') == "http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/RULfTBjQ7NwbD2H2ATGGZ8Kl16Qgko*fxemYOJPmUoU!/r/dHkBAAAAAAAA" || $('.fs-container img').attr('src') == "http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/Zr5BOCINaZNqtEg46zoZUxsSTQ8zpgjQ9Gdz8FkEiZw!/r/dHoBAAAAAAAA") {
                        $('#fs5').css({width: '104.03%', height: '274%', 'min-width': '1047.03px'});
                        $('.fs-container img').css({
                            'transform': 'translate(0px,' + (-e.clientY * 3) + 'px)',
                            '-webkit-transform': 'translate(0px,' + (-e.clientY * 3) + 'px)',
                        });
                    }
                    else {
                        $('#fs5').css({width: '102.4%', height: '122%', 'min-width': '1047.03px'});
                        $('.fs-container img').css({
                            'transform': 'translate(0px,' + (-e.clientY * 0.46) + 'px)',
                            '-webkit-transform': 'translate(0px,' + (-e.clientY * 0.46) + 'px)',
                        });
                    }
                }
                else {
                    if (width >= 739) {
                        cx = 0.4;
                        $('#fs5').css({width: '157.7%', height: '91%', 'min-width': '1047.03px'});
                    }
                    if (width <= 720) {
                        cx = 0.46;
                        $('#fs5').css({width: '157.7%', height: '91%', 'min-width': '1047.03px'});
                    }
                    if (width <= 673) {
                        cx = 0.5;
                        $('#fs5').css({width: '157.7%', height: '91%', 'min-width': '1047.03px'});
                    }
                    if (width <= 640) {
                        cx = 0.68;
                        $('#fs5').css({width: '157.7%', height: '91%', 'min-width': '1047.03px'});
                    }
                    if (width <= 623) {
                        cx = 0.7;
                        $('#fs5').css({width: '157.7%', height: '91%', 'min-width': '1047.03px'});
                    }
                    if (width <= 570) {
                        cx = 0.9;
                        $('#fs5').css({width: '157.7%', height: '95%', 'min-width': '1047.03px'});
                    }
                    if (width <= 430) {
                        cx = 1.6;
                        $('#fs5').css({width: '157.7%', height: '92%', 'min-width': '1047.03px'});
                    }
                    if (width <= 400) {
                        cx = 1.84;
                        $('#fs5').css({width: '157.7%', height: '91%', 'min-width': '1047.03px'});
                    }
                    $('.fs-container img').css({
                        'transform': 'translate(' + (-e.clientX * cx) + 'px,-46px)',
                        '-webkit-transform': 'translate(' + (-e.clientX * cx) + 'px,-46px)',
                    });
                }

            }
        }
        else {
            $(ele).css('cursor', 'pointer');
            $('.fs-container').css('cursor', 'pointer');
        }
    }, false);
}
/* -------- 1/03.html -------------*/
angular.module("joho").controller('module22Ctrl', function ($rootScope, $scope, $timeout) {
    maskShow($rootScope, $timeout, 0);
    similar($rootScope, $timeout);
    var moveFlag = true;
    $timeout(function () {
        var len1 = $('.grid .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.grid .regular span').eq(j), $('.grid .offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.copy-field .copy-block'));
    }, 660)
    $('.grid .medium').each(function (index, ele) {
        $(ele).mouseenter(function () {
            changeScaleEx($('.medium .single-image').eq(index));
        })
        $(ele).mouseleave(function () {
            changeScaleCol($('.medium .single-image').eq(index));
        })
        $(ele).click(function () {
            moveFlag = true;
            $('.fs-container').css('display', 'block');
            if (index == 0) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/cLV2Jfa3yVt76ZmG5kSSmtGq1EDaPsEaxsRkABiudk8!/r/dHkBAAAAAAAA').height('146%');
            }
            else if (index == 1) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/S74TM1ts1DijBbaYt05YWcMdaDg1GdY6qtlZ5tjflj8!/r/dHkBAAAAAAAA');
            }
            else if (index == 2) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/RAP.4vEDy.kuK8EduXC5ewMMn4LC*KH*jiEgEP7mzGY!/r/dN4AAAAAAAAA');
            }

        })
    })

    $('.fs-image').click(function () {
        if (moveFlag) {
            $('.fs-container').css('display', 'none');
            $('.fs-container img').css('opacity', '0');
            moveFlag = false;
        }
    })
    listenMove($('.grid'), moveFlag);

    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 1/04.html -------------*/
angular.module("joho").controller('module23Ctrl', function ($rootScope, $scope, $timeout) {
    maskShow($rootScope, $timeout, 1);
    similar($rootScope, $timeout);
    $timeout(function () {
        var len1 = $('.welcome-brasil .left-box .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.welcome-brasil .left-box .regular span').eq(j), $('.welcome-brasil  .left-box .offset span').eq(j));
            changeShow(j, $('.welcome-brasil .right-box .regular span').eq(j), $('.welcome-brasil .right-box .offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.welcome-brasil .box-container h1'));
    }, 800)
    $timeout(function () {
        changeX($('.welcome-brasil .box-container .small'));
    }, 900)
    $timeout(function () {
        changeX($('.welcome-brasil .sub-copy'));
    }, 1200)
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1400)
})
var movex = 2;
var moveFlag = false;
function moveX(ele, width, speed) {
    var s = speed ? 1 : 0.46;
    if (movex > (-0.2 * width) && moveFlag) {
        movex -= s;
    }
    else {
        movex = parseFloat(movex) + s;
        moveFlag = false;
    }
    if (movex > 3) {
        moveFlag = true;
    }
    $(ele).css({
        '-webkit-transform': 'translate(' + movex + 'px,-5px)',
        '-moz-transform': 'translate(' + movex + 'px,-5px)',
        '-ms-transform': 'translate(' + movex + 'px,-5px)',
        '-o-transform': 'translate(' + movex + 'px,-5px)',
        'transform': 'translate(' + movex + 'px,-5px)',
    })
}
/* -------- 1/05.html -------------*/
angular.module("joho").controller('module24Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    maskShow($rootScope, $timeout, 0);
    $timeout(function () {
        $('.show1').animate({
            'opacity': '1',
            'height': '100%',
        }, 300)
    }, 520)
    $('.ui .copy .light').css('color', '#ef434d');
    $('.ui .copy .switch').css('color', '#ef434d');
    $('.nav-controls line').css('stroke', '#ef434d');
    navControlFlag = false;
    var width = $('.two-thirds').width();
    $interval(function () {
        $('.two-thirds .sky').each(function (index) {
            moveX(this, width, 0);
        })
    }, 400)
    $timeout(function () {
        var len1 = $('.our-trip .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.our-trip .regular span').eq(j), $('.our-trip .offset span').eq(j));
        }
    }, 500)
    $timeout(function () {
        changeX($('.our-trip h1.outlined'));
    }, 600)
    $timeout(function () {
        changeX($('.our-trip .sub-copy'));
    }, 1100)
    $timeout(function () {
        changeX($('.progress-circle .progress-circle-content'));
    }, 1100)
    var moveFlag = true;
    $('.two-thirds').each(function (index, ele) {
        $(ele).mouseenter(function () {
            changeScaleEx($(this).children()[1]);
        })
        $(ele).mouseleave(function () {
            changeScaleCol($(this).children()[1]);
        })
        $(ele).click(function () {
            moveFlag = true;
            $('.fs-container').css('display', 'block');
            if (index == 0) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/5BRoEdNAxv*0DqyS4nSwhY7ytI3YbrkJ*uU3mQdUD7k!/r/dN4AAAAAAAAA');
            }
            else if (index == 1) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/OBePTrPvVK2R.47y1LuuTFtW0Tjz4KWhp1ujgw33CnY!/r/dN0AAAAAAAAA');
            }

        })
        listenMove($('.grid-el'), moveFlag);

        $('.fs-image').click(function () {
            if (moveFlag) {
                $('.fs-container').css('display', 'none');
                $('.fs-container img').css('opacity', '0');
                moveFlag = false;
            }
        })
    })
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1500)
})
/* -------- 2/01.html -------------*/
angular.module("joho").controller('module31Ctrl', function ($rootScope, $scope, $timeout) {
    maskShow($rootScope, $timeout, 1);
    similar($rootScope, $timeout);
    headline($timeout);
    $('#typography path').css('opacity', '1');
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 2/02.html -------------*/
angular.module("joho").controller('module32Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    maskShow($rootScope, $timeout, 0);
    similar($rootScope, $timeout);
    var width = $('.image-layered').width();
    $interval(function () {
        $('.image-layered .sky').each(function (index) {
            moveX(this, width, 1);
        })
    }, 400)
    $timeout(function () {
        var len1 = $('.top-container .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.top-container .regular span').eq(j), $('.top-container .offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.top-container p'));
    }, 800)
    $timeout(function () {
        changeX($('.top-container h1'));
    }, 900)
    $timeout(function () {
        changeX($('.facts-about .stats-el'));
    }, 1100)
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1300)
})
/* -------- 2/03.html -------------*/
angular.module("joho").controller('module33Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    maskShow($rootScope, $timeout, 1);
    similar($rootScope, $timeout);
    $timeout(function () {
        var len1 = $('.grid-el .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.grid-el .regular span').eq(j), $('.grid-el .offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.copy-field .copy-block'));
    }, 700)
    var moveFlag = true;
    $('.half-height').each(function (index, ele) {
        if (index != 0) {
            $(ele).mouseenter(function () {
                changeScaleEx($(this).children()[0]);
            })
            $(ele).mouseleave(function () {
                changeScaleCol($(this).children()[0]);
            })
            $(ele).click(function () {
                moveFlag = true;
                $('.fs-container').css('display', 'block');
                if (index == 1) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/Hpa3.0BcrK1AwFO9kHHVK9bcRVhP7Gc1idbQrW4*dIw!/r/dNwAAAAAAAAA');
                }
                else if (index == 2) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/SGq*2WydMxIgIH7hJ0Ktof8NSVEsSwir3UOcZ1W02NM!/r/dHgBAAAAAAAA');
                }
                else if (index == 3) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/bWqFjN7WHDrK9I4DxGLRhiubLUkPO471xWaknxWO0iI!/r/dN4AAAAAAAAA');
                }

            })
        }
        listenMove($('.children-top'), moveFlag);
        listenMove($('.two-thirds'), moveFlag);
        listenMove($('.one-third'), moveFlag);
        $('.fs-image').click(function () {
            if (moveFlag) {
                $('.fs-container').css('display', 'none');
                $('.fs-container img').css('opacity', '0');
                moveFlag = false;
            }
        })

    })
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 2/04.html -------------*/
angular.module("joho").controller('module34Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    maskShow($rootScope, $timeout, 0);
    similar($rootScope, $timeout);
    $timeout(function () {
        var len1 = $('.grid-el .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.grid-el .regular span').eq(j), $('.grid-el .offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.copy-field .copy-block'));
    }, 700)
    var moveFlag = true;
    $('.small').each(function (index, ele) {
        if (index != 2) {
            $(ele).mouseenter(function () {
                changeScaleEx($(this).children()[0]);
            })
            $(ele).mouseleave(function () {
                changeScaleCol($(this).children()[0]);
            })
            $(ele).click(function () {
                moveFlag = true;
                $('.fs-container').css('display', 'block');
                if (index == 0) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/ZIbGF6FphBttZp.BrJGbFWk.quS0Lvo7qVFT07mFo6c!/r/dHwBAAAAAAAA').height('146%');
                }
                else if (index == 1) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/TbvfyoWnO2yyuJ4CIvYxYJWqm4O3k.i*KCSK0Dnj9WM!/r/dOMAAAAAAAAA');
                }
                else if (index == 3) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/tdqkf6lLmz101XzdNbVOBaCvC50XZPjjO4ZYiu2kge4!/r/dNoAAAAAAAAA').height('146%');
                }

            })
        }
        listenMove($('.small:eq(0)'), moveFlag);
        listenMove($('.small:eq(1)'), moveFlag);
        listenMove($('.small:eq(3)'), moveFlag);
        $('.fs-image').click(function () {
            if (moveFlag) {
                $('.fs-container').css('display', 'none');
                $('.fs-container img').css('opacity', '0');
                moveFlag = false;
            }
        })

    })
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 3/01.html -------------*/
angular.module("joho").controller('module41Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    maskShow($rootScope, $timeout, 1);
    similar($rootScope, $timeout);
    headline($timeout);
    $('#typography path').css('opacity', '1');
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 3/02.html -------------*/
angular.module("joho").controller('module42Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    maskShow($rootScope, $timeout, 0);
    similar($rootScope, $timeout);
    var width = $('.image-layered').width();
    $interval(function () {
        $('.image-layered .sky').each(function (index) {
            moveX(this, width, 1);
        })
    }, 400)
    $timeout(function () {
        var len1 = $('.top-container .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.top-container .regular span').eq(j), $('.top-container .offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.top-container p'));
    }, 800)
    $timeout(function () {
        changeX($('.top-container h1'));
    }, 900)
    $timeout(function () {
        changeX($('.facts-about .stats-el'));
    }, 1100)
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1300)
})
/* -------- 3/03.html -------------*/
angular.module("joho").controller('module43Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    $timeout(function () {
        $('.show1').animate({
            'opacity': '1',
            'height': '100%',
        }, 300)
    }, 520)
    $('.ui .copy .light').css('color', '#ef434d');
    $('.ui .copy .switch').css('color', '#ef434d');
    $('.nav-controls line').css('stroke', '#ef434d');
    imgmaskShow($rootScope, $timeout, 0);
    $('.si .single-image').delay(500).animate({
        'opacity': '1',
        'height': '100%'
    })
    navControlFlag = false;
    $timeout(function () {
        var len1 = $('.two-thirds-height .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.two-thirds-height .regular span').eq(j), $('.two-thirds-height .offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.copy-field .copy-block'));
    }, 700)
    var moveFlag = true;
    $('.one-third').each(function (index, ele) {
        $(ele).mouseenter(function () {
            changeScaleEx($(this).children()[0]);
        })
        $(ele).mouseleave(function () {
            changeScaleCol($(this).children()[0]);
        })
        $(ele).click(function () {
            moveFlag = true;
            $('.fs-container').css('display', 'block');
            if (index == 0) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/B8aC*HXHLpbKXMVwsl.vmUoaq4WFIZu4.nuVuD4Gvzg!/r/dHcBAAAAAAAA');
            }
            else if (index == 1) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/ceOfiWcPyzGoQk7fl3XsajvGIwGFDoPrfQhiZJPRIxs!/r/dHkBAAAAAAAA');
            }
            else if (index == 2) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/2WYHYSXEMUaNSCGqA*NJbChvN9UZSDMEHCgUr*neZnE!/r/dN0AAAAAAAAA').height('146%');
            }
            else if (index == 3) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/PZpylALFfhC6CSTpyZxu3P2xF9seJbpbDHMtIXYwnj4!/r/dOMAAAAAAAAA');
            }
            else if (index == 4) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/rcH0fWAMRaF1jq1U*m0OsY37oDrVQekQGiOqd6EoZdk!/r/dHgBAAAAAAAA').height('146%');
            }

        })
        listenMove($('.one-third'), moveFlag);

        $('.fs-image').click(function () {
            if (moveFlag) {
                $('.fs-container').css('display', 'none');
                $('.fs-container img').css('opacity', '0');
                moveFlag = false;
            }
        })
    })
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 3/04.html -------------*/
angular.module("joho").controller('module44Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    imgmaskShow($rootScope, $timeout, 1);
    $('.si .single-image').delay(500).animate({
        'opacity': '1',
        'height': '100%'
    })
    similar($rootScope, $timeout);
    $timeout(function () {
        var len1 = $('.grid-el .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.grid-el .regular span').eq(j), $('.grid-el .offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.copy-field .copy-block'));
    }, 700)
    var moveFlag = true;
    $('.m4 .grid-el').each(function (index, ele) {
        if (index == 0 || index == 2 || index == 4) {
            $(ele).mouseenter(function () {
                changeScaleEx($(this).children()[0]);
            })
            $(ele).mouseleave(function () {
                changeScaleCol($(this).children()[0]);
            })
            $(ele).click(function () {
                moveFlag = true;
                $('.fs-container').css('display', 'block');
                if (index == 0) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/dV8B8nBuQD3hx8NAjAPPdYDwa11xEU6EgXqHlogPKig!/r/dHcBAAAAAAAA');
                }
                else if (index == 2) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/LgJmf0yQ.8l.PwF7AAQaL4874Dz6HQdPWAup9SNArUY!/r/dAkBAAAAAAAA');
                }
                else if (index == 4) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/MN30.n5OxSalWoGBojOdhS469kxvTGqihuFw6N0JDkk!/r/dN4AAAAAAAAA');
                }

            })
        }
        listenMove($('.two-thirds-height:eq(0)'), moveFlag);
        listenMove($('.one-third-height:eq(0)'), moveFlag);
        listenMove($('.one-third-height:eq(2)'), moveFlag);

        $('.fs-image').click(function () {
            if (moveFlag) {
                $('.fs-container').css('display', 'none');
                $('.fs-container img').css('opacity', '0');
                moveFlag = false;
            }
        })
    })
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 3/05.html -------------*/
angular.module("joho").controller('module45Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    imgmaskShow($rootScope, $timeout, 0);
    similar($rootScope, $timeout);
    $('.si .single-image').delay(500).animate({
        'opacity': '1',
        'height': '100%'
    })
    $timeout(function () {
        var len1 = $('.grid-el .outlined .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.grid-el .outlined .regular span').eq(j), $('.grid-el .outlined .offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.copy-field .copy-block'));
    }, 700)
    var moveFlag = true;
    $('.m5 .grid-el').each(function (index, ele) {
        if (index != 4) {
            $(ele).mouseenter(function () {
                changeScaleEx($(this).children()[0]);
            })
            $(ele).mouseleave(function () {
                changeScaleCol($(this).children()[0]);
            })
            $(ele).click(function () {
                moveFlag = true;
                $('.fs-container').css('display', 'block');
                if (index == 0) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/7bRRmFespv2*3fIjv2c7Vfh0ee.qhW0ekZvs*8P*Y3A!/r/dOUAAAAAAAAA').height('146%');
                }
                else if (index == 1) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/j2874PpIFr29b84m90*WuHmm6u23L.tbY.PcB.TEhVM!/r/dAoBAAAAAAAA');
                }
                else if (index == 2) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/IlkBioV1IBBuoc1UN0tSziZbz05.2HzUjSIEw99ZpO8!/r/dHkBAAAAAAAA');
                }
                else if (index == 3) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/RB*JDvRKlCLx*gJZtUGwD9kZAS3SOavwjWdTa5g6mLU!/r/dHwBAAAAAAAA').height('146%');
                }
                else if (index == 5) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/9f8QSPDWv66ByptDN8PSzeXiVdsfHyH3wfK1BElgG9s!/r/dI0BAAAAAAAA').height('146%');
                }

            })
        }
        listenMove($('.half-height:not(.copy-field)'), moveFlag);

        $('.fs-image').click(function () {
            if (moveFlag) {
                $('.fs-container').css('display', 'none');
                $('.fs-container img').css('opacity', '0');
                moveFlag = false;
            }
        })
    })
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 3/06.html -------------*/
angular.module("joho").controller('module46Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    maskShow($rootScope, $timeout, 1);
    similar($rootScope, $timeout);
    $timeout(function () {
        var len1 = $('.grid-el .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.grid-el .regular span').eq(j), $('.grid-el .offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.grid-el .outlined p'));
    }, 800)
    $timeout(function () {
        changeX($('.grid-el .outlined h1'));
    }, 900)
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 3/07.html -------------*/
angular.module("joho").controller('module47Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    imgmaskShow($rootScope, $timeout, 1);
    similar($rootScope, $timeout);
    $('.si .single-image').delay(500).animate({
        'opacity': '1',
        'height': '100%'
    })
    $timeout(function () {
        var len1 = $('.grid-el .outlined .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.grid-el .outlined .regular span').eq(j), $('.grid-el .outlined .offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.copy-field .copy-block'));
    }, 700)
    var moveFlag = true;
    $('.m7 .image').each(function (index, ele) {
        if (index != 4) {
            $(ele).mouseenter(function () {
                changeScaleEx($(this).children()[0]);
            })
            $(ele).mouseleave(function () {
                changeScaleCol($(this).children()[0]);
            })
            $(ele).click(function () {
                moveFlag = true;
                $('.fs-container').css('display', 'block');
                if (index == 0) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/vyN6tlEmN2tcad4kO.4GuNsbuCHo4HKiUDErHRuOGaQ!/r/dN0AAAAAAAAA').height('146%');
                }
                else if (index == 1) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/R6g7Emv4IOao9kzWv4As8P1p*0FhN4pEGnDrUTK.GDQ!/r/dHkBAAAAAAAA');
                }
                else if (index == 2) {
                    $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/vVAurw*7Mfuj5G6aaZrDn9PKhjrtYclwVaJ51MIOSow!/r/dHoBAAAAAAAA').height('146%');
                }

            })
        }
        listenMove($('.m7 .image'), moveFlag);

        $('.fs-image').click(function () {
            if (moveFlag) {
                $('.fs-container').css('display', 'none');
                $('.fs-container img').css('opacity', '0');
                moveFlag = false;
            }
        })
    })
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 3/08.html -------------*/
angular.module("joho").controller('module48Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    maskShow($rootScope, $timeout, 0);
    similar($rootScope, $timeout);
    var roFlag = true;
    $('.fullscreen').bind('mousemove', function (event) {
        var event = window.event || event; // old IE support
        $('.cursor-custom').css('opacity', '1');
        $('.cursor-custom').css({
            top: (event.clientY - 30) + 'px',
            left: (event.clientX - 30) + 'px',
        })
        if ((parseInt($('.cursor-custom').css('left')) + 60) <= $(this).width() / 2 && roFlag) {
            $('.cursor-custom').css({
                'transform': 'rotateY(180deg)',
                '-webkit-transform': 'rotateY(180deg)',
                '-moz-transform': 'rotateY(180deg)',
                '-ms-transform': 'rotateY(180deg)',
            });
            roFlag = false;
        }
        else if ((parseInt($('.cursor-custom').css('left')) + 60) > $(this).width() / 2 && !roFlag) {
            $('.cursor-custom').css({
                'transform': 'rotateY(0deg)',
                '-webkit-transform': 'rotateY(0deg)',
                '-moz-transform': 'rotateY(0deg)',
                '-ms-transform': 'rotateY(0deg)',
            });
            roFlag = true;
        }
    })
    var index = 0;
    $('.m8').bind('click', function () {
        if (roFlag) {//表示翻到下一张图片
            index++;
            if (index == 3) {
                index = 0;
            }
            maskHover($rootScope, $timeout, 1);
            $timeout(function () {
                maskHover($rootScope, $timeout, 0);
            }, 350)
        }
        else {// 表示翻到上一张图片
            index--;
            if (index == -1) {
                index = 2;
            }
            maskHover($rootScope, $timeout, 2);
            $timeout(function () {
                maskHover($rootScope, $timeout, 3)
            }, 350)
        }
        $('.m8 .nav-box').css('opacity', '0');
        $timeout(function () {
            if (index == 0) {
                $('.m8 .single-image').css('background-image', 'url(http://r.photo.store.qq.com/psb?/V11qlMW71qolVB/E1XaCX7F2zdIvBsbK*eHGdafdApVhP09XSE3ZROVJr0!/r/dG8BAAAAAAAA)');
                $('.m8 .title-bottom').html('&nbsp;STEP 1');
                $('.m8 .title-top b').html('FIRST DAY');
            }
            else if (index == 1) {
                $('.m8 .single-image').css('background-image', 'url(http://r.photo.store.qq.com/psb?/V11qlMW71qolVB/tb45C1D399iOTQgsv1lEgFmVGl.19pXefYBaR01u9XU!/r/dG8BAAAAAAAA)');
                $('.m8 .title-bottom').html('&nbsp;STEP 2');
                $('.m8 .title-top b').html('5-10 DAYS');
            }
            else if (index == 2) {
                $('.m8 .single-image').css('background-image', 'url(http://r.photo.store.qq.com/psb?/V11qlMW71qolVB/6Ij.xc*QFIaKv9mXCjVhPW20kckKVmVYyxI.TLl3IB8!/r/dN0AAAAAAAAA)');
                $('.m8 .title-bottom').html('&nbsp;STEP 3');
                $('.m8 .title-top b').html('10-15 DAYS');
            }
            $('.m8 .nav-box').delay(100).animate({'opacity': '1'});
        }, 380)
    })
    $timeout(function () {
        var len1 = $('.nav-box .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.nav-box .regular span').eq(j), $('.nav-box .offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.nav-container .copy-contents'));
    }, 800)
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 4/01.html -------------*/
angular.module("joho").controller('module51Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    maskShow($rootScope, $timeout, 1);
    similar($rootScope, $timeout);
    headline($timeout);
    $('#typography path').css('opacity', '1');
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 4/02.html -------------*/
angular.module("joho").controller('module52Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    imgmaskShow($rootScope, $timeout, 0);
    similar($rootScope, $timeout);
    $('.si .single-image').delay(500).animate({
        'opacity': '1',
        'height': '100%'
    })
    $timeout(function () {
        var len1 = $('.grid-el .outlined .outer.regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.grid-el .outlined .outer.regular span').eq(j), $('.grid-el .outlined .outer.offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.copy-field .copy-block'));
    }, 700)
    $timeout(function () {
        var len1 = $('.grid-el .outlined .inner.regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.grid-el .outlined .inner.regular span').eq(j), $('.grid-el .outlined .inner.offset span').eq(j));
        }
    }, 750)
    var moveFlag = true;
    $('.m4 .image').each(function (index, ele) {
        $(ele).mouseenter(function () {
            changeScaleEx($(this).children()[0]);
        })
        $(ele).mouseleave(function () {
            changeScaleCol($(this).children()[0]);
        })
        $(ele).click(function () {
            moveFlag = true;
            $('.fs-container').css('display', 'block');
            if (index == 0) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/RULfTBjQ7NwbD2H2ATGGZ8Kl16Qgko*fxemYOJPmUoU!/r/dHkBAAAAAAAA').height('146%');
            }
            else if (index == 1) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/ouY6jcim651b8SRMC3QjrkE1OsZsiUhYmVSSTO4hibc!/r/dHgBAAAAAAAA');
            }
        })
        listenMove($('.m4 .image'), moveFlag);

        $('.fs-image').click(function () {
            if (moveFlag) {
                $('.fs-container').css('display', 'none');
                $('.fs-container img').css('opacity', '0');
                moveFlag = false;
            }
        })
    })
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 4/03.html -------------*/
angular.module("joho").controller('module53Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    imgmaskShow($rootScope, $timeout, 1);
    similar($rootScope, $timeout);
    $('.si .single-image').delay(500).animate({
        'opacity': '1',
        'height': '100%'
    })
    $timeout(function () {
        var len1 = $('.grid-el .outlined .outer.regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.grid-el .outlined .outer.regular span').eq(j), $('.grid-el .outlined .outer.offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.copy-field .copy-block'));
    }, 700)
    $timeout(function () {
        var len1 = $('.grid-el .outlined .inner.regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.grid-el .outlined .inner.regular span').eq(j), $('.grid-el .outlined .inner.offset span').eq(j));
        }
    }, 750)
    var moveFlag = true;
    $('.m43 .image').each(function (index, ele) {
        $(ele).mouseenter(function () {
            changeScaleEx($(this).children()[0]);
        })
        $(ele).mouseleave(function () {
            changeScaleCol($(this).children()[0]);
        })
        $(ele).click(function () {
            moveFlag = true;
            $('.fs-container').css('display', 'block');
            if (index == 0) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/P00cO77BcU3P6Ao2z8IqpBdn6OqfYqd8vA4P5PO2rbE!/r/dN4AAAAAAAAA');
            }
            else if (index == 1) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/*80fJiYTq7tHoO597Hrhmfv7ZOQlPC4idfsjIZIAgRw!/r/dHcBAAAAAAAA');
            }
        })
        listenMove($('.m43 .image'), moveFlag);

        $('.fs-image').click(function () {
            if (moveFlag) {
                $('.fs-container').css('display', 'none');
                $('.fs-container img').css('opacity', '0');
                moveFlag = false;
            }
        })
    })
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 5/01.html -------------*/
angular.module("joho").controller('module61Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    maskShow($rootScope, $timeout, 0);
    similar($rootScope, $timeout);
    headline($timeout);
    $('#typography path').css('opacity', '1');
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 5/02.html -------------*/
angular.module("joho").controller('module62Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    imgmaskShow($rootScope, $timeout, 1);
    similar($rootScope, $timeout);
    $('.si .single-image').delay(500).animate({
        'opacity': '1',
        'height': '100%'
    })
    $timeout(function () {
        var len1 = $('.grid-el .outlined .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.grid-el .outlined .regular span').eq(j), $('.grid-el .outlined .offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.copy-field .copy-block'));
    }, 700)
    var moveFlag = true;
    $('.m52 .image').each(function (index, ele) {
        $(ele).mouseenter(function () {
            changeScaleEx($(this).children()[0]);
        })
        $(ele).mouseleave(function () {
            changeScaleCol($(this).children()[0]);
        })
        $(ele).click(function () {
            moveFlag = true;
            $('.fs-container').css('display', 'block');
            if (index == 0) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/lMQIJqAmNK0DyQZXVVrfziRWaNMcPEbQdcL1z.u3JPk!/r/dHkBAAAAAAAA');
            }
            else if (index == 1) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/wecKkcf5tcP8CmiAVzDMb1Lq7iykv5wP2OddMDpDQKc!/r/dHABAAAAAAAA');
            }
        })
        listenMove($('.m52 .image'), moveFlag);

        $('.fs-image').click(function () {
            if (moveFlag) {
                $('.fs-container').css('display', 'none');
                $('.fs-container img').css('opacity', '0');
                moveFlag = false;
            }
        })
    })
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 5/03.html -------------*/
angular.module("joho").controller('module63Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    $scope.gallertItems = [
        {
            index: '1',
            title: "The coffee berries are harvested by hand.",
            imgUrl: 'assets/photos/53a.jpg'
        },
        {
            index: '2',
            title: "The berries need to be processed quickly, so that they can maintain their quality",
            imgUrl: 'assets/photos/53b.jpg'
        },
        {
            index: '3',
            title: "A scanner recognises the colours of the fruit, and separates the ripe (yellow) from the unripe (green) and overripe (black).",
            imgUrl: 'assets/photos/53c.jpg'
        },
        {
            index: '4',
            title: "The berries are dried in the sun on a so-called patio. When the berries have water content similar to raisins, the berry flesh will be removed with a de-pulper. Then the beans are again laid out to dry.",
            imgUrl: 'assets/photos/53d.jpg'
        },
        {
            index: '5',
            title: "Once the “Pulped Naturals” have reached a residual moistness of about ten per cent, they are sorted by size and packed in sacks. Then they take the trip to Graz.",
            imgUrl: 'assets/photos/53e.jpg'
        },

    ]
    function trans(ele,ele1,n){
        if(n==0){
            $(ele1).css({
                '-webkit-transform': 'translateY(5px) rotate(45deg)',
                '-moz-transform': 'translateY(5px) rotate(45deg)',
                '-ms-transform': 'translateY(5px) rotate(45deg)',
                '-o-transform': 'translateY(5px) rotate(45deg)',
                'transform': 'translateY(5px) rotate(45deg)',
            })
            $(ele).css({
                '-webkit-transform': ' translateY(-1px) rotate(45deg)',
                '-moz-transform': ' translateY(-1px) rotate(45deg)',
                '-ms-transform': ' translateY(-1px) rotate(45deg)',
                '-o-transform': ' translateY(-1px) rotate(45deg)',
                'transform': ' translateY(-1px) rotate(45deg)',
            })
        }
        else{
            $(ele).css({
                '-webkit-transform': 'rotate(45deg)translateY(0px)translateX(0px)',
                '-moz-transform': 'rotate(45deg)translateY(0px)translateX(0px)',
                '-ms-transform': 'rotate(45deg)translateY(0px)translateX(0px)',
                '-o-transform': 'rotate(45deg)translateY(0px)translateX(0px)',
                'transform': 'rotate(45deg)translateY(0px)translateX(0px)',
            })
            $(ele1).css({
                '-webkit-transform': 'rotate(45deg)translateY(0px)translateX(0px)',
                '-moz-transform': 'rotate(45deg)translateY(0px)translateX(0px)',
                '-ms-transform': 'rotate(45deg)translateY(0px)translateX(0px)',
                '-o-transform': 'rotate(45deg)translateY(0px)translateX(0px)',
                'transform': 'rotate(45deg)translateY(0px)translateX(0px)',
            })
        }
    }
    maskShow($rootScope, $timeout, 1);
    similar($rootScope, $timeout);
    $timeout(function () {
        var len1 = $('.grid-el .outlined .outer.regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.grid-el .outlined .outer.regular span').eq(j), $('.grid-el .outlined .outer.offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.copy-field .copy-block'));
    }, 700)
    $timeout(function () {
        var len1 = $('.grid-el .outlined .inner.regular:eq(0) span').length;
        $('.grid-el .outlined .inner.regular').each(function (index, ele) {
            for (var j = 0; j < len1; j++) {
                changeShow(j, $('.grid-el .outlined .inner.regular:eq(' + index + ') span').eq(j), $('.grid-el .outlined .inner.offset:eq(' + index + ') span').eq(j));
            }
        })

    }, 750)
    var roFlag = true;
    $('.fullscreen').bind('mousemove', function (event) {
        var event = window.event || event; // old IE support
        var mwidth = $('.m53 .gallery-copy-container').width();
        $('.cursor-custom').css('opacity', '1');
        $('.cursor-custom').css({
            top: (event.clientY  -30) + 'px',
            left: (event.clientX - mwidth - 14 - 30) + 'px',
        })
        if ((parseInt($('.cursor-custom').css('top')) + 60) <= $(this).height() / 2 && roFlag) {
            $('.cursor-custom').css({
                'transform': 'rotate(-90deg)',
                '-webkit-transform': 'rotate(-90deg)',
                '-moz-transform': 'rotate(-90deg)',
                '-ms-transform': 'rotate(-90deg)',
            });
            roFlag = false;
        }
        else if ((parseInt($('.cursor-custom').css('top')) + 60) > $(this).height() / 2 && !roFlag) {
            $('.cursor-custom').css({
                'transform': 'rotate(90deg)',
                '-webkit-transform': 'rotate(90deg)',
                '-moz-transform': 'rotate(90deg)',
                '-ms-transform': 'rotate(90deg)',
            });
            roFlag = true;
        }
    })
    var index = 0;
    var movex = -52.8;
    $('.gallery-image-container').bind('click', function () {
        $('.m53 .mask-hover').css('z-index','10');
        var delaytime = 0;
        if (roFlag) {//表示翻到下一张图片
            index++;
            if (index == 5) {
                index = 0;
            }
            delaytime=350;
            maskHover($rootScope, $timeout, 5);
            $timeout(function () {
                maskHover($rootScope, $timeout, 6);
            }, 340)
        }
        else {// 表示翻到上一张图片
            index--;
            if (index == -1) {
                index = 4;
            }
            delaytime=530;
            maskHover($rootScope, $timeout, 4);
            $timeout(function () {
                $('.m53 .mask-hover').css('z-index','-1')
            }, 540)
        }
        $('.m53 .nav-box').css('opacity', '0');
        $timeout(function () {
            if (index == 0) {
                $('.m53 .single-image').css('background-image', 'url(http://r.photo.store.qq.com/psb?/V11qlMW71qolVB/p7c0QDpyZ8dIA94IGCeRlS8qcfrxS0mxh*tI4FvSTWI!/r/dI0BAAAAAAAA)');
                $('.m53 .title-bottom').html('&nbsp;STEP 1');
                $('.m53 .title-top b').html('HARVEST');
                $('.m53 .slider-list-items').css({
                    'transform':'matrix(1, 0, 0, 1, 0, -52.8)',
                    'transition':'all 500ms',
                    '-webkit-transition':'all 500ms',
                    '-moz-transition':'all 500ms',
                    '-ms-transition':'all 500ms',
                })
            }
            else if (index == 1) {
                $('.m53 .single-image').css('background-image', 'url(http://r.photo.store.qq.com/psb?/V11qlMW71qolVB/WSFeP8989nC43FrTm*f4dI*H7CD1Gm.zUFE6vwWMWbY!/r/dN0AAAAAAAAA)');
                $('.m53 .title-bottom').html('&nbsp;STEP 2');
                $('.m53 .title-top b').html('PROCESSING');
                $('.m53 .slider-list-items').css({
                    'transform':'matrix(1, 0, 0, 1, 0, -223.6)',
                    'transition':'all 500ms',
                    '-webkit-transition':'all 500ms',
                    '-moz-transition':'all 500ms',
                    '-ms-transition':'all 500ms',
                })
            }
            else if (index == 2) {
                $('.m53 .single-image').css('background-image', 'url(http://r.photo.store.qq.com/psb?/V11qlMW71qolVB/bJjzVsI.1EBEM.twFvV4U3Bk8DlKkZZO.rSiQw9cwE0!/r/dI8AAAAAAAAA)');
                $('.m53 .title-bottom').html('&nbsp;STEP 3');
                $('.m53 .title-top b').html('MONITORING');
                $('.m53 .slider-list-items').css({
                    'transform':'matrix(1, 0, 0, 1, 0, -390)',
                    'transition':'all 500ms',
                    '-webkit-transition':'all 500ms',
                    '-moz-transition':'all 500ms',
                    '-ms-transition':'all 500ms',
                })
            }
            else if (index == 3) {
                $('.m53 .single-image').css('background-image', 'url(http://r.photo.store.qq.com/psb?/V11qlMW71qolVB/yYXgcfkoA8mM7qdBCZqQz*9Mq20QcvHEZMwFPMrCczg!/r/dHEBAAAAAAAA)');
                $('.m53 .title-bottom').html('&nbsp;STEP 4');
                $('.m53 .title-top b').html('DRYING');
                $('.m53 .slider-list-items').css({
                    'transform':'matrix(1, 0, 0, 1, 0, -600)',
                    'transition':'all 500ms',
                    '-webkit-transition':'all 500ms',
                    '-moz-transition':'all 500ms',
                    '-ms-transition':'all 500ms',
                })
            }
            else if (index == 4) {
                $('.m53 .single-image').css('background-image', 'url(http://r.photo.store.qq.com/psb?/V11qlMW71qolVB/rKPA2AMaC8uCuUnjTs.ryBv1m6S.Wn1s1GtL9P6Uk7c!/r/dN4AAAAAAAAA)');
                $('.m53 .title-bottom').html('&nbsp;STEP 5');
                $('.m53 .title-top b').html('PACKING');
                $('.m53 .slider-list-items').css({
                    'transform':'matrix(1, 0, 0, 1, 0, -820)',
                    'transition':'all 500ms',
                    '-webkit-transition':'all 500ms',
                    '-moz-transition':'all 500ms',
                    '-ms-transition':'all 500ms',
                })
            }
            $('.m53 .nav-box').delay(100).animate({'opacity': '1'});
            trans($('.m53 .gallery-copy:eq('+index+') .regular'),$('.m53 .gallery-copy:eq('+index+') .offset'),0);
            trans($('.m53 .gallery-copy:not(.gallery-copy:eq('+index+')) .regular'),$('.m53 .gallery-copy:not(.gallery-copy:eq('+index+')) .offset'),1);
        }, delaytime)
    })
    $timeout(function () {
        var len1 = $('.gallery-item-title .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.gallery-item-title .regular span').eq(j), $('.gallery-item-title .offset span').eq(j));
        }
    }, 800)
    $timeout(function () {
        changeX($('.nav-container .copy-contents'));
    }, 900)
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 8/01.html -------------*/
angular.module("joho").controller('module91Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    maskShow($rootScope, $timeout, 0);
    similar($rootScope, $timeout);
    headline($timeout);
    $('#typography path').css('opacity', '1');
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 8/02.html -------------*/
angular.module("joho").controller('module92Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    imgmaskShow($rootScope, $timeout, 1);
    similar($rootScope, $timeout);
    $('.si .single-image').delay(500).animate({
        'opacity': '1',
        'height': '100%'
    })
    var moveFlag = true;
    $('.m8 .image').each(function (index, ele) {
        $(ele).mouseenter(function () {
            changeScaleEx($(this).children()[0]);
        })
        $(ele).mouseleave(function () {
            changeScaleCol($(this).children()[0]);
        })
        $(ele).click(function () {
            moveFlag = true;
            $('.fs-container').css('display', 'block');
            if (index == 0) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/Zr5BOCINaZNqtEg46zoZUxsSTQ8zpgjQ9Gdz8FkEiZw!/r/dHoBAAAAAAAA').height('146%');
            }
            else if (index == 1) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/yZQs2Y4bd3xYqMiN6UpL5bhOLcZl6zt*5mTKuTqM7wc!/r/dAkBAAAAAAAA');
            }
            else if (index == 2) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/J*aAoIyxsAhSz3zNY1bKFT9FSKlJNUHBQDtNvLsPz18!/r/dHABAAAAAAAA');
            }
        })
        listenMove($('.m8 .image'), moveFlag);

        $('.fs-image').click(function () {
            if (moveFlag) {
                $('.fs-container').css('display', 'none');
                $('.fs-container img').css('opacity', '0');
                moveFlag = false;
            }
        })
    })
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 8/03.html -------------*/
angular.module("joho").controller('module93Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    maskShow($rootScope, $timeout, 1);
    similar($rootScope, $timeout);
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 8/04.html -------------*/
angular.module("joho").controller('module94Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    imgmaskShow($rootScope, $timeout, 0);
    similar($rootScope, $timeout);
    $('.si .single-image').delay(500).animate({
        'opacity': '1',
        'height': '100%'
    })
    var moveFlag = true;
    $('.m8 .image').each(function (index, ele) {
        $(ele).mouseenter(function () {
            changeScaleEx($(this).children()[0]);
        })
        $(ele).mouseleave(function () {
            changeScaleCol($(this).children()[0]);
        })
        $(ele).click(function () {
            moveFlag = true;
            $('.fs-container').css('display', 'block');
            if (index == 0) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/of.strOAuU48NNF8VaNJIix6zOlz88JlrtjDVq491Ms!/r/dN0AAAAAAAAA');
            }
            else if (index == 1) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/IpEum3YynGOWh*t5XAJHLhHH9sqBVOsgHRLR10Au1Hs!/r/dN0AAAAAAAAA');
            }
            else if (index == 2) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/nMLtaUhwdEHJP4uWccmcNCXme8XoYkjoE4wnJbIKT08!/r/dHwBAAAAAAAA');
            }
            else if (index == 3) {
                $('.fs-container img').css('opacity', '1').attr('src', 'http://r.photo.store.qq.com/psb?/V11qlMW72anv3q/h7.IsJ.SIbIJUFubxjr7QUJpxVvvQnkhCa3qNtKy8G0!/r/dHkBAAAAAAAA');
            }
        })
        listenMove($('.m8 .image'), moveFlag);

        $('.fs-image').click(function () {
            if (moveFlag) {
                $('.fs-container').css('display', 'none');
                $('.fs-container img').css('opacity', '0');
                moveFlag = false;
            }
        })
    })
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 8/05.html -------------*/
angular.module("joho").controller('module95Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    maskShow($rootScope, $timeout, 0);
    similar($rootScope, $timeout);
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})
/* -------- 8/06.html -------------*/
angular.module("joho").controller('module96Ctrl', function ($rootScope, $scope, $timeout, $interval) {
    maskShow($rootScope, $timeout, 1);
    similar($rootScope, $timeout);
    $timeout(function () {
        var len1 = $('.grid-el .regular span').length;
        for (var j = 0; j < len1; j++) {
            changeShow(j, $('.grid-el .regular span').eq(j), $('.grid-el .offset span').eq(j));
        }
    }, 600)
    $timeout(function () {
        changeX($('.grid-el .copy-block'));
    }, 700)
    $timeout(function () {
        changeX($('.order-johos'));
    }, 750)
    $timeout(function () {
        $rootScope.pageDownFlag = true;
        $rootScope.pageUpFlag = true;
    }, 1200)
})