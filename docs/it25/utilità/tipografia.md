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
- il font _monospace_ con dimensioni di caratteri normalizzate **Roboto Mono**.

### Titillium Web

{% include html_docs/tipografia/titillium.html %}

### Roboto Mono

{% include html_docs/tipografia/roboto.html %}

<!-- {% capture callout %}

#### <svg class="icon icon-danger icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close-circle"></use></svg> Font Lora

Il font graziato, o _serif_, **Lora**
 **NON VA MAI UTILIZZATO**.
{% endcapture %}{% include callout.html content=callout type="danger" %}

## Citazioni

In un applicativo Web è poco probabile che si debba riportare una citazione; in ogni caso:

{% capture callout %}

#### <svg class="icon icon-danger icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close-circle"></use></svg> Citazioni

**NON VANNO MAI UTILIZZATI** né il **tag** né la **classe** `blockquote`.
{% endcapture %}{% include callout.html content=callout type="danger" %}

{% capture callout %}

#### <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti

Il contenuto di questa pagina si riferisce ai seguenti punti della Documentazione Tecnica:

- **[Tipografia]({{ site.baseurl }}/docs/organizzare-i-contenuti/tipografia/)**
  {% endcapture %}{% include callout.html content=callout type="info" %} -->
