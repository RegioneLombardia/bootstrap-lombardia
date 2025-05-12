---
layout: it25_docs
group: esempi
title: Codice Menù verticale
redirect_from: 'it25/esempi/'
toc: true
--- 

## Struttura della pagina
{% raw %}
```
<header>
  {% include html_docs/header/topbar_base.html %}
  {% include html_docs/header/header_menu-vert.html %}
  <div id="it25-menu-vert">
    {% include html_docs/menu-verticale/menu-verticale-annidato.html %}
  </div>
</header>

<main>
  <div class="container-fluid">
      <div class="col-12">
      {% include esempi-lombardia/filtri_tabella.html %}
      {% include esempi-lombardia/tabella.html %}
      {% include esempi-lombardia/paginazione.html %}
      </div>
    </div>
  </div>
</main>

{% include html_docs/footer/footer_minimo.html %}
```
{% endraw %}

Nel tag `<header>` sono inclusi:  
* la *barra istituzionale* (composta da **topbar_base** e **header_menu-vert**)
* l'intero corpo del **menu verticale**  
  a sua volta incluso nel `<div id="it25-menu-vert">`  
  **indispensabile per il funzionamento** del meccanismo di comparsa/scomparsa.

  
Nel tag `<main>` l'uso di:  
* `<div class="container-fluid">`
* `<div class="col-12">`

permette di utilizzare tutta la larghezza dello schermo.


---

## header_menu-vert

{% highlight html %}
 {% include html_docs/header/header_menu-vert.html %}
{% endhighlight %}


Il `<button>` con `id="btn-hamburger"` è sempre visibile, indipendentemente dalla dimensione dello schermo.

Fondamentali per il funzionamento sono:
* `data-bs-toggle="collapse"`  
  che determina l'apertura dall'alto verso il basso del menù
* `data-bs-target="#it25-main-nav"`  
  che collega il bottone al *tag* contenente il corpo del menù.


### attivazione
  
Per attivare il funzionamento del menu verticale, è **necessario invocare la funzione**:
```
bootstrap.it25Header()
```
  
---
  
## menu-verticale-annidato

Il menù deve essere inserito in un tag con queste caratteristiche:  
`<nav class="collapse it25-vertical-menu" id="it25-main-nav">`

{% highlight html %}
  {% include html_docs/menu-verticale/menu-verticale-annidato.html %} 
{% endhighlight %}
