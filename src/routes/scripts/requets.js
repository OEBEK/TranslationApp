let backendUrl = "http://0.0.0.0:8000"

export function getTranslation(word, targetLanguage, sourceLanguage) {
  return fetch(backendUrl + "/translate/" + word + "&targetLanguage=" + targetLanguage + "sourceLanguage=" + sourceLanguage, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      }
    })
}