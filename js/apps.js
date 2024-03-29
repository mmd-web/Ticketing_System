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
    let repodataDestination = dataDestination.value;
    // console.log(repoOfCityOrigin[repodataDestination]);
    dataDestinationCity.innerHTML = '';
    let userCity = repoOfCityOrigin[repodataDestination];
    userCity.forEach((citys) => {
        dataDestinationCity.innerHTML += '<option>'+citys+'</option>';
    });
})