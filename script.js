// FUNCTION TO EXECUTE SEND MESSAGE WITH "I LOVE U" MESSAGE
async function executarMsg() {
    for (i = 1; i <= 1000; i++) {
        sendMessage("*"+i+"º* EU TE AMO ❤️");
        console.log(i+"º EU TE AMO ❤️");
        await new Promise(resolve => setTimeout(resolve, 250))
    }
}

// FUNCTION TO SEND MESSAGE ON WHATSAPP
function sendMessage (message) {
  window.InputEvent = window.Event || window.InputEvent;

  var event = new InputEvent('input', {
    bubbles: true
  });

  main = document.querySelector("#main"),
  textbox = main.querySelector(`div[contenteditable="true"]`)

  textbox.textContent = message;
  textbox.dispatchEvent(event);

  (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click()
    
}

// EXECUTE
executarMsg()
