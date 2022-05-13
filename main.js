function preload() {
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(70, 200)
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 100, 80, 300, 250);

    stroke(19, 173, 47);
    fill(19, 173, 47);
    rect(50, 25, 400, 30);
    rect(50, 345, 400, 30);
    rect(30, 25, 30, 350);
    rect(440, 25, 30, 350);

    stroke(168,10,10);
    fill(168,10,10);
    circle(40, 40, 50);
    circle(460, 40, 50);
    circle(40, 360, 50);
    circle(460, 360, 50);
}

function take_snapshot() {
    save('student_name.png')
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}