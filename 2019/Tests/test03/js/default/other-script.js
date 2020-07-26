// якорная ссылка
$(function($)
{
    $(document).ready(function() {
        $('a[href^="#"]').click(function(event) {
            elementClick = $(this).attr("href")
            destination = $(elementClick).offset().top;
            $("html,body").stop().animate({scrollTop: destination - 0}, 1500);
            return false;
        });
    });
});

// адаптивное видео
(function()
{
  let video;
  let widthVideo;
  let heightVideo;
  const proportion = 1.777777777777778;

  function changeHeight(video)
  {
      widthVideo = video.offsetWidth;
      heightVideo = widthVideo / proportion;
      video.style.height = heightVideo + "px";
  }

  window.addEventListener('DOMContentLoaded', () =>
  {
      video = document.querySelector(".video");
      changeHeight(video);

      window.addEventListener('resize', () =>
      {
          changeHeight(video);
      });
  });
})
();

// изменения высоты всех слайдов под высоту максимально высокого слайда
(function()
{
  let sliders;
  let slidersShow;
  let maxHeight = 0;
  const adaptiveSlide = 300;
  const adaptiveShow = 266;
  const media = window.matchMedia("(min-width: 575px)");

  const addMaxHeight = (sliders, slidersShow) =>
  {
      if (media.matches)
      {
          maxHeight = 0;
          for (let i = 0; i < sliders.length; i++)
          {
              if (sliders[i].offsetHeight > maxHeight)
              {
                  maxHeight = sliders[i].offsetHeight;
              }
          }

          for (let a = 0; a < sliders.length; a++)
          {
              sliders[a].style.minHeight = maxHeight + "px";
              slidersShow[a].style.minHeight = maxHeight + "px";
          }
      }
      else
      {
          for (let a = 0; a < sliders.length; a++)
          {
              if (sliders[a].offsetHeight !== fixHeight)
              {
                  sliders[a].style.minHeight = adaptiveSlide + "px";
                  slidersShow[a].style.minHeight = adaptiveShow + "px";
              }
          }
      }
  }

  window.addEventListener('DOMContentLoaded', () =>
  {
      sliders = document.querySelectorAll(".swiper-slide");
      slidersShow = document.querySelectorAll(".slide-shadow");
      addMaxHeight(sliders, slidersShow);

      window.addEventListener('resize', () =>
      {
          sliders = document.querySelectorAll(".swiper-slide");
          slidersShow = document.querySelectorAll(".slide-shadow");
          for (let b = 0; b < sliders.length; b++)
          {
              sliders[b].style.minHeight = "auto";
              slidersShow[b].style.minHeight = "auto";
          }
          setTimeout(() => addMaxHeight(sliders, slidersShow), 1);
      });
  });
})
();

//валидация формы
$(function($) {
    function validateForm(element) {
        var isValidate = true;

        element.find('.valid-string').each(function() {
            if (!$(this).val()) {
                isValidate = false;

                $(this).addClass('no-validate');
            } else {
                $(this).removeClass('no-validate');
            }
        });

        /*element.find('.valid-checkbox').each(function() {
            if (!$(this).prop('checked')) {
                isValidate = false;

                $(this).next().addClass('no-validate');
            } else {
                $(this).next().removeClass('no-validate');
            }
        });*/

        return isValidate;
    }

    //маска телефона
    $(function($) {
        $(".phone").mask("+44 (999) 999-99-99");
    });

    //отправка формы
    $('#form').submit(function(event) {
        event.preventDefault();

        if (!validateForm($(this))) {
            return false;
        }

        var formData = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "/send.php",
            data: formData,
            success: function() {
                console.log('Отправлено');
                //$('.contacts-form-text').html("<h3>Ваше сообщение отправлено</h3><p>В ближайшее время с Вами свяжутся наши специалисты</p>");
                $('.contacts-form').addClass('open');
            }
        });
    });
});

//закрытие окна
(function()
{
   let closeArrows;
   let closeBlocks;
   let contactForms;

   window.addEventListener('DOMContentLoaded', () =>
   {
       closeArrows = document.querySelectorAll(".arrow");
       closeBlocks = document.querySelectorAll(".contacts-form-close-block");
       contactForms = document.querySelectorAll(".contacts-form");

       for (let i = 0; i < closeArrows.length; i++)
       {
           closeArrows[i].addEventListener('click', () =>
           {
               contactForms[i].classList.remove("open");
           });
       }
       for (let a = 0; a < closeBlocks.length; a++)
       {
           closeBlocks[a].addEventListener('click', () =>
           {
               contactForms[a].classList.remove("open");
           });
       }
   });
})
();

//появление подсказок при наведении на input
(function()
{
    let inputs;
    let hints;

    window.addEventListener('DOMContentLoaded', () =>
    {
        inputs = document.querySelectorAll(".input");
        hints = document.querySelectorAll(".form-text-hover");
        console.log(hints);
        for (let i = 0; i < hints.length; i++)
        {
            inputs[i].addEventListener('focus', () =>
            {
                hints[i].style.opacity = 1;
            });
            inputs[i].addEventListener('blur', () =>
            {
                hints[i].style.opacity = 0;
            });
        }
    });
})
();