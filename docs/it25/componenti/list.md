---
layout: it25_docs
title: List
group: componenti
toc: true
---

Le Liste sono composte da voci attraverso le quali è possibile effettuare sessioni di navigazione all’interno di un’interfaccia.  
Troviamo spesso questo elemento all’interno dei menu verticali, ma possono essere presenti in diverse modalità, come ad esempio all’interno di menu fissi laterali.


## Lista link testuali

### Semplice

{% comment %}Example name: IT25 Lista item testuali{% endcomment %}
{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <div class="list-item">
        <div class="it-right-zone">
          <span class="text">Testo</span>
        </div>
      </div>
    </li>
    <li>
      <a href="#" class="list-item">
        <div class="it-right-zone">
          <span class="text">Link</span>
        </div>
      </a>
    </li>
    <li>
      <div class="list-item">
        <div class="it-right-zone">
          <span class="text">Testo</span>
        </div>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}


### Lista con avatar

{% comment %}Example name: Base, con avatar{% endcomment %}
{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <div class="list-item">
        <div class="avatar size-lg">
          <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri">
        </div>
        <div class="it-right-zone">
          <span class="text">Testo</span>
        </div>
      </div>
    </li>
    <li>
      <a href="#" class="list-item">
        <div class="avatar size-lg">
          <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri">
        </div>
        <div class="it-right-zone">
          <span class="text">Link</span>
        </div>
      </a>
    </li>
    <li>
      <div class="list-item">
        <div class="avatar size-lg">
          <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri">
        </div>
        <div class="it-right-zone">
          <span class="text">Testo</span>
        </div>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Lista con icona

L'elemento `.it-rounded-icon` con all'interno la relativa icona, precede l'elemento `.it-right-zone` che contiene il testo.

{% comment %}Example name: IT25 Base, con icona{% endcomment %}
{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <div class="list-item">
        <div class="it-rounded-icon">
          <svg class="icon">
            <title>Cartella</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-folder"></use>
          </svg>
        </div>
        <div class="it-right-zone">
          <span class="text">Testo</span>
        </div>
      </div>
    </li>
    <li>
      <a href="#" class="list-item">
        <div class="it-rounded-icon">
          <svg class="icon">
            <title>Cartella</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-folder"></use>
          </svg>
        </div>
        <div class="it-right-zone">
          <span class="text">Link</span>
        </div>
      </a>
    </li>
    <li>
      <div class="list-item">
        <div class="it-rounded-icon">
          <svg class="icon">
            <title>Cartella</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-folder"></use>
          </svg>
        </div>
        <div class="it-right-zone">
          <span class="text">Testo</span>
        </div>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

### Lista con azioni

L'elemento `.icon` con all'interno la relativa icona segue l'elemento `.text` che contiene il testo.

{% comment %}Example name: IT25 Azioni, con freccia{% endcomment %}
{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <a href="#" class="list-item">
        <div class="it-right-zone">
          <span class="text">Link</span>
          <svg class="icon">
            <title>Freccia destra</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
          </svg>
        </div>
      </a>
    </li>
    <li>
      <a href="#" class="list-item">
        <div class="it-right-zone">
          <span class="text">Link</span>
          <svg class="icon">
            <title>Freccia destra</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
          </svg>
        </div>
      </a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}

#### con azioni multiple

L'elemento `.it-multiple` con all'interno le relative icone, segue l'elemento `.text`.

{% comment %}Example name: IT25 Azioni, multiple{% endcomment %}
{% capture example %}
<div class="it-list-wrapper">
  <ul class="it-list">
    <li>
      <div class="list-item">
        <div class="it-right-zone">
          <span class="text">Testo</span>
          <span class="it-multiple">
            <a href="#" aria-label="Testo - Azione 1">
              <svg class="icon">
                <title>Modifica</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pencil"></use>
              </svg>
            </a>
            <a href="#" aria-label="Testo - Azione 2">
              <svg class="icon">
                <title>Copia</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-copy"></use>
              </svg>
            </a>
            <a href="#" aria-label="Testo - Azione 3">
              <svg class="icon">
                <title>Elimina</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-delete"></use>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </li>
    <li>
      <div class="list-item">
        <div class="it-right-zone">
          <a href="#">
            <span class="text">Link</span>
          </a>
          <span class="it-multiple">
            <a href="#" aria-label="Link - Azione 1">
              <svg class="icon">
                <title>Modifica</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pencil"></use>
              </svg>
            </a>
            <a href="#" aria-label="Link - Azione 2">
              <svg class="icon">
                <title>Copia</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-copy"></use>
              </svg>
            </a>
            <a href="#" aria-label="Link - Azione 3">
              <svg class="icon">
                <title>Elimina</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-delete"></use>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </li>
    <li>
      <div class="list-item" href="#">
        <div class="it-right-zone">
          <a href="#">
            <span class="text">Link</span>
          </a>
          <span class="it-multiple">
            <a href="#" aria-label="Link - Azione 1">
              <svg class="icon">
                <title>Modifica</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pencil"></use>
              </svg>
            </a>
            <a href="#" aria-label="Link - Azione 2">
              <svg class="icon">
                <title>Copia</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-copy"></use>
              </svg>
            </a>
            <a href="#" aria-label="Link - Azione 3">
              <svg class="icon">
                <title>Elimina</title>
                <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-delete"></use>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}



## Link list

### Semplice
{% comment %}Example name: IT25 Linklist default{% endcomment %}
{% capture example %}
<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item" href="#"><span>Link lista 1</span></a>
    </li>
    <li>
      <a class="list-item" href="#"><span>Link lista 2</span></a>
    </li>
   <li>
      <a class="list-item" href="#"><span>Link lista 3</span></a>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}


### Annidata
{% comment %}Example name: IT25 Linklist annidata{% endcomment %}
{% capture example %}
<div class="link-list-wrapper">
  <ul class="link-list">
    <li>
      <a class="list-item large icon-right" href="#collapseOne" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseOne">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item">Link lista 1</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
        </span>
      </a>
      <ul class="link-sublist collapse" id="collapseOne">
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
      </ul>
    </li>
    <li>
      <a class="list-item large icon-right" href="#collapseTwo" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseTwo">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item">Link lista 2</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
        </span>
      </a>
      <ul class="link-sublist collapse" id="collapseTwo">
        <li><a class="list-item" href="#"><span>Link lista 2</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 2</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 2</span></a>
        </li>
      </ul>
    </li>
    <li>
      <a class="list-item large icon-right" href="#collapseThree" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseThree">
        <span class="list-item-title-icon-wrapper">
          <span class="list-item">Link lista 3</span>
          <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
        </span>
      </a>
      <ul class="link-sublist collapse" id="collapseThree">
        <li><a class="list-item" href="#"><span>Link lista 3</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 3</span></a>
        </li>
        <li><a class="list-item" href="#"><span>Link lista 3</span></a>
        </li>
      </ul>
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}



