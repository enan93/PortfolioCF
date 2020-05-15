function tacoCat() {

    $("#TacoSubmitButton").on("click", function () {
        var str = ($("#tacoinput").val());

        if (str == "") {
            alert("No data entered.")
            return
        }

        var enteredText = str.toLowerCase();

        enteredText = enteredText.replace(/ /g, "");
        var length = enteredText.length;

        var last = length - 1;

        var enteredTextRev = "";

        for (loop = last; loop >= 0; loop--) {
            enteredTextRev += enteredText[loop];
        }

        var results;

        if (enteredText === enteredTextRev) {
            results = `${str} is a palindrome!`
        }

        else {
            results = `${str} is <u>not</u> a palindrome!`
        }




        $("#tacooutput").show();
        $("#tacooutput").html(`${results}`);
    });

    $("#TacoClearButton").on("click", function () {
        var str = ($("#tacoinput").val(""));
        $("#tacooutput").hide();

    })

    $("#TacoCodeButton").on("click", function () {
        $("#tacocatcode").toggle()
    })
}