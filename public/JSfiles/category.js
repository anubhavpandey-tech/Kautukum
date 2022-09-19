$(".carousel").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

/* ========= Functions for toggling the course container =============== */
let h1 = document.querySelector('.name-h1');

function myFunctionMember1() {
  (document.getElementById("course-details-container-toggle").innerHTML =
    document.getElementById("member-1").innerHTML),
    (document.getElementById("member-static").style.display = "none"),
    (document.getElementById("member-2").style.display = "none"),
    (document.getElementById("member-3").style.display = "none"),
    (document.getElementById("member-4").style.display = "none");
  h1.innerText = "Music";
}

function myFunctionMember2() {
  (document.getElementById("course-details-container-toggle").innerHTML =
    document.getElementById("member-2").innerHTML),
    (document.getElementById("member-1").style.display = "none"),
    (document.getElementById("member-static").style.display = "none"),
    (document.getElementById("member-3").style.display = "none"),
    (document.getElementById("member-4").style.display = "none");
  h1.innerText = "Drummer";
}

function myFunctionMember3() {
  (document.getElementById("course-details-container-toggle").innerHTML =
    document.getElementById("member-3").innerHTML),
    (document.getElementById("member-1").style.display = "none"),
    (document.getElementById("member-static").style.display = "none"),
    (document.getElementById("member-2").style.display = "none"),
    (document.getElementById("member-4").style.display = "none");
  h1.innerText = "Keyboardist";
}

function myFunctionMember4() {
  (document.getElementById("course-details-container-toggle").innerHTML =
    document.getElementById("member-4").innerHTML),
    (document.getElementById("member-1").style.display = "none"),
    (document.getElementById("member-static").style.display = "none"),
    (document.getElementById("member-2").style.display = "none"),
    (document.getElementById("member-3").style.display = "none");
  h1.innerText = "Guitarist";
}



//Contact or help and support request
(function ($) {

  "use strict";

  //Contact now request

  var contact = function () {
    if ($('#contact').length > 0) {
      $("#contact").validate({
        /*rules: {
          name: "required",
          subject: "required",
          email: {
            required: true,
            email: true
          },
          message: {
            required: true,
            minlength: 5
          }
        },
        messages: {
          name: "Please enter your name",
          subject: "Please enter your subject",
          email: "Please enter a valid email address",
          message: "Please enter a message"
        },*/
        /* submit via ajax */

        submitHandler: function (form) {
          $.ajax({
            type: "POST",
            url: "http://lab.kautukum.com/api/contactUs",
            data: $(form).serialize(),
            async: false,
            beforeSend: function () {

            },
            success: function (res) {
              alert("Your query has been registered successfullly!")
                ($form).reset();
              console.log("contact us request sent");


            },
            error: function (res) {
              alert("Something went wrong! PLease try again");
              ($form).reset();

              /*window.location.replace('Help-and-support.html')*/

            }

          });

        } // end submitHandler

      });
    }
  };
  contact();
})(jQuery)