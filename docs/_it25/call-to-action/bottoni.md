---
layout: it25_docs
title: Bottoni
group: call-to-action
toc: yes
---

<style>
.it25-btn-example .btn {
  margin: 4px 8px;
  width: 175px;
}
</style>


## Dimensioni
La dimensione di un bottone va adeguata:
1. Al tipo di **schermo** sul quale viene visualizzato  
su uno smartphone non deve occupare troppo spazio ma nemmeno essere troppo piccolo da risultare difficile da cliccare utilizzando il pollice
2. All'**importanza dell'azione** che il bottone compie  
maggiore dimensione per maggiore importanza.


Le *Linee Guida* prevedono **tre dimensioni principali** di bottoni: **small**, **medium**, e **large**, corrispondenti alle classi `btn-sm`, `btn` e `btn-lg`.

Il bottone di *due righe* mostrato è stato ottenuto fissandone la larghezza, cosa che però ne limita la reponsività.

Il testo all'interno di un bottone va automaticamente su **più righe** qualora non ci sia **abbastanza spazio orizzontale**.  
Si raccomanda quindi di usare **diciture essenziali** per i bottoni, ponendo all'esterno di essi il testo necessario a chiarire l'azione eseguita.


<div class="bd-example">
  <div class="container-fluid">
    <div class="row my-3">
      <div class="col-6">
        <strong>Dimensione small</strong>
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-primary btn-sm">Lorem ipsum</button>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-6">
        <strong>Dimensione medium</strong>
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-primary btn">Lorem ipsum</button>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-6">
        <strong>Dimensione large</strong>
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-primary btn-lg">Lorem ipsum</button>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-6">
        <strong>Due righe</strong>
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-primary btn-lg" style="max-width: 160px;">Lorem ipsum dolor sit</button>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<button type="button" class="btn btn-primary btn-sm">Lorem ipsum</button>
<button type="button" class="btn btn-primary btn">Lorem ipsum</button>
<button type="button" class="btn btn-primary btn-lg">Lorem ipsum</button>
<button type="button" class="btn btn-primary btn-lg" style="max-width: 160px;">Lorem ipsum dolor sit</button>
{% endhighlight %}



## Gerarchia

1. Bottone Primario  
Una videata dovrebbe contenere un **unico** bottone primario, che va utilizzato per richiamare l'attenzione dell'utente sull'**azione principale** da compiere, quella che costituisce lo lo scopo della videata stessa.

2. Bottone Outline  
Può essere utilizzato per:
* la **negazione** dell'azione stessa (es. *Annulla* o *Torna Indietro*)
* un'**azione complementare** come l'aggiunta di dati prima di procedere
* la richiesta di ulteriori informazioni (il classico bottone *Per saperne di più*).

3. Bottoni Secondari  
Servono per eseguire azioni secondarie e normalmente non necessarie (es. la configurazione di speciali opzioni).

{% capture example %}
<div class="it25-btn-example">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-outline-primary">Primary outline</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-outline-secondary">Secondary outline</button>
</div>
<div class="it25-btn-example">
<button type="button" class="btn btn-primary disabled">Disabled</button>
<button type="button" class="btn btn-outline-primary disabled">Disabled</button>
<button type="button" class="btn btn-secondary disabled">Disabled</button>
<button type="button" class="btn btn-outline-secondary disabled">Disabled</button>
</div>
{% endcapture %}{% include example.html content=example %}

{% capture callout %}
#### <svg class="icon icon-warning icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-warning-circle"></use></svg> Larghezza dei bottoni
Nell'esempio qui sopra la larghezza dei bottoni è stata fissata a 175 pixel con la classe `it25-btn-example`.  
Tale classe **NON VA UTILIZZATA**: è stata creata solo per questioni di simmetria di questo specifico caso.  
Normalmente la larghezza del bottone è **determinata dalla lunghezza della *label*** che contiene (oltre che dal *padding*).
{% endcapture %}{% include callout.html content=callout type="warning" %}


## Posizione
I bottoni devono essere posizionati dove l'**utente** si aspetta di trovarli.  
* I pulsanti di **Conferma**, **Annulla**, **Torna Indietro** vanno posti **in fondo alla pagina** perché l'utente deve leggere tutto il contenuto della pagina prima di decidere di premere l'uno o l'altro.
* I pulsanti di richiesta **informazioni** o di inserimento di ulteriori **opzioni** è bene siano **vicini ai dati** cui quelle informazioni si riferiscono o che quelle opzioni vanno ad integrare.



## Bottoni speciali

### Danger
Può essere utilizzato solo per azioni che comportano la **cancellazione non reversibile di dati**, per indurre l'utente a riflettere prima di premerlo.
{% capture example %}
<div class="it25-btn-example">
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-danger disabled">Disabled</button>
  <button type="button" class="btn btn-outline-danger">Danger outline</button>
  <button type="button" class="btn btn-outline-danger disabled">Disabled</button>
</div>
{% endcapture %}{% include example.html content=example %}


### Mini-button
Esiste anche la classe `btn-xs` per creare bottoni di dimensioni molto piccole.  
**Da utilizzare con attenzione**, in quanto può rendere il bottone difficile da premere con le dita su smartphone.

{% capture example %}
<button type="button" class="btn btn-primary btn-xs">Primary</button>
<button type="button" class="btn btn-outline-primary btn-xs">Outline</button>
{% endcapture %}{% include example.html content=example %}


