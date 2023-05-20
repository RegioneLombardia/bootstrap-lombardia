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

#### Come si costruisce una cookie bar
**[Nel caso in cui si renda necessario inserire una cookie bar](https://www.garanteprivacy.it/temi/cookie)** per l’accettazione dei cookies da parte dell’utente, è possibile rappresentarla graficamente come l’esempio in figura per quanto riguarda forma e colori.

La barra in generale si compone di un breve testo informativo, un bottone per l’accettazione e un eventuale link di approfondimento ad una più estesa pagina di dettaglio per accogliere la normativa di riferimento.

La cookie bar si attiva al caricamento della pagina, ricopre l’intera larghezza della pagina, è posizionata in basso e scompare dopo l’interazione dell’utente.  
Per vedere il funzionamento potete guardare la pagina: [esempio Cookiebar]({{ site.baseurl }}/docs/it25/esempi/cookiebar/)

{% capture example %}
<section class="cookiebar fade" aria-label="Gestione dei cookies" aria-live="polite">
  <p>Questo sito utilizza cookie tecnici, analytics e di terze parti. <br />Proseguendo nella navigazione accetti l’utilizzo dei cookie.</p>
  <div class="mt-4">
    <button data-bs-accept="cookiebar" class="btn btn-primary me-3">ACCETTO<span class="visually-hidden"> i cookies</span></button>
    <a href="#" class="me-3">Preferenze<span class="visually-hidden">cookies</span></a>
    <a href="#" class="">Privacy policy</a>
  </div>
</section>
{% endcapture %}{% include example.html content=example %}
