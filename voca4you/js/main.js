/*
## 레이어팝업 ##
*/

$('.btn-open').click(function(){
	var $href = $(this).attr('href');
	layer_popup($href);
});

function layer_popup(el){

	var $el = $(el);		// 레이어의 id를 $el 변수에 저장
	var isDim = $el.prev().hasClass('dim-bg');	// dimmed 레이어를 감지하기 위한 boolean 변수

	isDim ? $('.layer-open').fadeIn() : $el.fadeIn();

	var $elWidth = ~~($el.outerWidth()),
		$elHeight = ~~($el.outerHeight()),
		docWidth = $(document).width(),
		docHeight = $(document).height();

	// 화면의 중앙에 레이어를 띄운다.
	if ($elHeight < docHeight || $elWidth < docWidth) {
		$el.css({
			marginTop: -$elHeight /2,
			marginLeft: -$elWidth/2
		})
	} else {
		$el.css({top: 0, left: 0});
	}

	$el.find('a.btn-close').click(function(){
		isDim ? $('.layer-open').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
		return false;
	});

	$('.dim-bg').click(function(){
		$('.layer-open').fadeOut();
		return false;
	});

}

/*
## 레이어팝업 위에 레이어팝업 ##
*/

$('.btn-open-in').click(function(){
	var $href = $(this).attr('href');
	in_layer_popup($href);
});

function in_layer_popup(el){

	var $el = $(el);		
	var isDim = $el.prev().hasClass('dim-bg02');	

	isDim ? $('.layer-open-in').fadeIn() : $el.fadeIn();

	var $elWidth = ~~($el.outerWidth()),
		$elHeight = ~~($el.outerHeight()),
		docWidth = $(document).width(),
		docHeight = $(document).height();

	// 화면의 중앙에 레이어를 띄운다.
	if ($elHeight < docHeight || $elWidth < docWidth) {
		$el.css({
			marginTop: -$elHeight /2,
			marginLeft: -$elWidth/2
		})
	} else {
		$el.css({top: 0, left: 0});
	}

	$el.find('a.btn-close').click(function(){
		isDim ? $('.layer-open-in').fadeOut() : $el.fadeOut(); 
		return false;
	});

	$('.dim-bg02').click(function(){
		$('.layer-open-in').fadeOut();
		return false;
	});

}