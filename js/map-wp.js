var date = "";
var formatedDate = "";
var formatedDay = "";
var selectedMarket = "";





function resizeMap(){
  var selectedMarketHeight = $('#selected-market-container').height();
  var calendarHeight = $('#date-col').height();
  var mapContainer = $('#map');
  if (selectedMarketHeight > calendarHeight ){
    mapContainer.height(selectedMarketHeight);
  } else if (selectedMarketHeight <= calendarHeight ){
    mapContainer.height(calendarHeight);
  }
}




var sites = [
    ['Marché des Coteaux', 48.9612099, 2.2359455000000708, 4, '<h2>Marché des Coteaux</h2><date>Mercredi et Samedi<br />7:30-12:30<br /></date><adress>16 Rue de la Grande Voie<br />95100 Argenteuil</adress>'],

    ['Marché de la Colonie', 48.9491801, 2.257077699999968, 4, '<h2>Marché de la Colonie</h2><date>Mercredi et Samedi<br />7:30-12:30<br /></date><adress>Place Aristide Briand<br />95100 Argenteuil</adress>'],

    ['Marché Héloise', 48.9400588, 2.249602399999958, 4, '<h2>Marché Héloise</h2><date>Vendredi et Dimanche<br />7:30-12:30<br /></date><adress>Boulevard du Général Delambre<br />95100 Argenteuil</adress>'],

    ['Marché des Champioux', 48.9612408, 2.2358584999999493, 4, '<h2>Marché des Coteaux</h2><date>Vendredi et dimanche<br />7:30-12:30<br /></date><adress>16 Rue de la Grande Voie<br />95100 Argenteuil</adress>'],

    ['Marché de la Place Fouillère', 49.0047317, 2.1152618999999504, 4, '<h2>Marché de la Place Fouillère</h2><date>Mardi, vendredi et dimanche<br />7:30-12:30<br /></date><adress>14 rue du Maréchal-Ney<br />78700 Conflans Sainte Honorine</adress>'],

    ['Marché de Chennevières', 48.9612408, 2.2358584999999493, 4, '<h2>Marché de Chennevières</h2><date>Jeudi et dimanche<br />Quai de la république<br />7:30-12:30<br /></date><adress>78700 Conflans Sainte Honorine</adress>'],

    ['Marché de Garches', 48.8452741, 2.187447700000007, 4, '<h2>Marché de Garches</h2><date>Mercredi et Samedi<br />7:30-12:30<br /></date><adress>Place Saint-Louis<br />92380 Garches</adress>'],

    ['Marché de Montretout', 48.84433599999999, 2.209227999999939, 4, '<h2>Marché de Montretout</h2><date>Mercredi et Samedi<br />7:30-12:30<br /></date><adress>38 Boulevard de la République<br />92210 Saint-Cloud</adress>'],

    ['Marché des Rotondes', 48.894513, 2.0693350000000237, 4, '<h2>Marché des Rotondes</h2><date>Vendredi<br />15h00-19h30<br /></date><adress>3 place des Rotondes<br />78100 Saint Germain en laye</adress>'],

    ['Marché du centre Ville de Draveil', 48.6786344, 2.424881300000038, 4, '<h2>Marché du centre Ville de Draveil</h2><date>Jeudi et dimanche<br />7:30-12:30<br /></date><adress>Centre ville<br />91210 Draveil</adress>'],


    ['Marché Jules Ferry', 48.8129212, 2.3240714999999454, 4, '<h2>Marché Jules Ferry</h2><date>Samedi<br />7:30-12:30<br /></date><adress>Place Jules Ferry<br />92120 Montrouge</adress>'],

    ['', 48.929943, 2.189283, 4, '<h2>Zone de livraison</h2>']
  ];




// CENTRE
var latLng = new google.maps.LatLng(48.86842, 2.23473); 
// ++++++++++++++++++++++++++++++++++++++++++++++ INITIALISATION DE LA CARTE +++++++++++++++++++++++++++++++++++++++++++++++

