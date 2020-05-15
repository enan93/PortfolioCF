function sunsetHills() {

    $("#SunsetSolveButton").on("click", function () {
        let sunsetArray = new Array();
        sunsetArray.push(Number($("#sunsetnum1").val()));
        sunsetArray.push(Number($("#sunsetnum2").val()));
        sunsetArray.push(Number($("#sunsetnum3").val()));
        sunsetArray.push(Number($("#sunsetnum4").val()));
        sunsetArray.push(Number($("#sunsetnum5").val()));
        sunsetArray.push(Number($("#sunsetnum6").val()));

        let tallest = sunsetArray[0];
        let sunsetArray2 = new Array();
        sunsetArray2.push(tallest);

        for (var loop = 1; loop < sunsetArray.length; loop++) {

            if (sunsetArray[loop] > tallest) {
                tallest = sunsetArray[loop];
                sunsetArray2.push(tallest);
            }
        };

        $("#sunsetoutput").show()
        $("#sunsetoutput").html(`The buildings with heights of: ${sunsetArray2} can see the sunset.`)

        $("#SunsetClearButton").on("click", function () {
            Number($("#sunsetnum1").val(""));
            Number($("#sunsetnum2").val(""));
            Number($("#sunsetnum3").val(""));
            Number($("#sunsetnum4").val(""));
            Number($("#sunsetnum5").val(""));
            Number($("#sunsetnum6").val(""));
            $("#sunsetoutput").hide()
        })
    });
    $("#SunsetCodeButton").on("click", function () {
        $("#sunsetcode").toggle();
    })
}