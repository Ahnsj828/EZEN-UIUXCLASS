// 메인 검색 팝업 - trandtag 숨김처리
var searchInput = document.querySelector('.main-search .search-field');

function searchAddClass(){
    var trandTag = document.querySelector('.trandtag');
	var searchResult = document.querySelector('.main-search .smart-search-results');
	if(searchInput.value){
        trandTag.classList.add('trandtag-hidden');
		searchResult.style.display = "block";
    } else {
        trandTag.classList.remove('trandtag-hidden');
		searchResult.style.display = "none";
    }
}
searchInput.addEventListener("keydown", searchAddClass);
searchInput.addEventListener("keyup", searchAddClass);
searchInput.addEventListener("click", searchAddClass);

// 메인 검색 트랜드태그 클릭

jQuery(".trandtag ul > li:not(:first-of-type)").on("click",function(){
	var tagTarget = jQuery(this).find(".list-content").text().replace(/\s/g, "");
	jQuery(".search-field").val('');
	jQuery(".search-field").val(tagTarget);
	jQuery(".search-form").submit();
});

var swiperProduct = new Swiper('.woo-variation-product-gallery .woo-variation-gallery-slider-wrapper .woo-variation-gallery-wrapper', {
	autoplay: true,
    scrollbar: {
    el: '.woo-variation-product-gallery .woo-variation-gallery-slider-wrapper .swiper-scrollbar',
    hide: false,
    draggable: true,
  },
});

var swiperStory = new Swiper('.slide-pc:first-child .elementor-swiper .elementor-slides-wrapper', {
	autoplay: true,
    scrollbar: {
    el: '.slide-pc:first-child .elementor-swiper .swiper-scrollbar',
    hide: false,
    draggable: true,
  },
});
var swiperStory = new Swiper('.slide-mo:first-child .elementor-swiper .elementor-slides-wrapper', {
	autoplay: true,
    scrollbar: {
    el: '.slide-mo:first-child .elementor-swiper .swiper-scrollbar',
    hide: false,
    draggable: true,
  },
});


jQuery(document).ready(function( $ ) {
    jQuery('#mega-menu-max_mega_menu_10 .mega-menu-toggle').on('click', function(e) {
        jQuery('#mega-menu-max_mega_menu_10 .max-mega-menu').data('maxmegamenu').hideAllPanels();
    });
});

// close all open sub menus when element with "close-all-panels" class is clicked
jQuery(function($) {
    $('a.close-sitemap').on('click', function(e) {
        e.preventDefault();
        $('#mega-menu-max_mega_menu_10 .mega-menu-item').removeClass('mega-toggle-on')
    });
});
//모바일 서브페이지 검색 호출 및 닫기
jQuery(document).ready(function () {
	jQuery('.search-main.search-mo').on('click',function(e){
		e.preventDefault();
		jQuery('.pop-sub-search-mo').show();
		jQuery('.pop-sub-search-mo').css("opacity","1");
		jQuery('.pop-sub-search-mo').css("zIndex","9999");
	});
});

//파운데이션 팩토리 슬로건 변경
jQuery(document).ready(function () {
	var i = 0;

	function bannerSloganPC(index){
		var sloganLis = jQuery('.foundation-img-banner-pc .slogan-ul li');
		jQuery(sloganLis).css("opacity","0");
		jQuery(sloganLis).eq(index).css("opacity","1");
	}
	function bannerSloganMo(index){
		var sloganLisMo = jQuery('.foundation-img-banner-mo .slogan-ul li');
		jQuery(sloganLisMo).css("opacity","0");
		jQuery(sloganLisMo).eq(index).css("opacity","1");
	}

	setInterval(function () {
		i++;
		if(i<4){
			bannerSloganPC(i);
			bannerSloganMo(i);
		} else {
			i=0;
			bannerSloganPC(i);
			bannerSloganMo(i);
		}
	}, 200);
});

// a href='#' 클릭 무시 스크립트
jQuery(document).ready(function() {
	jQuery('a[href="#"]').click(function(ignore) {
		ignore.preventDefault();
	});
});

// 윈도우 모바일 사이즈일때 링크 변경
jQuery(document).ready(function() {
	if(jQuery('#kboard-faq-list').length > 0){
		if(window.innerWidth < 768) {
			jQuery('#kboard-faq-list .faq-search-bar > input').attr("placeholder","FAQ 검색으로 확인하세요");
		}
	}
});

//모바일-태블릿 상품 상세페이지 sns 공유 버튼
var btnSnsShareMo = document.querySelector('.btn-sns-share-mo');
btnSnsShareMo.addEventListener('click',function(){
	var snsShareMoGroup = document.querySelector('.share-sns.sns-group-mo');
	var snsShareMoGroupOn = snsShareMoGroup.classList.contains('on');
	if(snsShareMoGroupOn) {
		snsShareMoGroup.classList.remove('on');
		btnSnsShareMo.classList.remove('on');
	} else {
		snsShareMoGroup.classList.add('on');
		btnSnsShareMo.classList.add('on');

	}

});
