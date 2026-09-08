function initMap() {
  const markers = [
    {
      locationName: "BBS Meppen",
      lat: 52.68759601904055,
      lng: 7.2853448070472595,
      address: "Nagelshof 83, <br /> 49716 Meppen",
      students: 4100,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2OKTYVbo5Sj5p-lcu4zYiJAOHs97EwUymw&s",
    },
    {
      locationName: "Gymnasium Leoninum",
      lat: 52.5676432823063,
      lng: 7.592979139630961,
      address: "Hestruper Str. 1, <br/> 49838 Handrup",
      students: 1300,
      imgUrl:
        "https://leoninum.org/wp-content/themes/leoninum_2020/assets/images/icon-leoninum-handrup-web.svg",
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
      locationName: "Gymnasium Haren",
      lat: 52.78970192414073,
      lng: 7.240945468476536,
      address: "Kirchstraße 28, <br /> 49733 Haren (Ems)",
      students: 675,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qix7MBoW32cvQCFhCJmlg03u5BI7T402OmiWcX1byQPCYyS_ax3KqfSSs7GN1F0q1iM&usqp=CAU",
    },
    {
      locationName: "Mariengymnasium Papenburg",
      lat: 53.08057689513408,
      lng: 7.388269266448085,
      address: "Am Stadtpark 29/31, <br /> 26871 Papenburg",
      students: 670,
      imgUrl:
        "https://b2155050.smushcdn.com/2155050/wp-content/uploads/2022/03/Logo-MG_neu.png?lossy=0&strip=1&webp=1",
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
      locationName: "Ludgerus-Schule",
      lat: 53.06813573831446,
      lng: 7.27893889731255,
      address: "Schulstraße 10, <br/> 26899 Rhede (Ems)",
      students: 400,
      imgUrl:
        "https://ludgerusschule-rhede.de/wp-content/uploads/2022/03/Ludgerusschule-Logo-Schein.png",
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
      imgUrl:
        "https://gymnasium-doerpen.de/wp-content/uploads/2023/06/gymnasium-doerpen-logo.svg",
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
      locationName: "Oberschule Twist",
      lat: 52.64830283404259,
      lng: 7.0916952685797305,
      address: "Flensbergstraße 17, <br /> 49767 Twist",
      students: 275,
      imgUrl: "src/images/schulen/SchuleAmSee.png",
    },
    {
      locationName: "Lise-Meitner-Gymnasium",
      lat: 52.49434201519441,
      lng: 6.9679618889648465,
      address: "Bosthorst 10, <br /> 49828 Neuenhaus",
      students: 900,
      imgUrl:
        "https://lmg-neuenhaus.de/wp-content/uploads/2017/07/lmg-logo.svg",
    },
    {
      locationName: "Heinrich-von-Kleist-Schule",
      lat: 53.07203049235749,
      lng: 7.400878054994908,
      address: "Kleiststraße 12, <br/> 26871 Papenburg",
      imgUrl: "https://hvk-papenburg.de/iserv/logo/logo.49b560ca.png",
    },
    {
      locationName: "Erna-de-Vries-Schule Lathen",
      lat: 52.867028635194806,
      lng: 7.317176253140778,
      address: "18-22, Mühlenstraße, <br />49762 Lathen",
      imgUrl: "https://edvs-iserv.de/iserv/logo/logo.57d769af.png",
    },
    {
      locationName: "Oberschule Schüttorf",
      lat: 52.322850302369766,
      lng: 7.218070784034344,
      address: "Karlstraße 5, <br/>48465 Schüttorf",
      imgUrl: "https://obsschuettorf.de/iserv/logo/logo.png",
    },
    {
      locationName: "Gymnasium Papenburg",
      lat: 53.073182430513235,
      lng: 7.398761124549588,
      address: "Russellstraße 33, <br/>26871 Papenburg-Bokel",
      imgUrl:
        "https://www.gymnasium-papenburg.de/_assets/35d3016574707f66992f50aacd26b4b4/Images/logo.svg",
    },
    {
      locationName: "Grund- und Oberschule Börgermoor",
      lat: 53.00451282054961,
      lng: 7.494454640173167,
      address: "Schulstraße 1-7, <br/>26903 Surwold-Börgermoor",
    },
    {
      locationName: "Oberschule Lengerich",
      lat: 52.550471700094704,
      lng: 7.530877298436287,
      address: "Schulstraße 14, <br/>49838 Lengerich",
    },
    {
      locationName: "Franziskus-Demann-Schule Freren",
      lat: 52.48664850495126,
      lng: 7.549324011028938,
      address: "Klausenstraße 3, <br/>49832 Freren",
      imgUrl: "https://fds-iserv.de/iserv/logo/logo_dark.c5add785.png",
    },
    {
      locationName: "Antoniusschule Thuine",
      lat: 52.49519132141124,
      lng: 7.486646468700254,
      address: "Mühlenstraße 1, 49832 Thuine",
      imgUrl: "https://bwebstatic.de/logo/1331213192_anton.jpg",
    },
    {
      locationName: "Realschule Bad Bentheim",
      lat: 52.30082711533037,
      lng: 7.159755099375228,
      address: "Gartenstraße 1, <br/>48455 Bad Bentheim",
      imgUrl:
        "https://realschule-badbentheim.de/wp-content/uploads/2025/06/rsb_logo_rgb-1024x229.png",
    },
    {
      locationName: "Burg-Gymnasium",
      lat: 52.30766636967853,
      lng: 7.162017111020697,
      address: "Hetlage 5, 48455 Bad Bentheim",
      imgUrl: "https://bgbentheim.de/iserv/logo/logo.7e7ca14f.jpg",
    },
    {
      locationName: "GHS Gildehaus",
      lat: 52.2951627018842,
      lng: 7.100421682184638,
      address: "Neuer Weg 8-10, <br/>48455 Bad Bentheim-Gildehaus",
      imgUrl: "https://schule-gildehaus.de/iserv/logo/logo.4ad7fb33.jpg",
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
    mapOptions,
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
      iconStyles: {
        height: 20,
        width: 20,
      },
      icon: "src/images/schuliconneu2.png",
    });

    function createInfoWindow() {
      const infoWindowContent = `<div class="map-info-window">
        <img src="${markers[i].imgUrl}" alt="" class="map-info-img" />
        <h3>${markers[i].locationName}</h3>
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
