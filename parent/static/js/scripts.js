const iframe = document.getElementById("iframe");
const overlay = document.getElementById("overlay");

/**
 * REMOVE overlay on load
 */
iframe.onload = () => {
  overlay.style.display = "none";
};

/**
 * NAVIGATION FROM PARENT
 */
const goToHome = () => {
  overlay.style.display = "block";
  iframe.src = "http://localhost:3000";
};

const goToPage2 = () => {
  overlay.style.display = "block";
  iframe.src = "http://localhost:3000/page2";
};

const goToPage3 = () => {
  overlay.style.display = "block";
  iframe.src = "http://localhost:3000/page3";
};

/**
 * MESSAGE TO IFRAME
 */
const testIframeMessagingFunction = () => {
  iframe.contentWindow.postMessage("messageToIframe", "http://localhost:3000");
};

/**
 * MESSAGE FROM IFRAME
 */
const receiveMessage = (event) => {
  if (event && event.data === "messageToParentByClick") {
    const existingMessage = document.getElementById("deleteWhenNewOne");
    existingMessage && existingMessage.remove();
    const ul = document.querySelector(".menu");
    const li = document.createElement("li");
    li.setAttribute("id", "deleteWhenNewOne");
    const text = document.createTextNode(
      "Messaging by click in Iframe worked!"
    );
    li.appendChild(text);
    ul.appendChild(li);
  } else if (event && event.data === "startedLoadingPage") {
    overlay.style.display = "block";
  }
};
window.addEventListener("message", receiveMessage, false);
