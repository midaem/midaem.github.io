// [main-color, hue, main-bg-color, secondary-bg-color]
var mdeColors = new Array(
    ["172, 172, 172", "70", "30, 30, 30", "10, 10, 10"], //gray
    ["172, 172, 172", "70", "30, 30, 30", "10, 10, 10"], //gray
    ["240, 240, 255", "-100", "27, 6, 60", "4, 9, 37"], //white
    ["86, 155, 193", "-150", "5, 30, 56", "2, 9, 23"], //blue
    ["86, 155, 193", "-150", "5, 30, 56", "2, 9, 23"], //blue
    ["37, 165, 34", "120", "2, 35, 4", "1, 19, 11"], //green
    ["195, 122, 255", "-85", "42, 6, 60", "36, 4, 37"], //purple
    ["195, 122, 255", "-85", "42, 6, 60", "36, 4, 37"], //purple
    ["195, 122, 255", "-85", "42, 6, 60", "36, 4, 37"], //purple
    ["195, 122, 255", "-85", "42, 6, 60", "36, 4, 37"], //purple
    ["234, 134, 15", "55", "35, 15, 2", "21, 2, 2"], //orange
    ["234, 134, 15", "55", "35, 15, 2", "21, 2, 2"], //orange
    ["255, 17, 64", "-15", "56, 5, 5", "23, 2, 19"], //red
    ["255, 29, 136", "-30", "48, 9, 25", "7, 15, 31"], //pink
    ["255, 29, 136", "-30", "48, 9, 25", "7, 15, 31"], //pink
    ["255, 29, 136", "-30", "48, 9, 25", "7, 15, 31"], //pink
    ["255, 29, 136", "-30", "48, 9, 25", "7, 15, 31"], //pink
    ["255, 29, 136", "-30", "48, 9, 25", "7, 15, 31"], //pink
    ["255, 29, 136", "-30", "48, 9, 25", "7, 15, 31"], //pink
    ["255, 29, 136", "-30", "48, 9, 25", "7, 15, 31"], //pink
    ["255, 29, 136", "-30", "48, 9, 25", "7, 15, 31"], //pink
    ["255, 29, 136", "-30", "48, 9, 25", "7, 15, 31"], //pink
    ["255, 29, 136", "-30", "48, 9, 25", "7, 15, 31"], //pink
    ["255, 29, 136", "-30", "48, 9, 25", "7, 15, 31"] //pink
);

// var rngR = Math.floor((Math.random() * 255) + 0);
// var rngG = Math.floor((Math.random() * 255) + 0);
// var rngB = Math.floor((Math.random() * 255) + 0);
// var rngColor = 'rgba('+rngR+','+rngG+','+rngB;

var rngColor = Math.floor((Math.random() * mdeColors.length) + 0);
var selectedColor = mdeColors[rngColor];

document.documentElement.style.setProperty('--neon-color-100', 'rgba('+ selectedColor[0] +', 1.0)');
document.documentElement.style.setProperty('--neon-color-80', 'rgba('+ selectedColor[0] +', 0.8)');
document.documentElement.style.setProperty('--neon-color-60', 'rgba('+ selectedColor[0] +', 0.6)');
document.documentElement.style.setProperty('--neon-color-40', 'rgba('+ selectedColor[0] +', 0.4)');
document.documentElement.style.setProperty('--neon-color-20', 'rgba('+ selectedColor[0] +', 0.2)');
document.documentElement.style.setProperty('--neon-color-10', 'rgba('+ selectedColor[0] +', 0.1)');
document.documentElement.style.setProperty('--neon-color-05', 'rgba('+ selectedColor[0] +', 0.05)');
document.documentElement.style.setProperty('--neon-color-02', 'rgba('+ selectedColor[0] +', 0.02)');

document.documentElement.style.setProperty('--hue-rotate-deg', selectedColor[1] +'deg');

document.documentElement.style.setProperty('--bg-color-gradient-primary', 'rgb('+ selectedColor[2] +')');
document.documentElement.style.setProperty('--bg-color-gradient-secondary', 'rgb('+ selectedColor[3] +')');