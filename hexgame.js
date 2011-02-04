
moving = 0;
Ocell = 0;
Opiece_x = 0;
Opiece_y = 0;
Opiece_i = 0;

$(document).ready(function() {
	$(".cell").hover(
		function() {
			$(this).css("border-color", "red");
		},
		function() {
			$(this).css("border-color", "");
		}
	);
	
	$("#tooltip" > "tr").hover(
		function() {
			$(this).css("background-color", "yellow");
		},
		function() {
			$(this).css("background-color", "");
		}
	);
	
	$(".cell").click(
		function() {
			x = $(this).attr("x");
			y = $(this).attr("y");
			
			debugtext = x+", "+y+" clicked!"
			
			$("#debug").text(debugtext);
			activecell(this);
			
		}
	)
	
	$('[x="5"][y="5"]').append('<p class="piece">Big mech</p>');
	$('[x="5"][y="5"]').append('<p class="piece">Small mech</p>');
	$('[x="5"][y="5"]').addClass("haspieces");
});

function activecell(cell) {
	numpieces = $(cell).children('.piece').size();
	x = $(cell).attr('x');
	y = $(cell).attr('y');
	
	if(numpieces > 0 || moving != 0) {
		$('#tooltip').html('<table>');
		if(moving != 0) {
			$('#tooltip').append('<tr><td onclick="droppiece(\''+x+'\', \''+y+'\')">Move '+moving+' here<td></tr>');
		}
		$(cell).children('.piece').each(function(i, piece) {
			piecename = $(piece).text();
			$('#tooltip').append('<tr><td onclick="getpiece(\''+x+'\', \''+y+'\', \''+i+'\')">'+piecename+'</td></tr>');
		});
		$('#tooltip').append('<tr><td onclick="hideTooltip()">Cancel</td></tr>');
		$('#tooltip').append('</table>');
		topleft = $(cell).offset();
		bottom = topleft.top + $(cell).height();
		right = topleft.left + $(cell).width();
		$('#tooltip').offset({ top: bottom, left: right });
		$('#tooltip').show();
	} else {
		hideTooltip();
	}
	
	if(moving != 0) {
		$('#debug').append(" Carrying piece: "+moving);
	}
}

function getpiece(cellx, celly, index) {
	debugtext = 'Getting piece from '+cellx+', '+celly+' index '+index+'!';
	cell = $('[x="'+cellx+'"][y="'+celly+'"]');
	piecename = $(cell).children('.piece').eq(index).text();
	debugtext += "Name: "+piecename;
	
	Ocell = cell;
	Opiece_x = cellx;
	Opiece_y = celly;
	Opiece_i = index;
	
	moving = piecename;
	
	$('#debug').text(debugtext);
	hideTooltip();
}

function droppiece(cellx, celly) {
	Ox = $(Ocell).attr('x');
	Oy = $(Ocell).attr('y');
	Oi = Opiece_i;
	Oc = Ocell;
	piecename = moving;
	
	$('#debug').text('Dropping piece from '+Ox+', '+Oy+', '+Oi+' into '+cellx+', '+celly);
	
	cell = $('[x="'+cellx+'"][y="'+celly+'"]');
	
	// add piece to new cell
	$(cell).append('<p class="piece">'+piecename+'</p>');
	$(cell).addClass('haspieces');
	
	//remove piece from old cell
	$(Oc).children('.piece').eq(Oi).remove();
	if($(Oc).children('.piece').size() == 0) {
		$(Oc).removeClass('haspieces');
	}
	
	hideTooltip();
	
	// clean up global variables
	moving = 0;
	Ocell = 0;
	Opiece_x = 0;
	Opiece_y = 0;
	Opiece_i = 0;
}

function hideTooltip() {
	$('#tooltip').hide();
}

function highlightRange(x, y, r) {
	
}