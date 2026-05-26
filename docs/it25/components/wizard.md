---
layout: it25_docs
title: Wizard
group: components
toc: true
---

La componente **Wizard** è utile per demarcare gli step all’interno di un processo.

Il suo utilizzo e la sua applicazione variano a seconda del servizio e il suo design spesso è il frutto di una valutazione preliminare sulla natura del servizio.

{% capture example %}
{% include html_docs/wizard/wizard_dettagliato.html %}
{% endcapture %}{% include example.html content=example %}


Si notino le classi: `not-first` e `not-last`: applicano un margine rispettivamente a sinistra e a destra dello step in modo che la riga sottostante suggerisca che vi sono passi precedenti/successivi.

Per i non vedenti l'informazione è invece fornita dallo `stepper-index` non visualizzato ma letto dagli screen reader.

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

{% capture callout %}
## {{ site.data.short.dt }}
Questo componente è costruito sull a base del componente di {{ site.data.short.bi }}:  
**[{{ site.data.short.link }}Steppers]({{ site.baseurl }}/docs/componenti/steppers/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
