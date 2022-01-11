class Validator {

    isEmail(email) {
        const reg = /^[a-z0-9_-]{2,64}@[a-z0-9_-]{2,63}\.[a-z0-9_-]{2,63}$/;
        return reg.test(email.toLowerCase());
    }

    isDomain(domain) {
        const reg = /^((https|http|ftp):\/\/)((www\.)|)([a-z0-9]{2,})((\/((\.[a-z0-9-])|([a-z0-9])))|)\.([a-z]){2,6}((\/)|)/;
        return reg.test(domain.toLowerCase());
    }

    isDate(date) {
        const reg = /^(([1-2][0-9])|(3[0-1])|(0[1-9]))(\/|\-|\.)((0[1-9])|(1[0-2]))(\/|\-|\.)([0-9]([0-9]{2})([1-9]))$/;
        return reg.test(date);
    }

    isPhone(phone) {
        phone = phone.replaceAll(' ', '');
        const reg = /^((\+380|380|80|0)(\((67|96|97|98|50|66|95|99|63|73|91|92|94)\))([0-9]{3})(-|)([0-9]{2})(-|)([0-9]{2}))|((\+380)(\((43|56|62|41|61|34|44|52|64|33|32|51|48|53|36|65|54|35|31|57|55|38|47|37|46)\)([0-9]{3})(-|)([0-9]{2})(-|)([0-9]{2})))$/;
        return reg.test(phone);
    }
}


module.exports = Validator;