### Tag
**Da utilizzare con attenzione**, per il motivo di cui sopra, anche il bottone arrotondato di minime dimensioni ottenibile con la classe `btn-tag`.

{% capture example %}
<button type="button" class="btn btn-primary btn-tag">Tag</button>
<button type="button" class="btn btn-outline-primary btn-tag">Tag</button>
{% endcapture %}{% include example.html content=example %}

## Bottoni con icona
<div class="bd-example">
  <div class="container-fluid">
    <div class="row my-3">
      <div class="col-4">
        <strong>Small</strong>
      </div>
      <div class="col-4">
        <strong>Medium</strong>
      </div>
      <div class="col-4">
        <strong>Large</strong>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-4">
        <button class="btn btn-primary btn-sm btn-icon">
          <span>Primary</span>
          <svg class="icon icon-white">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
          </svg>
        </button>
      </div>
        <div class="col-4">
        <button class="btn btn-primary btn-icon">
          <span>Primary</span>
          <svg class="icon icon-white">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
          </svg>
        </button>
      </div>
      <div class="col-4">
        <button class="btn btn-primary btn-lg btn-icon">
          <span>Primary</span>
          <svg class="icon icon-white">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-4">
        <button class="btn btn-outline-primary btn-sm btn-icon">
          <span>Outline</span>
          <svg class="icon icon-primary">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
          </svg>
        </button>
      </div>
        <div class="col-4">
        <button class="btn btn-outline-primary btn-icon">
          <span>Outline</span>
          <svg class="icon icon-primary">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
          </svg>
        </button>
      </div>
      <div class="col-4">
        <button class="btn btn-outline-primary btn-lg btn-icon">
          <span>Outline</span>
          <svg class="icon icon-primary">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<button class="btn btn-primary btn-sm btn-icon">
  <span>Primary</span>
  <svg class="icon icon-white">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
  </svg>
</button>
<button class="btn btn-primary btn-icon">
  <span>Primary</span>
  <svg class="icon icon-white">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
  </svg>
</button>
<button class="btn btn-primary btn-lg btn-icon">
  <span>Primary</span>
  <svg class="icon icon-white">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
  </svg>
</button>

<button class="btn btn-outline-primary btn-sm btn-icon">
  <span>Outline</span>
  <svg class="icon icon-primary">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
  </svg>
</button>
<button class="btn btn-outline-primary btn-icon">
  <span>Outline</span>
  <svg class="icon icon-primary">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
  </svg>
</button>
<button class="btn btn-outline-primary btn-lg btn-icon">
  <span>Outline</span>
  <svg class="icon icon-primary">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
  </svg>
</button>
{% endhighlight %}

{% capture callout %}
#### <svg class="icon icon-warning icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-warning-circle"></use></svg> Testo del bottone
La *dicitura*, **nel bottone con icona**, **deve sempre essere compresa in un tag `span`**, per far sì che venga applicata la corretta distanza tra testo e icona del bottone.
{% endcapture %}{% include callout.html content=callout type="warning" %}


### Icona a sinistra    
<div class="bd-example">
  <div class="container-fluid">
    <div class="row my-3">
      <div class="col-4">
        <button class="btn btn-primary btn-sm btn-icon">
          <svg class="icon icon-white">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
          </svg>
          <span>Primary</span>
        </button>
      </div>
        <div class="col-4">
        <button class="btn btn-primary btn-icon">
          <svg class="icon icon-white">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
          </svg>
          <span>Primary</span>
        </button>
      </div>
      <div class="col-4">
        <button class="btn btn-primary btn-lg btn-icon">
          <svg class="icon icon-white">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
          </svg>
          <span>Primary</span>
        </button>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-4">
        <button class="btn btn-outline-primary btn-sm btn-icon">
          <svg class="icon icon-primary">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
          </svg>
          <span>Outline</span>
        </button>
      </div>
        <div class="col-4">
        <button class="btn btn-outline-primary btn-icon">
          <svg class="icon icon-primary">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
          </svg>
          <span>Outline</span>
        </button>
      </div>
      <div class="col-4">
        <button class="btn btn-outline-primary btn-lg btn-icon">
          <svg class="icon icon-primary">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
          </svg>
          <span>Outline</span>
        </button>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<button class="btn btn-primary btn-sm btn-icon">
  <svg class="icon icon-white">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
  </svg>
  <span>Primary</span>
</button>
<button class="btn btn-primary btn-icon">
  <svg class="icon icon-white">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
  </svg>
  <span>Primary</span>
</button>
<button class="btn btn-primary btn-lg btn-icon">
  <svg class="icon icon-white">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
  </svg>
  <span>Primary</span>
</button>

<button class="btn btn-outline-primary btn-sm btn-icon">
  <svg class="icon icon-primary">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
  </svg>
  <span>Outline</span>
</button>
<button class="btn btn-outline-primary btn-icon">
  <svg class="icon icon-primary">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
  </svg>
  <span>Outline</span>
</button>
<button class="btn btn-outline-primary btn-lg btn-icon">
  <svg class="icon icon-primary">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-full"></use>
  </svg>
  <span>Outline</span>
</button>
{% endhighlight %}

{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della {{ site.data.short.dt }}:
- **[Bottoni]({{ site.baseurl }}/docs/componenti/bottoni/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
