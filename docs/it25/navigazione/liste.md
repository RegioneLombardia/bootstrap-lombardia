---
layout: it25_docs
title: Liste
group: navigazione
toc: true
---

Le Liste sono composte da voci attraverso le quali è possibile effettuare sessioni di navigazione all’interno di un’interfaccia. Troviamo spesso questo elemento all’interno dei menu verticali, ma possono essere presenti in diverse modalità, come ad esempio all’interno di menu fissi laterali.

{% capture example %}
{% include html_docs/liste/liste_base.html %}
{% endcapture %}
{% include example.html content=example %}

### Lista con avatar

{% capture example %}

<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <div class="list-item">
        <div class="avatar size-lg"> <svg class="icon align-top" aria-hidden="true"><use href="{{site_baseurl}}/dist/svg/sprites.svg#it-user"></use></svg></div>
        <div class="it-right-zone"><span class="text">Lorem ipsum dolor</span>
        </div>
      </div>
    </li>
       <li>
      <div class="list-item">
        <div class="avatar size-lg"> <svg class="icon align-top" aria-hidden="true"><use href="{{site_baseurl}}/dist/svg/sprites.svg#it-user"></use></svg></div>
        <div class="it-right-zone"><span class="text">Lorem ipsum dolor</span>
        </div>
      </div>
    </li>
       <li>
      <div class="list-item">
        <div class="avatar size-lg"> <svg class="icon align-top" aria-hidden="true"><use href="{{site_baseurl}}/dist/svg/sprites.svg#it-user"></use></svg></div>
        <div class="it-right-zone"><span class="text">Lorem ipsum dolor</span>
        </div>
      </div>
    </li>
  </ul>
</div>

{% endcapture %}
{% include example.html content=example %}

### Lista con icone

{% capture example %}

<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <div class="list-item">
        <div class="it-rounded-icon">
          <svg class="icon  icon-primary">
            <use href="{{site_baseurl}}/dist/svg/sprites.svg#it-folder"></use>
          </svg>
        </div>
        <div class="it-right-zone"><span class="text">Lorem ipsum dolor</span>
        </div>
      </div>
    </li>
        <li>
      <div class="list-item">
        <div class="it-rounded-icon">
          <svg class="icon  icon-primary">
            <use href="{{site_baseurl}}/dist/svg/sprites.svg#it-folder"></use>
          </svg>
        </div>
        <div class="it-right-zone"><span class="text">Lorem ipsum dolor</span>
        </div>
      </div>
    </li>
        <li>
      <div class="list-item">
        <div class="it-rounded-icon">
          <svg class="icon  icon-primary">
            <use href="{{site_baseurl}}/dist/svg/sprites.svg#it-folder"></use>
          </svg>
        </div>
        <div class="it-right-zone"><span class="text">Lorem ipsum dolor</span>
        </div>
      </div>
    </li>
  </ul>
</div>

{% endcapture %}
{% include example.html content=example %}

### Lista con "more"

{% capture example %}

<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <a href="#" class="list-item" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div class="it-right-zone">
          <span class="text">Lorem ipsum dolor</span>
          <svg class="icon">
            <use href="{{site_baseurl}}/dist/svg/sprites.svg#it-more-actions"></use>
          </svg>
        </div>
      </a>
    </li>
    <li>
      <a href="#" class="list-item">
        <div class="it-right-zone">
          <span class="text">Lorem ipsum dolor</span>
          <svg class="icon">
            <use href="{{site_baseurl}}/dist/svg/sprites.svg#it-more-actions"></use>
          </svg>
        </div>
      </a>
    </li>
    <li>
      <a href="#" class="list-item">
        <div class="it-right-zone">
          <span class="text">Lorem ipsum dolor</span>
          <svg class="icon">
            <use href="{{site_baseurl}}/dist/svg/sprites.svg#it-more-actions"></use>
          </svg>
        </div>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}
{% include example.html content=example %}

<!--
Le _Linee Guida_ prevedono liste

- **[single line](https://italia.github.io/bootstrap-italia/docs/organizzare-i-contenuti/liste/#linea-singola)**
- **[multiline](https://italia.github.io/bootstrap-italia/docs/organizzare-i-contenuti/liste/#multiline-con-icona)**
- **[innestate](https://italia.github.io/bootstrap-italia/docs/organizzare-i-contenuti/liste/#liste-annidate)**

{% capture callout %}

#### <svg class="icon icon-danger icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close-circle"></use></svg> Liste con controlli

**NON UTILIZZARE** **[liste con controlli](https://italia.github.io/bootstrap-italia/docs/organizzare-i-contenuti/liste/#lista-con-controlli)**, comprese quelle con **switch** e con **checkbox**.
{% endcapture %}{% include callout.html content=callout type="danger" %}

{% capture callout %}

#### <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti

Il contenuto di questa pagina si riferisce ai seguenti punti della Documentazione Tecnica:

- **[Liste di link](https://italia.github.io/bootstrap-italia/docs/organizzare-i-contenuti/liste/#liste-per-men%C3%B9-di-navigazione)**
  {% endcapture %}{% include callout.html content=callout type="info" %} -->
