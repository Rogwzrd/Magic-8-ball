// extras..
// animate the 8 ball fortune


var fortunes = ['yes', 'no', 'ask again later', 'signs point to yes', 'maybe', 'definitely not']

$(document).on('click', "#submitButton", function (e) {
    e.preventDefault();

    var userinput = $("#questionInput").val();

    var eightBallText = $('#answer-text p');

    var yourFortune = fortunes[Math.floor(Math.random()* fortunes.length)];

    eightBallText.text(yourFortune);
    $('#answer').classList.add('.fadeIn');

    var foturneRow = $('<p>').text(`Question: ${userinput} Fortune: ${yourFortune}`);

    $('#display').append(foturneRow);

    $('#questionInput').val('')
});