### Descrittiva

Ogni elemento di una lista di link può avere un'icona (a destra o sinistra del testo) ed un abstract.

Per includere un'icona bisogna aggiungere al tag `<a>` una delle seguenti classi:

- `icon-right`: se si vuole posizionare l'icona a destra del testo
- `icon-left`: se si vuole posizionare l'icona a sinistra del testo

All'interno del tag `<span class="list-item-title-icon-wrapper">` subito dopo lo `<span class="list-item-title">` contenente il testo,  è possibile inserire [l'icona necessaria]({{ site.baseurl }}/docs/utilities/icone/).

{% comment %}Example name: Per menu, multilinea con icona{% endcomment %}
{% capture example %}
<div class="link-list-wrapper multiline">
  <ul class="link-list">
    <li>
      <a class="list-item icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <h4 class="list-item-title fw-normal">Link lista 1</h4>
          <svg class="icon icon-primary">
            <title>Vai al link</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
          </svg>
        </span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
      </a>
    </li>
    <li>
      <span class="divider" role="separator"></span>
    </li>
    <li>
      <a class="list-item icon-right" href="#">
        <span class="list-item-title-icon-wrapper">
          <h4 class="list-item-title fw-normal">Link lista 2</h4>
          <svg class="icon icon-primary">
            <title>Vai al link</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
          </svg>
        </span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
      </a>
    </li>
    <li><span class="divider"></span>
    </li>
    <li>
      <a class="list-item disabled icon-right" href="#" aria-disabled="true">
        <span class="list-item-title-icon-wrapper">
          <h4 class="list-item-title fw-normal">Link lista 3 disabilitato</h4>
          <svg class="icon icon-primary">
            <title>Vai al link</title>
            <use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use>
          </svg>
        </span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
      </a>
    </li>
    <li>
      <span class="divider"></span> 
    </li>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}
