let $ = document;

let dataDestination = $.getElementById ("data_destination");
let dataDestinationCity = $.getElementById ("data_destination_city");

let repoOfCityOrigin = {
    AzarbayjanSh : ["Tabriz" , "Marand" , "Shabestar" , "jolfa"],
    AzarbayjanGh : ["Slams" , "Khoy" , "Mahabad" , "Urmia"],
    Tehran : ["Tabriz" , "Marand" , "Shabestar" , "jolfa"],
    Sfahan : ["Slams" , "Khoy" , "Mahabad" , "Urmia"],
    Gilan : ["Tabriz" , "Marand" , "Shabestar" , "jolfa"],
    Ardabil : ["Slams" , "Khoy" , "Mahabad" , "Urmia"]
}

dataDestination.addEventListener ("change" , () => {
    if (dataDestination.value === 'select') {
        dataDestinationCity.innerHTML = '';
        dataDestinationCity.innerHTML += '<option>Select the city ...</option>';
    }else {
        dataDestinationCity.innerHTML = '';
        let repodataDestination = dataDestination.value;
        let userCity = repoOfCityOrigin[repodataDestination];
        userCity.forEach((citys) => {
            dataDestinationCity.innerHTML += `<option> ${citys} </option>`;
        });
    }
})