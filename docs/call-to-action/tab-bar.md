---
layout: docs
title: Tab bar
group: call-to-action
toc: yes
---

Le tab bar organizzano e permettono la navigazione tra gruppi di contenuto che sono tra loro correlati ed allo **stesso livello di gerarchia**.

Ogni tab dovrebbe mostrare un **contento distinto** da quello delle altre.  
Le tab **non devono essere usate** per spezzettare un contenuto che **ha bisogno di essere letto in un dato ordine**.

Le **etichette** delle tab devono essere **corte**.  
**Non** devono essere **abbreviate** a meno che non sia strettamente necessario. Le abbreviazioni possono ostacolare la comprensione.

Non vanno mescolate tab con solo testo a tab con icona e testo o con solo icona. In una tab bar devono essere **tutte dello stesso tipo**.


## Tab
Le tipologie di tab, per le tab bar, previste dalle *Linee Guida* per il design degli applicativi di Regione Lombardia* sono tre.


### Solo testo
Le etichette di solo testo sono le più semplici ma spesso quelle che **risultano più chiare ed efficaci** per l'utente.
{% capture example %}
<ul class="nav nav-tabs">
  <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
  <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
  <li class="nav-item"><a class="nav-link disabled" href="#">Label</a></li>
</ul>
{% endcapture %}{% include example.html content=example %}


### Solo icone
Questo tipo di *tab* sono da utilizzare solo **quando si hanno problemi di spazio**, in quanto il significato dell'icona non sempre risulta chiaro per gli utenti.  
E' fortemente consigliato aggiungere un **[tooltip]({{ site.baseurl }}/docs/it25/inserimento/tooltip/)** per aiutare la comprensione.  
Inoltre, per questioni di accessibilità, è sempre **obbligatorio fornire una descrizione** in uno span di classe `sr-only` o con un testo alternativo.  

{% capture example %}
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
      <!-- <span class="sr-only">Breve testo esplicativo</span> -->
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pa"></use></svg>
      <!-- <span class="sr-only">Breve testo esplicativo</span> -->
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
      <!-- <span class="sr-only">Breve testo esplicativo</span> -->
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label" tabindex="-1">
      <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-copy"></use></svg>
      <!-- <span class="sr-only">Breve testo esplicativo</span> -->
    </a>
  </li>
</ul>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    $(function () {
      $('[data-bs-toggle="tooltip"]').tooltip()
    });
  })    
</script>
{% endcapture %}{% include example.html content=example %}


### Testo e Icone
Le *Linee Guida* prevedono che l'icona sia posizionata a destra del testo, cosa non prevista da boostrap-italia.  
Per distanziare correttamente l'icona dal testo è necessario specificare la classe `icon-right` sul tag `ul` che contiene i tab.

{% capture example %}
<ul class="nav nav-tabs nav-tabs-icon-text icon-right">
  <li class="nav-item">
    <a class="nav-link" href="#">
      Label
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
      Label
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pa"></use></svg>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#">
      Label
      <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1">
      Label
      <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-copy"></use></svg>
    </a>
  </li>
</ul>
{% endcapture %}{% include example.html content=example %}


## Esempio
L'esempio cerca di chiarire i criteri espressi nella parte iniziale di questa pagina.

1. **Stesso livello di gerarchia:**  
I dati mostrati dai quattro tab sono concettualmente **legati direttamente** al numero di matricola esposto in alto, al di fuori della tab bar.
2. **Contenuto distinto:**  
Per ogni tab panel l'**insieme dei dati** contenuti è logicamente coerente e **senza intersezioni** con gli insiemi dei dati degli altri pannelli.
3. **Lettura non sequenziale:**  
All'apertura della videata compare aperto il tab relativo a ciò che **si presuppone interessi subito**: i dati anagrafici che mostrano cognome e nome, in modo da accertarsi dell'identità della persona.   
Gli altri pannelli però **possono essere consultati in un qualunque ordine**, in base a ciò che si vuole sapere, senza che ciò ne infici la comprensione.
4. **Etichette corte**:  
Il testo è **essenziale** (ad esempio: *Anagrafica* e non *Dati anagrafici*, *Contratto* non *Riferimenti contrattuali*) ma **non abbreviato**.
5. **Tab dello stesso tipo:**  
Le tab sono tutte testuali.

<div class="bd-example">
<div class="row it25-data-output">
  <div class="h4"><label>Matricola:</label><span>115078</span></div>
