jQuery(document).ready(function($) {
	$(".ajax-contact-form").submit(function() {
		var str = $(this).serialize();

		let messageTextElem = document.getElementById("messageText")
		let inputNameElem = document.getElementById("name")
		let inputEmailElem = document.getElementById("email")
		let inputMessageElem = document.getElementById("message")

		messageTextElem.style.visibility = 'visible'

		$.ajax({
			type: "POST",
			url: "../php/contact.php",
			data: str,
			success: function(msg) {
				if(msg == "Ваше сообщение отправлено!") {
					messageTextElem.style.color = "#fff"
					messageTextElem.innerHTML = "&#10004;	Сообщение отправлено!"
					inputNameElem.value = ""
					inputEmailElem.value = ""
					inputMessageElem.value = ""
				} else {
					messageTextElem.innerHTML = "" + msg;
				}
				// $('.note2').html(result);
			}
		});
		return false;
	});
});



// MEDIA
//		footer link for mobile
const viber = document.getElementById('viber')
const telegram = document.getElementById('telegram')

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	viber.removeAttribute('href')
	viber.setAttribute('href', 'viber://add?number=380969409698')
	telegram.removeAttribute('href')
	telegram.setAttribute('href', 'tg://resolve?domain=Kirill_Tishko')
}