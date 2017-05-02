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

	var password = GeneratePassword();
	$('#__password').val(password);
});

$('#btnCopy').click(function(){
	var txt = $('#__password').val();
	if(!txt || txt == ''){
		return;
	}

	copyTextToClipboard(txt);
});

$('#btnReset').click(function(){
	GeneratePassword();
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

function GeneratePassword() {
	var length = $('#__length').val(),
		possibilities = '',
		password = '';

	if($('#checkLetters').is(':checked')) {
		possibilities += 'qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM';
	}
	if($('#checkNumbers').is(':checked')) {
		possibilities += '1234567890';
	}
	if($('#checkSymbols').is(':checked')) {
		possibilities += '!@#$%^&*.,';
	}

    for (i=0; i < length; i++) {
        j = getRandomNum(possibilities.length);
        password = password + possibilities.charAt(j);
    }

    return password;
}

function getRandomNum(cnt) {
    // between 0 - 1
    var rndNum = Math.random()
    rndNum = parseInt(rndNum * cnt);
    return rndNum;
}