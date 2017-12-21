window.onload = function(e) {
    var temp1;
    var mPole = document.querySelector('input[name=mainPole]');
    var clrp = document.querySelector('input[name=clrp]');
    var btnCalc = document.querySelector('input[name=calc]');
    var btnPlus = document.querySelector('input[name=plus]');
    var btnMin = document.querySelector('input[name=min]');
    var btnMult = document.querySelector('input[name=mult]');
    var btnDiv = document.querySelector('input[name=div]');
    var btnOne = document.querySelector('input[name=b1]');
    var btnTwo = document.querySelector('input[name=b2]');
    var btnThree = document.querySelector('input[name=b3]');
    var btnFour = document.querySelector('input[name=b4]');
    var btnFive = document.querySelector('input[name=b5]');
    var btnSix = document.querySelector('input[name=b6]');
    var btnSeven = document.querySelector('input[name=b7]');
    var btnEight = document.querySelector('input[name=b8]');
    var btnNine = document.querySelector('input[name=b9]');
    var btnZero = document.querySelector('input[name=b0]');

    btnCalc.onclick = function() {
        var temp2 = parseInt(mPole.value) + temp1;
        mPole.value = temp2;
    }

    btnPlus.onclick = function() {
        temp1 = parseInt(mPole.value);
        mPole.value = '';
    };

    btnOne.onclick = function() {
        if (parseInt(mPole.value) == 0) {
            mPole.value = 1;
        } else {
            mPole.value += 1;
        }

    };

    btnTwo.onclick = function() {
        if (parseInt(mPole.value) == 0) {
            mPole.value = 2;
        } else {
            mPole.value += 2;
        }

    };

    btnThree.onclick = function() {
        if (parseInt(mPole.value) == 0) {
            mPole.value = 3;
        } else {
            mPole.value += 3;
        }

    };

    btnFour.onclick = function() {
        if (parseInt(mPole.value) == 0) {
            mPole.value = 4;
        } else {
            mPole.value += 4;
        }

    };

    btnFive.onclick = function() {
        if (parseInt(mPole.value) == 0) {
            mPole.value = 5;
        } else {
            mPole.value += 5;
        }

    };

    btnSix.onclick = function() {
        if (parseInt(mPole.value) == 0) {
            mPole.value = 6;
        } else {
            mPole.value += 6;
        }

    };

    btnSeven.onclick = function() {
        if (parseInt(mPole.value) == 0) {
            mPole.value = 7;
        } else {
            mPole.value += 7;
        }

    };

    btnEight.onclick = function() {
        if (parseInt(mPole.value) == 0) {
            mPole.value = 8;
        } else {
            mPole.value += 8;
        }

    };

    btnNine.onclick = function() {
        if (parseInt(mPole.value) == 0) {
            mPole.value = 9;
        } else {
            mPole.value += 9;
        }

    };

    btnZero.onclick = function() {
        if (parseInt(mPole.value) == 0) {
            mPole.value = 0;
        } else {
            mPole.value += 0;
        }

    };

    clrp.onclick = function() {
        mPole.value = '0';
    };


}