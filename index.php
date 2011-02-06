<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html>
	<head>
    <title>Template Hex Grid</title>
		<link href="base.css" rel="stylesheet" type="text/css">
		<script src="jquery.js" language="JavaScript" type="text/javascript"></script>
		<script src="hexgame.js" language="JavaScript" type="text/javascript"></script>
		<?php
			$GRID_WIDTH = 20;
			$GRID_HEIGHT = 20;
			$CELLSIZE = 30;
		?>
  </head>
  
  <body>
		<p>Debug: <span id="debug"></span></p>
		<div id="game_table">
			<?php
				$offset = 0;
				for($y = 0; $y < $GRID_HEIGHT; $y++) {
					if($y % 2 == 0 && $y > 0) {
						$offset++;
					}
					
					for($x = 0; $x < $GRID_WIDTH; $x++) {
						$celloffset_x = $x * $CELLSIZE + 30;
						$celloffset_y = $y * ($CELLSIZE * 0.9) + 50;
						
						if($y % 2) {
							$celloffset_x += ($CELLSIZE/2);
						}
						
						$thisx = $x - $offset;
						
						echo("<div class='cell' x='$thisx' y='$y' style='height: $CELLSIZE; width: $CELLSIZE; top: $celloffset_y; left: $celloffset_x'><p>$thisx, $y</p></div>\r\n					");
					}
				}
			?>
		</div>
		
		<div id="tooltip"></div>
  </body>
</html>