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

Le _Linee Guida_ per il design degli applicativi di Regione Lombardia prevedono **solo due** famiglie di caratteri:

- il font senza grazie, o _sans serif_, **Titillium Web**.
- il font _monospace_ con dimensioni di caratteri normalizzate **<span class="font-monospace">Roboto Mono</span>**.


### Titillium Web

<div class="bd-example no-border">
  <div class="row">
    <div class="col">
      <div class="border-text">
        <div class="row">
          <div class="col">
            <p class="h2">Titillium Web Desktop</p>
          </div>
          <div class="col">
            <p class="h1">H1 Bold 48px/60px</p>
            <p class="h2">H2 Bold 40px/48px</p>
            <p class="h3">H3 Bold 32px/40px</p>
            <p class="h4">H4 SemiBold 28px/40px</p>
            <p class="h5">H5 Regular 24px/40px</p>
            <p class="h6">H6 SemiBold 18px/28px</p>
            <p>Body Text Regular 18px</p>
            <p class="small fw-semibold">Caption Small SemiBold 16px</p>
            <p class="x-small">Caption extra small Regular 14px</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="border-text">
        <div class="row">
          <div class="col">
            <p class="h2">Titillium Web Mobile</p>
          </div>
          <div class="col">
            <p class="h1">H1 Bold 40px/48px</p>
            <p class="h2">H2 Bold 32px/40px</p>
            <p class="h3">H3 Bold 28px/32px</p>
            <p class="h4">H4 SemiBold 24px/28px</p>
            <p class="h5">H5 Regular 20px/24px</p>
            <p class="h6">H6 SemiBold 16px/24px</p>
            <p>Body Text Regular 18px</p>
            <p class="small fw-semibold">Caption Small SemiBold 16px</p>
            <p class="x-small">Caption extra small Regular 14px</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


### Roboto Mono

<div class="bd-example no-border">
  <div class="row">
    <div class="col">
      <div class="border-text">
        <div class="row">
          <div class="col-4 text-center">
            <p class="h2 font-monospace">Roboto Mono</p>
          </div>
          <div class="col-8">
            <p class="h1 font-monospace">H1 Bold 40px</p>
            <p class="h2 font-monospace">H2 Bold 32px</p>
            <p class="h3 font-monospace">H3 Bold 28px</p>
            <p class="h4 font-monospace">H4 Bold 24px</p>
            <p class="h5 font-monospace">H5 Regular 20px</p>
            <p class="h6 font-monospace">H6 Bold 16px</p>
            <p class="font-monospace">Body Text Regular 18px</p>
            <p class="fw-semibold font-monospace small">Caption Small bold 16px</p>
            <p class="font-monospace x-small">Caption extra small Regular 14px</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col"></div>
  </div>
</div>


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


  
  
