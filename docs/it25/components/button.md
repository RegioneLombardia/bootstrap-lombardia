---
layout: it25_docs
title: Button
group: components
toc: yes
---


{% comment %}Example name: IT25 Button{% endcomment %}
{% capture example %}
<div class="d-flex justify-content-center">
  <button class="btn btn-primary btn-icon">
    <span>BUTTON</span>
    <svg class="icon icon-white ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
  </button>
</div>
{% endcapture %}{% include example.html content=example %}


### Dimensioni
Il pulsante prevede due dimensioni principali e la sua lunghezza dipende dai caratteri del testo.

#### Large
{% comment %}Example name: IT25 Button Large{% endcomment %}
{% capture example %}
<button class="btn btn-lg btn-primary btn-icon">
  <span>BUTTON</span>
  <svg class="icon icon-white ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
</button>
{% endcapture %}{% include example.html content=example %}

#### Small
{% comment %}Example name: IT25 Button Small{% endcomment %}
{% capture example %}
<button class="btn btn-primary btn-icon align-middle">
  <span>BUTTON</span>
  <svg class="icon icon-white ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
</button>
{% endcapture %}{% include example.html content=example %}

Per ottenere pulsanti di dimensione più grande è sufficiente utilizzare la classe `.btn-lg`.  
La dimensione `.btn-sm` coincide con la dimensione base, per cui non è necessario specificarla.


### Spacing

Sia in asse verticale che in asse orizzontale la distanza base da impostare tra i pulsanti, a prescindere dalla dimensione, è di 24px.

#### orizzontale
{% comment %}Example name: IT25 Button Horizontal Space{% endcomment %}
{% capture example %}
<div style="display: inline-flex">
<button class="btn btn-primary btn-icon me-4">
  <span>BUTTON</span>
  <svg class="icon icon-white ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
</button>
<button class="btn btn-primary btn-icon">
  <span>BUTTON</span>
  <svg class="icon icon-white ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
</button>
</div>
{% endcapture %}{% include example.html content=example %}

#### verticale
{% comment %}Example name: IT25 Button Vertical Space{% endcomment %}
{% capture example %}
<button class="btn btn-primary btn-icon mb-4">
  <span>BUTTON</span>
  <svg class="icon icon-white ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
</button>
<br />
<button class="btn btn-primary btn-icon">
  <span>BUTTON</span>
  <svg class="icon icon-white ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
</button>
{% endcapture %}{% include example.html content=example %}

**Nota per gli sviluppatori:**  
Le [classi spaziatrici]({{ site.baseurl }}/docs/organizzare-gli-spazi/spaziature/) `me-4` e `mb-4` corrispondono a `1.5rem` che, data la dimensione carattere di default (`16px`), corrispondono ai `24px` specificati dal design system.  
Naturalmente la distanza ottenuta può variare a seconda sia della dimensione carattere impostata dall'utente sul browser, sia di `column-gap` e `row-gap` dell'elemento contenitore.  
Nell'esempio della *spaziatura orizzontale*, i bottoni sono stati inseriti in un `div` la cui proprietà `display` è stata impostata a `inline-flex`.  
Lasciando il valore di default, che per il tag `div` è `block` con `column-gap` di `4px`, la distanza risultante sarebbe `28px`.

### Tipologia e stati

Il pulsante prevede due tipologie: primario e secondario, che si invertono a seconda dello sfondo *light* (di default) o *dark*.

#### sfondo light
{% comment %}Example name: IT25 Button background white{% endcomment %}
{% capture example %}
<div style="display: inline-flex">
  <button class="btn btn-primary btn-icon me-4">
    <span>BUTTON</span>
    <svg class="icon icon-white ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
  </button>
  <button class="btn btn-outline-primary btn-icon">
    <span>BUTTON</span>
    <svg class="icon ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
  </button>
</div>
{% endcapture %}{% include example.html content=example %}

#### sfondo primary
{% comment %}Example name: IT25 Button background primary{% endcomment %}
{% capture example %}
<div class="bg-primary p-3">
  <button class="btn btn-outline-white btn-icon me-4">
    <span>BUTTON</span>
    <svg class="icon icon-white ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
  </button>
  <button class="btn  bg-white btn-icon">
    <span>BUTTON</span>
    <svg class="icon icon-primary ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
  </button>
</div>
{% endcapture %}{% include example.html content=example %}


#### sfondo dark
{% comment %}Example name: IT25 Button background dark{% endcomment %}
{% capture example %}
<div class="bg-dark p-3">
  <button class="btn btn-primary btn-icon me-4">
    <span>BUTTON</span>
    <svg class="icon icon-primary ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
  </button>
  <button class="btn btn-outline-primary btn-icon">
    <span>BUTTON</span>
    <svg class="icon icon-white ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
  </button>
