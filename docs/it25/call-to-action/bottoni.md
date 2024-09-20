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

### Call to action
La **Call to action** è un invito all’utente a compiere una determinata azione, identificabile come messaggio testuale univoco e veicolato attraverso un **bottone**.  
Si tratta di un elemento fondamentale e deve essere chiaro e conciso.

Tutti i **bottoni primari e secondari** hanno in comune: **colori, forma del container** e le **diverse grandezze** con relative **spaziature**.  
I bottoni disegnati hanno di default un container con **corner radius di 8 pixel**.  
Il colore terziario viene utilizzato esclusivamente per i bottoni in alcuni contesti specifici che ne richiedono l’utilizzo, **non va utilizzato nei testi**.


### Bottoni
La dimensione di un bottone va adeguata:

1. Al tipo di **schermo** sul quale viene visualizzato  
   su uno smartphone non deve occupare troppo spazio ma nemmeno essere troppo piccolo da risultare difficile da cliccare utilizzando il pollice
2. All'**importanza dell'azione** che il bottone compie  
   maggiore dimensione per maggiore importanza.

Le _Linee Guida_ prevedono **tre dimensioni principali** di bottoni: **small**, **medium**, e **large**, corrispondenti alle classi `btn-sm`, `btn` e `btn-lg`.

Il bottone di _due righe_ mostrato è stato ottenuto fissandone la larghezza, cosa che però ne limita la reponsività.

Il testo all'interno di un bottone va automaticamente su **più righe** qualora non ci sia **abbastanza spazio orizzontale**.  
Si raccomanda quindi di usare **diciture essenziali** per i bottoni, ponendo all'esterno di essi il testo necessario a chiarire l'azione eseguita.

<div class="bd-example">
  <div class="container-fluid">
    <div class="row my-3">
      <div class="col-3">
        <strong>Dimensione small</strong>
      </div>
      <div class="col-3 text-center">
        <button type="button" class="btn btn-primary btn-sm">Lorem ipsum</button>
      </div>
       <div class="col-3 text-center">
        <button type="button" class="btn btn-outline-primary btn-sm">Lorem ipsum</button>
      </div>
       <div class="col-3 text-center">
        <button type="button" class="btn btn-secondary btn-sm">Lorem ipsum</button>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-3">
        <strong>Dimensione medium</strong>
      </div>
      <div class="col-3 text-center">
        <button type="button" class="btn btn-primary btn">Lorem ipsum</button>
      </div>
       <div class="col-3 text-center">
        <button type="button" class="btn btn-outline-primary btn">Lorem ipsum</button>
      </div>
       <div class="col-3 text-center">
        <button type="button" class="btn btn-secondary btn">Lorem ipsum</button>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-3">
        <strong>Dimensione large</strong>
      </div>
      <div class="col-3 text-center">
        <button type="button" class="btn btn-primary btn-lg">Lorem ipsum</button>
      </div>
        <div class="col-3 text-center">
        <button type="button" class="btn btn-outline-primary btn-lg">Lorem ipsum</button>
      </div>
        <div class="col-3 text-center">
        <button type="button" class="btn btn-secondary btn-lg">Lorem ipsum</button>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-3">
        <strong>Due righe</strong>
      </div>
      <div class="col-3 text-center">
        <button type="button" class="btn btn-primary btn-lg" style="max-width: 160px;">Lorem ipsum dolor sit</button>
      </div>
       <div class="col-3 text-center">
        <button type="button" class="btn btn-outline-primary btn-lg" style="max-width: 160px;">Lorem ipsum dolor sit</button>
      </div>
       <div class="col-3 text-center">
        <button type="button" class="btn btn-secondary btn-lg" style="max-width: 160px;">Lorem ipsum dolor sit</button>
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

#### Nomeclatura e classi

La **nomenclatura** delle **classi di bootstrap** è differente da quella delle {{ site.data.short.lg }}.  

{% capture example %}
<div class="it25-btn-example">
  <button type="button" class="btn btn-primary">Primario</button>
  <button type="button" class="btn btn-outline-primary">Secondario</button>
  <button type="button" class="btn btn-secondary">Terziario</button>
  <button type="button" class="btn btn-outline-secondary">Quaternario</button>
</div>
<div class="it25-btn-example">
  <button type="button" class="btn btn-primary disabled">Disabled</button>
  <button type="button" class="btn btn-outline-primary disabled">Disabled</button>
  <button type="button" class="btn btn-secondary disabled">Disabled</button>
  <button type="button" class="btn btn-outline-secondary disabled">Disabled</button>
