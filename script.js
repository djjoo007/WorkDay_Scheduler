// Will run once the DOM is loaded
$(document).ready(function () {

    // Onclick event for saveBtn
    $('saveBtn').on('click', function () {
        let value = $(this).siblings('.descrption').val();

        let time = $(this).parent().attr('id');

        localStorage.setItem(time, value);
    });

    function timeHighlight() {
        // display current time with moment
        let currentTime = moment().hour();
    
        $('.time-block').each(function() {

            let blockTime = parseInt($(this).attr('id').split('-')[1]);

            if (blockTime < currentTime) {
                $(this).addClass('past');
                
            } else if (blockTime === currentTime) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    }

    // Time stored in local storage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
      


    // Callback function
    timeHighlight();
    setInterval(timeHighlight, 1500);

    // format time
    $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));










});