const colors = [[60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 128, 0]];
let step = 0;
const colorIndices = [0, 1, 2, 3], gradientSpeed = .003;

function updateGradient() {
    if (void 0 === $) return;
    const o = colors[colorIndices[0]], r = colors[colorIndices[1]], t = colors[colorIndices[2]],
        e = colors[colorIndices[3]], c = 1 - step,
        n = "rgb(" + Math.round(c * o[0] + step * r[0]) + "," + Math.round(c * o[1] + step * r[1]) + "," + Math.round(c * o[2] + step * r[2]) + ")";
    const s = "rgb(" + Math.round(c * t[0] + step * e[0]) + "," + Math.round(c * t[1] + step * e[1]) + "," + Math.round(c * t[2] + step * e[2]) + ")";
    $("#gradient").css({background: "-webkit-gradient(linear, left top, right top, from(" + n + "), to(" + s + "))"}).css({background: "-moz-linear-gradient(left, " + n + " 0%, " + s + " 100%)"}), step += .003, step >= 1 && (step %= 1, colorIndices[0] = colorIndices[1], colorIndices[2] = colorIndices[3], colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length, colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length)
}

setInterval(updateGradient, 150);