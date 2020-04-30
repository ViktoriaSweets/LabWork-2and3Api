onload = function ()
{
    var lnk = document.getElementById('Menu').getElementsByTagName('a');
    for (var i= 0; i < lnk.length; i++)
     {   if (lnk[i].href == document.URL) {
            lnk[i].style.cssText = 'border-bottom: 5px solid #FFF;';
        }
        if (window.location.pathname == '/' || window.location.pathname == '/index.html')
        {
            lnk[0].style.cssText = 'border-bottom: 5px solid #FFF;';
        }
     }
}

DG.then(function() {
	var map;
	map = DG.map('map', {
        center: [52.7261859, 41.4516852],
        zoom: 13
		
    });

	DG.marker([52.7261859, 41.4516852]).addTo(map).bindPopup('<div style = "text-align: center;">Время работы:<br> Пн-Пт, с 9 до 19 <br> Сб-Вс, с 9 до 17<br>Адрес:Тамбов, ул. Октябрьская 11А</div>');
	DG.marker([52.7182310, 41.4629020]).addTo(map).bindPopup('<div style = "text-align: center;">Время работы:<br> Пн-Пт, с 9 до 19 <br> Сб-Вс, с 9 до 17<br>Адрес:Тамбов, ул.Ленинградская 1</div>');
	DG.marker([52.7422954,41.4502331]).addTo(map).bindPopup('<div style = "text-align: center;">Время работы:<br> Пн-Пт, с 9 до 19 <br> Сб-Вс, с 9 до 17<br>Адрес:Тамбов, ул.Советская 184</div>');
	map.locate({setView: false, watch: false})
		.on('locationfound', function(e) {
        DG.marker([e.latitude, e.longitude]).addTo(map).bindLabel('Вы находитесь здесь!', {
        static: true });
        })
        .on('locationerror', function(e) {
            DG.popup()
            .setLatLng(map.getCenter())
            .setContent('Доступ к определению местоположения отключён!')
            .openOn(map);});
});