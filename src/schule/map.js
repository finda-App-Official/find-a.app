function initMap() {
  const markers = [
    {
      locationName: "BBS Meppen",
      lat: 52.68759601904055,
      lng: 7.2853448070472595,
      address: "Nagelshof 83, <br /> 49716 Meppen",
      students: 4100,
      imgUrl: "src/images/schulen/bbs-meppen.png",
    },
    {
      locationName: "Johannesschule",
      lat: 52.689894627257054,
      lng: 7.2887521113207,
      address: "Nagelshof 21, <br /> 49716 Meppen",
      students: 750,
      imgUrl: "src/images/schulen/JSM.png",
    },
    {
      locationName: "Windthorstgymnasium Meppen",
      lat: 52.691138323923134,
      lng: 7.293953170847197,
      address: "Gymnasialstraße 3, <br />  49716 Meppen",
      students: 1000,
      imgUrl: "src/images/schulen/WGM.png",
    },
    {
      locationName: "Marienschule Lingen",
      lat: 52.53142826481198,
      lng: 7.316628267131314,
      address: "An der Marienschule 1 49808 Lingen (Ems)",
      students: 600,
    },
    {
      locationName: "KVG",
      lat: 52.69706271606933,
      lng: 7.307961513174921,
      address: "Wichernstraße 1, <br /> 49716 Meppen",
      students: 500,
      imgUrl: "src/images/schulen/KvG.png",
    },
    {
      locationName: "BBS Lingen Wirtschaft",
      lat: 52.52848080530084,
      lng: 7.33214012665759,
      address: "Nöldekestraße 7, <br /> 49809 Lingen (Ems)",
      students: 1600,
    },
    {
      locationName: "Anne-Frank-Schule",
      lat: 52.699231730663506,
      lng: 7.270314624533939,
      address: "Am Stadtforst 21, <br /> 49716 Meppen",
      students: 400,
      imgUrl: "src/images/schulen/AFS.png",
    },
    {
      locationName: "Bödiker Oberschule",
      lat: 52.6760814751425,
      lng: 7.485096682483505,
      address: "Kolpingstraße 3, <br /> 49740 Haselünne",
      students: 400,
      imgUrl: "src/images/schulen/BödikerOberschule.png",
    },
    {
      locationName: "Martinus Oberschule Haren",
      lat: 52.78887442768349,
      lng: 7.237771862238779,
      address: "Bischof-Demann-Straße 6, <br /> 49733 Haren (Ems)",
      students: 400,
      imgUrl: "src/images/schulen/MartinusOberschule.png",
    },
    {
      locationName: "Gymnasium Dörpen",
      lat: 52.96750711714004,
      lng: 7.330954426197252,
      address: "Schulstraße 6, <br /> 26892 Dörpen",
      students: 530,
      imgUrl: "",
    },
    {
      locationName: "Maximilianschule Rütenbrock (GHS)",
      lat: 52.836491980953404,
      lng: 7.102805111595562,
      address: "Schulstraße 2, <br /> 49733 Haren (Ems)",
      students: 300,
      imgUrl: "src/images/schulen/IMG_0617-removebg-preview.png",
    },
    {
      locationName: "Volkshochschule Twist",
      lat: 52.64830283404259,
      lng: 7.0916952685797305,
      address: "Flensbergstraße 17, <br /> 49767 Twist",
      students: 275,
      imgUrl: "src/images/schulen/SchuleAmSee.png",
    },
    {
      locationName: "Friedensschule Lingen",
      lat: 52.50752530081498,
      lng: 7.329764169988979,
      address: "Kiesbergstraße 80, <br /> 49809 Lingen (Ems)",
      students: 250,
      imgUrl: "src/images/schulen/Friedensschule.png",
    },
  ];

  const centerMap = { lat: 52.76859750381811, lng: 7.383795604295492 };

  const mapOptions = {
    center: centerMap,
    zoom: 10,
    disableDefaultUI: true,
    styles: [
      {
        stylers: [
          {
            visibility: "on",
          },
          {
            saturation: -100,
          },
          {
            gamma: 0.54,
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "water",
        stylers: [
          {
            color: "#4d4946",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            gamma: 0.48,
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [
          {
            gamma: 7.18,
          },
        ],
      },
    ],
  };

  const map = new google.maps.Map(
    document.getElementById("google-map"),
    mapOptions
  );

  const infoWindow = new google.maps.InfoWindow({
    minWidth: 200,
    maxWidth: 200,
  });

  const bounds = new google.maps.LatLngBounds();

  for (let i = 0; i < markers.length; i++) {
    const marker = new google.maps.Marker({
      position: { lat: markers[i].lat, lng: markers[i].lng },
      map: map,
    });

    function createInfoWindow() {
      const infoWindowContent = `<div class="map-info-window">
        <div class="map-info-top">
          <img src="${markers[i].imgUrl}" alt="" class="map-info-img" />
          <h3>${markers[i].locationName}</h3>
        </div>
        <p>Gesamte Schüleranzahl: ${markers[i].students}</p>
        <p>${markers[i].address}</p>
      </div>`;

      google.maps.event.addListener(marker, "click", function () {
        infoWindow.setContent(infoWindowContent);
        infoWindow.open(map, marker);
      });
    }

    bounds.extend(new google.maps.LatLng(markers[i].lat, markers[i].lng));

    map.fitBounds(bounds);

    infoWindow.addListener("closeclick", function () {
      map.fitBounds(bounds);
    });
    createInfoWindow();
  }
}
