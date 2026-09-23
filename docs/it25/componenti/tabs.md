---
layout: it25_docs
title: Tabs
group: componenti
toc: false
---

La **Tab bar** organizza e permette la navigazione tra gruppi di contenuti che sono tra loro correlati ed allo **stesso livello di gerarchia**.

Ogni tab dovrebbe mostrare un contenuto **distinto dalle altre**.  
Le tab **non** devono essere usate per **dividere un contenuto che va letto in un dato ordine**.

Le **label** delle tab devono essere **corte e non abbreviate**, a meno che non sia strettamente necessario.  
Ogni bar deve contenere tab **dello stesso tipo**: non mescolare tab con icona e tab con testo.

### Label testuale
{% comment %}Example name: IT25 Tabs label testo {% endcomment %}
{% capture example %}
<ul class="nav nav-tabs auto">
  <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
  <li class="nav-item"><a class="nav-link active" href="#">Attivo</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Disabilitato</a></li>
</ul>
{% endcapture %}{% include example.html content=example class="no_toc_section" %}

#### sfondo colore primario
{% comment %}Example name: IT25 Tabs label testo dark {% endcomment %}
{% capture example %}
<div class="bg-primary p-3">
  <ul class="nav nav-tabs auto nav-dark">
    <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
    <li class="nav-item"><a class="nav-link active" href="#">Attivo</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
    <li class="nav-item"><a class="nav-link disabled" href="#">Disabilitato</a></li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example class="no_toc_section" %}


### Icona
{% comment %}Example name: IT25 Tabs icona {% endcomment %}
{% capture example %}
<ul class="nav nav-tabs auto">
  <li class="nav-item">
    <a class="nav-link" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
      <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
      <span class="visually-hidden">Breve testo esplicativo</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
      <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pa"></use></svg>
      <span class="visually-hidden">Breve testo esplicativo</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
      <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
      <span class="visually-hidden">Breve testo esplicativo</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label" tabindex="-1">
      <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-copy"></use></svg>
      <span class="visually-hidden">Breve testo esplicativo</span>
    </a>
  </li>
</ul>
{% endcapture %}{% include example.html content=example class="no_toc_section" %}

#### sfondo colore primario
{% comment %}Example name: IT25 Tabs label testo dark {% endcomment %}
{% capture example %}
<div class="bg-primary p-3">
  <ul class="nav nav-tabs auto nav-dark">
    <li class="nav-item">
      <a class="nav-link" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        <span class="visually-hidden">Breve testo esplicativo</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pa"></use></svg>
        <span class="visually-hidden">Breve testo esplicativo</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
        <span class="visually-hidden">Breve testo esplicativo</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label" tabindex="-1">
        <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-copy"></use></svg>
        <span class="visually-hidden">Breve testo esplicativo</span>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example class="no_toc_section" %}




{% capture callout %}
#### Accessibilità
Nel caso di di Tab bar con solo icone è **obbligatorio fornire una descrizione** in uno span di classe `visually-hidden` o con un testo alternativo, in modo che possa essere utilizzato anche da i non vedenti.  
Inoltre, poichè il significato dell'icona non sempre risulta chiaro per gli utenti anche per gli utenti normodotati, è fortemente consigliato aggiungere un **[tooltip]({{ site.baseurl }}/docs/it25/componenti/tooltip/)** per aiutare la comprensione.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% capture example %}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
      <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        <span class="visually-hidden">Breve testo esplicativo</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
      <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pa"></use></svg>
        <span class="visually-hidden">Breve testo esplicativo</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
      <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
        <span class="visually-hidden">Breve testo esplicativo</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label" tabindex="-1">
      <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-copy"></use></svg>
      <span class="visually-hidden">Breve testo esplicativo</span>
    </a>
  </li>
</ul>
{% endcapture %}{% include example.html content=example %}

### Abilitazione tooltip

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


<script>
  document.addEventListener("DOMContentLoaded", function() { 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })    
</script>

