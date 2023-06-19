<script>
  import { getTranslation } from "./scripts/requets.js"
  
  getTranslation("Ttes", "de", "en")
  .then(x => x.json())
  .then(data => console.log(data));
</script>


<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>


