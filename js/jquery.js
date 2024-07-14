$(document).ready(function() {
    $('.open').animate({width: '60px'});
    $('.data').animate({width: '0'});

    
    $('.toggle , a').click(function() {
        var dataWidth = $('.data').width();
        var openWidth = $('.open').width();
        
        if (dataWidth === 0 && openWidth === 60) {
         
            $('.data').animate({width: '250px'});
            $('.open').animate({width: '300px'});
            $('.toggle').addClass('fa-xmark').removeClass('fa-bars-staggered');
        } else {

            $('.data').animate({width: '0'});
            $('.open').animate({width: '60px'});
            $('.toggle').addClass('fa-bars-staggered').removeClass('fa-xmark');
        }
    });
});
$(document).ready(function() {
  
    const namePattern = /^[a-zA-Z ]{2,30}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{11}$/;
    const agePattern = /^\d{1,3}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    function validateInput(inputElement, messageElement, regexPattern) {
        const inputValue = inputElement.value.trim();
        
        if (inputValue === '') {
            messageElement.classList.remove('d-block');
            messageElement.classList.add('d-none');
            return false; 
        }

        if (regexPattern.test(inputValue)) {
            messageElement.classList.remove('d-block');
            messageElement.classList.add('d-none');
            return true;
        } else {
            messageElement.classList.remove('d-none');
            messageElement.classList.add('d-block');
            return false;
        }
    }


    $('#name').on('input', function() {
        validateInput(this, document.getElementById('nameMessage'), namePattern);
        enableDisableSubmitButton();
    });


    $('#email').on('input', function() {
        validateInput(this, document.getElementById('emailMessage'), emailPattern);
        enableDisableSubmitButton();
    });


    $('#phone').on('input', function() {
        validateInput(this, document.getElementById('phoneMessage'), phonePattern);
        enableDisableSubmitButton();
    });


    $('#age').on('input', function() {
        validateInput(this, document.getElementById('ageMessage'), agePattern);
        enableDisableSubmitButton();
    });


    $('#pass').on('input', function() {
        validateInput(this, document.getElementById('passMessage'), passwordPattern);
        validateRePassword();
        enableDisableSubmitButton();
    });

    $('#repass').on('input', function() {
        validateRePassword();
        enableDisableSubmitButton();
    });

    function validateRePassword() {
        const passValue = document.getElementById('pass').value;
        const repassValue = document.getElementById('repass').value;
        const repassMessage = document.getElementById('repassMessage');
        
        if (passValue === repassValue) {
            repassMessage.classList.remove('d-block');
            repassMessage.classList.add('d-none'); 
            return true;
        } else {
            repassMessage.classList.remove('d-none');
            repassMessage.classList.add('d-block');
            return false;
        }
    }

    function enableDisableSubmitButton() {
        const nameValid = validateInput(document.getElementById('name'), document.getElementById('nameMessage'), namePattern);
        const emailValid = validateInput(document.getElementById('email'), document.getElementById('emailMessage'), emailPattern);
        const phoneValid = validateInput(document.getElementById('phone'), document.getElementById('phoneMessage'), phonePattern);
        const ageValid = validateInput(document.getElementById('age'), document.getElementById('ageMessage'), agePattern);
        const passValid = validateInput(document.getElementById('pass'), document.getElementById('passMessage'), passwordPattern);
        const repassValid = validateRePassword();

        const submitBtn = document.getElementById('submitBtn');
        if (nameValid && emailValid && phoneValid && ageValid && passValid && repassValid) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }


    enableDisableSubmitButton();
});

$(document).ready(function() {
    $('a').on('click', function(e) {
        e.preventDefault();

        $('.spinner').addClass('active');
        $('#overlay').addClass('active');

        $.ajax({
           
            method: 'GET',
            success: function(data) {

                $('.spinner').removeClass('active');
                $('#overlay').removeClass('active');
                $('#row-7').removeClass('d-none'); 
            },
            error: function(error) {
  
                $('.spinner').removeClass('active');
                $('#overlay').removeClass('active');
            }
        });
    });
});

$('.toggle').click(function() {

    if ($(this).hasClass('fa-bars-staggered')) {
        $('a').each(function(index) {
            $(this).hide().css('marginTop', '100px').delay(200 * index).fadeIn('slow').animate({
                marginTop: '5px'
            }, 'slow');
        });
        $(this).removeClass('fa-bars-staggered').addClass('fa-xmark');
    } else {
       
        $('a').fadeOut('slow');
    }
});
