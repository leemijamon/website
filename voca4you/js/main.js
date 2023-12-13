/*
## 레이어팝업 ##
*/
$(function () {
	$(".layer-open").hide();
	$(".layer-open-in").hide(); // 레이어팝업 동시 띄우기

	// 가운데 정렬
	function layer_position(){
		var left = (Math.max(0, (($(window).width() - $('.laypop-cont').outerWidth()) / 2)) + "px");
        var top = (Math.max(0, (($(window).height() - $('.laypop-cont').outerHeight()) / 2)) + "px");

		$(".laypop-cont").css({'left':left,'top':top});
	};
	function layer_position_btn(){
		var left = (Math.max(0, (($(window).width() - $('.laypop-cont-btn').outerWidth()) / 2)) + "px");
        var top = (Math.max(0, (($(window).height() - $('.laypop-cont-btn').outerHeight()) / 2)) + "px");

		$(".laypop-cont-btn").css({'left':left,'top':top});
	};
	function in_layer_position(){ // 레이어팝업 동시 띄우기
		var left = (Math.max(0, (($(window).width() - $('.laypop-cont.in').outerWidth()) / 2)) + "px");
        var top = (Math.max(0, (($(window).height() - $('.laypop-cont.in').outerHeight()) / 2)) + "px");

		$(".laypop-cont.in").css({'left':left,'top':top});
	};

	// 레이어팝업 오픈 Function
	function layer_open(no){
		$(".layer-open[layer="+no+"]").fadeIn();
		$(".dim-bg").fadeIn();
		layer_position();
		layer_position_btn();

		// 배경 클릭 시 닫기
		$(".dim-bg").click(function (e) {
			if(!$(".layer-open").has(e.target).length){
				layer_close();
			};
		});
	}
	function in_layer_open(no){ // 레이어팝업 동시 띄우기
		$(".in-layer-open[layer="+no+"]").fadeIn();
		$(".dim-bg02").fadeIn();
		in_layer_position();

		// 배경 클릭 시 닫기
		$(".dim-bg02").click(function (e) {
			if(!$(".in-layer-open").has(e.target).length){
				layer_close();
			};
		});
	};

	// 팝업 외 클릭 시 닫기
	function layer_close(){
		$(".layer-open").fadeOut();
		$(".notice-popup").fadeOut();
	};
	function in_layer_close(){ // 레이어팝업 동시 띄우기
		$(".in-layer-open").fadeOut();
	};

	//  버튼 클릭 시 열기
	$(".btn-open").click(function () {
		var no = $(this).attr("layer");
		layer_open(no);
	});
	$(".btn-open-in").click(function () { // 레이어팝업 동시 띄우기
		var no = $(this).attr("layer");
		in_layer_open(no);
	});

	// 버튼 및 dim 영역 클릭 시 닫기
	$(".btn-close, .act-close, .dim-bg").click(function () {
		layer_close();
	});
	$(".act-in-close, .dim-bg02").click(function () { // 레이어팝업 동시 띄우기
		in_layer_close();
	});

	// 위치 잡기
	$(window).resize(function () {
		layer_position();
		in_layer_position();
		layer_position_btn();
	});
});


/*
## 뒤로가기 ##
*/
function goBack(){
	window.history.back();
}

/*
## 프리미엄 박스 선택 활성화 ##
*/
$(function () {
	$('.box-on').click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
		} else {
			$(this).addClass('on');
			$(this).siblings().removeClass('on');
		}
	});
});

/*
## 체크박스 전체선택
*/
function selectAll(selectAll)  {
	const checkboxes 
		= document.getElementsByName('word');
  
	checkboxes.forEach((checkbox) => {
		checkbox.checked = selectAll.checked;
	})
};

/*
## 내가 아는 단어 - 단어 테이블 선택 활성화
*/
$(function () {
	$('.word-table tbody tr').click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
		} else {
			$(this).addClass('on');
			$(this).siblings().removeClass('on');
		}
	});
});

/*
## 내가 아는 단어 - 텍스트 버튼
*/
$(function () {
	$('.word-hidden ul li').click(function(){
	  if($(this).hasClass('on')){
			$(this).removeClass('on');
		} else {
			$(this).addClass('on');
			$(this).siblings().removeClass('on');
		}
	});
});

/*
## Tab Menu
*/
$(function(){	
	$('.tab-cont > div').hide();
	$('.tab-cont > div.show').show();
	
	$('.tab-menu li a').click(function(e){
		e.preventDefault();
		var tab_id = $(this).attr('href');
		$('.tab-menu li').removeClass('on');
		$(this).parent().addClass('on');
		$('.tab-cont > div:visible').hide();
		$(tab_id).show();
	});
});