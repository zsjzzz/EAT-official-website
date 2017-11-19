$(document).ready(function () {
    autoHeightSet();
    swiperLoading();
    menuSlidedown();
    tabSwitch();
    shopCartFly();
    navSwitch('.top-nav', '.taste-nav', '.taste', '.top-header');
    countTime();
    navSubPaddingSet();
    $(window).resize(function () {
        autoHeightSet();
    })
    tasteHeight = $('.taste').height();
    nav2BoxTop = $('.taste').offset().top + tasteHeight - $('.taste-nav').height();
    var now_client = $(window).width();
    var pro = $('.product-box');
    var find_con = $('.find-container');
    var recommend_box = $('.recommend-box');
    var reco_con_prev = $('.recommend-container .swiper-slide-prev');
    if (now_client > 340 && now_client < 365) {
        pro.css({
            'width': '105px',
            'margin-right': '10px'
        });
        find_con.css('height', '175px');
        recommend_box.css({
            'width': '170px',
            'margin-right': '50px'
        })
        reco_con_prev.css('width', '154px');
    } else if (now_client === 1242) {
        pro.css({
            'margin-right': '40px'
        });
    }


})
// 根据百分比宽度自动设置高度
function autoHeightSet() {
    $('.banner').css({
        'height': $('.banner').width() / 1.36
    });
    $('.banner-page-content').css({
        'height': $('.banner-page-content').width() / 1.64
    });
    $('.taste-1').css({
        'height': $('.taste').width() / 1.81
    });
    $('.taste-2').css({
        'height': $('.taste').width() / 2.14285714
    });
    $('.taste-3').css({
        'height': $('.taste').width() / 1.47
    });
    $('.taste-box1').css({
        'height': $('.taste-box1').width() / 1.15
    });
    $('.taste-box').css({
        'height': $('.taste').width() * 0.6267
    });
    $('.taste-box1').css({
        'height': $('.taste').width() / 1.21
    });
    $('.sold-out').css({
        'height': $('.sold-out').width(),
        'line-height': $('.sold-out').width() + 'px'
    })
}
// 菜单下拉或淡入淡出
function menuSlidedown() {
    var windowHeight = $(window).height();
    // nav sub滑入
    $('.top-nav-more').click(function () {
        // 滑出
        if ($(".nav-sub").css('display') == 'block') {
            $(".nav-sub").slideUp("fast");
            // 滑出时取消
            $('.nav-shade').css({
                'height': '0',
                'display': 'none'
            });
            $('.bottom-menu').css({
                'z-index': '1000'
            });
            $('.top-nav-more').css({
                'transform': 'rotateZ(0deg)'
            });
            scrollHanlder.enableScroll();
        }
        // 滑入
        else if ($(".nav-sub").css('display') != 'block') {
            $(".nav-sub").slideDown("fast");
            // nav划入时遮罩
            var bodyHeight = $('body').height();
            $('.nav-shade').css({
                'height': bodyHeight,
                'display': 'block'
            });
            $('.bottom-menu').css({
                'z-index': '800'
            });
            $('.top-nav-more').css({
                'transform': 'rotateZ(180deg)'
            });
            scrollHanlder.disableScroll();
        }
        // 点击遮罩滑出
        $('.nav-shade').click(function () {
            $(".nav-sub").slideUp("fast");
            $('.nav-shade').css({
                'height': '0',
                'display': 'none'
            });
            $('.bottom-menu').css({
                'z-index': '1000'
            });
            $('.top-nav-more').css({
                'transform': 'rotateZ(0deg)'
            });
            scrollHanlder.enableScroll();
        })
    })
    // 下拉菜单点击选中 
    $('.nav-sub-box div').click(function () {
        if ($(this).css('color') == 'rgb(212, 42, 29)') {
            $(this).css({
                'color': 'rgb(255, 255, 255)',
                'border': '1px solid #939393'
            });
        } else if ($(this).css('color') == 'rgb(255, 255, 255)') {
            $(this).css({
                'color': 'rgb(212, 42, 29)',
                'border': '1px solid rgb(212, 42, 29)'
            });
        }
    })
    // banner page淡入
    $('.banner-more-btn').click(function () {
        $(".banner-more-page").fadeIn("fast");
        $(window).scrollTop(0);
        $(".banner-page-box").scrollTop(0);
        //        var banPageMoreHeight = $('.banner-more-page').height() + parseInt($('.banner-page-box ').css('margin-top')) + parseInt($('.banner-page-box ').css('margin-bottom'));
        //        console.log(banPageMoreHeight);
        $("html").css({
            "width": "100%",
            "height": "100%",
            "overflow": "hidden",
            "position": "fixed"
        });
        //        $("body").css({
        //            "width": "100%",
        //            "height": $('.banner-more-page').height(),
        //            "overflow": "hidden"
        //        });
        $('.banner-page-content').css({
            'height': $('.banner-page-box').width() / 1.64
        })
    })
    //banner page淡出
    $('.banner-more-page-close-btn').click(function () {
        $(".banner-more-page").fadeOut("fast");
        $("html").css({
            "width": "auto",
            "height": "auto",
            "overflow": "scroll",
            "position": "static"
        });
        //        $("body").css({
        //            "width": "100%",
        //            "height": "auto",
        //            "overflow": "scroll"
        //        });
    })


}
// swiper加载
function swiperLoading() {
    // 获取swiper2真实rem转换成像素大小
    var HTMLfontSize = parseInt($('html').css('font-size'));
    var SW2remSize = HTMLfontSize * 0.12;
    //    var SW3remSize = HTMLfontSize * 0.19;
    var SW3remSize = HTMLfontSize * 0.405;
    var SW3left = $('.recommend-container').width() * 0.30733333;
    // banner
    var swiper1 = new Swiper('.banner', {
        direction: 'horizontal',
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true,
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
    })

    // 新品发现&抢先
    var swiper2 = new Swiper('.find-container', {
        //        slidesPerView: '3.252274223',
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: SW2remSize,
        autoHeight: true
    });

    // 买手推荐
    var swiper3 = new Swiper('.recommend-container', {
        slidesPerView: '2.377',
        loop: true,
        loopedSlides: 6,
        loopAdditionalSlides: 2,
        centeredSlides: true,
        spaceBetween: SW3remSize,
        pagination: '.recommend-count',
        paginationType: 'fraction',
        // observer: true, //修改swiper自己或子元素时，自动初始化swiper  
        // observeParents: true, //修改swiper的父元素时，自动初始化swiper  
        //        followFinger: true,
        longSwipesRatio: 0.1,
        onSlideChangeStart: function (swiper) {
            var actIdx = swiper.activeIndex;
            //            var nextIdx = actIdx + 1;
            //            if (nextIdx == 18) {
            //                nextIdx = 0
            //            };
            //            var prevIdx = actIdx - 1;
            //            if (prevIdx == -1) {
            //                prevIdx = 17
            //            }
            //            var activeSlide = $('.recommend-container .swiper-slide-active');
            //            var prevSlide = $('.recommend-container .swiper-slide-prev');
            //            var nextSlide = $('.recommend-container .swiper-slide-next'); 
            var slides = $('.recommend-box');
            var activeSlide = $('.recommend-box').eq(actIdx);
            //            var prevSlide = $('.recommend-box').eq(prevIdx);
            //            var nextSlide = $('.recommend-box').eq(nextIdx);
            //            var actWidth = $('.recommend-container').width() * 0.5 - ($('.recommend-box').width() / 2);
            //            $('.recommend-content').css('padding-left', actWidth);
            slides.each(function () {
                $(this).css({
                    'transform': 'scale(1)',
                    //                'width': '2.92rem',
                    'height': '3.9rem',
                    'background': '#d6d6d6',
                    //                    'left' :'2.305rem'
                    //                    'left' : actWidth,
                    //                 'margin-top': '1.05rem'
                });
                $(this).children('.recommend-img').css({
                    'transform': 'scale(1)',
                    //                'width': '2.53rem',
                    'height': '2.6rem',
                    'top': '-0.45rem'
                });
                $(this).children('.recommend-logo').css({
                    'bottom': '32%'
                });
                //            nextSlide.css({
                //                'transform': 'scale(1)',
                ////                'width': '2.92rem',
                //                'height': '3.9rem',
                //                'background': '#d6d6d6',
                ////                 'margin-top': '1.05rem'
                //            });
                //            nextSlide.children('.recommend-img').css({
                //                'transform': 'scale(1)',
                ////                'width': '2.53rem',
                //                'height': '2.6rem',
                //                'top' : '-0.45rem'
                //            });  
                $(this).children('.recommend-img').children('.shade').css('opacity', '1');
                //            nextSlide.children('.recommend-img').children('.shade').css('opacity', '1');
            })
            activeSlide.css({
                'transform': 'scale(1.14726027)',
                //                 'transform': 'scale(1.2)',
                //                'width': '3.35rem',
                //                'height': '4.46rem',
                'height': '3.8875224rem',
                'background': '#fff',
                //                'margin-top': '0.75rem'
            });
            activeSlide.children('.recommend-img').css({
                'transform': 'scale(1.01978645)',
                //                'width': '2.96rem',
                'height': '2.60692567rem',
                'top': '-0.55rem'
                //                'width': '2.58005971rem',
                //                'height': '2.65850747rem'
            });
            activeSlide.children('.recommend-logo').css({
                'bottom': '33%'
            });
            activeSlide.children('.recommend-img').children('.shade').css('opacity', '0');
            //            prevSlide.css({
            //                'transform': 'scale(1)',
            //                //                'width': '2.92rem',
            //                'height': '3.9rem',
            //                'background': '#d6d6d6',
            //                //                 'margin-top': '1.05rem'
            //            });
            //            prevSlide.children('.recommend-img').css({
            //                'transform': 'scale(1)',
            //                //                'width': '2.53rem',
            //                'height': '2.6rem',
            //                'top': '-0.45rem'
            //            });
            //            //            nextSlide.css({
            //            //                'transform': 'scale(1)',
            //            ////                'width': '2.92rem',
            //            //                'height': '3.9rem',
            //            //                'background': '#d6d6d6',
            //            ////                 'margin-top': '1.05rem'
            //            //            });
            //            //            nextSlide.children('.recommend-img').css({
            //            //                'transform': 'scale(1)',
            //            ////                'width': '2.53rem',
            //            //                'height': '2.6rem',
            //            //                'top' : '-0.45rem'
            //            //            });  
            //            prevSlide.children('.recommend-img').children('.shade').css('opacity', '1');
            //            //            nextSlide.children('.recommend-img').children('.shade').css('opacity', '1');
            var mrbearSays = $('.mrbearSay');
            var mrbearlogos = $('.mrbear-logo');
            var mrbearName = $('.mrbear');
            // 利用分页器的数字实现内容切换
            var idx = $('.recommend-count .swiper-pagination-current').text() - 1;
            mrbearSays.hide();
            mrbearSays.eq(idx).show();
            mrbearlogos.hide();
            mrbearlogos.eq(idx).show();
            mrbearName.hide();
            mrbearName.eq(idx).show();
        }
    });
}
// 全部变量tastebox到顶部 
var tasteHeight = $('.taste').height();
var nav2BoxTop = $('.taste').offset().top + tasteHeight;
// tab切换
function tabSwitch() {
    // tab导航
    var navs = $('.taste-nav div');
    // 导航栏盒子
    var navsBoxTop = $('.taste').offset().top;
    var navsContainerH = $('.taste-nav').height();
    // tab对应内容
    var contents = $('.taste-content');
    // 绑定click事件
    navs.click(function () {
        var index = $(this).index();
        contents.hide();
        navs.css('color', '#000');
        contents.eq(index).show(0, function () {
            tasteHeight = $('.taste').height();
            nav2BoxTop = $('.taste').offset().top + tasteHeight - $('.taste-nav').height();
        });
        navs.eq(index).css('color', '#d42a1d');
        // 切换图标
        // 全部切换为默认图标
        for (i = 0; i < navs.length; i++) {
            navs.eq(i).children('img').attr({
                'src': "imgs/t-nav-white" + (i + 1) + ".svg"
            })
        };
        // 切换的图标
        $(this).children('img').attr({
            'src': "imgs/t-nav-red" + (index + 1) + ".svg"
        });
        $('.taste-1').css({
            'height': $('.taste').width() / 1.71
        });
        $('.taste-2').css({
            'height': $('.taste').width() / 2.14285714
        });
        $('.taste-3').css({
            'height': $('.taste').width() / 1.47
        });
        $('.taste-box1').css({
            'height': $('.taste').width() / 1.21
        });
    })
}

