class MyString {

    validate(string){
        if (typeof string !== 'string' || string.length === 0){
            return false;
        }
        return true;
    }

    reverse(string){
        if (!this.validate(string)){
            return false;
        }
        return string.split('').reverse().join('');
    }

    ucFirst(string) {
        if (!this.validate(string)){
            return false;
        }
        return string[0].toUpperCase() + string.slice(1);
    }

    ucWords(string) {
        if (!this.validate(string)){
            return false;
        }

        let strArr = string.split(' ');
        for (let i = 0; i < strArr.length; i++) {
            strArr[i] = this.ucFirst(strArr[i]);
        }
        return strArr.join(' ');
    }
}


module.exports = MyString;