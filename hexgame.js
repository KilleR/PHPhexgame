
moving = 0;

$(document).ready(function() {
	$(".cell").hover(
		function() {
			$(this).css("border-color", "red");
		},
		function() {
			$(this).css("border-color", "");
		}
	);
	
	$(".cell").click(
		function() {
			x = $(this).attr("x");
			y = $(this).attr("y");
			
			debugtext = x+", "+y+" clicked!"
			
			numpieces = $(this).children('.piece').size();
			
			debugtext += " "+numpieces+" pieces in the cell.";
			
			if(moving != 0) {
				$(this).append('<p class="piece">'+moving+'</p>');
				$(this).addClass('haspieces');
				moving = 0;
			}else if(numpieces > 0) {
				moving = $(this).children('.piece').first().html();
				debugtext += " Carrying "+moving;
			}
			
			$("#debug").text(debugtext);
			
			
		}
	)
	
	$('[x="5"][y="5"]').append('<p class="piece">Big mech</p>');
	$('[x="5"][y="5"]').append('<p class="piece">Small mech</p>');
	$('[x="5"][y="5"]').addClass("haspieces");
});

function movepiece() {

}
