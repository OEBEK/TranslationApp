<script>
  import { getTranslation } from "./scripts/requets.js";
  console.log(getTranslation("Ttes", "de", "en"));
  import TranslationCard from "./modules/translationCard.svelte";
</script>

<main class="p-4">
  <h1 class="text-2xl font-bold mb-4">Haus</h1>
  <div class="mb-4">
    <label for="language" class="text-lg font-medium">Select a language:</label>
    <select id="language" class="w-full p-2 border border-gray-300 rounded">
      <option value="de">German</option>
      <option value="en">English</option>
      <!-- Weitere Sprachen hinzufügen -->
    </select>
  </div>

  <div class="mb-4">
    <label for="translationText" class="text-lg font-medium"
      >Enter text to translate:</label
    >
    <textarea
      id="translationText"
      class="w-full p-2 border border-gray-300 rounded"
    />
  </div>

  <button class="bg-blue-500 text-white px-4 py-2 rounded">Translate</button>

  <TranslationCard headword="cunt" />
</main>
