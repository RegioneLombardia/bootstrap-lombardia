---
layout: it25_docs
title: Tooltip
group: inserimento
toc: true
---

Il **Tooltip** è una componente che viene richiamata al passaggio del mouse (hover) per fornire informazioni su un determinato elemento o processo.

I tooltip - così come i _popover (vedere sotto)_ - possono essere inseriti all’interno di modali secondo necessità.  
Quando le modali vengono chiuse, anche le descrizioni comandi e i popover all’interno vengono automaticamente ignorati.

Nello specifico, In base alla dimensione e alla composizione del testo un tooltip può essere composto da una o più righe.  
Per la spiegazione di **processi** si consiglia di utilizzare un tooltip con **area più ampia** in modo da poter fornire tutte le informazioni necessarie.

{% capture example %}
<p>Testo Base
  <sup>
    <svg class="icon icon-xs icon-info align-top" data-bs-toggle="tooltip" data-bs-placement="top" title="Breve testo esplicativo">
      <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use>
    </svg>
  </sup>
</p>
{% endcapture %}{% include example.html content=example %}

---

### Posizionamento

Per il posizionamento è sufficiente impostare l'attributo `data-bs-placement` sul tag `svg`.

<div class="bd-example">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4">
        <p>Tooltip in alto
          <sup>
            <svg class="icon icon-xs icon-info align-top" data-bs-toggle="tooltip" data-bs-placement="top" title="Lorem ipsum dolor sit amet">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use>
            </svg>
          </sup>
        </p>
      </div>
      <div class="col-12 col-md-4">
        <p>Tooltip in basso
          <sup>
            <svg class="icon icon-xs icon-info align-top" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Lorem ipsum dolor sit amet">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use>
            </svg>
          </sup>
        </p>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12 col-md-4">
        <p>Tooltip a destra
          <sup>
            <svg class="icon icon-xs icon-info align-top" data-bs-toggle="tooltip" data-bs-placement="right" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use>
            </svg>
          </sup>
        </p>
      </div>
      <div class="col-12 col-md-4">
        <p>Tooltip a sinistra
          <sup>
            <svg class="icon icon-xs icon-info align-top" data-bs-toggle="tooltip" data-bs-placement="left" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
              <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use>
            </svg>
          </sup>
        </p>
      </div>
    </div>
  </div>
</div>
{% highlight html %}
<svg class="icon icon-xs icon-info align-top" data-bs-toggle="tooltip" data-bs-placement="top" title=". . .">
<svg class="icon icon-xs icon-info align-top" data-bs-toggle="tooltip" data-bs-placement="bottom" title=". . .">
<svg class="icon icon-xs icon-info align-top" data-bs-toggle="tooltip" data-bs-placement="left" title=". . .">
<svg class="icon icon-xs icon-info align-top" data-bs-toggle="tooltip" data-bs-placement="right" title=". . .">
{% endhighlight %}

---

### Abilitazione

Per abilitare il funzionamento dei tooltip, nella pagina deve essere inserito il seguente codice:

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


{% capture callout %}
#### {{ site.data.short.dt }}
Per le altre modalità possibili sia di abilitazione dei tooltip sia di impostazione del tipo di comparsa e scomparsa di questi componenti, si veda la **[relativa pagina]({{ site.baseurl }}/docs/componenti/tooltip/)**
{% endcapture %}{% include callout.html content=callout type="info" %}



<script>
  document.addEventListener("DOMContentLoaded", function() { 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })    
</script>
