const thermometer = {
    _celsius: 0,
    get temperature() {
        return (this._celsius * 9/5) + 32;
    },
    set temperature(value) {
        this._celsius = value;
    }
};

thermometer.temperature = 25;
console.log(thermometer.temperature);

const studentGrade = {
    _score: 0,
    get grade() {
        if (this._score >= 90) return 'A';
        if (this._score >= 80) return 'B';
        if (this._score >= 70) return 'C';
        if (this._score >= 60) return 'D';
        return 'F';
    },
    set score(value) {
        if (value >= 0 && value <= 100) {
            this._score = value;
        } else {
            console.error('Invalid score! Must be between 0 and 100.');
        }
    }
};

studentGrade.score = 85;
console.log(studentGrade.grade);

const secretPassword = {
    _encrypted: '',
    get password() {
        return '*****';
    },
    set password(value) {
        this._encrypted = btoa(value);
    }
};

secretPassword.password = 'mySecret123';
console.log(secretPassword.password);
console.log(secretPassword._encrypted);
