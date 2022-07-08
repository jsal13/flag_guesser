/* Regions include:
 * Africa
 * Americas
 * Asia
 * Europe
 * Middle East
 * Oceania
 * Territories and Minor Islands
 */

const countries = [
    {'abbr': 'ac', 'name': "Ascension Island", 'region': 'Territories and Minor Islands'},
    {'abbr': 'af', 'name': "Afghanistan", 'region': 'Middle East'},
    {'abbr': 'al', 'name': "Albania", 'region': 'Europe'},
    {'abbr': 'dz', 'name': "Algeria", 'region': 'Africa'},
    {'abbr': 'as', 'name': "American Samoa", 'region': 'Oceania'},
    {'abbr': 'ad', 'name': "Andorra", 'region': 'Europe'},
    {'abbr': 'ao', 'name': "Angola", 'region': 'Africa'},
    {'abbr': 'ai', 'name': "Anguilla", 'region': 'Americas'},
    {'abbr': 'aq', 'name': "Antarctica", 'region': 'Territories and Minor Islands'},
    {'abbr': 'ag', 'name': "Antigua and Barbuda", 'region': 'Americas'},
    {'abbr': 'ar', 'name': "Argentina", 'region': 'Americas'},
    {'abbr': 'am', 'name': "Armenia", 'region': 'Middle East'},
    {'abbr': 'aw', 'name': "Aruba", 'region': 'Americas'},
    {'abbr': 'au', 'name': "Australia", 'region': 'Oceania'},
    {'abbr': 'at', 'name': "Austria", 'region': 'Europe'},
    {'abbr': 'az', 'name': "Azerbaijan", 'region': 'Middle East'},
    {'abbr': 'bs', 'name': "Bahamas", 'region': 'Americas'},
    {'abbr': 'bh', 'name': "Bahrain", 'region': 'Middle East'},
    {'abbr': 'bd', 'name': "Bangladesh", 'region': 'Asia'},
    {'abbr': 'bb', 'name': "Barbados", 'region': 'Americas'},
    {'abbr': 'by', 'name': "Belarus", 'region': 'Europe'},
    {'abbr': 'be', 'name': "Belgium", 'region': 'Europe'},
    {'abbr': 'bz', 'name': "Belize", 'region': 'Americas'},
    {'abbr': 'bj', 'name': "Benin", 'region': 'Africa'},
    {'abbr': 'bm', 'name': "Bermuda", 'region': 'Americas'},
    {'abbr': 'bt', 'name': "Bhutan", 'region': 'Asia'},
    {'abbr': 'bo', 'name': "Bolivia", 'region': 'Americas'},
    {'abbr': 'bq', 'name': "Bonaire", 'region': 'Territories and Minor Islands'},
    {'abbr': 'ba', 'name': "Bosnia and Herzegovina", 'region': 'Europe'},
    {'abbr': 'bw', 'name': "Botswana", 'region': 'Africa'},
    {'abbr': 'bv', 'name': "Bouvet Island", 'region': 'Territories and Minor Islands'},
    {'abbr': 'br', 'name': "Brazil", 'region': 'Americas'},
    {'abbr': 'io', 'name': "British Indian Ocean Territory", 'region': 'Territories and Minor Islands'},
    {'abbr': 'bn', 'name': "Brunei", 'region': 'Oceania'},
    {'abbr': 'bg', 'name': "Bulgaria", 'region': 'Europe'},
    {'abbr': 'bf', 'name': "Burkina Faso", 'region': 'Africa'},
    {'abbr': 'bi', 'name': "Burundi", 'region': 'Africa'},
    {'abbr': 'cv', 'name': "Cape Verde", 'region': 'Africa'},
    {'abbr': 'kh', 'name': "Cambodia", 'region': 'Asia'},
    {'abbr': 'cm', 'name': "Cameroon", 'region': 'Africa'},
    {'abbr': 'ca', 'name': "Canada", 'region': 'Americas'},
    {'abbr': 'ky', 'name': "Cayman Islands", 'region': 'Americas'},
    {'abbr': 'cf', 'name': "Central African Republic", 'region': 'Africa'},
    {'abbr': 'td', 'name': "Chad", 'region': 'Africa'},
    {'abbr': 'cl', 'name': "Chile", 'region': 'Americas'},
    {'abbr': 'cn', 'name': "China", 'region': 'Asia'},
    {'abbr': 'cx', 'name': "Christmas Island", 'region': 'Territories and Minor Islands'},
    {'abbr': 'cc', 'name': "Cocos (Keeling) Islands", 'region': 'Territories and Minor Islands'},
    {'abbr': 'co', 'name': "Colombia", 'region': 'Americas'},
    {'abbr': 'km', 'name': "Comoros", 'region': 'Africa'},
    {'abbr': 'cd', 'name': "Congo, Democratic Republic of", 'region': 'Africa'},
    {'abbr': 'cg', 'name': "Congo", 'region': 'Africa'},
    {'abbr': 'ck', 'name': "Cook Islands", 'region': 'Oceania'},
    {'abbr': 'cr', 'name': "Costa Rica", 'region': 'Americas'},
    {'abbr': 'hr', 'name': "Croatia", 'region': 'Europe'},
    {'abbr': 'cu', 'name': "Cuba", 'region': 'Americas'},
    {'abbr': 'cw', 'name': "Curaçao", 'region': 'Territories and Minor Islands'},
    {'abbr': 'cy', 'name': "Cyprus", 'region': 'Middle East'},
    {'abbr': 'cz', 'name': "Czechia", 'region': 'Europe'},
    {'abbr': 'ci', 'name': "Côte d'Ivoire", 'region': 'Africa'},
    {'abbr': 'dk', 'name': "Denmark", 'region': 'Europe'},
    {'abbr': 'dj', 'name': "Djibouti", 'region': 'Africa'},
    {'abbr': 'dm', 'name': "Dominica", 'region': 'Americas'},
    {'abbr': 'do', 'name': "Dominican Republic", 'region': 'Americas'},
    {'abbr': 'ec', 'name': "Ecuador", 'region': 'Americas'},
    {'abbr': 'eg', 'name': "Egypt", 'region': 'Africa'},
    {'abbr': 'sv', 'name': "El Salvador", 'region': 'Americas'},
    {'abbr': 'gq', 'name': "Equatorial Guinea", 'region': 'Africa'},
    {'abbr': 'er', 'name': "Eritrea", 'region': 'Africa'},
    {'abbr': 'ee', 'name': "Estonia", 'region': 'Europe'},
    {'abbr': 'sz', 'name': "Eswatini", 'region': 'Africa'},
    {'abbr': 'et', 'name': "Ethiopia", 'region': 'Africa'},
    {'abbr': 'fk', 'name': "Falkland Islands", 'region': 'Territories and Minor Islands'},
    {'abbr': 'fo', 'name': "Faroe Islands", 'region': 'Territories and Minor Islands'},
    {'abbr': 'fj', 'name': "Fiji", 'region': 'Oceania'},
    {'abbr': 'fi', 'name': "Finland", 'region': 'Europe'},
    {'abbr': 'fr', 'name': "France", 'region': 'Europe'},
    {'abbr': 'gf', 'name': "French Guiana", 'region': 'Americas'},
    {'abbr': 'pf', 'name': "French Polynesia", 'region': 'Oceania'},
    {'abbr': 'tf', 'name': "French Southern Territories", 'region': 'Territories and Minor Islands'},
    {'abbr': 'ga', 'name': "Gabon", 'region': 'Africa'},
    {'abbr': 'gm', 'name': "The Gambia", 'region': 'Africa'},
    {'abbr': 'ge', 'name': "Georgia", 'region': 'Middle East'},
    {'abbr': 'de', 'name': "Germany", 'region': 'Europe'},
    {'abbr': 'gh', 'name': "Ghana", 'region': 'Africa'},
    {'abbr': 'gi', 'name': "Gibraltar", 'region': 'Territories and Minor Islands'},
    {'abbr': 'gr', 'name': "Greece", 'region': 'Europe'},
    {'abbr': 'gl', 'name': "Greenland", 'region': 'Europe'},
    {'abbr': 'gd', 'name': "Grenada", 'region': 'Americas'},
    {'abbr': 'gp', 'name': "Guadeloupe", 'region': 'Americas'},
    {'abbr': 'gu', 'name': "Guam", 'region': 'Oceania'},
    {'abbr': 'gt', 'name': "Guatemala", 'region': 'Americas'},
    {'abbr': 'gg', 'name': "Guernsey", 'region': 'Territories and Minor Islands'},
    {'abbr': 'gn', 'name': "Guinea", 'region': 'Africa'},
    {'abbr': 'gw', 'name': "Guinea-Bissau", 'region': 'Africa'},
    {'abbr': 'gy', 'name': "Guyana", 'region': 'Americas'},
    {'abbr': 'ht', 'name': "Haiti", 'region': 'Americas'},
    {'abbr': 'hm', 'name': "Heard Island and McDonald Islands", 'region': 'Territories and Minor Islands'},
    {'abbr': 'va', 'name': "Vatican City", 'region': 'Europe'},
    {'abbr': 'hn', 'name': "Honduras", 'region': 'Americas'},
    {'abbr': 'hk', 'name': "Hong Kong", 'region': 'Asia'},
    {'abbr': 'hu', 'name': "Hungary", 'region': 'Europe'},
    {'abbr': 'is', 'name': "Iceland", 'region': 'Europe'},
    {'abbr': 'in', 'name': "India", 'region': 'Asia'},
    {'abbr': 'id', 'name': "Indonesia", 'region': 'Oceania'},
    {'abbr': 'ir', 'name': "Iran", 'region': 'Middle East'},
    {'abbr': 'iq', 'name': "Iraq", 'region': 'Middle East'},
    {'abbr': 'ie', 'name': "Ireland", 'region': 'Europe'},
    {'abbr': 'im', 'name': "Isle of Man", 'region': 'Territories and Minor Islands'},
    {'abbr': 'il', 'name': "Israel", 'region': 'Middle East'},
    {'abbr': 'it', 'name': "Italy", 'region': 'Europe'},
    {'abbr': 'jm', 'name': "Jamaica", 'region': 'Americas'},
    {'abbr': 'jp', 'name': "Japan", 'region': 'Asia'},
    {'abbr': 'je', 'name': "Jersey", 'region': 'Territories and Minor Islands'},
    {'abbr': 'jo', 'name': "Jordan", 'region': 'Middle East'},
    {'abbr': 'kz', 'name': "Kazakhstan", 'region': 'Middle East'},
    {'abbr': 'ke', 'name': "Kenya", 'region': 'Africa'},
    {'abbr': 'ki', 'name': "Kiribati", 'region': 'Oceania'},
    {'abbr': 'kp', 'name': "North Korea", 'region': 'Asia'},
    {'abbr': 'kr', 'name': "South Korea", 'region': 'Asia'},
    {'abbr': 'kw', 'name': "Kuwait", 'region': 'Middle East'},
    {'abbr': 'kg', 'name': "Kyrgyzstan", 'region': 'Middle East'},
    {'abbr': 'la', 'name': "Laos", 'region': 'Asia'},
    {'abbr': 'lv', 'name': "Latvia", 'region': 'Europe'},
    {'abbr': 'lb', 'name': "Lebanon", 'region': 'Middle East'},
    {'abbr': 'ls', 'name': "Lesotho", 'region': 'Africa'},
    {'abbr': 'lr', 'name': "Liberia", 'region': 'Africa'},
    {'abbr': 'ly', 'name': "Libya", 'region': 'Africa'},
    {'abbr': 'li', 'name': "Liechtenstein", 'region': 'Europe'},
    {'abbr': 'lt', 'name': "Lithuania", 'region': 'Europe'},
    {'abbr': 'lu', 'name': "Luxembourg", 'region': 'Europe'},
    {'abbr': 'mo', 'name': "Macao", 'region': 'Territories and Minor Islands'},
    {'abbr': 'mg', 'name': "Madagascar", 'region': 'Africa'},
    {'abbr': 'mw', 'name': "Malawi", 'region': 'Africa'},
    {'abbr': 'my', 'name': "Malaysia", 'region': 'Asia'},
    {'abbr': 'mv', 'name': "Maldives", 'region': 'Africa'},
    {'abbr': 'ml', 'name': "Mali", 'region': 'Africa'},
    {'abbr': 'mt', 'name': "Malta", 'region': 'Europe'},
    {'abbr': 'mh', 'name': "Marshall Islands", 'region': 'Oceania'},
    {'abbr': 'mq', 'name': "Martinique", 'region': 'Americas'},
    {'abbr': 'mr', 'name': "Mauritania", 'region': 'Oceania'},
    {'abbr': 'mu', 'name': "Mauritius", 'region': 'Africa'},
    {'abbr': 'yt', 'name': "Mayotte", 'region': 'Territories and Minor Islands'},
    {'abbr': 'mx', 'name': "Mexico", 'region': 'Americas'},
    {'abbr': 'fm', 'name': "Micronesia", 'region': 'Oceania'},
    {'abbr': 'md', 'name': "Moldova", 'region': 'Europe'},
    {'abbr': 'mc', 'name': "Monaco", 'region': 'Europe'},
    {'abbr': 'mn', 'name': "Mongolia", 'region': 'Asia'},
    {'abbr': 'me', 'name': "Montenegro", 'region': 'Europe'},
    {'abbr': 'ms', 'name': "Montserrat", 'region': 'Americas'},
    {'abbr': 'ma', 'name': "Morocco", 'region': 'Africa'},
    {'abbr': 'mz', 'name': "Mozambique", 'region': 'Africa'},
    {'abbr': 'mm', 'name': "Myanmar", 'region': 'Asia'},
    {'abbr': 'na', 'name': "Namibia", 'region': 'Africa'},
    {'abbr': 'nr', 'name': "Nauru", 'region': 'Oceania'},
    {'abbr': 'np', 'name': "Nepal", 'region': 'Asia'},
    {'abbr': 'nl', 'name': "Netherlands", 'region': 'Europe'},
    {'abbr': 'nc', 'name': "New Caledonia", 'region': 'Oceania'},
    {'abbr': 'nz', 'name': "New Zealand", 'region': 'Oceania'},
    {'abbr': 'ni', 'name': "Nicaragua", 'region': 'Americas'},
    {'abbr': 'ne', 'name': "Niger", 'region': 'Africa'},
    {'abbr': 'ng', 'name': "Nigeria", 'region': 'Africa'},
    {'abbr': 'nu', 'name': "Niue", 'region': 'Oceania'},
    {'abbr': 'nf', 'name': "Norfolk Island", 'region': 'Oceania'},
    {'abbr': 'mp', 'name': "Northern Mariana Islands", 'region': 'Oceania'},
    {'abbr': 'no', 'name': "Norway", 'region': 'Europe'},
    {'abbr': 'om', 'name': "Oman", 'region': 'Middle East'},
    {'abbr': 'pk', 'name': "Pakistan", 'region': 'Middle East'},
    {'abbr': 'pw', 'name': "Palau", 'region': 'Oceania'},
    {'abbr': 'ps', 'name': "Palestine", 'region': 'Middle East'},
    {'abbr': 'pa', 'name': "Panama", 'region': 'Americas'},
    {'abbr': 'pg', 'name': "Papua New Guinea", 'region': 'Oceania'},
    {'abbr': 'py', 'name': "Paraguay", 'region': 'Americas'},
    {'abbr': 'pe', 'name': "Peru", 'region': 'Americas'},
    {'abbr': 'ph', 'name': "Philippines", 'region': 'Oceania'},
    {'abbr': 'pn', 'name': "Pitcairn Islands", 'region': 'Oceania'},
    {'abbr': 'pl', 'name': "Poland", 'region': 'Europe'},
    {'abbr': 'pt', 'name': "Portugal", 'region': 'Europe'},
    {'abbr': 'pr', 'name': "Puerto Rico", 'region': 'Americas'},
    {'abbr': 'qa', 'name': "Qatar", 'region': 'Middle East'},
    {'abbr': 'mk', 'name': "North Macedonia", 'region': 'Europe'},
    {'abbr': 'ro', 'name': "Romania", 'region': 'Europe'},
    {'abbr': 'ru', 'name': "Russia", 'region': 'Asia'},
    {'abbr': 'rw', 'name': "Rwanda", 'region': 'Africa'},
    {'abbr': 're', 'name': "Réunion", 'region': 'Territories and Minor Islands'},
    {'abbr': 'bl', 'name': "Saint Barthélemy", 'region': 'Territories and Minor Islands'},
    {'abbr': 'sh', 'name': "Saint Helena", 'region': 'Territories and Minor Islands'},
    {'abbr': 'kn', 'name': "Saint Kitts and Nevis", 'region': 'Americas'},
    {'abbr': 'lc', 'name': "Saint Lucia", 'region': 'Americas'},
    {'abbr': 'mf', 'name': "Saint Martin (French part)", 'region': 'Territories and Minor Islands'},
    {'abbr': 'pm', 'name': "Saint Pierre and Miquelon", 'region': 'Territories and Minor Islands'},
    {'abbr': 'vc', 'name': "Saint Vincent and the Grenadines", 'region': 'Americas'},
    {'abbr': 'ws', 'name': "Samoa", 'region': 'Oceania'},
    {'abbr': 'sm', 'name': "San Marino", 'region': 'Europe'},
    {'abbr': 'st', 'name': "Sao Tome and Principe", 'region': 'Africa'},
    {'abbr': 'sa', 'name': "Saudi Arabia", 'region': 'Middle East'},
    {'abbr': 'sn', 'name': "Senegal", 'region': 'Africa'},
    {'abbr': 'rs', 'name': "Serbia", 'region': 'Europe'},
    {'abbr': 'sc', 'name': "Seychelles", 'region': 'Africa'},
    {'abbr': 'sl', 'name': "Sierra Leone", 'region': 'Africa'},
    {'abbr': 'sg', 'name': "Singapore", 'region': 'Asia'},
    {'abbr': 'sx', 'name': "Sint Maarten (Dutch part)", 'region': 'Territories and Minor Islands'},
    {'abbr': 'sk', 'name': "Slovakia", 'region': 'Europe'},
    {'abbr': 'si', 'name': "Slovenia", 'region': 'Europe'},
    {'abbr': 'sb', 'name': "Solomon Islands", 'region': 'Oceania'},
    {'abbr': 'so', 'name': "Somalia", 'region': 'Africa'},
    {'abbr': 'za', 'name': "South Africa", 'region': 'Africa'},
    {'abbr': 'gs', 'name': "South Georgia and the South Sandwich Islands", 'region': 'Territories and Minor Islands'},
    {'abbr': 'ss', 'name': "South Sudan", 'region': 'Africa'},
    {'abbr': 'es', 'name': "Spain", 'region': 'Europe'},
    {'abbr': 'lk', 'name': "Sri Lanka", 'region': 'Asia'},
    {'abbr': 'sd', 'name': "Sudan", 'region': 'Africa'},
    {'abbr': 'sr', 'name': "Suriname", 'region': 'Americas'},
    {'abbr': 'sj', 'name': "Svalbard and Jan Mayen", 'region': 'Territories and Minor Islands'},
    {'abbr': 'se', 'name': "Sweden", 'region': 'Europe'},
    {'abbr': 'ch', 'name': "Switzerland", 'region': 'Europe'},
    {'abbr': 'sy', 'name': "Syria", 'region': 'Middle East'},
    {'abbr': 'tw', 'name': "Taiwan", 'region': 'Asia'},
    {'abbr': 'tj', 'name': "Tajikistan", 'region': 'Middle East'},
    {'abbr': 'tz', 'name': "Tanzania", 'region': 'Africa'},
    {'abbr': 'th', 'name': "Thailand", 'region': 'Asia'},
    {'abbr': 'tl', 'name': "Timor-Leste (East Timor)", 'region': 'Oceania'},
    {'abbr': 'tg', 'name': "Togo", 'region': 'Africa'},
    {'abbr': 'tk', 'name': "Tokelau", 'region': 'Oceania'},
    {'abbr': 'to', 'name': "Tonga", 'region': 'Oceania'},
    {'abbr': 'tt', 'name': "Trinidad and Tobago", 'region': 'Americas'},
    {'abbr': 'tn', 'name': "Tunisia", 'region': 'Africa'},
    {'abbr': 'tr', 'name': "Turkey", 'region': 'Middle East'},
    {'abbr': 'tm', 'name': "Turkmenistan", 'region': 'Middle East'},
    {'abbr': 'tc', 'name': "Turks and Caicos Islands", 'region': 'Americas'},
    {'abbr': 'tv', 'name': "Tuvalu", 'region': 'Oceania'},
    {'abbr': 'ug', 'name': "Uganda", 'region': 'Africa'},
    {'abbr': 'ua', 'name': "Ukraine", 'region': 'Europe'},
    {'abbr': 'ae', 'name': "United Arab Emirates", 'region': 'Middle East'},
    {'abbr': 'gb', 'name': "United Kingdom", 'region': 'Europe'},
    {'abbr': 'um', 'name': "United States Minor Outlying Islands", 'region': 'Oceania'},
    {'abbr': 'us', 'name': "United States of America", 'region': 'Americas'},
    {'abbr': 'uy', 'name': "Uruguay", 'region': 'Americas'},
    {'abbr': 'uz', 'name': "Uzbekistan", 'region': 'Middle East'},
    {'abbr': 'vu', 'name': "Vanuatu", 'region': 'Oceania'},
    {'abbr': 've', 'name': "Venezuela", 'region': 'Americas'},
    {'abbr': 'vn', 'name': "Vietnam", 'region': 'Asia'},
    {'abbr': 'vg', 'name': "British Virgin Islands", 'region': 'Americas'},
    {'abbr': 'vi', 'name': "U.S. Virgin Islands", 'region': 'Americas'},
    {'abbr': 'wf', 'name': "Wallis and Futuna", 'region': 'Oceania'},
    {'abbr': 'eh', 'name': "Western Sahara", 'region': 'Africa'},
    {'abbr': 'ye', 'name': "Yemen", 'region': 'Middle East'},
    {'abbr': 'zm', 'name': "Zambia", 'region': 'Africa'},
    {'abbr': 'zw', 'name': "Zimbabwe", 'region': 'Africa'},
    {'abbr': 'ax', 'name': "Åland Islands", 'region': 'Territories and Minor Islands'}
]

