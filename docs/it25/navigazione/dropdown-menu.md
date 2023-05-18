---
layout: it25_docs
title: Dropdown Menu
group: navigazione
toc: false
---

<!-- Style override for Documentation purposes -->
<style>
 .no-border {
    border: none;
 }
</style>

Il Dropdown menu (detto anche menù a tendina) attiva o disattiva overlay contestuali per visualizzare elenchi di link o contenuti di varia natura.

## Bottoni dropdown

Il design di default dei dropdown richiede l’applicazione della classe `.btn-dropdown`.  
I link o le voci all’interno del dropdown devono essere contenute in un elemento `.link-list`.  
Per la variante bottone è necessario utilizzare la classe `.btn-primary`.

<div class="bd-example">
  <div class="row">
    <div class="col">
      <div class="fst-italic">Variante Menu</div>
      {% include html_docs/dropdown/dropdown.html %}
    </div>
    <div class="col">
      <div class="fst-italic">Variante Bottone</div>
      {% include html_docs/dropdown/dropdown-button.html %}
      </div>
  </div>
</div>

{% highlight html %}
{% include html_docs/dropdown/dropdown.html %}
{% include html_docs/dropdown/dropdown-button.html %}
{% endhighlight %}

## Default

{% include html_docs/dropdown/default.html %}

L'arrow di default è posto a sinistra.  
Per spostarlo a destra o rimuoverlo è necessario utilizzare: `data-popper-placement='bottom-end'` o `data-popper-placement='hidden'` nel <code>div</code> contenente le voci del menu che viene aperto al click.

{% capture example %}
<div class="dropdown-menu shadow-lg" data-popper-placement="bottom-end">
  <div class="link-list-wrapper">
    <ul class="link-list">
      <li><a class="dropdown-item list-item" href="#"><span>Azione 1</span></a></li>
      <li><a class="dropdown-item list-item" href="#"><span>Azione 2</span></a></li>
      <li><a class="dropdown-item list-item" href="#"><span>Azione 3</span></a></li>
    </ul>
  </div>
</div>
{% endcapture %}
{% include example.html content=example %}

--- 

## Esempi
<div class="bd-example no-border mb-5">
{% include html_docs/dropdown/esempi_dropdown.html %}
</div>

{% highlight html %}
. . . 
<li>
  <a class="dropdown-item list-item" href="#"><span>Azione 1</span></a>
</li>
. . . 
<li>
  <a class="dropdown-item list-item active" href="#"><span>Voce Attiva</span></a>
</li>
. . . 
<li>
  <a class="dropdown-item list-item disabled" href="#"><span>Voce disabilitata</span></a>
</li>
{% endhighlight %}


{% capture callout %}
#### {{ site.data.short.dt }}
Per i dettagli su tutte le possibilità di funzionamento dei dropdown si veda la **[relativa pagina]({{ site.baseurl }}/docs/componenti/dropdown/)**.
{% endcapture %}{% include callout.html content=callout type="info" %}
