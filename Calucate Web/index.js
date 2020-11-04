function healthCal() {
    let weight = +document.getElementById('weight').value;
    let height = +document.getElementById('height').value;
    let age = +document.getElementById('age').value;
    let result = 0;

    if (weight < 0 ||
        height < 0 ||
        age < 0) {
        document.getElementById('h__alert').style.display = 'block';
        document.getElementById('h__alert').innerText = "Can't input negative number";

        return result;
    }

    if (document.getElementById('male').checked) {
        result = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
        document.getElementById('h__alert').style.display = 'none';
        return result.toFixed(2);

    } else {
        result = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        document.getElementById('h__alert').style.display = 'none';
        return result.toFixed(2);
    }
}

function healthDisplay() {
    document.getElementById("h__result").innerHTML = healthCal();
}

//!loan
function loanCal() {
    let amount = document.getElementById('js-amount').value;
    let termYears = document.getElementById('js-termYears').value;
    let interestRate = document.getElementById('js-InterestRate').value;

    if (amount < 10000 || amount > 10000000) {
        document.getElementById('l__alert').style.display = 'block';
        document.getElementById('l__alert').innerText = 'Loan amount : minimum is 10,000 maximum is 10 million';
        return result

    } else if (termYears < 1 || termYears > 40) {
        document.getElementById('l__alert').style.display = 'block';
        document.getElementById('l__alert').innerText = 'Loan term in years : minimum is 1 year maximum is 40 years';
        return result

    } else if (interestRate < 3 || interestRate > 20) {
        document.getElementById('l__alert').style.display = 'block';
        document.getElementById('l__alert').innerText = 'Interest rate per year : minimum is 3% maximum is 20%';
        return result

    } else {
        document.getElementById('l__alert').style.display = 'none'

        let result = ((((amount * interestRate) / 100) * 31) / (termYears * 366));
        return result = result.toFixed(2);
    }

};

loanDisplay = () =>
    document.getElementById('l__result').innerText = loanCal() + ' ฿';

//! GPA 
function gpaCal() {
    let math = +document.getElementById('js-math').value;
    let thai = +document.getElementById('js-thai').value;
    let english = +document.getElementById('js-english').value;
    let history = +document.getElementById('js-history').value;
    let sociology = +document.getElementById('js-sociology').value;
    let health = +document.getElementById('js-health').value;

    let answerArr = [math, thai, english, history, sociology, health];

    answerArr.forEach(function (answer) {
        if (answer < 0) {
            document.getElementById('e__alert').style.display = 'block';
            document.getElementById('e__alert').innerText = "Can't input negative number";
            return result;

        } else if (answer > 4) {
            document.getElementById('e__alert').style.display = 'block';
            document.getElementById('e__alert').innerText = "Can't input more than 4.00";
            return result;

        } else if (answer !== 0 &&
            answer !== 0.5 &&
            answer !== 1 &&
            answer !== 1.5 &&
            answer !== 2 &&
            answer !== 2.5 &&
            answer !== 3 &&
            answer !== 3.5 &&
            answer !== 4) {
            document.getElementById('e__alert').style.display = 'block';
            document.getElementById('e__alert').innerText = "Please input only 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5 and 4";
            return result;
        }
    })

    let result = ((math + thai + english + history + sociology + health) / 6);

    document.getElementById('e__alert').style.display = 'none';
    return result = result.toFixed(2);
}

gpaDisplay = () =>
    document.getElementById('e__result').innerText = gpaCal();

function gpaReset() {
    document.getElementById('e__result').innerText = 0;
    document.getElementById('e__alert').style.display = 'none';

    document.getElementById('js-math').value = null;
    document.getElementById('js-thai').value = null;
    document.getElementById('js-english').value = null;
    document.getElementById('js-history').value = null;
    document.getElementById('js-sociology').value = null;
    document.getElementById('js-health').value = null;
}