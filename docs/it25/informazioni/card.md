---
layout: it25_docs
title: Card
group: informazioni
toc: yes
---

{% capture callout %}
#### Questo è un nuovo componente card
Questo componente card e le sue varianti sono definiti dalle classi `.it-card` e relativi modificatori. 

Il precedente componente basato sulla classe `.card` è deprecato, e le sue classi di stile **saranno mantenute fino al prossimo rilascio maggiore, per permettere una migrazione graduale**. 

[Vai alla documentazione del componente card old (deprecato)](../card-old/)
{% endcapture %}{% include callout.html content=callout type="warning" %}


Le **Card** sono dei contenitori di contenuti ed azioni relative ad una data informazione.  
Possono accogliere un titolo, un paragrafo, un’immagine e una call to action formata da un link di grandezza variabile a seconda delle necessità, posizionato sempre in basso (lateralmente o al centro).

Le distanze dai margini sono date da uno spazio di **24 px in tutti i lati della card**.  
Inoltre arrotondamento, bordo e ombreggiatura sono fissati nel modo seguente:  
`border-radius: 8px !important;`  
`border-style: none !important;`  
`box-shadow: 0 2px 20px 0 rgba(0, 0, 0, .1) !important;`


Le card, adattabili e ridimensionabili, sono un elemento modulare che facilita la trasposizione responsive del design.

