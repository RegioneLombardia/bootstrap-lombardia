---
layout: it25_docs
title: Tipografia
group: utilita
toc: true
---

<style>
  /* Style override for Documentation purposes */
  .no-border {
    border: none;
  }
  .border-text {
    border: 1px dashed;
    border-radius: 40px;
    padding: 1.25em;
  }
</style>

## Font

Le _Linee Guida_ per il design degli applicativi di Regione Lombardia prevedono **solo due** famiglie di caratteri:

- il font senza grazie, o _sans serif_, **Titillium Web**.
- il font _monospace_ con dimensioni di caratteri normalizzate **<span class="font-monospace">Roboto Mono</span>**.


## Tipografia responsive

Esattamente come Bootstrap Italia, {{ site.data.short.bl }} ridimensiona la dimensione di intestazioni e testo modificando le proprietà `font-size` e `line-height` dell'elemento tramite una media query che imposta dimensioni lievemente maggiori per schermi con dimensioni maggiori di _576px_.  
Questa impostazione, unita all'utilizzo di dimensioni in `rem` o in semplici valori numerici all'interno del CSS, fa sì che testo e altre proprietà occupino più spazio quando lo schermo lo permette.

## Intestazioni

Tutte le intestazioni HTML, da `<h1>` fino a `<h6>`, sono disponibili, anche se
è buona norma non utilizzare più di 4 livelli di intestazione.

L'interlinea è impostata con il rapporto di  `1.2` per tutte le intestazioni.

Il {{ site.data.short.dsl }} non prevede il *bold* per le intestazioni.  
Per eliminarlo è sufficiente aggiungere la classe `fw-normal` al tag `<h*>`.

{% comment %}Example name: Intestazioni{% endcomment %}
{% capture example %}
<h1 class="no_toc fw-normal">Intestazione di tipo h1</h1>
<h2 class="no_toc fw-normal">Intestazione di tipo h2</h2>
<h3 class="no_toc fw-normal">Intestazione di tipo h3</h3>
<h4 class="no_toc fw-normal">Intestazione di tipo h4</h4>
<h5 class="no_toc fw-normal">Intestazione di tipo h5</h5>
<h6 class="no_toc fw-normal">Intestazione di tipo h6</h6>
{% endcapture %}{% include example.html content=example %}

Queste le dimensioni nel dettaglio (dimensione del testo, peso del font e interlinea):

<table class="table table-striped table-sm mb-5">
  <thead>
    <tr>
      <th>Intestazione</th>
      <th>Mobile</th>
      <th>Schermo > 576px</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p class="h1 mb-0 fw-normal">h1</p>
      </td>
      <td>40px (2.5rem)<br>font-weight: <del>700</del> 400<br>line-height: 1.2</td>
      <td>48px (3rem)<br>font-weight: <del>700</del> 400<br>line-height: 1.2</td>
    </tr>
    <tr>
      <td>
        <p class="h2 mb-0 fw-normal">h2</p>
      </td>
      <td>32px (2rem)<br>font-weight: <del>700</del> 400<br>line-height: 1.2</td>
      <td>40px (2.5rem)<br>font-weight: <del>700</del> 400<br>line-height: 1.2</td>
    </tr>
    <tr>
      <td>
        <p class="h3 mb-0 fw-normal">h3</p>
      </td>
      <td>28px (1.75rem)<br>font-weight: <del>700</del> 400<br>line-height: 1.2</td>
      <td>32px (2rem)<br>font-weight: <del>700</del> 400<br>line-height: 1.2</td>
    </tr>
    <tr>
      <td>
        <p class="h4 mb-0 fw-normal">h4</p>
      </td>
      <td>24px (1.5rem)<br>font-weight: <del>600</del> 400<br>line-height: 1.2</td>
      <td>28px (1.75rem)<br>font-weight: <del>600</del> 400<br>line-height: 1.2</td>
    </tr>
    <tr>
      <td>
        <p class="h5 mb-0 fw-normal">h5</p>
      </td>
      <td>20px (1.25rem)<br>font-weight: <del>600</del> 400<br>line-height: 1.2</td>
      <td>24px (1.5rem)<br>font-weight: <del>600</del> 400<br>line-height: 1.2</td>
    </tr>
    <tr>
      <td>
        <p class="h6 mb-0 fw-normal">h6</p>
      </td>
      <td>16px (1rem)<br>font-weight: <del>600</del> 400<br>line-height: 1.2</td>
      <td>18px (1.125rem)<br>font-weight: <del>600</del> 400<br>line-height: 1.2</td>
    </tr>
  </tbody>
