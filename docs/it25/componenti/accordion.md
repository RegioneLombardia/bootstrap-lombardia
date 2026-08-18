---
layout: it25_docs
title: Accordion
group: componenti
toc: yes
---

Il componente **Accordion** permette di gestire dati e informazioni all’interno della stessa schermata.  
Si tratta di un serie di pannelli apribili nei quali è possibile inserire informazioni di varia natura, sia testuali che numeriche.  
Generalmente si consiglia di utilizzare un massimo **di 5/6 righe di accordion su mobile e 10/15 su desktop**.

### Versione collapse

Nella versione **collapse** dell’accordion è possibile **aprire più di un pannello contemporaneamente**.  
L’esempio seguente mostra l’accordion nel suo stato base, con tutti i pannelli chiusi.

{% comment %}Example name: IT25 Accordion Collapse preview {% endcomment %}
{% capture example %}
{% include html_docs/accordion/accordion.html es-name="collapseEx" %}
{% endcapture %}{% include example.html content=example hide_markup=true class="no_toc_section" %}

{% comment %}Example name: IT25 Accordion Collapse markup {% endcomment %}
{% capture example %}
{% include html_docs/accordion/accordion.html  es-name="collapseEx" snippets="no" %}
{% endcapture %}{% include example.html content=example hide_preview=true %}


### Versione according

Con la versione **according** è possibile aprire un solo pannello alla volta.  
Questo per rendere chiaramente circoscritto il contenuto in oggetto.

Il comportamento si ottiene aggiungendo `data-bs-parent=`*"#id-div-contenitore-di-tutti-gli-item"*  
in ogni *div* contenitore del corpo di un item.

{% comment %}Example name: IT25 Accordion According preview {% endcomment %}
{% capture example %}
{% include html_docs/accordion/accordion.html es-name="accordionEx1" selfClosing="yes" %}
{% endcapture %}{% include example.html content=example hide_markup=true class="no_toc_section" %}

{% comment %}Example name: IT25 Accordion According markup {% endcomment %}
{% capture example %}
{% include html_docs/accordion/accordion.html  es-name="accordionEx1" selfClosing="yes" snippets="no" %}
{% endcapture %}{% include example.html content=example hide_preview=true %}


### Versione nested

La versione **nested** dell’accordion permette di gestire in maniera ottimale la gerarchia delle informazioni inserite all’interno del componente, nel caso in cui si debbano inserire pannelli secondari.  
In questo caso, i pannelli secondari appariranno nidificati all’interno di quelli principali.

{% comment %}Example name: IT25 Accordion Nested preview {% endcomment %}
{% capture example %}
{% include html_docs/accordion/nested.html %}
{% endcapture %}{% include example.html content=example hide_markup=true class="no_toc_section" %}

{% comment %}Example name: IT25 Accordion Nested markup {% endcomment %}
{% capture example %}
{% include html_docs/accordion/nested.html snippets="no" %}
{% endcapture %}{% include example.html content=example hide_preview=true %}


### Item com allegato

{% comment %}Example name: IT25 Accordion item con allegati {% endcomment %}
{% capture example %}
<div class="accordion-item">
  <h2 class="accordion-header" id="heading1all">
    <button class="accordion-button" type="button" data-bs-toggle="collapse"
      data-bs-target="#collapse1all" aria-expanded="true" aria-controls="collapse1all">
    Titolo elemento
    </button>
  </h2>
  <div id="collapse1all" class="accordion-collapse collapse show"
    data-bs-parent="#accordionExampleLft" role="region" aria-labelledby="heading1all">
    <div class="accordion-body">
      Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget.
      Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh.
      Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
      <div class="it25-radius-smoother d-flex justify-content-between align-items-center primary-bg-0 mt-3 p-4">
        <div>
          <a class="h5 fw-normal" href="#">Text</a>
          <p class="font-monospace grey-color-600 mt-2 mb-0">Documento PDF - 100kB</p>
        </div>
        <div>
          <svg class="icon"><use href="/dist/svg/sprites.svg#it-files"></use></svg>
        </div>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example class="no_toc_section" %}

 
