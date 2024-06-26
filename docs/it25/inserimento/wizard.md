---
layout: it25_docs
title: Wizard
group: inserimento
toc: true
---

La componente **Wizard** è utile per demarcare gli step all’interno di un processo.

Non esiste un modo univoco di disegnare questa componente. Il suo utilizzo e la sua applicazione variano a seconda del servizio e il suo design spesso è il frutto di una valutazione preliminare sulla natura del servizio.

{% capture callout %}
Breaking feature dalla versione **2.1.0**

Il componente è stato riscritto per ereditare pienamente il funzionamento del componente **[stepper]({{ site.baseurl }}/docs/componenti/steppers)**.

* per il **wizard semplice** vanno ora specificate le classi:  
`it25-wizard` e `it25-wizard-pin` (invece del solo `it25-wizard`)
* per il **wizard dettagliato** va specificata la classe:  
`it25-wizard` (invece di `it25-wizard-detail`).

{% endcapture %}{% include callout.html content=callout type="danger" %}

### Wizard semplice

Un primo esempio di wizard può essere applicato in modali dove viene proposta una serie limitata di step progressivi al termine dei quali segue una call to action conclusiva.

Quello che caratterizza questa tipologia è la semplificazione degli elementi del wizard in sole icone.  
In genere il wizard si trova tra il titolo e la parte di contenuto della componente.

{% capture example %}

{% include html_docs/wizard/wizard_semplice_icone.html %}
{% include html_docs/wizard/wizard_semplice_numeri.html %}
<script>
  document.addEventListener("DOMContentLoaded", function() {
    $(function () {
      $('[data-bs-toggle="tooltip"]').tooltip()
    });
  })    
</script>
{% endcapture %}{% include example.html content=example %}

---

### Wizard dettagliato

La seconda tipologia di Wizard consiste in una pagina dedicata dove l’utente necessita di svolgere un task per fasi progressive.  
Questo si traduce in una versione di Wizard più dettagliata, ricca di elementi e contenuti testuali e quindi di maggiori interazioni per step.

{% capture example %}
{% include html_docs/wizard/wizard_dettagliato.html %}
{% endcapture %}{% include example.html content=example %}

### Abilitazione

Per abilitare il funzionamento dei tooltip dell'esempio, è stato inserito nella pagina il seguente codice:

{% highlight html %}
<script>
  document.addEventListener("DOMContentLoaded", function() { 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })    
</script>
{% endhighlight %}

<script>
  document.addEventListener("DOMContentLoaded", function() { 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })    
</script>
