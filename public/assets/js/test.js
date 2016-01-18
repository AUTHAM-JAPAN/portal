var Test = (function () {
    function Test(firstName, lastName) {
        if (firstName === void 0) { firstName = 'hoge'; }
        if (lastName === void 0) { lastName = 'fuga'; }
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    Test.prototype.alertFullName = function () {
        alert(this.firstName + ' ' + this.lastName);
        var data = $('#id').val();
        var data2 = $('#id2').val();
    };
    ;
    return Test;
})();
