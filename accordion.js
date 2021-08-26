$(document).ready(function(){
		$('.toggle').click(function(){
			if ($('.drawer').hasClass('active')) {
				$('.drawer').animate({
				marginLeft: '-250'},
				500, function() {
					$('.drawer').toggleClass('hidden');
				}
				);
			} else {
				$('.drawer').animate({
				marginLeft: '0'},
				500
				);
				$('.drawer').toggleClass('hidden');
			}
			if ($('.search-drop').hasClass('active')) {
				$('.search-drop').animate({
				top: '-500'},
				500, function() {
					$('.search-drop').toggleClass('hidden');
				}
				);
				$('.search-drop').toggleClass('active');
			}
			$('.drawer').toggleClass('active');
			$('.click-off').toggleClass('hidden');
		});

		$('.search').click(function(){
			if ($('.drawer').hasClass('active')) {
				$('.drawer').animate({
				marginLeft: '-250'},
				500, function() {
					$('.drawer').toggleClass('hidden');
				}
				);
				$('.drawer').toggleClass('active');
				$('.click-off').toggleClass('hidden');
			}
			if ($('.search-drop').hasClass('active')) {
				$('.search-drop').animate({
				top: '-500'},
				500, function() {
					$('.search-drop').toggleClass('hidden');
				}
				);
			} else {
				$('.search-drop').animate({
				top: '0'},
				500
				);
				$('.search-drop').toggleClass('hidden');
			}
			$('.search-drop').toggleClass('active');
		});

		$('.submit').click(function(){
			if ($('.search-drop').hasClass('active')) {
				$('.search-drop').animate({
				top: '-500'},
				500, function() {
					$('.search-drop').toggleClass('hidden');
				}
				);
				$('.search-drop').toggleClass('active');
			}
		});

		$('.click-off').click(function(){
			$('.drawer').animate({
				marginLeft: '-250'},
				500
				);
			$('.drawer').toggleClass('active');
			$('.click-off').toggleClass('hidden');
		});
	});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
