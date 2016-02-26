document.body.onload = function() {
	console.log('Watch Later Always activated');

	iframes = document.querySelectorAll('iframe');

	console.log(iframes.length);
	if (iframes.length == 0) {
		console.log('No iframes detected');
	} else {
		console.log(iframes.length + ' iframes detected');
		for (i = 0; i < iframes.length; i++) {
			console.log('iframe: ' + iframes[i].src);
			embed = iframes[i].src;
			// If it's a Youtube embed
			if (embed.indexOf('youtube') >= 0) {
				console.log('YouTube!');
				// Check for showinfo existence
				if (embed.indexOf('showinfo') >= 0) {
					// It exists, ensure it is 1
					iframes[i].src.replace("showinfo=0", "showinfo=1");
				} else {
					// Does a question mark exist
					if (embed.indexOf('?') > 0) {
						iframes[i].src += '&showinfo=1';
					} else {
						iframes[i].src += '?showinfo=1';
					}
				}
				console.log("Reload iframe contents to " + iframes[i].src);
				iframes[i].contentWindow.location.reload();
			}
		}
	}
}