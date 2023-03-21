---
layout: docs
title: Tooltip
group: inserimento
toc: true
---

Un tooltip può essere collegato ad un *tag HTML* per far comparire una **breve** nota esplicativa.    
Normalmente appare al **passaggio del mouse** sull'elemento cui è collegato. Viene disegnato in modo da non sovrapporsi all'elemento stesso.

Normalmente un tooltip contiene solo del **testo semplice**; anche se non è impossibile inserirvi un link, solitamente nel caso di debba farlo si usa un **[popover]({{ site.baseurl }}/docs/inserimento/popover/)**.  
Nel caso serva il tooltip è comunque in grado contenere il testo andando a capo.

### Posizionamento

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-12 col-md-4 offset-md-4">
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top"
              title="Breve testo esplicativo">Bottone con tooltip in alto
      </button>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col-12 col-md-4">
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right"
              title="Breve testo esplicativo">Bottone con tooltip a destra
      </button>
    </div>
    <div class="col-12 col-md-4 offset-md-4">
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.">Bottone con tooltip a sinistra
      </button>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col-12 col-md-4 offset-md-4">
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom"
              title="Breve testo esplicativo">Bottone con tooltip in basso
      </button>
    </div>
  </div>
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


Per le altre modalità possibili sia di abilitazione dei tooltip sia di impostazione del tipo di comparsa e scomparsa di questi componenti, si veda la **[{{ site.data.short.dt }}]({{ site.baseurl }}/docs/componenti/tooltip/)**


{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della {{ site.data.short.dt }}:
- **[Tooltip]({{ site.baseurl }}/docs/componenti/tooltip/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
