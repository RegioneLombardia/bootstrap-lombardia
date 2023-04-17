---
layout: it25_docs
title: Cookie bar
group: informazioni
toc: yes
---

<!-- Style override for Documentation purposes -->
<style>
  .bd-example .cookiebar {
    display: block;
    position: static;
    transform: none;
  }
</style>

La **Cookie bar** è un banner informativo sull’utilizzo dei cookie all’interno del sito web.

**Come si costruisce una cookie bar**
Nel caso in cui si renda necessario inserire una cookie bar per l’accettazione dei cookies da parte dell’utente, è possibile
rappresentarla graficamente come l’esempio in figura per quanto riguarda forma e colori. La barra in generale si compone di un breve testo informativo, un bottone per l’accettazione e un eventuale link di approfondimento ad una più estesa pagina di dettaglio per accogliere la normativa di riferimento. La cookie bar si attiva al caricamento della pagina, ricopre l’intera larghezza della pagina, è posizionata in basso e scompare dopo l’interazione dell’utente.

<div class="bd-example">
  {% include html_docs/cookiebar/cookiebar.html %}
</div>

{% highlight html %}
{% include html_docs/cookiebar/cookiebar.html %}
{% endhighlight %}
