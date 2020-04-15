---
layout: it25_docs
title: Wizard
group: inserimento
toc: true
---

E' utile per guidare l'utente in una **procedura di inserimento dati complessa** infatti, suddividendola in più passi:
- **semplifica le schermate** riducendo la quantità di campi di input presenti contemporaneamente a video
- focalizza l'attenzione permettendo di **compilare pochi dati alla volta**
- **riduce il numero di errori** che è possibile commettere
- **semplifica i controlli** eseguendone pochi ed evitando quelli prematuri.

Si facilita ancora di più l'utente se gli si dà la possibilità di sospendere il processo e **salvare il passo cui è arrivato** ed i dati già inseriti, per poterlo riprendere successivamente.

Un semplice **stepper** è invece efficace per **mostrare lo stato di avanzamento** di un processo fatto partire dall'utente e che poi procede per stati di approvazione/avanzamento eseguiti da altri e dilazionati nel tempo.  
In questo caso deve essere segnalato se l'avanzamento si è fermato per qualche errore.

### Struttura
{% highlight html %}
<div class="steppers">
  <ul class="steppers-header">
    <li>
    . . .
    </li>
    <span class="steppers-index" aria-hidden="true">2/4</span>
  </ul>
  <div class="steppers-content" aria-live="polite">
   . . .
  <div>
  <nav class="steppers-nav">
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-prev"> ... </button>
    <ul class="steppers-dots it25">
     . . .
    </ul>
    <button type="button" class="btn btn-outline-primary btn-sm steppers-btn-next/save/confirm"> ... </button>
  </nav>
</div>
{% endhighlight %}

Tutto il *wizard* va inserito all'interno di un *div* di classe `steppers`.
All'interno di questo si distinguono tre parti principali:
1. *Header*  
**Facoltativo** e costituito da un elenco non ordinato (tag `ul` e una serie di `li`)  
Sono previsti due tipi principali di header: **standard** e **grafico** spiegati più sotto in dettaglio.
2. *Content*  
Un *div* di classe `steppers-content` e con l'attributo `aria-live="polite"` destinato a contenere il **corpo specifico di ogni singolo passo** del wizard, dove l'utente compie scelte o inserisce dati.
3. *Nav*  
Un tag *nav* di classe `steppers-nav` contenente i **bottoni** di *avanti/indietro* e/o *salva/conferma* per procedere od annullare i passi del wizard stesso ed **eventualmente** una **barra o puntini di progressione** che mostrano lo stato di avanzamento complessivo.


### Header Standard

