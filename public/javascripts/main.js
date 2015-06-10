/**
 * Created by julia on 5/25/15.
 */

window.onload = function () {
    document.getElementById('wrapper').onclick = function (event) {
        console.log('here');
        var target = event.target;

        if (target.tagName != 'DIV') return;

        if (target.id == 'twoSum') {
            $("#dialog").dialog();
        }
        else {
            $.get('/' + target.id + '/[' + $('#arr').html() + ']', function (data) {
                alert('sorted array is ' + data);
            });
        }
    };
};
function checkArray() {
    var array = $('#array')[0];
    var input = $(array).val();
    var isnum = /^[0-9, ]+$/.test(input);
    if (!isnum) {
        array.setCustomValidity('Only numbers separated with \",\" are allowed here');
    }
    else {
        array.setCustomValidity('');
    }
}

function checkNumber(input, numField) {
    var isnum = /^\d+$/.test(input);
    if (!isnum) {
        numField.setCustomValidity('Only one number is allowed here');
    }
    else {
        numField.setCustomValidity('');
    }
}

function checkAndShow() {
    checkArray();
    if (!$('#array')[0].validity.customError) {
        document.getElementById("arr").innerHTML = $($('#array')[0]).val();
        document.getElementById("chosenArray").style.visibility = 'visible';
    }
}


function getTwoSum() {
    var num = $('#dialogInput')[0];
    var input = $(num).val();
    checkNumber(input, num);
    if (num.validity.customError) {
        return false;
    }
    else {
        $.get('/twoSum/[' + $('#arr').html() + ']' + '/' + input, function (data) {
            alert('Result is ' + data);
        });
        return false;
    }
}
