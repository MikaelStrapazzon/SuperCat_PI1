const map = L.map("mapid").setView([-29.9391868, -50.9973944], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

L.marker([-29.9391868, -50.9973944], {})
	.addTo(map)