// 导航栏切换
function navSwitch(nav1, nav2, nav2Box, header) {
    // 获取需要置顶的nav2 offset与高度差
    var nav2Top = $(nav2).offset().top - $(nav2).height();
    var nav2BoxTop1 = $(nav2Box).offset().top - $(nav1).height() - $(header).height();
    // 如果存在遮罩层则不操作
    // 绑定事件
    $(window).scroll(function () {
        // 如果存在遮罩层则不操作
        if ($('.nav-shade').css('display') !== 'none') {
            return;
        }
        // 获取窗口的滚动距离
        var windowTop = $(window).scrollTop();
        // 滚动到nav2时切换导航栏
        if (windowTop > nav2BoxTop1 && windowTop < nav2BoxTop) {
            $(nav2).css({
                'position': 'fixed',
                'top': '0.87rem',
                'border-bottom': '2px solid #ccc'
            });
            $(nav1).css({
                'position': 'absolute',
                'top': '0.87rem',
            });
        }
        if (windowTop > nav2BoxTop || windowTop < nav2BoxTop1) {
            $(nav1).css({
                'position': 'fixed',
                'top': '0.87rem',
            });
            $(nav2).css({
                'position': 'relative',
                'top': '0',
                'border': 'none'
            });
        }
    })
}

// 购物车飞入
function shopCartFly() {
    var position = $("#shopCart-box").position();
    var boxWidth = $("#shopCart-box").width() / 3;
    var windowHeight = $(window).height();
    $(".j-shopCartBtn").click(function (event) {
        var clickBtn = $(this)[0];
        var clickWidth = $(clickBtn).width();
        var clickHeight = $(clickBtn).height();
        // 购物车添加数字
        if ($(this).hasClass('shop-cart-btn3') && $(this)[0].childElementCount == 0) {
            $('<span class="shop-cart-btn3-add">0</span>').appendTo($(this));
        }
        if ($(this).hasClass('shop-cart-btn3') && $(this)[0].childElementCount != 0) {
            var addNum = parseInt($(this).children().text()) + 1;
            $(this).children().text(addNum);
        }
        var flyBtn = $(clickBtn).clone();
        // 飞入的购物车删除添加的数字
        if ($(flyBtn).hasClass('shop-cart-btn3') && flyBtn.childElementCount != 0) {
            $(flyBtn).empty();
        }
        $(flyBtn).css('z-index', '900');
        var clickPosition = clickBtn.getBoundingClientRect();
        var flyer = $(flyBtn);
        flyer.fly({
            start: {
                left: clickPosition.left,
                top: clickPosition.top
            },
            end: {
                left: position.left + boxWidth,
                top: windowHeight,
                width: clickWidth,
                height: clickHeight
            },
            onEnd: function () {
                this.destroy();
            }
        });
    });
}

