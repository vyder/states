(function() {

    // For reference
    var all_states = [
        "al", "ak", "ar", "az", "ca",
        "co", "ct", "de", "dc", "fl",
        "ga", "hi", "id", "il", "in",
        "ia", "ks", "ky", "la", "me",
        "md", "ma", "mi", "mn", "ms",
        "mo", "mt", "ne", "nv", "nh",
        "nj", "nm", "ny", "nc", "nd",
        "oh", "ok", "or", "pa", "ri",
        "sc", "sd", "tn", "tx", "ut",
        "va", "vt", "wa", "wv", "wi",
        "wy"
    ];


    var all_visits = {
        'visited': {
            states: [
                "az", "ca", "co", "dc", "fl",
                "id", "il", "ma", "md", "me",
                "nv", "nj", "ny", "or", "pa",
                "va", "wa"
            ]
        },
        'passed-through': {
            states: [
                "ga", "mi", "mn", "nh", "tx",
                "de"
            ]
        }
    };

    for( var visit_type in all_visits ) {
        all_visits[visit_type].states.forEach(function(state) {
            document.getElementById(state).classList.add(visit_type);
        });
    }

    document.getElementById('total_US').textContent = all_visits['visited'].states.length;

    google.charts.load('current', {
      'packages':['geochart'],
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable([
        ['States'],
        ['Delhi'],
        ['Tamil Nadu'],
        ['Kerala'],
        ['Karnataka'],
        ['Pondicherry'],
        ['Telangana'],
        ['Andaman and Nicobar Islands'],
        ['Maharashtra'],
        ['Madhya Pradesh'],
        ['Goa'],
        ['Uttar Pradesh'],
        ['Rajasthan'],
        ['Gujarat'],
        ['Punjab']
      ]);

      document.getElementById('total_IN').textContent = data.og.length;

      var options = {
        region: 'IN',
        domain: 'IN',
        resolution: 'provinces'
      };

      var chart = new google.visualization.GeoChart(document.getElementById('regions'));

      chart.draw(data, options);
    };
})();
