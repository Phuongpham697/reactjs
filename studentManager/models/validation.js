class Validation {
    constructor() {
        this.checkEmpty = function(value, erorrmessage, name) {
            if (value.trim() === '') {
                document.querySelector(erorrmessage).innerHTML = name + ' Không được để trống';
                document.querySelector(erorrmessage).style.display = 'block';
                return false;
            } else {
                document.querySelector(erorrmessage).innerHTML = '';
                document.querySelector(erorrmessage).style.display = 'none';
                return true;
            }

        };
        this.checkWord = function(value, erorrmessage, name) {
            var regex = /^[A-Za-z]+$/;
            if (regex.test(value)) {
                document.querySelector(erorrmessage).innerHTML = '';
                document.querySelector(erorrmessage).style.display = 'none';
                return true;
            } else {
                document.querySelector(erorrmessage).innerHTML = name + ' phải là ký tự';
                document.querySelector(erorrmessage).style.display = 'block';
                return false;
            }
        }
        this.checkNumber = function(value, erorrmessage, name) {
            var regex = /^[0-9]+$/
            if (regex.test(value)) {
                document.querySelector(erorrmessage).innerHTML = '';
                document.querySelector(erorrmessage).style.display = 'none';
                return true;
            } else {
                document.querySelector(erorrmessage).innerHTML = name + ' phải là số';
                document.querySelector(erorrmessage).style.display = 'block';
                return false;
            }
        }
        this.checkLength = function(value, erorrmessage, name, min, max) {
            if (value.trim() > max || value.trim() < min) {
                document.querySelector(erorrmessage).innerHTML = `${name} phải từ ${min} đến ${max}`;
                document.querySelector(erorrmessage).style.display = 'block';
                return false;
            } else {
                document.querySelector(erorrmessage).innerHTML = '';
                document.querySelector(erorrmessage).style.display = 'none';
                return true;
            }
        }
    }
}