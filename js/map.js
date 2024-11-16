ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map("map", {
        center: [55.758468, 37.601088],
        zoom: 16,
      });

    myPlacemark1 = new ymaps.Placemark([55.758468, 37.601088], {
      hintContent: ' Шоурум №4 '

    }, {

      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/map-dot.svg',
      iconImageSize: [21, 33],
      iconImageOffset: [0, 0],
      iconContentOffset: [15, 15],
    })

  myMap.geoObjects
    .add(myPlacemark1)
    }
