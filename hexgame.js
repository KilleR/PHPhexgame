
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
			
			activecell(this);
			
			/*numpieces = $(this).children('.piece').size();
			
			debugtext += " "+numpieces+" pieces in the cell.";
			
			if(moving != 0) {
				$(this).append('<p class="piece">'+moving+'</p>');
				$(this).addClass('haspieces');
				moving = 0;
			}else if(numpieces > 0) {
				$('#tooltip').html('<table>');
				$(this).children('.piece').each(function(i, piece) {
					piecename = $(piece).text();
					$('#tooltip').append('<tr><td>'+piecename+'</td></tr>');
				});
				$('#tooltip').append('</table>');
				topleft = $(this).offset();
				bottom = topleft.top + $(this).height();
				right = topleft.left + $(this).width();
				$('#tooltip').offset({ top: bottom, left: right });
				$('#tooltip').show();
				
				moving = $(this).children('.piece').first().html();
				debugtext += " Carrying "+moving;
				$(this).children('.piece').first().remove();
				if($(this).children('.piece').size() == 0) {
					$(this).removeClass('haspieces');
				}
			}*/
			
			$("#debug").text(debugtext);
			
			
		}
	)
	
	$('[x="5"][y="5"]').append('<p class="piece">Big mech</p>');
	$('[x="5"][y="5"]').append('<p class="piece">Small mech</p>');
	$('[x="5"][y="5"]').addClass("haspieces");
});

function activecell(cell) {
	numpieces = $(cell).children('.piece').size();
	if(numpieces > 0) {
		$('#tooltip').html('<table>');
		$(cell).children('.piece').each(function(i, piece) {
			piecename = $(piece).text();
			x = $(cell).attr('x');
			y = $(cell).attr('y');
			$('#tooltip').append('<tr><td onclick="getpiece(\''+x+'\', \''+y+'\', \''+i+'\')">'+piecename+'</td></tr>');
		});
		$('#tooltip').append('</table>');
		topleft = $(cell).offset();
		bottom = topleft.top + $(cell).height();
		right = topleft.left + $(cell).width();
		$('#tooltip').offset({ top: bottom, left: right });
		$('#tooltip').show();
	}
}

function getpiece(cellx, celly, index) {
	debugtext = 'Getting piece from '+x+', '+y+' index '+index+'!'
	cell = $('[x="'+cellx+'"][y="'+celly+'"]');
	debugtext += "Name: "+$(cell).children('.piece').eq(index).text();
	
	$('#debug').text(debugtext);
}

function droppiece() {
	
}