<script>
  import { getTranslation, getLanguages } from "./scripts/requets.js"
  import TranslationCard from "./modules/translationCard.svelte";


  let translationResponse = ""
  
  let languages = getLanguages()

  let selectedSourceLanguage = "en"
  
  let selectedTargetLanguage = "de"

  let wordInput = ""

  function translate() {
    getTranslation(wordInput, selectedTargetLanguage, selectedSourceLanguage)
    .then(
      translation => {
        translationResponse = translation
      }
    )
  }
  
</script>

<main class="p-4">
  <h1 class="text-2xl font-bold mb-4">Haus</h1>
  <div class="mb-4">
    {#await languages}
      <p>Loading languages...</p>
    {:then langs} 
    <div class="flex flex-row justify-between gap-8 h-23">
      <label for="language" class="text-lg font-medium">Select a source language:</label>
      <select id="language" class="w-full p-2 border border-gray-300 rounded" bind:value={selectedSourceLanguage}>
        {#each langs as lang}
          <option value="{lang.langPrefix}">{lang.fullLang}</option>
        {/each}
      </select>
      <label for="language" class="text-lg font-medium">Select a target language:</label>
      <select id="language" class="w-full p-2 border border-gray-300 rounded" bind:value={selectedTargetLanguage}>
        {#each langs as lang}
          <option value="{lang.langPrefix}">{lang.fullLang}</option>
        {/each}
      </select>
    </div>
    {/await}

  </div>

  <div class="mb-4">
    <label for="translationText" class="text-lg font-medium"
      >Enter text to translate:</label>
    <textarea
      id="translationText"
      class="w-full p-2 border border-gray-300 rounded"
      bind:value={wordInput}
    />
  </div>

  <button class="bg-blue-500 text-white px-4 py-2 rounded" on:click={translate}>Translate</button>
  {#if translationResponse != ""}
     {#each translationResponse.hits as translation}
        {#each translation.roms as rom}
          {#each rom.arabs as arab}
            <TranslationCard arab={arab}/>
         {/each}
        {/each}
     {/each}
  {/if}
</main>