var initialize = function(){





    // STYLES
  var styles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f9f6ef"  // main
      }
    ]
  },
  {
    "elementType": "labels.text",
    "stylers": [
      {
        "saturation": -10
      },
      {
        "visibility": "simplified"
      },
      {
        "weight": 8
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#721a2f" // LABELS
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dee5da"  //PAYSAGE
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebefe8" //PAYSAGE PARK +
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"  // routes --
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e2d3de"  // routes -
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c4a6bc"  // routes +
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      },
      {
        "visibility": "simplified"
      },
      {
        "weight": 8
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#bee5f4"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var marches = new google.maps.StyledMapType(styles,{name: "Nos Marchés"});

 
  // PARAMETRES
  var myOptions = {
    zoom      : 9, // Zoom par défaut
    center    : latLng, // Coordonnées de départ de la carte de type latLng - CF variable au dessus
    maxZoom   : 20,
    fullscreenControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    scrollwheel:  false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.HYBRID, 'map_style']
    }
  };


  // ASSOCIER A LA DIV #MAP
  var map = new google.maps.Map(document.getElementById('map'), myOptions);


  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', marches);
  map.setMapTypeId('map_style');

  // IMAGE DES MARQUEURS
  var image = 'images/marker.png';
  var imageLivr = 'images/marker-livraison.png';

 // INFOBULLE DEFAULT
  infowindow = new google.maps.InfoWindow({
      content: "Chargement..."
    });




 //  ----------  PARAMETRES DES MARQUEURS ------------  //
    setMarkers(map, sites, image);

    function setMarkers(map, markers, image) {
  
        for (var i = 0; i < markers.length; i++) {
            var sites = markers[i];
            var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
              if(sites[0] == ''){
                var marker = new google.maps.Marker({
                position: siteLatLng,
                map: map,
                icon: imageLivr,
                title: sites[0],
                zIndex: sites[3],
                html: sites[4],
                label:sites[5]
                });
              }else{
            var marker = new google.maps.Marker({
                position: siteLatLng,
                map: map,
                icon: image,
                title: sites[0],
                zIndex: sites[3],
                html: sites[4],
                label:sites[5]
            });
            }






// INFOBULLE
        google.maps.event.addListener(marker, 'click', function() {

        // Ne laisser ouverte qu'une seule infobulle
        if (infowindow) infowindow.close();
        infowindow = new google.maps.InfoWindow({content: this.html});
        infowindow.open(map, this);


// INFOS - MARCHES (SOUS LE CALENDRIER)  

        // Select market
        selectedMarket = this.html;

        // INFOS - MARCHES (SOUS LE CALENDRIER)
        $("#selected-market h2:last-of-type").css('display','block');


        $("#selected-market h2").click(function(){
          selectedMarket = this.innerText;
          $("#selected-market h2").css('background-color','none');
          $(this).css("background-color","#772241");
          $("#valider-date p.info").show();
          $("#valider-date p.info").html('<b>Vous avez selectionné : </b>' + selectedMarket + ' le ' + formatedDay + ' ' + formatedDate);
        });

      });


      }
    }; // ----------  FIN PARAMETRES DES MARQUEURS ------------  //




// ZONE DE LIVRAISON - PATH
      var perLivr = [
        {lat: 48.952719, lng: 2.29537},
        {lat: 48.964892, lng: 2.270393},
        {lat: 48.959933, lng: 2.216835},
        {lat: 48.929943, lng: 2.189283}, 
        {lat: 48.922386, lng: 2.220783},
        {lat: 48.945335, lng: 2.263198},
        {lat: 48.952719, lng: 2.29537}
      ];
    
// ZONE DE LIVRAISON - PARAMETRES
      var polyPerLivr = new google.maps.Polygon({
        paths: perLivr,
        strokeColor: '#006c86',
        strokeOpacity: 0.4,
        strokeWeight: 2,
        fillColor: '#006c86',
        fillOpacity: 0.2
      });

// ZONE DE LIVRAISON - DRAW
      polyPerLivr.setMap(map);
    

// SCROLL AU CLIC SEULEMENT
      google.maps.event.addListener(map, 'click', function(event){
            this.setOptions({scrollwheel:true});
        });   

      google.maps.event.addListener(map, 'mouseout', function(event){
            this.setOptions({scrollwheel:false});
        }); 

      google.maps.event.addListener(map, 'mouseover', function(event){
            this.setOptions({scrollwheel:false});
        }); 

      google.maps.event.addListener(map, 'click', function(event){
            this.setOptions({scrollwheel:true});
        }); 

        
    
}; // ++++++++++++++++++++++++++++++++++++++++++++++ FIN INITIALISATION DE LA CARTE +++++++++++++++++++++++++++++++++++++++++++++++