/* Helper Functions */

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function sortedCountriesByName() {
    // Sorts countries by name.
    return countries.sort(function(a, b) {
    var keyA = a.name,
        keyB = b.name;

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
    });
}

function populateOptions() {
    /* Populates countries in the Options selection. */
    var selectionBox = document.getElementById("countriesData");
    removeAllChildNodes(selectionBox);

    sortedCountriesByName().forEach(e => {
        if (document.userRegions.has(e.region)) {
            var opt = document.createElement("option");
            var text = document.createTextNode(e["name"]);
            opt.value = e["name"]
            opt.appendChild(text);
            selectionBox.appendChild(opt);
        }
    });
}

function refreshCountriesAndFlags() {
    // Refreshes the options list + flag list.
    // Mostly used to set the list back to the top...
    // Maybe this will be useful some other time, but, otherwise,
    // it is not necessary.
    populateOptions();  // Repopulates country dropdown.
    updateUserFlags();    // Updates the possible flags.

}

function createFlagRegionOptionCheckboxes() {
    /* Creates checkboxes. */

    // Creates a set of all regions.
    document.allRegions = new Set();
    countries.forEach(e => {
        document.allRegions.add(e.region);
    });

    // Creates div + inputbox + label.
    var fieldset = document.getElementById("regionFS");
    document.allRegions.forEach(e => {
        var div = document.createElement("div");

        var inputBox = document.createElement("input");
        inputBox.setAttribute("type", "checkbox")
        inputBox.setAttribute("id", `${e}`);
        inputBox.setAttribute("name", `${e}`);
        inputBox.setAttribute("checked", true);
        inputBox.onclick = function(elt) { 
            if (elt.target.checked) { document.userRegions.add(elt.target.id); } 
            else { document.userRegions.delete(elt.target.id); }
            refreshCountriesAndFlags();
            resetFlag();
        }

        var label = document.createElement("label");
        label.setAttribute("for", `${e}`);
        label.textContent = `${e}`;
        div.appendChild(inputBox);
        div.appendChild(label);
        fieldset.append(div);
    })
}

