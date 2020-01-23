---
layout: it25_docs
title: Popover
group: inserimento
toc: true
---
Un popover può essere collegato ad un *tag HTML* per far comparire una nota di una **lunghezza maggiore** di quella contenuta in un *tooltip*.  
Normalmente appare e scompare con un **clic sull'elemento** cui è collegato. Viene disegnato in modo da non sovrapporsi all'elemento stesso.

Mentre un *tooltip* contiene solo del testo semplice, un popover può avere un titolo e un **contenuto più strutturato**, compreso, per esempio, un link (si veda nell'esempio il *popover in basso*).

### Posizionamento

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-12 col-md-4 offset-md-4">
      <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top"
        title="Titolo del Popover" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.">
        Popover in alto
      </button>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col-12 col-md-4">
      <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right"
        title="Titolo del Popover" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.">
        Popover a destra
      </button>
    </div>
    <div class="col-12 col-md-4 offset-md-4">
      <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left"
        title="Titolo del Popover" data-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.">
        Popover a sinistra
      </button>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col-12 col-md-4 offset-md-4">
      <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom"
        data-html="true"
        title="Titolo del Popover" data-content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
               <a href="#" class="popover-inner-link">More info</a>'>
        Popover in basso
      </button>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}
#### <svg class="icon icon-warning icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-warning-circle"></use></svg> Posizione del Popover
Può essere **diversa** da quella impostata con l'attributo `data-placement` qualora non ci sia **sufficiente spazio per disegnare il componente**.  
Nell'esempio qui sopra infatti, se si preme il tasto *Popover in alto* e poi si fa scorrere la pagina verso il basso, si vedrà il popover spostarsi al di sotto del bottone.
{% endcapture %}{% include callout.html content=callout type="warning" %}


### Abilitazione

Per abilitare il funzionamento dell'esempio è stato inserito nella pagina il seguente codice:
{% capture example %}
<script>
  document.addEventListener("DOMContentLoaded", function() {
    $(function () {
      $('[data-toggle="popover"]').popover()
    });
  })    
</script>
{% endcapture %}{% include example.html content=example %}

Per le altre modalità possibili sia di abilitazione dei popover sia di impostazione del tipo di comparsa e scomparsa di questi componenti, si veda la **[{{ site.data.short.dt }}]({{ site.baseurl }}/docs/componenti/popover/)**


{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della {{ site.data.short.dt }}:
- **[Popover]({{ site.baseurl }}/docs/componenti/popover/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
