
function openGame(inpu) {
var win = window.open()
var url = inpu
var iframe = win.document.createElement('iframe')
iframe.style.width = "100%";
iframe.style.height = "100%";
iframe.style.border = "none";
iframe.src = url
win.document.body.appendChild(iframe)
}
	
function utilizeInput() {
    const element1 = document.getElementById("InputBox");
    const endValue = element1.value;
    if (endValue.toLowerCase().startsWith("https://") || endValue.toLowerCase().startsWith("http://")) {
        openGame(endValue);
    } else {
        openGame("https://" + endValue);
    }
}