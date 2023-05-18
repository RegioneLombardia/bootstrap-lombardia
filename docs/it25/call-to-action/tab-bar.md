---
layout: it25_docs
title: Tab bar
group: call-to-action
toc: false
---

La **Tab bar** organizza e permette la navigazione tra gruppi di contenuti che sono tra loro correlati ed allo **stesso livello di gerarchia**.

Ogni tab dovrebbe mostrare un contenuto **distinto dalle altre**. A tal proposito, le tab **non devono essere usate per spezzare un contenuto** che ha bisogno di essere letto in un dato ordine.

Le label delle tab devono essere **corte e non abbreviate**, a meno che non sia strettamente necessario.  
Le tab con solo testo, con icona e con testo e icona non vanno mai mescolate.  
Ogni bar deve contenere tab **dello stesso tipo**.


<div class="bd-example">
{% include html_docs/tabs/tab-bar.html %}
</div>


{% highlight html %}
<ul class="nav nav-tabs nav-tabs-icon-text icon-right">
  <li class="nav-item">
    <a class="nav-link" href="#">
      Label
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
      Label
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pa"></use></svg>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#">
      Label
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1">
      Label
      <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-copy"></use></svg>
    </a>
  </li>
</ul>
{% endhighlight %}

{% capture callout %}
#### Accessibilità
Nel caso di di Tab bar con solo icone è **obbligatorio fornire una descrizione** in uno span di classe `visually-hidden` o con un testo alternativo, in modo che possa essere utilizzato anche da i non vedenti.  
Inoltre, poichè il significato dell'icona non sempre risulta chiaro per gli utenti anche per gli utenti normodotati, è fortemente consigliato aggiungere un **[tooltip]({{ site.baseurl }}/docs/it25/inserimento/tooltip/)** per aiutare la comprensione.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% capture example %}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
        <span class="visually-hidden">Breve testo esplicativo</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pa"></use></svg>
        <span class="visually-hidden">Breve testo esplicativo</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
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

<script>
  document.addEventListener("DOMContentLoaded", function() { 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })    
</script>
