---
layout: it25_docs
title: Tooltip
group: inserimento
toc: true
---

Il **Tooltip** è una componente che viene richiamata al passaggio del mouse (hover) per fornire informazioni su un determinato elemento o processo. I tooltip - così come i _popover (vedere sotto)_ - possono essere inseriti all’interno di modali secondo necessità. Quando le modali vengono chiuse, anche le descrizioni comandi e i popover all’interno vengono automaticamente ignorati.
Nello specifico, In base alla dimensione e alla composizione del testo un tooltip può essere composto da una o più righe. Per la spiegazione di **processi** si consiglia di utilizzare un tooltip con **area più ampia** in modo da poter fornire tutte le informazioni necessarie.

<div class="bd-example">
<p>Testo Base <sup><svg class="icon sup-sub" data-bs-toggle="tooltip" data-bs-placement="top"
              title="Breve testo esplicativo"><use href="/dist/svg/sprites.svg#it-help-circle"></use></svg></sup></p>
</div>

{% highlight html %}
<p>Testo Base <sup><svg class="icon sup-sub" data-bs-toggle="tooltip" data-bs-placement="top" title="Breve testo esplicativo"><use href="/dist/svg/sprites.svg#it-help-circle"></use></svg></sup></p>
{% endhighlight %}

### Posizionamento

{% capture example %}

<div class="container">
  <div class="row">
    <div class="col-12 col-md-4 offset-md-4">
      <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top"
              title="Breve testo esplicativo">Tooltip in alto
      </button>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col-12 col-md-4">
      <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="right"
              title="Breve testo esplicativo">Tooltip a sinistra
      </button>
    </div>
    <div class="col-12 col-md-4 offset-md-4">
      <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="left"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.">Tooltip a sinistra
      </button>
    </div>
  </div>
  <div class="row mt-4">
    <div class="col-12 col-md-4 offset-md-4">
      <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="bottom"
              title="Breve testo esplicativo">Tooltip in basso
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

#### <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti

Il contenuto di questa pagina si riferisce ai seguenti punti della {{ site.data.short.dt }}:

- **[Tooltip]({{ site.baseurl }}/docs/componenti/tooltip/)**
  {% endcapture %}{% include callout.html content=callout type="info" %}
