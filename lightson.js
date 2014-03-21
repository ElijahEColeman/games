$("div.light").click(function () {
    var m = 0;
    var thisDiv = $(this).attr("id");
    var topDiv = null;
    var bottomDiv = null;
    var leftDiv = null;
    var rightDiv = null;
    for (var i = 1; i < 6; i++) {
        for (var j = 1; j < 6; j++) {
            var testDiv = "r" + i + "c" + j;
            if (testDiv === thisDiv) {
                if (i > 1) {
                    topDiv = "r" + (i - 1) + "c" + j;
                }
                if (i < 10) {
                    bottomDiv = "r" + (i + 1) + "c" + j;
                }
                if (j > 1) {
                    leftDiv = "r" + i + "c" + (j - 1);
                }
                if (j < 10) {
                    rightDiv = "r" + i + "c" + (j + 1);
                }
            }
        }
    }
    if ($("#" + thisDiv).hasClass("off")) {
        $("#" + thisDiv).removeClass("off").addClass("on");
    } else {
        $("#" + thisDiv).removeClass("on").addClass("off");
    }
    if ($("#" + topDiv).hasClass("off")) {
        $("#" + topDiv).removeClass("off").addClass("on");
    } else {
        $("#" + topDiv).removeClass("on").addClass("off");
    }
    if ($("#" + bottomDiv).hasClass("off")) {
        $("#" + bottomDiv).removeClass("off").addClass("on");
    } else {
        $("#" + bottomDiv).removeClass("on").addClass("off");
    }
    if ($("#" + leftDiv).hasClass("off")) {
        $("#" + leftDiv).removeClass("off").addClass("on");
    } else {
        $("#" + leftDiv).removeClass("on").addClass("off");
    }
    if ($("#" + rightDiv).hasClass("off")) {
        $("#" + rightDiv).removeClass("off").addClass("on");
    } else {
        $("#" + rightDiv).removeClass("on").addClass("off");
    }
    for (var k = 1; k < 6; k++) {
        for (var l = 1; l < 6; l++) {
            var checkDiv = "r" + k + "c" + l;
            if ($("#" + checkDiv).hasClass("off")) {
                m++;
            }
        }
    }
//    if (m < 1) {
//        for (n = 1; n < 9; n++) {
//            setTimeout(function () {
//                $("div.light").toggleClass("on").toggleClass("off");
//            }, n * 200);
//        }
//        setTimeout(function () {
//            alert("Congratulations! You did it!");
//        }, 1800);
//    }
//    m = 1;
});
