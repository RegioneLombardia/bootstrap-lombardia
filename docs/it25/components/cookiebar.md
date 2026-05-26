---
layout: it25_docs
title: Cookie bar
group: components
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

#### Come si costruisce una cookie bar
**[Nel caso in cui si renda necessario inserire una cookie bar](https://www.garanteprivacy.it/temi/cookie)** per l’accettazione dei cookies da parte dell’utente, è possibile rappresentarla graficamente come l’esempio in figura per quanto riguarda forma e colori.

La barra in generale si compone di un breve testo informativo, un bottone per l’accettazione e un eventuale link di approfondimento ad una più estesa pagina di dettaglio per accogliere la normativa di riferimento.

La cookie bar si attiva al caricamento della pagina, ricopre l’intera larghezza della pagina, è posizionata in basso e scompare dopo l’interazione dell’utente.  
Per vedere il funzionamento potete guardare la pagina: [esempio Cookiebar]({{ site.baseurl }}/docs/it25/esempi/cookiebar/)

{% comment %}Example name: Cookiebar Lombardia{% endcomment %}
{% capture example %}
<section class="cookiebar fade" aria-label="Gestione dei cookies" aria-live="polite">
  <p>
    Questo sito utilizza cookie tecnici, analytics e di terze parti.<br />
    Proseguendo nella navigazione accetti l’utilizzo dei cookie.
  </p>
  <div class="mt-4">
    <button data-bs-accept="cookiebar" class="btn btn-primary me-3">ACCETTO<span class="visually-hidden"> i cookies</span></button>
    <button class="btn btn-outline-white me-3">ACCETTA SOLO NECESSARI</button>
    <a href="#" class="">Privacy policy</a>
  </div>
</section>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}
## {{ site.data.short.dt }}
Per ulteriori dettagli tecnici sulla cookiebar si veda la voce:  
**[{{ site.data.short.link }}Cookiebar]({{ site.baseurl }}/docs/componenti/cookiebar/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
