---
layout: it25_docs
title: Tab bar
group: call-to-action
toc: yes
---


Le tre tab bar di esempio mostrate nelle *{{ site.data.short.rl-guide }}* sono riprodotte qui sotto.

Per i dettagli sulla costruzione e il funzionamento delle tab bar (soprattutto per quanto riguarda l'**accessibilità**) si veda la **[documentazione di riferimento]({{ site.baseurl }}/docs/componenti/tab/)**.

{% capture callout %}
####  <svg class="icon icon-danger icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close-circle"></use></svg> Sfondo scuro
Le tab bar con sfondo scuro **NON VANNO MAI UTILIZZATE**.    
Quindi la classe `nav-dark` non deve mai essere usata.
{% endcapture %}{% include callout.html content=callout type="danger" %}


## Solo testo

{% capture example %}
<ul class="nav nav-tabs">
  <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
  <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Label</a></li>
</ul>
{% endcapture %}{% include example.html content=example %}


## Solo icone

{% capture example %}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link" href="#">
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg>
      <span class="sr-only">Label</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-pa"></use></svg>
      <span class="sr-only">Label</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#">
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-comment"></use></svg>
      <span class="sr-only">Label</span>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1">
      <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-copy"></use></svg>
      <span class="sr-only">Label</span>
    </a>
  </li>
</ul>
{% endcapture %}{% include example.html content=example %}


## Testo e Icone
Le *{{ site.data.short.rl-guide }}* prevedono che l'icona sia posizionata a destra del testo, cosa non prevista da boostrap-italia.  
Per distanziare correttamente l'icona dal testo è necessario specificare la classse `icon-right` sul tag `ul` che contiene i tab.

{% capture example %}
<ul class="nav nav-tabs nav-tabs-icon-text icon-right">
  <li class="nav-item">
    <a class="nav-link" href="#">
      Label
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-star-outline"></use></svg>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
      Label
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-pa"></use></svg>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#">
      Label
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-comment"></use></svg>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1">
      Label
      <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-copy"></use></svg>
    </a>
  </li>
</ul>
{% endcapture %}{% include example.html content=example %}


{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della Documentazione Tecnica:
- **[Tab]({{ site.baseurl }}/docs/componenti/tab/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
