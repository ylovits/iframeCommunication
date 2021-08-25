/**
 * MESSAGE TO PARENT
 */
const checkParentMessaging = () => {
  window.parent.postMessage("messageToParentByClick", "http://localhost:3001");
};


// simulate loading time
const startLoading = () => {
  window.parent.postMessage("startedLoadingPage", "http://localhost:3001");
};

/**
 * MESSAGE FROM PARENT
 */
const receiveMessage = (event) => {
  if (event && event.data === "messageToIframe") {
    const pElement = document.createElement("p");
    const text = document.createTextNode("Messaging by click in parent worked");
    pElement.appendChild(text);
    document.body.appendChild(pElement);
  }
};
window.addEventListener("message", receiveMessage, false);

