function fizzBuzz() {

    $("#FBSolveButton").on("click", function () {
        var fizz = Number($("#fbnum1").val());
        var buzz = Number($("#fbnum2").val());

        var fbArray = "";

        if (fizz > 100 || buzz > 100) {
            alert("Number entered too high.")
            return
        }

        if (fizz < 1 || buzz < 1) {
            alert("Number entered too low.")
            return
        }

        for (loop = 1; loop < 101; loop++) {
            if ((loop % fizz == 0) && (loop % buzz == 0)) {
                if (loop == 100) {
                    fbArray += "<b>FizzBuzz</b>";
                }
                else {
                    fbArray += "<b>FizzBuzz</b>" + ", ";
                }
            }

            else if (loop % fizz == 0) {
                if (loop == 100) {
                    fbArray += "<i>Fizz</i>";
                }
                else {
                    fbArray += "<i>Fizz</i>" + ", ";
                }
            }

            else if (loop % buzz == 0) {
                if (loop == 100) {
                    fbArray += "<i>Buzz</i>";
                }
                else {
                    fbArray += "<i>Buzz</i>" + ", ";
                }
            }

            else {
                if (loop == 0) {
                    fbArray += loop;
                }
                fbArray += loop + ", ";
            }

        }

        $("#fboutput").show()
        $("#fboutput").html(`${fbArray}`);
    });

    $("#FBClearButton").on("click", function () {
        var fizz = Number($("#fbnum1").val(""));
        var buzz = Number($("#fbnum2").val(""));
        $("#fboutput").hide()
    })

    $("#FBCodeButton").on("click", function () {
        $("#fizzbuzzcode").toggle()
    })
}