</div>
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item"><a class="nav-link active" id="tab1-tab" data-bs-toggle="tab" href="#tabpan-anagrafica" role="tab" aria-controls="tabpan-anagrafica" aria-selected="true">Anagrafica</a></li>
  <li class="nav-item"><a class="nav-link" id="tab2-tab" data-bs-toggle="tab" href="#tabpan-rifcontratto" role="tab" aria-controls="tabpan-rifcontratto" aria-selected="false">Contratto</a></li>
  <li class="nav-item"><a class="nav-link" id="tab3-tab" data-bs-toggle="tab" href="#tabpan-badge" role="tab" aria-controls="tabpan-badge" aria-selected="false">Badge</a></li>
  <li class="nav-item"><a class="nav-link" id="tab4-tab" data-bs-toggle="tab" href="#tabpan-utenze" role="tab" aria-controls="tabpan-utenze" aria-selected="false">Utenze</a></li>
</ul>
<div class="tab-content it25-data-output" id="myTabContent">
  {% include esempi-lombardia/pan_anagrafica.html %}
  {% include esempi-lombardia/pan_rifcontratto.html %}
  {% include esempi-lombardia/pan_badge.html %}
  {% include esempi-lombardia/pan_utenze.html %}
</div>
</div>

{% highlight html %}
<div class="row it25-data-output">
  <div class="h4"><label>Matricola:</label><span>115078</span></div>
</div>
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item"><a class="nav-link active" id="tab1-tab" data-bs-toggle="tab" href="#tabpan-anagrafica"
   role="tab" aria-controls="tabpan-anagrafica" aria-selected="true">Anagrafica</a></li>
  <li class="nav-item"><a class="nav-link" id="tab2-tab" data-bs-toggle="tab" href="#tabpan-rifcontratto"
   role="tab" aria-controls="tabpan-rifcontratto" aria-selected="false">Contratto</a></li>
  <li class="nav-item"><a class="nav-link" id="tab3-tab" data-bs-toggle="tab" href="#tabpan-badge"
   role="tab" aria-controls="tabpan-badge" aria-selected="false">Badge</a></li>
  <li class="nav-item"><a class="nav-link" id="tab4-tab" data-bs-toggle="tab" href="#tabpan-utenze"
   role="tab" aria-controls="tabpan-utenze" aria-selected="false">Utenze</a></li>
</ul>
<div class="tab-content it25-data-output" id="myTabContent">
   include esempi-lombardia/pan_anagrafica.html
   include esempi-lombardia/pan_rifcontratto.html
   include esempi-lombardia/pan_badge.html
   include esempi-lombardia/pan_utenze.html
</div>
{% endhighlight %}


### I tabpan
I pannelli visualizati dai tab sono inseriti all'interno di un *div* di classe `tab-content` e `it25-data-output`.  
Quest'ultima classe è specifica di {{ Bootstrap Regione Lombardia}} e applica a tutte le coppie di tag `label` e `span` un piccolo spaziatura tra la label ed il dato e rende quest'ultimo in grassetto.

Ognuno dei *panel* ha poi una struttura di questo tipo:
{% highlight html %}
{% include esempi-lombardia/pan_utenze.html %}
{% endhighlight %}

Sul *div* principale si notano:
- la classe `fade` che provica il passaggio in *dissolvenza* tra un pannello e l'altro
- l'`id` che deve corrispondere all'attributo `href` del tab corrispondente
- l'attributo `aria-labelledby` per l'accessibilità, che informa concisamente sui dati contenuti nel pannello stesso.

Ogni riga contenuta nel pannello è compresa in un *div* di classe `d-flex justify_content-between`, che fa sì che la distanza tra i singoli *div* contenenti le coppie *label + span* sia ottimizzata automaticamente in base allo spazio a disposizione, andando a capo automaticamente qualora sia necessario, evitando sovrapposizioni.

Le coppie di tag `label` e `span` per la formattazione font normale e grassetto da parte della classe `it25-data-output` del pannello.


## Altri dettagli
Ulteriori informazioni e possibilità circa la costruzione e il funzionamento delle tab bar, in particolare per quanto riguarda l'**accessibilità**, possono essere trovate nella **[{{ site.data.short.dt }}]({{ site.baseurl }}/docs/componenti/tab/)**.

{% capture callout %}
####  <svg class="icon icon-danger icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close-circle"></use></svg> Sfondo scuro
Le tab bar con sfondo scuro **NON VANNO MAI UTILIZZATE**.    
Quindi la classe `nav-dark` non deve mai essere usata.
{% endcapture %}{% include callout.html content=callout type="danger" %}


{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della {{ site.data.short.dt }}:
- **[Tab]({{ site.baseurl }}/docs/componenti/tab/)**
- **[Flex: contenuto giustificato]({{ site.baseurl }}/docs/organizzare-gli-spazi/flex/#contenuto-giustificato)**

{% endcapture %}{% include callout.html content=callout type="info" %}
