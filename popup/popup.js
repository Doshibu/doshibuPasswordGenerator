$('#btnCopy').click(function(){
	var txt = $('#__password').val();
	if(!txt || txt == ''){
		return;
	}

	copyTextToClipboard(txt);
});

function copyTextToClipboard(text) {
	$('#__password').select();
	try {
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
		console.log('Copying text command was ' + msg);
	} catch (err) {
		console.log('Oops, unable to copy');
	}
}