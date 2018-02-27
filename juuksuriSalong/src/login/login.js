export class login{

	showPassword() {
    		var x = document.getElementById("password");
    		if (x.type === "password") {
        		x.type = "text";
    		} else {
        			x.type = "password";
   		}
	}
}