</div>
{% endcapture %}{% include example.html content=example %}


La corrispondenza è:  
<div style="width: 30%">
<table class="table table-bordered table-sm">
  <tr>
    <th>Linee guida</th>
    <th>Bootstrap</th>
  </tr>
  <tr>
    <td>Primario</td>
    <td>primary</td>
  </tr>
  <tr>
    <td>Secondario</td>
    <td>outline-primary</td>
  </tr>
  <tr>
    <td>Terziario</td>
    <td>secondary</td>
  </tr>
  <tr>
    <td>Quaternario</td>
    <td>outline-secondary</td>
  </tr>
</table>
</div>

---

### Distanziamento

<div class="bd-example">
  <div class="container-fluid">
    <div class="row my-3">
      <div class="col-3">
        <strong>Verticale | 16px</strong>
      </div>
      <div class="col-9">
        <button type="button" class="btn btn-primary btn-sm my-3">Lorem ipsum</button>
        <br />
        <button type="button" class="btn btn-outline-primary btn-sm">Lorem ipsum</button>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-3">
        <strong>Orizzontale | 16px</strong>
      </div>
      <div class="col-9">
        <button type="button" class="btn btn-primary btn-sm me-3">Lorem ipsum</button>
        <button type="button" class="btn btn-outline-primary btn-sm">Lorem ipsum</button>
      </div>
    </div>
  </div>
</div>
{% highlight html %}
<div>
  <button type="button" class="btn btn-primary btn-sm my-3">Lorem ipsum</button>
  <br />
  <button type="button" class="btn btn-outline-primary btn-sm">Lorem ipsum</button>
</div>
<div>
  <button type="button" class="btn btn-primary btn-sm me-3">Lorem ipsum</button>
  <button type="button" class="btn btn-outline-primary btn-sm">Lorem ipsum</button>
</div>
{% endhighlight %}

La distanza di 16px corrisponde al valore **3** delle spaziature.  
Nell'esempio:
- la classe `my-3` imposta un *margin* sia *top* che *bottom* 
- la classe `me-3` imposta un *margin-right*.

Per tutti i dettagli sulle **[spaziature]({{ site.baseurl }}/docs/organizzare-gli-spazi/spaziature/)** si veda la {{ site.data.short.dt }}.

### Bottoni con icone

Alcune call to action potrebbero prevedere un’icona accompagnata al testo per enfatizzare l’azione e renderla più chiara e di immediata comprensione per l’utente.

<div class="bd-example">
  <div class="container-fluid">
    <div class="row my-3">
      <div class="col-4 text-center">
        <button type="button" class="btn btn-primary btn-sm btn-icon">
          <svg class="icon icon-white">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use>
          </svg>
        <span class="text-start">Lorem ipsum</span>
        </button>
      </div>
        <div class="col-4 text-center">
        <button type="button" class="btn btn-outline-primary btn-sm btn-icon">
          <svg class="icon icon-primary">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use>
          </svg>
          <span class="text-start">Lorem ipsum</span>
        </button>
      </div>
        <div class="col-4 text-center">
        <button type="button" class="btn btn-secondary btn-sm btn-icon">
          <svg class="icon icon-white">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use>
          </svg>
          <span class="text-start">Lorem ipsum</span>
        </button>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-4 text-center">
        <button type="button" class="btn btn-primary btn-icon">
          <svg class="icon icon-white">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use>
          </svg>
          <span class="text-start">Lorem ipsum</span>
        </button>
      </div>
        <div class="col-4 text-center">
        <button type="button" class="btn btn-outline-primary btn-icon">
          <svg class="icon icon-primary">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use>
          </svg>
          <span class="text-start">Lorem ipsum</span>
        </button>
      </div>
        <div class="col-4 text-center">
        <button type="button" class="btn btn-secondary btn-icon">
          <svg class="icon icon-white">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use>
          </svg>
          <span class="text-start">Lorem ipsum</span>
        </button>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-4 text-center">
        <button type="button" class="btn btn-primary btn-lg btn-icon">
          <svg class="icon icon-white">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use>
          </svg>
          <span class="text-start">Lorem ipsum</span>
        </button>
      </div>
        <div class="col-4 text-center">
        <button type="button" class="btn btn-outline-primary btn-lg btn-icon">
        <svg class="icon icon-primary">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use>
          </svg>
          <span class="text-start">Lorem ipsum</span>
        </button>
      </div>
        <div class="col-4 text-center">
        <button type="button" class="btn btn-secondary btn-lg btn-icon">
        <svg class="icon icon-white">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use>
          </svg>
          <span class="text-start">Lorem ipsum</span>
        </button>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-4 text-center">
        <button type="button" class="btn btn-primary btn-lg btn-icon" style="max-width: 200px;">
        <svg class="icon icon-lg icon-white">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use>
          </svg>
          <span class="text-start">Lorem ipsum dolor sit</span>
        </button>
      </div>
        <div class="col-4 text-center">
        <button type="button" class="btn btn-outline-primary btn-lg btn-icon" style="max-width: 200px;">
        <svg class="icon icon-lg icon-primary">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use>
          </svg>
          <span class="text-start">Lorem ipsum dolor sit</span>
        </button>
      </div>
        <div class="col-4 text-center">
        <button type="button" class="btn btn-secondary btn-lg btn-icon" style="max-width: 200px;">
        <svg class="icon icon-lg icon-white">
            <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use>
          </svg>
          <span class="text-start">Lorem ipsum dolor sit</span>
        </button>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<button type="button" class="btn btn-primary btn-sm">
  <svg class="icon icon-white">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use>
  </svg>
  <span class="text-start">Lorem ipsum</span>
