<script>
    export let lang1 = "";
    export let lang2 = ""
    export let arab = "";

    document.getElementById("ticker")
</script>

<div class="mt-4">
    <h3 class="text-lg font-bold">{arab.header}</h3>
    <table class="w-full border border-gray-300 table-fixed text-center">
        <thead>
            <tr>
                <th class="p-2 border-b border-gray-300">{lang1}</th>
                <th class="p-2 border-b border-gray-300">{lang2}</th>
            </tr>
        </thead>
        <tbody>
            {#each arab.translations as translation}
                <tr>
                    <td class="p-2 border-b border-gray-300">{translation.target}</td>
                    <td class="p-2 border-b border-gray-300">{translation.source}</td>
                </tr>
            {/each}

            <!-- Weitere Übersetzungen hinzufügen -->
        </tbody>
    </table>
</div>
