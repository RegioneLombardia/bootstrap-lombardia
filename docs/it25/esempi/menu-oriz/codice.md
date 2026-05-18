---
layout: it25_docs
group: esempi
title: Codice Menù Orizzontale
redirect_from: 'it25/esempi/'
toc: true
--- 

## Struttura della pagina
{% raw %}
```
<header class="it-header-wrapper it-header-sticky"
  data-bs-position-type="fixed"
  data-bs-toggle="sticky"
  data-bs-target="#header-nav-wrapper"
  data-bs-sticky-class-name="is-sticky">
  {% include html_docs/header/topbar.html %}
  <div class="it-nav-wrapper">
    {% include html_docs/header/center_menu-oriz.html %}
    {% include html_docs/header/navbar_oriz.html %}
  </div>
</header>

<main>
  <div class="container-fluid">
    <div class="col-12">
    <h1>Tabella dati</h1>
    {% include esempi-lombardia/filtri_tabella.html %}
    {% include esempi-lombardia/tabella.html %}
    {% include esempi-lombardia/paginazione.html %}
    </div>
  </div>
</main>

{% include html_docs/footer/footer.html %}
```
{% endraw %}


Topbar e center-heade scompaiono allo scroll
Il logo o acronimo e nome dell'applicativo e l'eventuale pulsante di ricera vengono clonati sulla navbar 


Sul tag `<header>`
- la classe `it-header-sticky` innesca il comportamento dell'header allo scroll.
- i vari attributi `data-bs-` specificano le modalità del fissaggio della testata

La *barra istituzionale* è composta da tre parti:
* *topbar*
* *center_menu-oriz*
* *navbar_oriz*
  
Il tag `<main>` contiene semplicemente tutti gli elementi della parte centrale della pagina.

---

### header_menu-oriz

{% highlight html %}
  {% include html_docs/header/center_menu-oriz.html %}
{% endhighlight %}