function createUserRegions() {
    /* Creates a set for user's regions. */
    document.userRegions = new Set();
    countries.forEach(e => {
        document.userRegions.add(e.region);
    });
}

function updateUserFlags() {
    /* Update a set for user's flags. */
    document.userFlags = new Array();
    countries.forEach(e => {
        if (document.userRegions.has(e.region)) { document.userFlags.push(e); }
    });
}

function getRandomFlag() {
    /* Gets a random flag, given parameters. */
    return document.userFlags[Math.floor(Math.random() * document.userFlags.length)];
}

function submitGuess() {
    /* Gets the user's guess in the selection and compares it to the 
       chosen random flag. */

    let selectedCountryName = document.getElementById('countries').value;

    var scoreCorrect = document.getElementById("score-correct");
    var scoreWrong = document.getElementById("score-wrong");
    if (window.flagData['name'].toLowerCase() == selectedCountryName.toLowerCase()) {
        alert(`Yep! It was ${window.flagData['name']}.`);
        scoreCorrect.textContent = (parseInt(scoreCorrect.textContent) + 1).toString();
    } else {
        alert(`Nope! It was ${window.flagData['name']}.`)
        scoreWrong.textContent = (parseInt(scoreWrong.textContent) + 1).toString()
    }
}

function resetFlag() {
    /* Resets the flag and restarts the round. */
    window.flagData = getRandomFlag();
    $("#flag").attr("src", `assets/images/${window.flagData['abbr']}.svg`);

    var selectionBox = document.getElementById("countries");
    selectionBox.value = "";
}
