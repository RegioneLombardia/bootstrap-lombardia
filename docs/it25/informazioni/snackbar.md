---
layout: it25_docs
title: Snackbar
group: informazioni
toc: no
---

<style>
  /* Style override for Documentation purposes */
  .test-docs .notification {
    position: static;
    top: auto;
    bottom: auto;
    right: auto;
    left: auto;
    transform: none;
    display: block;
  }
  .test-docs .notification.dismissable {
    position: relative;
  }
  .test-desktop, .test-animation {
    width: 100%;
    height: 500px;
    background: #fafafa;
    border: 1px solid #eee;
    position: relative;
    overflow: hidden;
  }
  .test-desktop .notification {
    position: absolute;
    display: block;
  }
</style>

Gli **Snackbar** informano gli utenti in merito ad un processo che è stato eseguito o che sta per essere attivato (spesso relativamente a processi eseguiti in background).  
Essi appaiono temporaneamente nella parte inferiore dello schermo e non dovrebbero interrompere l'esperienza dell'utente.  
Di solito **non richiedono alcun tipo di input per scomparire**.

Gli snackbar possono contenere messaggi brevi ed incisivi - solitamente usati per comunicare lo stato di un’operazione - o messaggi più lunghi accompagnati da un titolo che introduce l’informazione.  
Di norma è possibile visualizzare **una sola snackbar alla volta**, anche in caso di notifiche multiple.

{% capture example %}
<div class="container test-docs">
  <div class="row">
    <div class="col">
      <div class="my-3">Testo</div>
      <div class="notification it25-snackbar" role="alert" aria-labelledby="not1-title" id="not1">
        <h2 id="not1-title" class="h5">Lorem ipsum dolor</h2>
      </div>
    </div>
    <div class="col">
      <div class="my-3">Testo con icona e stato</div>
      <div class="notification with-icon success it25-snackbar" role="alert" aria-labelledby="not2-title" id="not2">
        <h2 id="not2-title" class="h5"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Lorem ipsum dolor</h2>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


### Snackbar con messaggio
{% capture example %}
<div class="container test-docs">
  <div class="row">
    <div class="col">
      <div class="my-3">Testo</div>
      <div class="notification it25-snackbar" role="alert" aria-labelledby="not1a-title" id="not1a">
        <h2 id="not1a-title" class="h5 ">Lorem ipsum dolor</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </div>
    </div>
    <div class="col">
      <div class="my-3">Lorem ipsum dolor</div>
      <div class="notification with-icon success it25-snackbar" role="alert" aria-labelledby="not2a-title" id="not2a">
        <h2 id="not2a-title" class="h5 "><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Titolo notifica</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


### Stati

{% capture example %}
<div class="container test-docs">
  <div class="row">
    <div class="col">
      <div class="my-3">Successo</div>
      <div class="notification with-icon success it25-snackbar" role="alert" aria-labelledby="not1c-title" id="not1c">
        <h2 id="not1c-title" class="h5"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Lorem ipsum dolor</h2>
      </div>
    </div>
    <div class="col">
      <div class="my-3">Attenzione</div>
      <div class="notification with-icon warning it25-snackbar" role="alert" aria-labelledby="not2c-title" id="not2c">
        <h2 id="not2c-title" class="h5"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-warning-circle"></use></svg>Lorem ipsum dolor</h2>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="my-3">Errore</div>
      <div class="notification with-icon danger it25-snackbar" role="alert" aria-labelledby="not3c-title" id="not3c">
        <h2 id="not3c-title" class="h5"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-error"></use></svg>Lorem ipsum dolor</h2>
      </div>
    </div>
    <div class="col">
      <div class="my-3">Info</div>
      <div class="notification with-icon info it25-snackbar" role="alert" aria-labelledby="not4c-title" id="not4c">
        <h2 id="not4c-title" class="h5"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg>Lorem ipsum dolor</h2>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


### Comportamento

**Nota:** il comportamento di *default* è la scomparsa automatica dopo 7 secondi.
Qui è bloccato per ragioni documentative.
{% capture example %}
<div class="container test-docs">
  <div class="row mb-5">
    <div class="col-4">Default</div>
    <div class="col-4">Interattivo con comando "chiudi"</div>
    <div class="col-4">Interattivo con "azione"</div>
  </div>
  <div class="row">
    <div class="col-4">
      <div class="notification with-icon success it25-snackbar" data-bs-timeout="7000" role="alert" aria-labelledby="not1d-title" id="not1d">
        <h2 id="not1d-title" class="h5">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
        Lorem ipsum dolor</h2>
      </div>
    </div>
    <div class="col-4">
      <div class="notification dismissable with-icon success it25-snackbar fade show" role="alert" aria-labelledby="not2d-title" id="not2d">
        <h2 id="not2d-title" class="h5 ">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
          Lorem ipsum dolor</h2>
        <button type="button" class="btn notification-close" data-bs-dismiss="notification">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
          <span class="visually-hidden">Chiudi notifica: Titolo notifica</span>
        </button>
      </div>
    </div>
    <div class="col-4">
      <div class="notification dismissable with-icon success it25-snackbar fade show" role="alert" aria-labelledby="not3d-title" id="not3d">
        <h2 id="not3d-title" class="h5 ">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
          Lorem ipsum dolor</h2>
        <button type="button" class="btn notification-close" data-bs-dismiss="notification">
        Azione
          <span class="visually-hidden">Chiudi notifica: Titolo notifica</span>
        </button>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-4">
      <div class="notification with-icon success it25-snackbar" data-bs-timeout="7000" role="alert" aria-labelledby="not4d-title" id="not4d">
        <h2 id="not4d-title" class="h5">
        <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
        Lorem ipsum dolor</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </div>
    </div>
    <div class="col-4">
      <div class="notification dismissable with-icon success it25-snackbar fade show" role="alert" aria-labelledby="not5d-title" id="not5d">
        <h2 id="not5d-title" class="h5 ">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
          Lorem ipsum dolor</h2>
        <button type="button" class="btn notification-close" data-bs-dismiss="notification">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use></svg>
          <span class="visually-hidden">Chiudi notifica: Titolo notifica</span>
        </button>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </div>
    </div>
    <div class="col-4">
      <div class="notification dismissable with-icon success it25-snackbar fade show" role="alert" aria-labelledby="not6d-title" id="not6d">
        <h2 id="not6d-title" class="h5 ">
          <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
          Lorem ipsum dolor</h2>
        <button type="button" class="btn notification-close" data-bs-dismiss="notification">
        Azione
          <span class="visually-hidden">Chiudi notifica: Titolo notifica</span>
        </button>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


### Posizionamento


{% capture example %}

<div class="container test-desktop">
  <div class="notification dismissable with-icon success it25-snackbar fade show" role="alert" aria-labelledby="not1e-title" id="not1e">
    <h2 id="not1e-title" class="h5 ">
      <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>
      Snackbar Title</h2>
    <button type="button" class="btn notification-close" data-bs-dismiss="notification">
    Azione
      <span class="visually-hidden">Chiudi notifica: Titolo notifica</span>
    </button>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
  </div>
  <div class="notification left-bottom-fix with-icon danger it25-snackbar" role="alert" aria-labelledby="not3c-title" id="not2e">
    <h2 id="not2e-title" class="h5"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-error"></use></svg>Lorem ipsum dolor</h2>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

