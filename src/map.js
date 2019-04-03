
var ground = [
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var img = new Image();
img.src = './img/overworld.png';
var tileSize = 16;       // The size of a tile (16×16)
var rowTileCount = 12;   // The number of tiles in a row of our background
var colTileCount = 16;   // The number of tiles in a column of our background
var imageNumTiles = 18;  // The number of tiles per row in the tileset image

export default function drawImage(ctx) {
    for (var r = 0; r < rowTileCount; r++) {
       for (var c = 0; c < colTileCount; c++) {
          var tile = ground[ r ][ c ];
          var tileRow = (tile / imageNumTiles) | 0; // Bitwise OR operation
          var tileCol = (tile % imageNumTiles) | 0;
          ctx.drawImage(img, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize) * 3.5, (r * tileSize) * 3.5, tileSize * 3.5, tileSize * 3.5);
       }
    }
 }