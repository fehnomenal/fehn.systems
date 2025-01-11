<script setup lang="ts">
definePageMeta({
  layout: 'legal',
})

useHead({
  title: 'Impress | Andreas Fehn',
})
</script>

<template>
  <h1>Impressum</h1>

  <p>
    Andreas Fehn<br>
    IT Consultant<br>
    Zaunk&ouml;nigstr. 36<br>
    85521 Ottobrunn
  </p>

  <h2>Kontakt</h2>
  <p>
    <!-- Telefon: &#91;Telefonnummer&#93;<br> -->
    E-Mail: business@fehn.systems
  </p>

  <h2>Angaben zur Berufs&shy;haftpflicht&shy;versicherung</h2>
  <p>
    <strong>Name und Sitz des Versicherers:</strong><br>
    Hiscox SA, Niederlassung f&uuml;r Deutschland<br>
    Arnulfstra&szlig;e 31<br>
    80636 M&uuml;nchen
  </p>
  <p><strong>Geltungsraum der Versicherung:</strong><br>Deutschland</p>

  <h2>EU-Streitschlichtung</h2>
  <p>
    Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a
      href="https://ec.europa.eu/consumers/odr/" class="underline transition-colors hover:text-black" target="_blank"
      rel="noopener noreferrer"
    >https://ec.europa.eu/consumers/odr/</a>.<br> Unsere E-Mail-Adresse finden Sie oben im
    Impressum.
  </p>

  <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
  <p>
    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
    teilzunehmen.
  </p>

  <p>
    Quelle: <a
      href="https://www.e-recht24.de" class="underline transition-colors hover:text-black" target="_blank"
      rel="noopener noreferrer"
    >eRecht24</a>
  </p>
</template>

<style scoped>
h1 {
  @apply font-bold text-3xl my-7;
}

h2 {
  @apply font-semibold text-xl my-4;
}

h3 {
  @apply text-lg my-2;
}

p {
  @apply mb-1;
}
</style>
