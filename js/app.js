
//Immediately Invoked Function Expression 
/*    If the data is present in localstorage we will clear it*/
(function () {
    //removing all items expect firstName lastName for reference
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("subject");
    localStorage.removeItem("date");
    localStorage.removeItem("message");
})();

//jQuery to handle the form
$(function () {

    $("#firstName").focus();

    //DECLARED THE CONSTANTS FOR THE ERROR VALUES
    const EMPTY_FIELDS = 'This is a required field'
    const INVALID_EMAIL = 'This email is invalid'
    const INVALID_PHONE = 'This phone is invalid, add only numbers'
    let submitForm = true

    //WHEN VALIDATION FAILS, THE ERROR MESSAGE WILL BE SHOWN UNDER THE ELEMENT
    const showErrorMessage = (element, message) => {
        submitForm = false
        $(element).siblings('.error').text(message).addClass('got-error')
        $(element).addClass('highlight-error')
    }

    //USE TO CLEAR THE PREVIOUS ERROR MESSAGES ON SUBMIT
    const clearErrorMessages = () => {
        $('#enquiryform .error').each(function () {
            $(this).text('').removeClass('got-error')
        })
        $('.highlight-error').removeClass('highlight-error')
    }

    //CLEAR THE VALUE OF ALL FIELDS WHEN FORM IS SUBMITTED SUCCESSFULLY
    const clearTheFields = () => {
        $('#firstName').val('')
        $('#lastName').val('')
        $('#email').val('')
        $('#phone').val('')
        $('#subject').val('')
        $('#datepicker').val('')
        $('#message').val('')
    }

    //REGULAR EXPRESSION FOR THE EMAIL, VALIDATING THE EMAIL
    const isEmail = email => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return emailRegex.test(String(email).toLowerCase())
    }

    //REGULAR EXPRESSION FOR THE PHONE NUMBER, VALIDATING THE PHONE NUMBER
    const isValidPhone = phone => /^\d{8,15}$/.test(phone)

    //THIS WILL STORE THE DATA TO LOCALSTORAGE WHEN FORM IS SUBMITTED SUCCESSFULLY
    const storeTheData = (key, value) => {
        localStorage.setItem(key, value)
    }

    //HANDLEDFORMSUBMIT WILL BE CALLED AFTER ALL THE VERIFICATION OF THE FIELDS
    function handleFormSubmit() {
        //store the data in localStorage
        storeTheData('firstName', $('#firstName').val())
        storeTheData('lastName', $('#lastName').val())
        storeTheData('email', $('#email').val())
        storeTheData('phone', $('#phone').val())
        storeTheData('subject', $('#subject').val())
        storeTheData('date', $('#datepicker').val())
        storeTheData('message', $('#message').val())
        clearTheFields()

        alertify.set('notifier', 'position', 'top-center');
        alertify.notify("Your form is submitted successfully !", 'success', 5);
    }


    //ONFOCUS EVENT TO REMOVE THE ERROR MESSAGES
    $('.onFocus').on('blur', function () {
        // console.log("this", this);
        if ($(this).hasClass('highlight-error')) {
            $(this).siblings('.error').text('').removeClass('got-error')
            $(this).removeClass('highlight-error')
        }
    })

    //WHEN USER WILL CLICK ON SUBMIT BUTTON
    $('#enquiryform').submit(function (event) {
        event.preventDefault()
        submitForm = true

        clearErrorMessages() //CLEARING THE PREVIOUS ERROR MESSAGES

        //FORM VALIDATION
        !$('#firstName').val().trim() && showErrorMessage('#firstName', EMPTY_FIELDS)
        !$('#lastName').val().trim() && showErrorMessage('#lastName', EMPTY_FIELDS)
        !$('#email').val().trim() ? showErrorMessage('#email', EMPTY_FIELDS) : !isEmail($('#email').val()) && showErrorMessage('#email', INVALID_EMAIL)
        !$('#phone').val().trim() ? showErrorMessage('#phone', EMPTY_FIELDS) : !isValidPhone($('#phone').val()) && showErrorMessage('#phone', INVALID_PHONE)
        !$('#subject').val().trim() && showErrorMessage('#subject', EMPTY_FIELDS)
        !$('#datepicker').val().trim() && showErrorMessage('#datepicker', EMPTY_FIELDS)
        !$('#message').val().trim() && showErrorMessage('#message', EMPTY_FIELDS)
        submitForm && handleFormSubmit()
    })



    // on click of show popup(Safe travel button) we are hiding the scroll for the body
    $(".button-bg").click(function () {
        $("body").css("overflow", "hidden");
    })
    // on click of close icon of the popup(Safe travel info) we are hiding the showing back the scroll for the body
    $(".close").click(function () {
        $("body").css("overflow-y", "scroll");
    })


    // Created an array of objects for the social icons in the footer.
    var socialIconsArray = [
        {
            "icon": "images/Facebook.png",
            "url": "https://facebook.com/",
            "alt": "facebook"
        },
        {
            "icon": "images/Insta.png",
            "url": "https://instagram.com/",
            "alt": "instagram"
        },
        {
            "icon": "images/twitter.png",
            "url": "https://twitter.com/",
            "alt": "twitter"
        }
    ]

    // myFunction() that loops the array objects, and display the content as HTML
    function myFunction(arr) {
        var out = "";
        for (var i = 0; i < arr.length; i++) {
            out += '<div class="mr-1"><a href="' + arr[i].url + '" target="blank"><img src="' + arr[i].icon + '" alt="' + arr[i].alt + '" width="35px"></a></div>'
        }
        // renders the social icons 
        document.getElementById("socialIcons").innerHTML = out;
    }
    // Calling myFunction() with socialIconsArray as argument
    myFunction(socialIconsArray);



    // Switch case for the day using new date()
    console.log("new Date().getDay()", new Date().getDay());
    // getDay() The value returned by getDay() is an integer corresponding to the day of the week: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            thoughtForTheDay = "Once a year, go someplace you’ve never been before.";
            break;
        case 1:
            day = "Monday";
            thoughtForTheDay = "Never let your memories be greater than your dreams.";
            break;
        case 2:
            day = "Tuesday";
            thoughtForTheDay = "It is better to travel well than to arrive.";
            break;
        case 3:
            day = "Wednesday";
            thoughtForTheDay = "Wherever you go, go with all your heart.";
            break;
        case 4:
            day = "Thursday";
            thoughtForTheDay = "Why, I’d like nothing better than to achieve some bold adventure, worthy of our trip.";
            break;
        case 5:
            day = "Friday";
            thoughtForTheDay = "Travel makes one modest, you see what a tiny place you occupy in the world.";
            break;
        case 6:
            day = "Saturday";
            thoughtForTheDay = "Life is short and the world is wide.";
        default:
            day = "No Day";
            thoughtForTheDay = "Something went wrong!";
    }

    // make using of switch inside marquee
    // creating marquee
    var mrq = document.createElement("Marquee");
    // assigning day and thoughfortheday using today - new Date()
    var tn = document.createTextNode(day + " Greetings!!!  Thought for the day  - " + thoughtForTheDay);      // Create a text node
    mrq.appendChild(tn);
    // appending it to the #id
    document.getElementById("thoughtForTheDay").appendChild(mrq);


    /*----- can be added by jquery which is shown in the below comment ----- */
    // mrq.innerHTML = day + " Greetings!!! &nbsp; Thought for the day  - " + thoughtForTheDay;
    // $("#thoughtForTheDay").append(mrq);

    // invoking datepicker from today and disabling previous date
    $("#datepicker").datepicker({ minDate: 0 });

    // invoking accordion 
    $("#accordion").accordion();

    // screenX and screenY position using mouseMove
    $("body").mousemove(function (e) {
        // console.log('e', e.screenX, e.screenY)
        $("#screen").html(`<p>screenX: ${e.screenX} screenY: ${e.screenY}</p>`);
    })

    //for the gallery in the homepage
    $('.bxslider').bxSlider({
        auto: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 800,
        margin: 1
    });

    // calling 3rd api to show the current covid cases in Canada and displaying it in safe travel popup!
    $.ajax({
        type: "get",
        url: "https://covid19-api.org/api/status/ca ",
        timeout: 0,
        dataType: "json",
        success: function (data) {
            console.log(data)
            $("#activeCases").append("Canada Report<br>Covid Cases: " + data.cases + "&nbsp;&nbsp; Recovered: " + data.recovered);
        }
    });


})