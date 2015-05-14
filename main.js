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
                "az", "ca", "fl", "il", "ma",
                "me", "nv", "nj", "ny", "or",
                "pa", "va", "wa"
            ]
        },
        'passed-through': {
            states: [
                "ga", "mi", "mn", "nh", "tx"
            ]
        }
    };

    for( var visit_type in all_visits ) {
        all_visits[visit_type].states.forEach(function(state) {
            document.getElementById(state).classList.add(visit_type);
        });
    }

    document.getElementById('total').textContent = all_visits['visited'].states.length;

})();