Questo tag *ul* di classe `steppers-header` è la versione **[testo e icone]({{ site.baseurl }}/docs/componenti/steppers/#varianti-intestazione)** standard di *{{ site.data.short.bi }}*.  
Icone e testo sono inizialmente grigi e si colorano passo dopo passo.  

E' responsivo e sui dispositivi mobili visualizza solo il passo attivo e lo `steppers-index` (esempio *2/4*) [per vederlo occorre restingere le dimensioni della finestra].  
Tuttavia **non gestisce automaticamente un alto numero di passi**: su desktop, se i passi sono troppi per essere contenuti orizzontalmente nello schermo, l'elenco si estende oltre il bordo destro della finestra, facendo comparire la barra di scorrimento orizzontale.  
Diventa quindi necessario **gestire da programma la visualizzazione di solo pochi passi** *intorno* a quello attivo.

{% capture example %}
<div class="steppers">
  <ul class="steppers-header">
    <li class="confirmed"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-calendar"></use></svg>Periodo
      <svg class="icon steppers-success"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-check"></use></svg>
      <span class="sr-only">Confermato</span>
    </li>
    <li class="active"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-plus-circle"></use></svg>Tipologia
      <span class="sr-only">Attivo</span>
    </li>
    <li class="error"><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-settings"></use></svg>Optionals
      <svg class="icon steppers-error"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close-big"></use></svg>
      <span class="sr-only">Errore</span>
    </li>
    <li><svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-card"></use></svg>Pagamento</li>
    <span class="steppers-index" aria-hidden="true">2/4</span>
  </ul>
</div>
{% endcapture %}{% include example.html content=example %}


#### Stati
Sui tag *li* di ognuno dei passi va associata la **classe** che indica lo **stato di avanzamento** e che determina la colorazione di ogni *punto*: `confirmed`, `active`, `error`.  
L'**assenza di stato** dà il **colore grigio** di default per i passi ancora da eseguire.  
Nota: lo stato `error` è una personalizzazione specifica di {{ site.data.short.bl }}.

#### Steppers index
A differenza della versione contenuta all'interno della {{ site.data.short.dt }}, lo `steppers-index` è stato inserito in un **tag span** anziché `li`; in questo modo uno screen reader non segnalerà un numero di voci maggiore di quello reale dei passi mostrati nello `steppers-header`.


### Header grafico

E' uno *stepper header* specifico di *{{ site.data.short.bl }}*.  
E' caratterizzato da icone all'interno di grossi punti, inizialmente grigi, che si colorano passo dopo passo.  
Benché responsivo è comunque adatto ad un numero limitato di passi.

E' composto da un *div* principale di classe `it25-wizard` e da una serie di *tag* `li` di classe `it-pin-wrapper`.  
Anche in questo caso, associando la classe che indica lo stato di avanzamento si determina la colorazione di ogni *punto*.  

E' **fortemente consigliato** aggiungere un **[tooltip]({{ site.baseurl }}/docs/it25/inserimento/tooltip/)** per aiutare la comprensione.  
Inoltre, per questioni di accessibilità, è sempre **obbligatorio fornire una descrizione** in uno span di classe `sr-only` o con un testo alternativo.  

Se si utilizzano, **i tooltip vanno attivati** come di consueto.

{% capture example %}
<div class="steppers">
{% include esempi-lombardia/it25_wizard.html %}
</div> <!-- end div class="steppers" -->
<script>
  document.addEventListener("DOMContentLoaded", function() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });
  })    
</script>
{% endcapture %}{% include example.html content=example %}


### Steppers-nav
{% capture example %}
<div class="steppers">
{% include esempi-lombardia/wizard_nav.html %}
</div> <!-- end div class="steppers" -->
{% endcapture %}{% include example.html content=example %}


#### Buttons
*{{ site.data.short.bi }}* prevede 4 classi specifiche per i bottoni dello `steppers-nav`:
- `steppers-btn-prev` e `steppers-btn-next` per i bottoni di indietro e avanti **senza convalida** dei dati
- `steppers-btn-save` e `steppers-btn-confirm` per l'**avanzamento con convalida**.

Per quanto riguarda gli ultimi due, la loro unica differenza è l'applicazione di un `margin-left: auto` per `steppers-btn-confirm`, che lo sposta **forzatamente verso il lato destro** del *nav*.  
Ciò non avviene per `steppers-btn-save`, che **si posiziona quindi a seconda** delle regole applicate al suo contenitore.


#### Dots o Progess bar
Quando la procedura prevede un numero di passi maggiore di 4, è consigliabile aggiungere degli indicatori di avanzamento allo `steppers-nav`.  
*{{ site.data.short.bi }}* però visualizza i *pallini* o la *progress bar* **solo su smartphone**.  
Per visualizzarli anche su **desktop**, è stata predisposta la classe `it25` da **aggiungere** a `steppers-dot` o `steppers-progress`.  
Per l'accessibilità è **necessario** che i tag *li* contengano uno *span* con classe `sr-only`, utilizzato dagli screen reader, con un testo indicante il numero di step e lo stato.


{% capture callout %}
####  <svg class="icon icon-danger icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-close-circle"></use></svg> Versione su sfondo scuro
La **[Versione su sfondo scuro]({{ site.baseurl }}/docs/componenti/steppers/#versione-su-sfondo-scuro)** delle varie parti degli *steppers* **NON DEVE MAI ESSERE UTILIZZATA**.
{% endcapture %}{% include callout.html content=callout type="danger" %}


{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprite.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della {{ site.data.short.dt }}:
- **[Steppers]({{ site.baseurl }}/docs/componenti/steppers/)**

Una pagina con un esempio completo di *wizard* è visualizzabile al link:
- **[Esempi-Wizard]({{ site.baseurl }}/docs/it25/esempi/pag_wizard/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
