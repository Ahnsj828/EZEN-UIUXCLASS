// Korea SNS Pro - kissshare.js - v1.0.3
//////////////////////////////////////////////////

var g_bInitKakao = false;
var g_bInitKakaoButtons = false;

function InitKakao(strKey){

	if( !g_bInitKakao ){

		try{
			if( Kakao ){
				Kakao.init(strKey);
			};
		}catch(e){};

		g_bInitKakao = true;
	}
}

function InitKakaobuttons(uniqPostID){

	if( !g_bInitKakaoButtons ){
		g_bInitKakaoButtons = true;

		arInitMethods.forEach(function (item, index, array){
			if (typeof eval(item) != 'undefined') {
				eval(item+'();');
			}
		});

		document.getElementById('kakao-link-btn-'+uniqPostID).click();
	}
}

function PrepareKakao(app_key, containerID, title, imageUrl, link, appTitle){

	InitKakao(app_key);

	Kakao.Link.createDefaultButton(
		{
			container: containerID,
			objectType: 'feed',
			content: {
				title: title,
				imageUrl: imageUrl,
				link:{
					mobileWebUrl:link,
					webUrl: link
				}
			},
			buttons:[{
				title: appTitle,
				link:{
					mobileWebUrl: link,
					webUrl:link
				}
			}]
		}
	);
}

function ShareKakaostory(strKey, strUrl, strTitle, bMobile){

	InitKakao(strKey);

	if( bMobile ){
	  Kakao.Story.open({
	    url: strUrl,
	    text: strTitle
	  });
	 }
	 else{
		 Kakao.Story.share({
	    url: strUrl,
	    text: strTitle
	  });
	 }
}

function SendSNS(sns, title, url, image, bMobile){

    var o;
    var _url = encodeURIComponent(url);
    var _title = encodeURIComponent(title);
    var _br  = encodeURIComponent('\r\n');

    switch(sns){
      case 'facebook':
          o = {	method:'popup', width:600, height:800,
              	url:'http://www.facebook.com/sharer/sharer.php?u=' + _url
              };
          break;

      case 'twitter':
          o = {	method:'popup', width:750, height:500,
              	url:'http://twitter.com/intent/tweet?text=' + _title + '&url=' + _url
              };
          break;

      case 'naverband':
					if( bMobile ){
						o = {	method:'web2app',
									param:'create/post?text=' + _title + _br + _url,
									a_store:'itms-apps://itunes.apple.com/app/id542613198?mt=8',
									g_store:'market://details?id=com.nhn.android.band',
									a_proto:'bandapp://',
									g_proto:'scheme=bandapp;package=com.nhn.android.band'
								};
					}
					else{
						o = {	method:'popup', width:700, height:750,
									url:'http://band.us/plugin/share?body=' + _title + _br + _url + '&route=' + _url
								};
					}
          break;

      case 'naverblog':
      		o = {	method:'popup', width:600, height:750,
              	url:'https://share.naver.com/web/shareView.nhn?url=' + _url + '&title=' + _title
          		};
          break;

			case 'telegram':
    		o = {	method:'popup', width:600, height:750,
            	url:'https://telegram.me/share/url?url=' + _url + '&text=' + _title
        		};
        break;

      default:
        return false;
    }

    switch(o.method){
	    case 'popup':
	    	if( o.height > 0 && o.width > 0 ){
		    	window.open(o.url,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height='+o.height+',width='+o.width);
	    	}
	    	else{
		    	 window.open(o.url);
	    	}

	      break;

	    case 'web2app':
	      if(navigator.userAgent.match(/android/i)){
	          setTimeout(function(){ location.href = 'intent://' + o.param + '#Intent;' + o.g_proto + ';end'}, 100);
	      }
	      else if(navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)){
	          setTimeout(function(){ location.href = o.a_store; }, 200);
	          setTimeout(function(){ location.href = o.a_proto + o.param }, 100);
	      }
	      else{
	          alert('Only mobile');
	      }
	      break;
    }
}

function fnSns(strURL) {

		var textarea = document.createElement('textarea');
		textarea.value = strURL;

		document.body.appendChild(textarea);
		textarea.select();
		textarea.setSelectionRange(0, 9999);

		document.execCommand('copy');
		document.body.removeChild(textarea);

		alert("URL을 복사하였습니다.");

}
