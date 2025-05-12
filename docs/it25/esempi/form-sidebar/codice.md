---
layout: it25_docs
group: esempi
title: Codice Sidebar
redirect_from: 'it25/esempi/'
toc: true
--- 

## Struttura della pagina
{% raw %}
```
<header>
{% include html_docs/header/topbar_dropdown.html %}
{% include html_docs/header/header_sidebar.html %}
</header>

<main>
  <div class="container-fluid">
    <div class="row flex-xl-nowrap">
      <div class="col-12 col-md-3 col-xl-2 it25-sidebar">
      {% include html_docs/menu-verticale/menu-verticale-annidato.html %}
      </div>
      <div class="col-12 col-md-9">
        <form class="my-5 px-5" id="justValidate" action="index.html" method="post">
          {% include esempi-lombardia/account_posta.html %}
          {% include esempi-lombardia/indirizzo.html %}
          {% include esempi-lombardia/datepickers.html %}
          {% include esempi-lombardia/radiobuttons.html %}
          {% include esempi-lombardia/checkboxes.html %}
          {% include esempi-lombardia/toggles.html %}
    <!-- *****************************************************************************************************+ -->
          <div class="row">
            <div class="col-12">
              <div class="float-end">
                <button type="button" class="btn btn-outline-primary">Annulla</button>
                <button type="submit" class="btn btn-primary">Invio</button>
              </div>
            </div>
          </div>
    <!-- *****************************************************************************************************+ -->
        </form>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div aria-live="polite" id="errorMsgContainer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> <!-- end container -->
</main>
{% include html_docs/footer/footer.html %} 
```
{% endraw %}

Il tag `<header>` contiene solo la *barra istituzionale* composta da:
* *topbar*
* **header_sidebar**  
  descritta più sotto.

  
Nel tag `<main>`, all'interno del `<div class="container-fluid">`, è presente:
* `<div class="row flex-xl-nowrap">`  
  una *riga contenitore* che mantiene affiancate sidebar e parte destra del *main*.  
  Questa a sua volta contiene:
  * `<div class="col-12 col-md-3 col-xl-2 it25-sidebar">`  
    `{ include ... menu-verticale-annidato.html }`  
    `</div>`  
  la parte sinistra con la *sidebar* che occupa 3 colonne su schermi medi e grandi e solo 2 sugli *xl*.  
  Il corpo del menu è inserito direttamente nel *div*, cui però **va aggiunta la classe**: `it25-sidebar`
  * `<div class="col-12 col-md-9">`  
  la parte destra contenente il form


---

## header_sidebar

{% highlight html %}
  {% include html_docs/header/header_sidebar.html %}
{% endhighlight %}


Il `<button>` con `id="btn-hamburger"` deve essere visibile solo sugli schermi di dimensione piccola,  
quindi è **necessario specificare**: `class="btn btn-xs d-md-none"`  
(`d-md-none` determina infatti il *display: no* per gli schermi di dimensione da media in su).

Non è presente il bottone di chiusura che compare automaticamente in alto a destra nel menù che si sovrappone allo schermo.

Fondamentali per il funzionamento sono:
* `data-bs-toggle="collapse"`  
  che apre il menù da sinistra verso destra coprendo l'intero schermo
* `data-bs-target="#it25-main-nav"`  
  che collega il bottone al *tag* contenente il corpo del menù.

  
---

## menu-verticale-annidato

Il menù, a differenza che nel caso del menù verticale, può essere inserito direttamente nel *div* della parte sinistra, con l'aggiunta della sola classe: `it25-sidebar`

{% highlight html %}
  {% include html_docs/menu-verticale/menu-verticale-annidato.html %} 
{% endhighlight %}