{% comment %}Example name: Card base Lombardia{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-lg-4">
    <article class="it-card it-card-height-fullmb-3">
      <h5 class="it-card-title ">
        <a href="#">Titolo del servizio</a>
      </h5>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <footer class="it-card-related">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
        </footer>
      </div>
    </article>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

Per gruppi numerosi di card, utilizzare liste semantiche `<ul>` con classe `.it-card-list` combinandole con il sistema di colonne.

Esempio:

{% comment %}Example name: Esempio Layout Card Lombardia{% endcomment %}
{% capture example %}
<ul class="it-card-list row" aria-label="Risultati della ricerca: ">
  <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-height-full rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h5 class="it-card-title ">
        <a href="#">Primo risultato</a>
      </h5>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
      </footer>
    </article>
    <!--end it-card-->
  </li>
  <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h5 class="it-card-title ">
        <a href="#">Secondo risultato</a>
      </h5>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
      </footer>
    </article>
    <!--end it-card-->
  </li>
  <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-height-full rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h5 class="it-card-title ">
        <a href="#">Terzo risultato</a>
      </h5>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
      </footer>
    </article>
    <!--end it-card-->
  </li>
  <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h5 class="it-card-title ">
        <a href="#">Quarto risultato</a>
      </h5>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
      </footer>
    </article>
    <!--end it-card-->
  </li>
    <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-height-full rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h5 class="it-card-title ">
        <a href="#">Quinto risultato</a>
      </h5>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
      </footer>
    </article>
    <!--end it-card-->
  </li>
  <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h5 class="it-card-title ">
        <a href="#">Sesto risultato</a>
      </h5>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
      </footer>
    </article>
    <!--end it-card-->
  </li>
</ul>
{% endcapture %}{% include example.html content=example %}

---

### Card con foto

Nella versione con foto la metà dello spazio viene destinato ad un’immagine posizionata nella parte superiore della card.  
Per motivi di accessibilità, **il testo della card non deve essere mai posizionato sopra le immagini**.

{% comment %}Example name: Card con foto Lombardia{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h5 class="it-card-title ">
        <a href="#">Titolo del contenuto</a>
      </h5>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="{{site.baseurl}}/dist/assets/img/bike-sharing.jpg" title="bike sharing" alt="parcheggio bike sharing a Milano" />
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
      </footer>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h5 class="it-card-title ">
        <a href="#">Titolo del contenuto</a>
      </h5>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-16x9">
          <figure class="figure img-full">
            <img src="{{site.baseurl}}/dist/assets/img/bike-sharing.jpg" title="bike sharing" alt="parcheggio bike sharing a Milano" />
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


---

### Card con link

Con la versione card con link è possibile avere dei sottolink in calce alla card.

{% comment %}Example name: Card con link Lombardia{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-4 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h5 class="it-card-title no_toc">
        <a href="#">Argomento Y</a>
      </h5>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-21x9">
          <figure class="figure img-full">
            <img src="{{site.baseurl}}/dist/assets/img/bike-sharing.jpg" title="bike sharing" alt="parcheggio bike sharing a Milano" />
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Descrizione breve dell'argomento in poche righe non troncate.</p>
        <ul class="list-group list-group-flush" aria-label="Contenuti in evidenza:">
          <li class="list-group-item"><a href="#">Titolo notizia affine</a></li>
          <li class="list-group-item"><a href="#">Titolo media affine</a></li>
          <li class="list-group-item"><a href="#">Altro titolo scheda affine</a></li>
          <li class="list-group-item"><a href="#">Pagina profilo affine</a></li>
        </ul>
      </div>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


---

### Card con foto e call to action

All’interno delle card è possibile inserire anche una call-to action, con le modalità già spiegate e un testo di categorizzazione sopra la card.

{% comment %}Example name: Card con call to action Lombardia{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-4 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h5 class="it-card-title no_toc">
        <a href="#">Argomento Y</a>
      </h5>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-21x9">
          <figure class="figure img-full">
            <img src="{{site.baseurl}}/dist/assets/img/bike-sharing.jpg" title="bike sharing" alt="parcheggio bike sharing a Milano" />
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Descrizione breve dell'argomento in poche righe non troncate.</p>
        <button type="button" class="btn btn-xs btn-primary">Registrati</button>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-4 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
      <article class="it-card mb-3">
      <h5 class="it-card-title ">
        <a href="#">Titolo del servizio</a>
      </h5>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <button type="button" class="btn btn-xs btn-primary">Registrati</button>
        <footer class="it-card-related">
          <div class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
        </footer>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-4 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h5 class="it-card-title no_toc">
        <a href="#">Argomento Y</a>
      </h5>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-21x9">
          <figure class="figure img-full">
            <img src="{{site.baseurl}}/dist/assets/img/bike-sharing.jpg" title="bike sharing" alt="parcheggio bike sharing a Milano" />
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Descrizione breve dell'argomento in poche righe non troncate.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class=" it-card-footer">
        <button type="button" class="btn btn-primary">Compila il form</button>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


--- 

### Dimensionamento delle card

Per la gestione delle **altezze** in caso di gruppi di card, l’impostazione di base è l’altezza basata sul contenuto.

Per cambiare questo comportamento per ogni card va usata la classe `.it-card-height-full` (altezza basata su tutto lo spazio disponibile) sull’elemento `article .it-card`. 

{% comment %}Example name: Dimensionamento Card Lombardia{% endcomment %}
{% capture example %}
<div class="row">
  <div class="col-12 col-md-4 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h5 class="it-card-title no_toc">
        <a href="#">Argomento Y</a>
      </h5>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-21x9">
          <figure class="figure img-full">
            <img src="{{site.baseurl}}/dist/assets/img/bike-sharing.jpg" title="bike sharing" alt="parcheggio bike sharing a Milano" />
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Descrizione breve dell'argomento in poche righe non troncate.</p>
        <button type="button" class="btn btn-xs btn-primary">Registrati</button>
      </div>
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-4 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
      <article class="it-card it-card-height-full mb-3">
      <h5 class="it-card-title ">
        <a href="#">Titolo del servizio</a>
      </h5>
      <div class="it-card-body">
        <p class="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        <button type="button" class="btn btn-xs btn-primary">Registrati</button>
      </div>
      <footer class="it-card-related it-card-footer">
        <div class="it-card-taxonomy">
          <a href="#" class="it-card-category it-card-link"><span class="visually-hidden">Categoria correlata: </span>Categoria</a>
        </div>
      </footer>      
    </article>
    <!--end it-card-->
  </div>
  <div class="col-12 col-md-4 col-lg-4 mb-3 mb-md-4">
    <!--start it-card-->
    <article class="it-card it-card-image it-card-height-full rounded shadow-sm border">
      <!--card first child is the title (link)-->
      <h5 class="it-card-title no_toc">
        <a href="#">Argomento Y</a>
      </h5>
      <!--card second child is the image (optional)-->
      <div class="it-card-image-wrapper">
        <div class="ratio ratio-21x9">
          <figure class="figure img-full">
            <img src="{{site.baseurl}}/dist/assets/img/bike-sharing.jpg" title="bike sharing" alt="parcheggio bike sharing a Milano" />
          </figure>
        </div>
      </div>
      <!--card body content-->
      <div class="it-card-body">
        <p class="it-card-text">Descrizione breve dell'argomento in poche righe non troncate.</p>
      </div>
      <!--finally the card footer metadata-->
      <footer class=" it-card-footer">
        <button type="button" class="btn btn-primary">Compila il form</button>
      </footer>
    </article>
    <!--end it-card-->
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


{% capture callout %}
#### {{ site.data.short.dt }}
Per ulteriori dettagli sulle possibili opzioni per questo componente si consulti la documentazione tecnica alla voce:
- **[Card]({{ site.baseurl }}/docs/componenti/card/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
