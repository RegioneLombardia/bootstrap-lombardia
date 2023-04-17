---
layout: it25_docs
title: Wizard
group: inserimento
toc: true
---

La componente **Wizard** è utile per demarcare gli step all’interno di un processo. Non esiste un modo univoco di disegnare questa componente. Il suo utilizzo e la sua applicazione variano a seconda del servizio e il suo design spesso è il frutto di una valutazione preliminare sulla natura del servizio.

### Wizard semplice

Un primo esempio di wizard può essere applicato in modali dove viene proposta una serie limitata di step progressivi al termine dei quali segue una call to action conclusiva.
Quello che caratterizza questa tipologia è la semplificazione degli elementi del wizard
in sole icone. In genere il wizard si trova tra il titolo e la parte di contenuto della componente.

{% capture example %}

<div class="steppers">
{% include html_docs/wizard/wizard_semplice_icone.html %}
{% include html_docs/wizard/wizard_semplice_numeri.html %}
</div> <!-- end div class="steppers" -->
<script>
  document.addEventListener("DOMContentLoaded", function() {
    $(function () {
      $('[data-bs-toggle="tooltip"]').tooltip()
    });
  })    
</script>
{% endcapture %}{% include example.html content=example %}

### Wizard dettagliato

La seconda tipologia di Wizard consiste in una pagina dedicata dove l’utente necessita di svolgere un task per fasi progressive. Questo si traduce in una versione di Wizard più dettagliata, ricca di elementi e contenuti testuali e quindi di maggiori interazioni per step.

{% capture example %}

<div class="steppers">
{% include html_docs/wizard/wizard_dettagliato.html %}
</div>
{% endcapture %}{% include example.html content=example %}

### Abilitazione

Per abilitare il funzionamento dell'esempio è stato inserito nella pagina il seguente codice:
{% capture example %}

<script>
  document.addEventListener("DOMContentLoaded", function() { 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })    
</script>

{% endcapture %}{% include example.html content=example %}

<script>
  document.addEventListener("DOMContentLoaded", function() { 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })    
</script>