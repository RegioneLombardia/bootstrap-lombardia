---
layout: it25_docs
title: Megamenu
group: navigazione
toc: false
---

La Documentazione Tecnica mostra diverse tipologie di **[megamenu]({{ site.baseurl }}/docs/menu-di-navigazione/megamenu/)**.  


{% capture callout %}
####  <svg class="icon icon-success icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check-circle"></use></svg> Megamenu Classico
Si raccomanda di utilizzare questo componente nella forma più semplice e pulita, utilizzando il **[megamenu classico]({{ site.baseurl }}/docs/menu-di-navigazione/megamenu/#megamenu-classico)**, con o senza **[intestazione delle colonne]({{ site.baseurl }}/docs/menu-di-navigazione/megamenu/#classico-con-sezioni)**.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}

{% capture example %}
<div class="nav-item dropdown megamenu">
  <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
    <span>Megamenu</span>
    <svg class="icon icon-xs">
      <use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-expand"></use>
    </svg>
  </a>
  <div class="dropdown-menu">
    <div class="row">
      <div class="col-12 col-lg-4">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <h3 class="no_toc">Heading 1</h3>
            </li>
            <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
            <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
            <li><a class="list-item" href="#"><span>Link list 3 </span></a></li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <h3 class="no_toc">Heading 2</h3>
            </li>
            <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
            <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
            <li><a class="list-item" href="#"><span>Link list 3 </span></a></li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <h3 class="no_toc">Heading 3</h3>
            </li>
            <li><a class="list-item" href="#"><span>Link list 1 </span></a></li>
            <li><a class="list-item" href="#"><span>Link list 2 </span></a></li>
            <li><a class="list-item" href="#"><span>Link list 3</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}


{% capture callout %}
####  <svg class="icon icon-danger icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close-circle"></use></svg> Link more, call to action, immagini
**NON UTILIZZARE**:
- **link _more_**
- **call to action** sia in basso che a destra
- **immagini** inserite all'interno
{% endcapture %}{% include callout.html content=callout type="danger" %}


{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della Documentazione Tecnica:
- **[Megamenu]({{ site.baseurl }}/docs/menu-di-navigazione/megamenu/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