initialize(); //LAUCH MAP



       


// CALENDRIER - PARAMETRES
  $.datepicker.regional['fr'] = {
    closeText: 'Fermer',
    prevText: '&#x3c;Préc',
    nextText: 'Suiv&#x3e;',
    currentText: 'Aujourd\'hui',
    monthNames: ['Janvier','Fevrier','Mars','Avril','Mai','Juin',
    'Juillet','Aout','Septembre','Octobre','Novembre','Decembre'],
    monthNamesShort: ['Jan','Fev','Mar','Avr','Mai','Jun',
    'Jul','Aou','Sep','Oct','Nov','Dec'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
    dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
    weekHeader: 'Sm',
    dateFormat: 'dd-mm-yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
    minDate: 2, // Impossible de selectioner aujourd'hui et demain
    maxDate: '+12M +0D',
    numberOfMonths: 1,
    showButtonPanel: false,


 

// AFFICHAGE DES MARCHES CORRESPONDANTS A LA DATE

    onSelect: function(dateText, inst) {
      date = $(this).datepicker('getDate');

      formatedDate = $.datepicker.formatDate('dd-mm-yy', date);
      formatedDay = $.datepicker.formatDate('DD', date);

      $("#valider-date p.info").show();
      $("#valider-date p.info").html('<b>Vous avez selectionné : </b>' + selectedMarket + ' le ' + formatedDay + ' ' +formatedDate);


      //CONDITIONS d'AFFICHAGE
      if ($.datepicker.formatDate('DD', date) == "Lundi"){
        sites = [];
        initialize();
      } 

      else if ($.datepicker.formatDate('DD', date) == "Mardi"){
        latLng = new google.maps.LatLng(49.0047317, 2.1152618999999504);

        sites = [
          ['Marché de la Place Fouillère', 49.0047317, 2.1152618999999504, 4, '<h2>Marché de la Place Fouillère</h2><date>Mardi, vendredi et dimanche<br />7:30-12:30<br /></date><adress>14 rue du Maréchal-Ney<br />78700 Conflans Sainte Honorine</adress>'],

          ['', 48.929943, 2.189283, 4, '<h2>Zone de livraison</h2>']
        ];

        initialize();
      }

      else if ($.datepicker.formatDate('DD', date) == "Mercredi"){
        latLng = new google.maps.LatLng(48.901064,  2.204706);

        sites = [
          ['Marché des Coteaux', 48.9612099, 2.2359455000000708, 4, '<h2>Marché des Coteaux</h2><date>Mercredi et Samedi<br />7:30-12:30<br /></date><adress>16 Rue de la Grande Voie<br />95100 Argenteuil</adress>'],

          ['Marché de la Colonie', 48.9491801, 2.257077699999968, 4, '<h2>Marché de la Colonie</h2><date>Mercredi et Samedi<br />7:30-12:30<br /></date><adress>Place Aristide Briand<br />95100 Argenteuil</adress>'],

          ['Marché de Garches', 48.8452741, 2.187447700000007, 4, '<h2>Marché de Garches</h2><date>Mercredi et Samedi<br />7:30-12:30<br /></date><adress>Place Saint-Louis<br />92380 Garches</adress>'],

          ['Marché de Montretout', 48.84433599999999, 2.209227999999939, 4, '<h2>Marché de Montretout</h2><date>Mercredi et Samedi<br />7:30-12:30<br /></date><adress>38 Boulevard de la République<br />92210 Saint-Cloud</adress>'],

          ['', 48.929943, 2.189283, 4, '<h2>Zone de livraison</h2>']
        ];

        initialize();
      }

      else if ($.datepicker.formatDate('DD', date) == "Jeudi"){
        latLng = new google.maps.LatLng(48.95620900000001, 2.341460999999981);

        sites = [

          ['Marché de Chennevières', 48.9612408, 2.2358584999999493, 4, '<h2>Marché de Chennevières</h2><date>Jeudi et dimanche<br />7:30-12:30<br /></date><adress>Quai de la république <br />78700 Conflans Sainte Honorine</adress>'],

          ['Marché du centre Ville de Draveil', 48.6786344, 2.424881300000038, 4, '<h2>Marché du centre Ville de Draveil</h2><date>Jeudi et dimanche<br />7:30-12:30<br /></date><adress>Centre ville<br />91210 Draveil</adress>'],

          ['', 48.929943, 2.189283, 4, '<h2>Zone de livraison</h2>']
        ];

        initialize();
      }

      else if ($.datepicker.formatDate('DD', date) == "Vendredi"){
        latLng = new google.maps.LatLng(48.957679, 2.124996);

        sites = [
          ['Marché Héloise', 48.9400588, 2.249602399999958, 4, '<h2>Marché Héloise</h2><date>Vendredi et Dimanche<br />7:30-12:30<br /></date><adress>Boulevard du Général Delambre<br />95100 Argenteuil</adress>'],

          ['Marché des Champioux', 48.9612408, 2.2358584999999493, 4, '<h2>Marché des Coteaux</h2><date>Vendredi et dimanche<br />7:30-12:30<br /></date><adress>16 Rue de la Grande Voie<br />95100 Argenteuil</adress>'],

          ['Marché de la Place Fouillère', 49.0047317, 2.1152618999999504, 4, '<h2>Marché de la Place Fouillère</h2><date>Mardi, vendredi et dimanche<br />7:30-12:30<br /></date><adress>14 rue du Maréchal-Ney<br />78700 Conflans Sainte Honorine</adress>'],

          ['Marché des Rotondes', 48.894513, 2.0693350000000237, 4, '<h2>Marché des Rotondes</h2><date>Vendredi<br />15h00-19h30<br /></date><adress>3 place des Rotondes<br />78100 Saint Germain en laye</adress>'],

          ['', 48.929943, 2.189283, 4, '<h2>Zone de livraison</h2>']
        ];

        initialize();
      }

      else if ($.datepicker.formatDate('DD', date) == "Samedi"){
        latLng = new google.maps.LatLng(48.903095, 2.270222);

        sites = [
          ['Marché des Coteaux', 48.9612099, 2.2359455000000708, 4, '<h2>Marché des Coteaux</h2><date>Mercredi et Samedi<br />7:30-12:30<br /></date><adress>16 Rue de la Grande Voie<br />95100 Argenteuil</adress>'],

          ['Marché de la Colonie', 48.9491801, 2.257077699999968, 4, '<h2>Marché de la Colonie</h2><date>Mercredi et Samedi<br />7:30-12:30<br /></date><adress>Place Aristide Briand<br />95100 Argenteuil</adress>'],

          ['Marché de Garches', 48.8452741, 2.187447700000007, 4, '<h2>Marché de Garches</h2><date>Mercredi et Samedi<br />7:30-12:30<br /></date><adress>Place Saint-Louis<br />92380 Garches</adress>'],

          ['Marché de Montretout', 48.84433599999999, 2.209227999999939, 4, '<h2>Marché de Montretout</h2><date>Mercredi et Samedi<br />7:30-12:30<br /></date><adress>38 Boulevard de la République<br />92210 Saint-Cloud</adress>'],

          ['Marché Jules Ferry', 48.8129212, 2.3240714999999454, 4, '<h2>Marché Jules Ferry</h2><date>Samedi<br />7:30-12:30<br /></date><adress>Place Jules Ferry<br />92120 Montrouge</adress>'],

          ['', 48.929943, 2.189283, 4, '<h2>Zone de livraison</h2>']
        ];

        initialize();
      }

      else if ($.datepicker.formatDate('DD', date) == "Dimanche"){
        latLng = new google.maps.LatLng(48.95620900000001, 2.341460999999981);

        sites = [

          ['Marché Héloise', 48.9400588, 2.249602399999958, 4, '<h2>Marché Héloise</h2><date>Vendredi et dimanche<br />7:30-12:30<br /></date><adress>Boulevard du Général Delambre<br />95100 Argenteuil</adress>'],

          ['Marché des Champioux', 48.9612408, 2.2358584999999493, 4, '<h2>Marché des Coteaux</h2><date>Vendredi et dimanche<br />7:30-12:30<br /></date><adress>16 Rue de la Grande Voie<br />95100 Argenteuil</adress>'],

          ['Marché de la Place Fouillère', 49.0047317, 2.1152618999999504, 4, '<h2>Marché de la Place Fouillère</h2><date>Mardi, vendredi et dimanche<br />7:30-12:30<br /></date><adress>14 rue du Maréchal-Ney<br />78700 Conflans Sainte Honorine</adress>'],

          ['Marché de Chennevières', 48.9612408, 2.2358584999999493, 4, '<h2>Marché de Chennevières</h2><date>Jeudi et dimanche<br />7:30-12:30<br /></date><adress>Quai de la république <br />78700 Conflans Sainte Honorine</adress>'],

          ['Marché du centre Ville de Draveil', 48.6786344, 2.424881300000038, 4, '<h2>Marché du centre Ville de Draveil</h2><date>Jeudi et dimanche<br />7:30-12:30<br /></date><adress>Centre ville<br />91210 Draveil</adress>'],

          ['', 48.929943, 2.189283, 4, '<h2>Zone de livraison</h2>']
        ];

        initialize();


      }

      // INFOS - MARCHES (SOUS LE CALENDRIER) GESTION DE DATEPICKER
      $("#selected-market").html('');
      
      for (var i = 0; i < sites.length; i++) {
        var market = sites[i];
        $("#selected-market").append("<div class='market_bloc'>" + market[4] + '</div>');
      };

      resizeMap();

      $("#selected-market h2").click(function(){
          selectedMarket = this.innerText;
          $("#selected-market h2").css('background-color','white');
          $(this).css("background-color","#772241");
          $("#valider-date p.info").show();
          $("#valider-date p.info").html('<b>Vous avez selectionné : </b>' + selectedMarket + ' le ' + formatedDay + ' ' +formatedDate);
        });
      
    }
  };

  $.datepicker.setDefaults($.datepicker.regional['fr']);




 // Impossible de selectioner les lundi      // return [false, "customclass"] pour changer les css
 $("#datepicker").datepicker({
    beforeShowDay: function(day) {
            var day = day.getDay();
            if (day == 1) {
                return [false]
            } else {
                return [true]
            }
         }
        });



// LAUCH CALENDAR
$("#datepicker").datepicker(); 


$('#valider-date a').click(function(){
   if(formatedDate != "" && selectedMarket == ""){ // date 1 marche 0
        $('#valider-date p').show();
        $('#valider-date p').html('Vous devez selectionner un marché');
        return false ;
      } else if (formatedDate == "" && selectedMarket != ""){ // date 0 marche 1
        $('#valider-date p').show();
        $('#valider-date p').html('Vous devez selectionner une date de livraison');
        return false ;
      } else if (formatedDate == "" && selectedMarket == ""){ // date 0 marche 0
        $('#valider-date p').show();
        $('#valider-date p').html('Vous devez selectionner un marché et une date de livraison');
        return false ;
      } else if (formatedDate != "" && selectedMarket != ""){ //OK
        if (selectedMarket == "ZONE DE LIVRAISON"){
          $('#billing_address_1').val("");
          $('#billing_address_2').val(formatedDate);
          $('#billing_address_1').prop( "readonly", false );
          $('#billing_address_2').prop( "readonly", true );
        } else {
          $('#billing_address_1').val(selectedMarket);
          $('#billing_address_2').val(formatedDate);
          $('#billing_address_1').prop( "readonly", true );
          $('#billing_address_2').prop( "readonly", true );
        }
        $("form").css('display','block');
        $("form").css('height','initial');
        return true;
      }
});


$('#valider-date').fadeIn("slow");
$('#datepicker').fadeIn("slow"); 
$('.ui-datepicker-current-day a').trigger( "click");

resizeMap();