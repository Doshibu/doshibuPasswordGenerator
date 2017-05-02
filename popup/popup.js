$(document).ready(function(){
	$('.single-slider').jRange({
	    from: 6,
	    to: 15,
	    step: 1,
	    scale: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
	    format: '%s',
	    width: 325,
	    showLabels: true,
	    snap: true
	});

	$('#btnCopy').click(function(){
		var txt = $('#__password').val();
		if(!txt || txt == ''){
			return;
		}

		copyTextToClipboard(txt);
	});
});

function copyTextToClipboard(text) {
	$('#__password').select();
	try {
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
		console.log('Doshibu Password Generator : Copying text command was ' + msg);
	} catch (err) {
		console.log('Doshibu Password Generator : Oops, unable to copy');
	}
}