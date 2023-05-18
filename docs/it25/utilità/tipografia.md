---
layout: it25_docs
title: Tipografia
group: utilità
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

Le _Linee Guida_ per il design degli applicativi di Regione Lombardia prevedono **solo due** famiglie di caratteri::

- il font senza grazie, o _sans serif_, **Titillium Web**.
- il font _monospace_ con dimensioni di caratteri normalizzate **<span class="font-monospace">Roboto Mono</span>**.


### Titillium Web

{% include html_docs/tipografia/titillium.html %}

### Roboto Mono

{% include html_docs/tipografia/roboto.html %}


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
#### {{ site.data.short.dt }}
Per l'utilizzo delle classi di formattazione tipografica si consulti la **[relativa pagina]({{ site.baseurl }}/docs/organizzare-i-contenuti/tipografia/)**.
{% endcapture %}{% include callout.html content=callout type="info" %}


  
  
