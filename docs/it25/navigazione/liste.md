---
layout: it25_docs
title: Liste
group: navigazione
toc: true
---

Le Liste sono composte da voci attraverso le quali è possibile effettuare sessioni di navigazione all’interno di un’interfaccia.  
Troviamo spesso questo elemento all’interno dei menu verticali, ma possono essere presenti in diverse modalità, come ad esempio all’interno di menu fissi laterali.
{% include html_docs/liste/liste_base.html %}

---

### Liste base

##### Default
{% capture example %}
{% include html_docs/liste/lista_default.html %}
{% endcapture %}
{% include example.html content=example %}

##### Senza divider
{% capture example %}
{% include html_docs/liste/lista_senza_divider.html %}
{% endcapture %}
{% include example.html content=example %}

##### Con Header
{% capture example %}
{% include html_docs/liste/lista_con_header.html %}
{% endcapture %}
{% include example.html content=example %}

##### Nested
{% capture example %}
{% include html_docs/liste/lista_nested.html id_suff="25" %}
{% endcapture %}
{% include example.html content=example %}

--- 

### Lista con avatar

{% capture example %}

<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <a href="#" class="list-item">
        <div class="avatar size-lg"><svg class="icon align-top" aria-hidden="true"><use href="{{site_baseurl}}/dist/svg/sprites.svg#it-user"></use></svg></div>
        <div class="it-right-zone"><span>Lorem ipsum dolor</span></div>
      </a>
    </li>
    <li>
      <a href="#" class="list-item active">
        <div class="avatar size-lg"><svg class="icon align-top" aria-hidden="true"><use href="{{site_baseurl}}/dist/svg/sprites.svg#it-user"></use></svg></div>
        <div class="it-right-zone"><span>Lorem ipsum dolor</span></div>
      </a>
    </li>
    <li>
      <a href="#" class="list-item disabled">
        <div class="avatar size-lg"><svg class="icon align-top" aria-hidden="true"><use href="{{site_baseurl}}/dist/svg/sprites.svg#it-user"></use></svg></div>
        <div class="it-right-zone"><span>Lorem ipsum dolor</span></div>
      </a>
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
      <a href="#" class="list-item">
        <div class="it-rounded-icon">
          <svg class="icon  icon-primary">
            <use href="{{site_baseurl}}/dist/svg/sprites.svg#it-folder"></use>
          </svg>
        </div>
        <div class="it-right-zone"><span>Lorem ipsum dolor</span></div>
      </a>
    </li>
    <li>
      <a href="#" class="list-item active">
        <div class="it-rounded-icon">
          <svg class="icon  icon-primary">
            <use href="{{site_baseurl}}/dist/svg/sprites.svg#it-folder"></use>
          </svg>
        </div>
        <div class="it-right-zone"><span>Lorem ipsum dolor</span></div>
      </a>
    </li>
    <li>
      <a href="#" class="list-item disabled">
        <div class="it-rounded-icon">
          <svg class="icon  icon-primary">
            <use href="{{site_baseurl}}/dist/svg/sprites.svg#it-folder"></use>
          </svg>
        </div>
        <div class="it-right-zone"><span>Lorem ipsum dolor</span></div>
      </a>
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
      <a href="#" class="list-item active">
        <div class="it-right-zone">
          <span class="text">Lorem ipsum dolor</span>
          <svg class="icon">
            <use href="{{site_baseurl}}/dist/svg/sprites.svg#it-more-actions"></use>
          </svg>
        </div>
      </a>
    </li>
    <li>
      <a href="#" class="list-item disabled">
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
