
$(document).ready(function () {
	res = 0;
	this.$ = this.jQuery = jQuery.noConflict(true); $("iframe[name='result']").each(function() { this.sandbox += ' allow-modals'; });
	$(".noselect").on("click", function (event) {
		
		if ($(event.target).is('.noselect')) {
			$('.select').addClass('noselect');
			$('.select').removeClass('select')
			$(event.target).addClass('select');
			$(event.target).removeClass('noselect')
			
			for(i = 1; i <= 4; i++){
				if($(event.target).is('#' + i)) res = i; 
			}

		}
	});
	
	$("#button").on("click", function () {
		if(res == 0){
			alert("你還未選取答案，請先選取答案")
		}
		else if(res == 1 || res == 2 || res == 3){
			alert("答案錯了喔")
		}
		else if(res == 4){
			alert("正確答案")
		}
	});
});
