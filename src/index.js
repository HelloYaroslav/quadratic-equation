module.exports = function solveEquation(equation) {
    task = equation;
    num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "-"];
    var num1 = "",
        num2 = "",
        num3 = "";
    var i = 0;
    var FlagExchange = false;

    while (task[i] != " ") {
        num1 = num1 + task[i];
        i++;
    }

    for (i; i < task.length; i++)
        if (task[i - 5] == "^") {
            if (task[i - 2] == "-")
                num2 = "-";
            else
                FlagExchange = true;
            var j = i;
            for (j; task[j] != " "; j++)
                num2 = num2 + task[j];
            if (task[j + 5] == "-")
                num3 = "-";
            j = j + 7;
            for (j; j < task.length; j++)
                num3 = num3 + task[j]
            break;


        }


    var arr = [num1, num2, num3];
    var res = [num2 / num1, num3 / num1];
    var D = Math.pow(res[0], 2) - 4 * res[1];
    console.log(arr);
    console.log(res);
    var x1 = (-res[0] - Math.pow(D, 0.5)) / 2;
    var x2 = (-res[0] + Math.pow(D, 0.5)) / 2;
    console.log(" result ", x1, x2)

    //  if (FlagExchange)
    var lol = [x1, x2];

    //   else
    //      var lol = [-x2, -x1];
    console.log(lol);
    return lol;

    // your implementation



}