---
layout: it25_docs
group: esempi
title: Codice Megamenù di Livello 1
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
   {% include html_docs/header/center_menu-vert.html %}
    <div id="it25-menu-mega">
      {% include html_docs/megamenu/header_megamenu.html %}
    </div>
</header>

<main>
 . . .
</main>

{% include html_docs/footer/footer.html %}
```
{% endraw %}

 
Pre la struttura della pagina si veda quella del [menù verticale]({{ site.baseurl }}/docs/it25/esempi/menu-vert/codice/), che è **identica**.  
L'unica differenza è l'**id** del **div contenitore** che è `id="it25-menu-mega"` invece di *"it25-menu-vert"*.


### attivazione
  
Allo stesso modo, per attivare il funzionamento del megamenu dei livello 1, è **necessario invocare la funzione**:
```
bootstrap.it25Header()
```

---
  
## header_megamenu

Come per il menù verticale, il megamenù deve essere inserito in un tag con queste caratteristiche:  
`<nav class="collapse it25-vertical-menu" id="it25-main-nav">`

{% highlight html %}
{% include html_docs/megamenu/header_megamenu.html %}
{% endhighlight %}




