// Will run once the DOM is loaded
$(document).ready(function () {

    // Onclick event for saveBtn
    $('saveBtn').on('click', function () {
        var value = $(this).siblings('.descrption').val();

        var time = $(this).parent().attr('id');

        localStorage.setItem(time, value);
    });

    function timeHighLight () {
        // display current time with moment
        var currentTime = moment().hour();
    
        $('.time-block').each(function() {

            var blockTime = parseInt($(this).attr('id').split('-')[1]);

            if (blockTime < currentTime) {
                $(this).addClass('past');
                
            }

            

        })




    }













})