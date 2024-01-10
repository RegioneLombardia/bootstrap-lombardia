---
layout: it25_docs
title: Popover
group: inserimento
toc: true
---

Il **Popover** è una componente che viene richiamato al click e fornisce informazioni su un determinato elemento, comando o interazione.

### Posizionamento

{% capture example %}
<div class="container">
  <div class="row">
    <div class="col-12 col-md-4 offset-md-4">
      <button type="button" class="btn btn-secondary" data-container="body" data-bs-toggle="popover" data-bs-placement="top"
        title="Titolo del Popover" data-bs-html="true"
        data-bs-content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
               <a href="#" class="popover-inner-link">altro ...</a>'>
        Popover in alto
      </button>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col-12 col-md-4">
      <button type="button" class="btn btn-secondary" data-container="body" data-bs-toggle="popover" data-bs-placement="right"
        title="Titolo del Popover"
        data-bs-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.">
        Popover a sinistra
      </button>
    </div>
    <div class="col-12 col-md-4 offset-md-4">
      <button type="button" class="btn btn-secondary" data-container="body" data-bs-toggle="popover" data-bs-placement="left"
        title="Titolo del Popover"
        data-bs-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.">
        Popover a destra
      </button>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col-12 col-md-4 offset-md-4">
      <button type="button" class="btn btn-secondary" data-container="body" data-bs-toggle="popover" data-bs-placement="bottom"
        data-bs-html="true"
        title="Titolo del Popover"
        data-bs-content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.
               <a href="#" class="popover-inner-link">altro ...</a>'>
        Popover in basso
      </button>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}

#### <svg class="icon icon-warning icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-warning-circle"></use></svg> Posizione del Popover

Può essere **diversa** da quella impostata con l'attributo `data-bs-placement` qualora non ci sia **sufficiente spazio per disegnare il componente**.  
Nell'esempio qui sopra infatti, se si preme il tasto _Popover in alto_ e poi si fa scorrere la pagina verso il basso, si vedrà il popover spostarsi al di sotto del bottone.
{% endcapture %}{% include callout.html content=callout type="warning" %}

### Abilitazione

Per abilitare il funzionamento dell'esempio è stato inserito nella pagina il seguente codice:
{% highlight html %}
<script>
  document.addEventListener("DOMContentLoaded", function() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  })    
</script>
{% endhighlight %}


{% capture callout %}
#### {{ site.data.short.dt }}:
Per le altre modalità possibili sia di abilitazione dei popover sia di impostazione del tipo di comparsa e scomparsa di questi componenti, si veda la **[relativa pagina]({{ site.baseurl }}/docs/componenti/popover/)**
{% endcapture %}{% include callout.html content=callout type="info" %}

  
<script>
  document.addEventListener("DOMContentLoaded", function() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  })    
</script>
