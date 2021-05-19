const paintWall = function (color) {
    console.log ("The wall has been painted " + color);
};

paintWall("green");
paintWall("pink");
paintWall();

const wallPaint = function (position, color) {
    console.log ("The " + position + " wall has been painted " + color);
};

wallPaint("north", "green");
