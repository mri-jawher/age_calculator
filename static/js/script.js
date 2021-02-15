//chalenge 1:
function ageindays() {
    var birthyear = prompt("in which year were you born? ....amigo :p");
    var birthmounth = prompt("in which mounth?");
    var birthday = prompt("day?");
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var ageindays = (yyyy - birthyear)*365 + (mm - birthmounth)*30 + (dd - birthday);

    // var age = (2021 - birthyear) * 365;
    var ageinyears = Math.floor(ageindays/365);
    var ageinmounths = Math.floor((ageindays % 365) / 30);
    var lastAgeindays = ageindays - ageinyears * 365 - ageinmounths * 30
    var age = lastAgeindays + '/' + ageinmounths + '/' + ageinyears;

    var h1 = document.createElement('h1');
    var textans = document.createTextNode('you are:' + age + ' old you have lived exactly ' + ageindays + " days; " + Math.floor(ageindays / 30) + " mounths; " + Math.floor(ageindays / 365) + " years ;)");
    h1.setAttribute('id', 'ageindays');
    h1.appendChild(textans);
    document.getElementById('flex-box-result').appendChild(h1);

}

function res() {
    document.getElementById('ageindays').remove();
}