</div>
{% endcapture %}{% include example.html content=example %}


#### stato disabled
{% comment %}Example name: IT25 Button disabeld{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-lg-4">
    <div class="p-3">
      <button class="btn btn-primary btn-icon me-4" disabled>
        <span>BUTTON</span>
        <svg class="icon icon-white ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
      </button>
      <button class="btn btn-outline-primary btn-icon" disabled>
        <span>BUTTON</span>
        <svg class="icon ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
      </button>
    </div>
  </div>
  <div class="col-12 col-lg-4">
    <div class="bg-primary p-3">
      <button class="btn btn-outline-white btn-icon me-4" disabled>
        <span>BUTTON</span>
        <svg class="icon icon-white ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
      </button>
      <button class="btn btn-outline-primary bg-white btn-icon" disabled>
        <span>BUTTON</span>
        <svg class="icon icon-primary ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
      </button>
    </div>
  </div>
  <div class="col-12 col-lg-4">
    <div class="bg-dark p-3">
      <button class="btn btn-primary btn-icon me-4" disabled>
        <span>BUTTON</span>
        <svg class="icon icon-primary ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
      </button>
      <button class="btn btn-outline-primary btn-icon" disabled>
        <span>BUTTON</span>
        <svg class="icon icon-white ms-2"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
      </button>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


## Circle button
Il pulsante **large** va usato principalmente per la navigazione in pagina (es. *Back to top*), quello **small** per slider e azioni.

#### Large
{% comment %}Example name: IT25 Button Circle Large{% endcomment %}
{% capture example %}
<button class="btn btn-lg btn-primary btn-icon btn-circle me-4" aria-label="torna indietro">
  <svg class="icon icon-white"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-left"></use></svg>
</button>
<button class="btn btn-lg btn-outline-primary btn-icon btn-circle me-4" aria-label="vai avantii">
  <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
</button>
<button class="btn btn-lg btn-primary btn-icon btn-circle me-4" disabled aria-label="torna su">
  <svg class="icon icon-white"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg>
</button>
<button class="btn btn-lg btn-outline-primary btn-icon btn-circle" disabled aria-label="vai in giù">
  <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-down"></use></svg>
</button>
{% endcapture %}{% include example.html content=example %}

#### Small
{% comment %}Example name: IT25 Button Circle Small{% endcomment %}
{% capture example %}
<button class="btn btn-primary btn-icon btn-circle me-4" aria-label="vai avantii">
  <svg class="icon icon-white"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-left"></use></svg>
</button>
<button class="btn btn-outline-primary btn-icon btn-circle me-4" aria-label="vai avantii">
  <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
</button>
<button class="btn btn-primary btn-icon btn-circle me-4" disabled aria-label="vai avantii">
  <svg class="icon icon-white"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg>
</button>
<button class="btn lg btn-outline-primary btn-icon btn-circle" disabled aria-label="vai avantii">
  <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-down"></use></svg>
</button>
{% endcapture %}{% include example.html content=example %}

#### Sfondi
{% comment %}Example name: IT25 Button Circle Dark{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-lg-6">
    <div class="bg-primary p-3">
      <button class="btn btn-lg btn-outline-white btn-icon btn-circle me-4" aria-label="vai avantii">
        <svg class="icon icon-white"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-left"></use></svg>
      </button>
      <button class="btn btn-lg btn-outline-primary bg-white btn-icon btn-circle me-4" aria-label="vai avantii">
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
      </button>
      <button class="btn btn-lg btn-outline-white btn-icon btn-circle me-4" disabled aria-label="vai avantii">
        <svg class="icon icon-white"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg>
      </button>
      <button class="btn btn-lg btn-outline-primary bg-white btn-icon btn-circle" disabled aria-label="vai avantii">
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-down"></use></svg>
      </button>
    </div>
  </div>
  <div class="col-12 col-lg-6">
    <div class="bg-dark p-3">
      <button class="btn btn-lg btn-primary btn-icon btn-circle me-4" aria-label="vai avantii">
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-left"></use></svg>
      </button>
      <button class="btn btn-lg btn-outline-primary btn-icon btn-circle me-4" aria-label="vai avantii">
        <svg class="icon icon-white"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-right"></use></svg>
      </button>
      <button class="btn btn-lg btn-primary btn-icon btn-circle me-4" disabled aria-label="vai avantii">
        <svg class="icon icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-up"></use></svg>
      </button>
      <button class="btn btn-lg btn-outline-primary btn-icon btn-circle" disabled aria-label="vai avantii">
        <svg class="icon icon-white"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-arrow-down"></use></svg>
      </button>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}
## {{ site.data.short.dt }}
Per ulteriori dettagli tecnici sui bottoni si veda la voce:  
**[{{ site.data.short.link }}Buttons]({{ site.baseurl }}/docs/componenti/buttons/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
