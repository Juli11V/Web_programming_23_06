//¬јЋ»ƒј÷»я

$.validator.addMethod('regex', function (value, element, regexp) {
    let regExsp = new RegExp(regexp);
    return regExsp.test(value);

}, 'Please check your input');

$('form').validate({
    rules: {
        firstName: {
            required: true,
            regex: "[A-Za-z]{1,32}"
        },
        phoneNumber: {
            digits: true,
            required: true,
            minlegth: 10,
            maxlength: 11,
            regex: "[0-9]+"
        }
    },
    messages: {
        firstName: '¬вед≥ть ваше ≥м€ коректно',
        phoneNumber: '¬вед≥ть ваш номер'
    }
})