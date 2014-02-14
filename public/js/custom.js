'use strict';


// function displayFriend(e) {
// 	e.preventDefault();
// 	console.log($(this).attr("id"));
// 	console.log($(this).attr("id") + "-contents");
// 	$(".friend-area").hide();
// 	$("#" + String($(this).attr("id")) + "-contents").show();
// }

'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */

function initializePage() {
	console.log("Javascript connected!");
	console.log(ExpressHandlebars);
}
Handlebars.registerHelper('if_all', function() {
    var args = [].slice.apply(arguments);
    var opts = args.pop();

    var fn = opts.fn;
    for(var i = 0; i < args.length; ++i) {
        if(args[i])
            continue;
        fn = opts.inverse;
        break;
    }
    return fn(this);
});
