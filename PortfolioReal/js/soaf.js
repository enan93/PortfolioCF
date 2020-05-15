function sumOfAllFears() {

    $("#SOAFSubmitBtn").on("click", function () {
        let topnum = Number($("#soaftopnum").val());

        let soafArray = [];
        soafArray.push(Number($("#soafnum1").val()));
        soafArray.push(Number($("#soafnum2").val()));
        soafArray.push(Number($("#soafnum3").val()));
        soafArray.push(Number($("#soafnum4").val()));
        soafArray.push(Number($("#soafnum5").val()));

        let sumfears = 0;
        let found = false;

        for (var loop = 0; loop < soafArray.length; loop++) {

            sumfears = topnum - soafArray[loop];

            if (soafArray.indexOf(sumfears, loop + 1) > 0) {
                found = true;
                break;
            }


        }

        $("#soafoutput").show()

        if (found)
            $("#soafoutput").html(`The sum of ${topnum} was found in the numbers entered.`);
        else
            $("#soafoutput").html(`The sum of ${topnum} was <u>not</u> found in the numbers entered.`);

        $("#SOAFClearBtn").on("click", function () {
            Number($("#soaftopnum").val(""));
            Number($("#soafnum1").val(""));
            Number($("#soafnum2").val(""));
            Number($("#soafnum3").val(""));
            Number($("#soafnum4").val(""));
            Number($("#soafnum5").val(""));
            $("#soafoutput").hide()
        })
    });
    $("#SOAFCodeBtn").on("click", function () {
        $("#soafcode").toggle()
    })
}