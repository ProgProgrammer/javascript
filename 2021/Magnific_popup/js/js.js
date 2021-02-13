var number = 10;

$(document).ready(function() {
    $('.button').magnificPopup({
        type: 'ajax',
        callbacks: {
            parseAjax: function(mfpResponse) {
                mfpResponse.data = $(mfpResponse.data);
                for (let i = 0; i < mfpResponse.data.length; i++)
                {
                    if (i < number)
                    {                        
                        console.log('Ajax content loaded:', mfpResponse.data[i]);
                        $('.mfp-content').append(`<p class="text-popup">${mfpResponse.data[i].title}</p><img src="${mfpResponse.data[i].url}" class="image-popup">`);
                    }
                    else
                    {
                        return;
                    }
                }
            },
            ajaxContentAdded: function() {
                // Ajax content is loaded and appended to DOM
                console.log('hello');
            }
        }
    });
});