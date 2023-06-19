// Define backendUrl
const backendUrl = "http://0.0.0.0:8000";

// Define getTranslation function
export function getTranslation(word, targetLanguage, sourceLanguage) {
  let response = fetch(
    backendUrl + "/translate/" + word + "&targetLanguage=" + targetLanguage + "sourceLanguage=" + sourceLanguage,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  response
    .then((test) => test.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

// Call getTranslation with appropriate arguments
getTranslation("hello", "es", "en");

// ./gradlew.bat shadowJar

// ./build/libs java -jar 