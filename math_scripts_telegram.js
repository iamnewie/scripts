
document.body.onkeyup = function(e){
	if(e.keyCode === 32){
		var arg1 = parseInt(document.getElementById("task_x").innerHTML);
		var arg2 = parseInt(document.getElementById("task_y").innerHTML);
		var op = document.getElementById("task_op").innerHTML;

		var ans = 0;
		var ans_screen = parseInt(document.getElementById("task_res").innerHTML);


			switch(op){
				case "+" : ans = arg1 + arg2; break;
				case "–" : ans = arg1 - arg2; break;
				case "/" : ans = arg1 / arg2; break;
				case "×" : ans = arg1 * arg2; break;
			}
		if(ans_screen != ans){
			document.getElementById("button_wrong").click();
		}
		else {
			document.getElementById("button_correct").click();
		}
		console.log("arg1 = "+ arg1 + "\nop = " + op + "\narg2 = " + arg2 + "\nans = " + ans + "\nans_screen = " + ans_screen);
	}
};
/* hello there*/


