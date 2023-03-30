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

Il design di default dei dropdown richiede l’applicazione della classe `.btn-dropdown.` I link o le voci all’interno del dropdown devono essere contenute in un elemento `.link-list`. Per la variante bottone è necessario utilizzare la classe `.btn-primary`.

<div class="bd-example">
    <div class="row">
        <div class="col">
            <div class="fst-italic">Variante Menu</div>
            {% include esempi-lombardia/dropdown.html %}
        </div>
        <div class="col">
            <div class="fst-italic">Variante Bottone</div>
            {% include esempi-lombardia/dropdown-button.html %}
            </div>
    </div>
</div>

{% highlight html %}

<div class="bd-example">
    <div class="row">
        <div class="col">
        {% include esempi-lombardia/dropdown.html %}
        </div>
        <div class="col">
        {% include esempi-lombardia/dropdown-button.html %}
        </div>
    </div>
</div>
{% endhighlight %}

## Default

Le voci del menu che viene aperto al click sul pulsante possono essere personalizzate, così come il menù stesso.

L'arrow di default è posto a sinistra; per spostarlo a destra o rimuoverlo è necessario utilizzare `data-popper-placement='bottom-end'` e `data-popper-placement='hidden'`.

{% include html_docs/dropdown/default.html %}

## Esempi

{% include esempi-lombardia/esempi_dropdown_header.html %}