</table>

**Nota:** il *font-weight* originario viene reimpostato a 400 dalla classe `fw-normal`.

## Body text
Il semplice testo prevede una dimensione del testo di `16px/1rem` su dispositivi mobili e `18px/1.125rem` su schermi con dimensioni maggiori di 576px. 

L'interlinea è impostata con il rapporto di  `1.5`.

{% comment %}Example name: Paragrafi contenuti{% endcomment %}
{% capture example %}
<p>Ullamco laboris nisi ut aliquid ex ea commodi consequat. Curabitur blandit tempus ardua ridiculus sed magna. Curabitur est gravida et libero vitae dictum. Phasellus laoreet lorem vel dolor tempus vehicula. Magna pars studiorum, prodita quaerimus.</p>
<p>Ullamco laboris nisi ut aliquid ex ea commodi consequat. Curabitur blandit tempus ardua ridiculus sed magna. Curabitur est gravida et libero vitae dictum. Phasellus laoreet lorem vel dolor tempus vehicula. Magna pars studiorum, prodita quaerimus.</p>
{% endcapture %}{% include example.html content=example %}


## Dates & Labels
{% comment %}Example name: Dates and Labels{% endcomment %}
{% capture example %}
<p class="font-monospace lh-base grey-color-600">
Dates & Labels<br/>
26 Maggio 2024 | Piazza Cinque Giornate, Milano
</p>
{% endcapture %}{% include example.html content=example %}

{% comment %}Example name: Tipologia{% endcomment %}
{% capture example %}
<p class="fw-semibold small lh-base primary-color-v8">
TIPOLOGIA<br/>
CONTENT TYPE
</p>
{% endcapture %}{% include example.html content=example %}


## Tag
{% comment %}Example name: Tag{% endcomment %}
{% capture example %}
<p class="fw-semibold small lh-base primary-color-v8">
Tags<br/>
Sanità
</p>
{% endcapture %}{% include example.html content=example %}


{% capture callout %}
#### Accessibilità
<div class="container">
  <div class="row">
    <div class="col-sm mt-4">
      <h6>Lunghezza</h6>
      Una riga di testo che permette una lettura confortevole non supera i 75
      caratteri.<br>
      In caso di colonne multiple la lunghezza è compresa tra 40 e 50 caratteri.<br>
      Per i testi a margine, la lunghezza non è mai inferiore ai 12-15 caratteri.
    </div>
    <div class="col-sm mt-4">
      <h6>Allineamento</h6>
      Il testo deve essere allineato a sinistra, salvo eccezioni come ad esempio i testi a margine.<br>
      L’allineamento giustificato e senza sillabazione è sempre da evitare per l’incongrua spaziatura delle parole e la minore leggibilità che comporta.
    </div>
  </div>
  <div class="row">
    <div class="col-sm mt-4">
      <h6>Definizione</h6>
      I paragrafi possono essere distinti o applicando uno spazio tra di essi o in alternativa usando una indentatura di misura pari a quella del leading.
    </div>
    <div class="col-sm mt-4">
      <h6>Link</h6>
      Per distinguere i link dal testo canonico si usa la <u>sottolineatura</u> per i link all’interno di un testo, oppure il <strong>peso bold</strong> per i link isolati.
    </div>
  </div>
</div>
{% endcapture %}{% include callout.html content=callout type="accessibility" %}



{% capture callout %}
## {{ site.data.short.dt }}
Per l'utilizzo delle classi di formattazione tipografica si consulti la voce:  
**[{{ site.data.short.link }}Tipografia]({{ site.baseurl }}/docs/organizzare-i-contenuti/tipografia/)**
{% endcapture %}{% include callout.html content=callout type="info" %}


  
  
