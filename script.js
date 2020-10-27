document.getElementById('stop').disabled = true;

var farmed = 0;

function start() {document.getElementById('btw').innerHTML = ' - the ecosia search count may not match this count'; document.getElementById('start').disabled = true; document.getElementById('stop').disabled = false; ecosia = window.open('https://www.ecosia.org/search?q=' + Math.floor(Math.random()*38947502983) + '&addon=' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)); farmed = farmed + 1; document.getElementById('farmed').innerHTML = farmed; setTimeout(() => {  ecosia.close(); start(); }, 15500); };

function stop() { window.location.reload(); };