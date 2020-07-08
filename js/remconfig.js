let clientWidth = document.documentElement.clientWidth,
    etime = 0;
if (clientWidth > 750 && clientWidth < 1000) {
    clientWidth = 600;
} else if (clientWidth >= 1000) {
    clientWidth = 800;
}
document.documentElement.style.fontSize = clientWidth / 18.75 + "px";
document.addEventListener("touchstart", function(t) {
    t.touches.length > 1 && t.preventDefault()
});
document.addEventListener("touchend", function(t) {
    var i = (new Date).getTime();
    i - etime <= 300 && t.preventDefault(),
        e = i
});