// 倒计时
function countTime() {
    var nowdate = new Date();
    var now = nowdate.getTime();
    var endDate = new Date("2018/9/3");
    var end = endDate.getTime();
    var leftTime = end - now;
    var d, h, m, s;
    if (leftTime >= 0) {
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
    }
    document.getElementsByClassName("count-down-h")[0].innerHTML = h
    document.getElementsByClassName("count-down-m")[0].innerHTML = m
    document.getElementsByClassName("count-down-s")[0].innerHTML = s
    setTimeout(countTime, 1000);

}

// 禁用滑动 启用滑动函数
! function () {
    var keys = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }
    var oldonwheel, oldonmousewheel1, oldonmousewheel2, oldontouchmove, oldonkeydown, isDisabled;

    function disableScroll() {
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        oldonwheel = window.onwheel;
        window.onwheel = preventDefault; // modern standard

        oldonmousewheel1 = window.onmousewheel;
        window.onmousewheel = preventDefault; // older browsers, IE
        oldonmousewheel2 = document.onmousewheel;
        document.onmousewheel = preventDefault; // older browsers, IE

        oldontouchmove = window.ontouchmove;
        window.ontouchmove = preventDefault; // mobile

        oldonkeydown = document.onkeydown;
        document.onkeydown = preventDefaultForScrollKeys;
        isDisabled = true;
    }

    function enableScroll() {
        if (!isDisabled) return;
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);

        window.onwheel = oldonwheel; // modern standard

        window.onmousewheel = oldonmousewheel1; // older browsers, IE
        document.onmousewheel = oldonmousewheel2; // older browsers, IE

        window.ontouchmove = oldontouchmove; // mobile

        document.onkeydown = oldonkeydown;
        isDisabled = false;
    }
    window.scrollHanlder = {
        disableScroll: disableScroll,
        enableScroll: enableScroll
    };
}();
// 判断导航下拉菜单 根据标签字数来决定width
function navSubPaddingSet() {
    $('.nav-sub-box div').each(function () {
        if ($(this).text().length == 2) {
            $(this).css('width', '21%');
        } else if ($(this).text().length == 3) {
            $(this).css('width', '22%');
        } else if ($(this).text().length == 4) {
            $(this).css('width', '23%');
        } else if ($(this).text().length >= 5) {
            $(this).css('width', '24%');
        }
    })
}
