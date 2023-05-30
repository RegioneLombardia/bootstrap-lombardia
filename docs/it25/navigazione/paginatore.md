---
layout: it25_docs
title: Paginatore
group: navigazione
toc: true
---

Il **Paginatore** è una componente utile per indicare una serie di contenuti correlati tra **più pagine**.  
Tendenzialmente si trova nella parte in **basso a destra o al centro** della pagina.

<div class="container-fluid">
  <div class="row">
    <div class="col">
      <label class="my-3">Default</label>
      {% include html_docs/paginatore/paginatore.html %}
    </div>
    <div class="col">
      <label class="my-3">Variante con comando “more”</label>
      {% include html_docs/paginatore/paginatore.html more=true %}
    </div>
  </div>
  <div class="row">
    <div class="col">
      <label class="my-3">Variante con jump page</label>
      {% include html_docs/paginatore/paginatore.html jump=true %}
    </div>
    <div class="col">
      <label class="my-3">Variante semplificata</label>
       {% include html_docs/paginatore/paginatore_semplificato.html %}
    </div>
  </div>
</div>

### Default
{% capture example %}
{% include html_docs/paginatore/paginatore.html %}
{% endcapture %}
{% include example.html content=example %}

### Variante con "more"
<div class="bd-example">
{% include html_docs/paginatore/paginatore.html more=true id_suff="30" %}
</div>
{% highlight html %}
. . .
<li class="page-item"><a class="page-link" href="#">3</a></li>
<li class="page-item">
  <span class="page-link">...</span>
</li>
<li class="page-item"><a class="page-link" href="#">24</a></li>
. . .
{% endhighlight %}

### Variante con jump page
<div class="bd-example">
{% include html_docs/paginatore/paginatore.html jump=true id_suff="29" %}
</div>
{% highlight html %}
. . . 
        <svg class="icon icon-primary"><use href="{{site_baseurl}}/dist/svg/sprites.svg#it-chevron-right"></use></svg>
      </a>
    </li>
  </ul>
  <div class="form-group">
    <input type="text" class="form-control" id="jumpToPage28" maxlength="3" />
    <label for="jumpToPage28"><span aria-hidden="true">Vai a ...</span><span class="visually-hidden">Indica la pagina desiderata</span></label>
  </div>
</nav> 
{% endhighlight %}

### Variante semplificata
{% capture example %}
{% include html_docs/paginatore/paginatore_semplificato.html %}
{% endcapture %}
{% include example.html content=example %}