</button>
<button type="button" class="btn btn-primary btn">
  <svg class="icon icon-white">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use>
  </svg>
  <span class="text-start">Lorem ipsum</span>
</button>
<button type="button" class="btn btn-primary btn-lg">
  <svg class="icon zicon-white">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use>
  </svg>
  <span class="text-start">Lorem ipsum</span>
</button>
<button type="button" class="btn btn-primary btn-lg" style="max-width: 200px">
  <svg class="icon icon-lg icon-white">
    <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use>
  </svg>
  <span class="text-start">Lorem ipsum</span>
</button>

{% endhighlight %}

### Bottoni mini

I **Bottoni mini** devono essere utilizzati esclusivamente per creare un linguaggio gerarchico delle azioni, in caso di azioni secondarie rispetto a quelle principali.

<div class="bd-example">
  <div class="container-fluid">
    <div class="row my-3">
      <div class="col">
       <button type="button" class="btn btn-primary btn-xs btn-me">Lorem ipsum</button>
        <button type="button" class="btn btn-outline-primary btn-xs">Lorem ipsum</button>
      </div>
    </div>
  </div>
</div>
{% highlight html %}
<button type="button" class="btn btn-primary btn-xs btn-me">Lorem ipsum</button>
<button type="button" class="btn btn-outline-primary btn-xs">Lorem ipsum</button>
{% endhighlight %}

### Text buttons

Alcune call to action possono essere costituite da solo testo, senza un contenitore.  
Queste vengono applicate al menu orizzontale o in caso di hyperlink.

<div class="bd-example">
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <a class="btn btn-lg btn-link" href="#" role="button">Lorem ipsum</a>
        <a class="btn btn-link" href="#" role="button">Lorem ipsum</a>
        <a class="btn btn-sm btn-link" href="#" role="button">Lorem ipsum</a>
        <a class="btn btn-xs btn-link" href="#" role="button">Lorem ipsum</a>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <a class="btn btn-lg btn-link active" href="#" role="button">Lorem ipsum</a>
        <a class="btn btn-link active" href="#" role="button">Lorem ipsum</a>
        <a class="btn btn-sm btn-link active" href="#" role="button">Lorem ipsum</a>
        <a class="btn btn-xs btn-link active" href="#" role="button">Lorem ipsum</a>
      </div>
    </div>
  </div>
</div>
{% highlight html %}
<a class="btn btn-lg btn-link active" href="#" role="button">Lorem ipsum</a>
<a class="btn btn-link active" href="#" role="button">Lorem ipsum</a>
<a class="btn btn-sm btn-link active" href="#" role="button">Lorem ipsum</a>
<a class="btn btn-xs btn-link active" href="#" role="button">Lorem ipsum</a>
{% endhighlight %}

Nota: la **sottolineatura** è legata alla classe `active`.

### Tags

Il **Tag** evidenzia una parola chiave o un termine associato ad un’informazione e lo classifica.  
Deve essere adottato per la ricerca di informazioni basata su parole chiave.

<div class="bd-example">
  <div class="container-fluid">
    <div class="row my-3">
      <div class="col">
       <button type="button" class="btn btn-primary btn-tag btn-me">Tag button</button>
        <button type="button" class="btn btn-outline-primary btn-tag">Tag button</button>
      </div>
    </div>
  </div>
</div>
{% highlight html %}
<button type="button" class="btn btn-primary btn-tag btn-me">Tag button</button>
<button type="button" class="btn btn-outline-primary btn-tag">Tag button</button>
{% endhighlight %}
