// Define backendUrl
const backendUrl = "http://0.0.0.0:8000";
export function getTranslation(word, targetLanguage, sourceLanguage) {
  let url = backendUrl + "/translate/" + word + "?targetLanguage=" + targetLanguage + "&sourceLanguage=" + sourceLanguage
  console.log(url)
  return fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      }
    }).then(data => data.json())
}

export function getLanguages() {
  return fetch(backendUrl + "/languages", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    }
  }).then(data => data.json())
}

// Call getTranslation with appropriate arguments

// ./gradlew.bat shadowJar

// ./build/libs java -jar 