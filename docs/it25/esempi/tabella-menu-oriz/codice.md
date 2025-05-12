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
<header>
{% include html_docs/header/topbar_base.html %}
{% include html_docs/header/header_menu-oriz.html %}
{% include esempi-lombardia/menu_orizzontale.html %}
</header>

<main>
{% include esempi-lombardia/filtri_tabella.html %}
{% include esempi-lombardia/tabella.html %}
{% include esempi-lombardia/paginazione.html %}
</main>

{% include html_docs/footer/footer_minimo.html %}
```
{% endraw %}


La struttura in questo caso è molto semplice:

Il tag `<header>` contienela *barra istituzionale* composta da:
* *topbar*
* **header_menu-oriz**  
  descritta più sotto.
* il *menu_orizzontale*
  
Il tag `<main>` contiene semplicemente tutti gli elementi della parte centrale della pagina.

---

### header_menu-oriz

{% highlight html %}
  {% include html_docs/header/header_menu-oriz.html %}
{% endhighlight %}
