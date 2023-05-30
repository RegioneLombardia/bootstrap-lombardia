---
layout: it25_docs
title: Colori
group: utilità
toc: true
---

Di seguito sono riportati i colori coerenti con la brand identity digitale di Regione Lombardia e con il brandbook.  
**Si consiglia l’utilizzo di una palette composta da non più di 5 colori per un progetto digitale**.

## Colori Primari
  Il <strong class="primary-color">Verde</strong> è il colore identificativo dell’intera brand identity e rappresenta la radice per creare altri colori della palette primaria.
  
  {% include html_docs/colori/colori_primari.html %}

  <div class="primary-color-container mb-3">
    <div class="square-color primary-bg white-color">
      <div>#2A7A38</div>
      <div>primary</div>
    </div>
    <div class="square-color primary-blue-bg white-color">
      <div>#003354</div>
      <div>primary-blue</div>
    </div>
    <div class="square-color primary-gray-bg white-color">
      <div>#597483</div>
      <div>primary-gray</div>
    </div>
    <div class="square-color white-bg shadow">
      <div>#FFFFFF</div>
      <div>white</div>
    </div>
    <div class="clearfix"></div>
  </div>


**Utilizzo delle classi:**  
`.primary(-blue/gray)-bg` : per background color <br>
`.primary(-blue/gray)-color` : per text color<br>
`.primary(-blue/gray)-border-color` : per border color<br>

**Esempio:**
<div class="exclude-a11y-check">
{% capture example %}
  <div class="row">
    <div class="col-xs-12 col-md-4">
      <div class="primary-bg p-3"><span class="white-color">Testo bianco su background primario</span></div>
      <div class="primary-border-color border p-3"><span class="primary-color">Testo e bordo primario</span></div><br/>
    </div>
    <div class="col-xs-12 col-md-4">
      <div class="primary-blue-bg p-3"><span class="white-color">Testo bianco su background blu primario</span></div>
      <div class="primary-blue-border-color border p-3"><span class="primary-blue-color">Testo e bordo blu primario</span></div><br/>
    </div>
    <div class="col-xs-12 col-md-4">
      <div class="primary-gray-bg p-3"><span class="white-color">Testo bianco su background grigio primario</span></div>
      <div class="primary-gray-border-color border p-3"><span class="primary-gray-color">Testo e bordo grigio primario</span></div>
    </div>
  </div>

{% endcapture %}{% include example.html content=example %}
</div>

---

### Varianti colore principale

Il **colore primario principale** possiede tre tipologie di varianti monocromatiche.  
Per utilizzarle è sufficiente utilizzare la relativa classe

**Utilizzo delle classi:**

`.primary-bg-(variante-colore)` : per background color <br>
`.primary-color-(variante-colore)` : per text color<br>
`.primary-border-color-(variante-colore)` : per border color

(es. `.primary-bg-a5` per utilizzare come background il colore primario con variante **a5** )

<div class="exclude-a11y-check">

<div class="bd-example-border-utils">
  <div class="row">
    <div class="col-xs-12 col-md-4 col-xxl-3">
      <p>Tinte e ombre</p>
      <div class="c-line primary-bg-a1"><div class="d-flex justify-content-between"><div>a1</div><div class="text-end">#D5EBD8</div></div></div>
      <div class="c-line primary-bg-a2"><div class="d-flex justify-content-between"><span>a2</span><span class="text-end">#BEE0C3</span></div></div>
      <div class="c-line primary-bg-a3"><div class="d-flex justify-content-between"><span>a3</span><span class="text-end">#95D09D</span></div></div>
      <div class="c-line primary-bg-a4"><div class="d-flex justify-content-between"><span>a4</span><span class="text-end">#71C583</span></div></div>
      <div class="c-line primary-bg-a5"><div class="d-flex justify-content-between"><span>a5</span><span class="text-end">#47B66D</span></div></div>
      <div class="c-line white-color primary-bg-a6"><div class="d-flex justify-content-between"><span>a6</span><span class="text-end">#00AF5D</span></div></div>
      <div class="c-line white-color primary-bg-a7"><div class="d-flex justify-content-between"><span>a7</span><span class="text-end">#00A747</span></div></div>
      <div class="c-line white-color primary-bg-a8"><div class="d-flex justify-content-between"><span>a8</span><span class="text-end">#009647</span></div></div>
      <div class="c-line white-color primary-bg-a9"><div class="d-flex justify-content-between"><span>a9</span><span class="text-end">#008342</span></div></div>
      <div class="c-line white-color primary-bg-a10"><div class="d-flex justify-content-between"><span>a10</span><span class="text-end">#006A3B</span></div></div>
      <div class="c-line white-color primary-bg-a11"><div class="d-flex justify-content-between"><span>a11</span><span class="text-end">#005A30</span></div></div>
      <div class="c-line white-color primary-bg-a12"><div class="d-flex justify-content-between"><span>a12</span><span class="text-end">#004626</span></div></div>
    </div>
    <div class="col-xs-12 col-md-4 col-xxl-3">
      <p>Toni</p>
      <div class="c-line primary-bg-b1 white-color"><div class="d-flex justify-content-between"><span>b1</span><span class="text-end">#00A747</span></div></div>
      <div class="c-line primary-bg-b2 white-color"><div class="d-flex justify-content-between"><span>b2</span><span class="text-end">#009644</span></div></div>
      <div class="c-line primary-bg-b3 white-color"><div class="d-flex justify-content-between"><span>b3</span><span class="text-end">#008242</span></div></div>
      <div class="c-line primary-bg-b4 white-color"><div class="d-flex justify-content-between"><span>b4</span><span class="text-end">#006C3B</span></div></div>
      <div class="c-line primary-bg-b5 white-color"><div class="d-flex justify-content-between"><span>b5</span><span class="text-end">#005834</span></div></div>
      <div class="c-line primary-bg-b6 white-color"><div class="d-flex justify-content-between"><span>b6</span><span class="text-end">#10442B</span></div></div>
      <div class="c-line primary-bg-b7 white-color"><div class="d-flex justify-content-between"><span>b7</span><span class="text-end">#143120</span></div></div>
      <div class="c-line primary-bg-b8 white-color"><div class="d-flex justify-content-between"><span>b8</span><span class="text-end">#122017</span></div></div>
    </div>
    <div class="col-xs-12 col-md-4 col-xxl-3">
      <p>Variazione di saturazione</p>
      <div class="c-line primary-bg-c1"><div class="d-flex justify-content-between"><span>c1</span><span class="text-end">#F2F9F2</span></div></div>
      <div class="c-line primary-bg-c2"><div class="d-flex justify-content-between"><span>c2</span><span class="text-end">#F0F7EE</span></div></div>
      <div class="c-line primary-bg-c3"><div class="d-flex justify-content-between"><span>c3</span><span class="text-end">#E0EEDE</span></div></div>
      <div class="c-line primary-bg-c4"><div class="d-flex justify-content-between"><span>c4</span><span class="text-end">#C9E1C7</span></div></div>
      <div class="c-line primary-bg-c5"><div class="d-flex justify-content-between"><span>c5</span><span class="text-end">#B1D6B0</span></div></div>
      <div class="c-line primary-bg-c6"><div class="d-flex justify-content-between"><span>c6</span><span class="text-end">#A4CEA7</span></div></div>
      <div class="c-line primary-bg-c7"><div class="d-flex justify-content-between"><span>c7</span><span class="text-end">#8BC38F</span></div></div>
      <div class="c-line primary-bg-c8"><div class="d-flex justify-content-between"><span>c8</span><span class="text-end">#77BA7B</span></div></div>
      <div class="c-line primary-bg-c9"><div class="d-flex justify-content-between"><span>c9</span><span class="text-end">#64B56C</span></div></div>
      <div class="c-line primary-bg-c10"><div class="d-flex justify-content-between"><span>c10</span><span class="text-end">#4FAD58</span></div></div>
      <div class="c-line white-color primary-bg-c11"><div class="d-flex justify-content-between"><span>c11</span><span class="text-end">#469B54</span></div></div>
      <div class="c-line white-color primary-bg-c12"><div class="d-flex justify-content-between"><span>c12</span><span class="text-end">#357A46</span></div></div>
    </div>
  </div>
</div>
 
</div>
---

## Colori neutrali
I colori neutrali nelle linee guida sono tre, ma le classi previste riguardano solo i primi due (*blu* e *grigio*).   
Il terzo colore neutro è molto simile al bianco, pertanto può essere utilizzato al suo posto ove necessario.

{% include html_docs/colori/colori_neutrali.html %}

<div class="primary-color-container mb-3">
  <div class="square-color neutral-1-bg white-color">
    <div>#1B304C</div>
    <div>neutral-1</div>
  </div>
  <div class="square-color neutral-2-bg">
    <div>#E6E9F0</div>
    <div>neutral-2</div>
  </div>
  <div class="square-color neutral-3-bg shadow">
    <div>#FBFBFF</div>
    <div>neutral-3</div>
  </div>
<div class="clearfix"></div>
</div>

**Utilizzo delle classi:**  
`.neutral(-1/2/3)-bg` : per background color <br>
`.neutral(-1/2/3)-color` : per text color<br>
`.neutral(-1/2/3)-border-color` : per border color<br>

**Esempio:**
<div class="exclude-a11y-check">
{% capture example %}
  <div class="row">
    <div class="col-xs-12 col-md-4">
      <div class="neutral-1-bg p-3"><span class="white-color">Testo bianco su background neutro 1</span></div>
      <div class="neutral-1-border-color border p-3"><span class="neutral-1-color">Testo e bordo neutro 1</span></div><br/>
    </div>
    <div class="col-xs-12 col-md-4">
      <div class="neutral-2-bg p-3">Testo su background neutro 2</div>
      <div class="neutral-1-bg neutral-2-border-color border p-3"><span class="neutral-2-color">Testo e bordo neutro 2</span></div><br/>
    </div>
    <div class="col-xs-12 col-md-4">
      <div class="neutral-3-bg p-3">Testo su background neutro 3</div>
      <div class="neutral-1-bg neutral-3-border-color border p-3"><span class="neutral-3-color">Testo e bordo neutro 3</span></div><br/>
    </div>
  </div>

{% endcapture %}{% include example.html content=example %}
</div>



### Varianti colori neutrali

**Utilizzo delle classi:**

`.neutral-(+ 1/2 +)-bg- + variante-colore` : per background color <br>
`.neutral-(+ 1/2 +)-color- + variante-colore` : per text color<br>
`.neutral-(+ 1/2 +)-border-color- + variante-colore` : per border color

(es. `.neutral-1-bg-a5` per utilizzare come background il colore neutrale **1** con variante **a5** )

<div class="exclude-a11y-check">

<div class="row">
  <div class="col-md-4 col-xxl-3">
    <div class="c-line neutral-1-bg-a1"><div class="d-flex justify-content-between"><div>a1</div><div class="text-end">#E1E7EA</div></div></div>
    <div class="c-line neutral-1-bg-a2"><div class="d-flex justify-content-between"><div>a2</div><div class="text-end">#CDCFD6</div></div></div>
    <div class="c-line neutral-1-bg-a3"><div class="d-flex justify-content-between"><div>a3</div><div class="text-end">#A7B7CE</div></div></div>
    <div class="c-line neutral-1-bg-a4"><div class="d-flex justify-content-between"><div>a4</div><div class="text-end">#8FA3B1</div></div></div>
    <div class="c-line white-color neutral-1-bg-a5"><div class="d-flex justify-content-between"><div>a5</div><div class="text-end">#778B9B</div></div></div>
    <div class="c-line white-color neutral-1-bg-a6"><div class="d-flex justify-content-between"><div>a6</div><div class="text-end">#5C7789</div></div></div>
    <div class="c-line white-color neutral-1-bg-a7"><div class="d-flex justify-content-between"><div>a7</div><div class="text-end">#406478</div></div></div>
    <div class="c-line white-color neutral-1-bg-a8"><div class="d-flex justify-content-between"><div>a8</div><div class="text-end">#2A5166</div></div></div>
    <div class="c-line white-color neutral-1-bg-a9"><div class="d-flex justify-content-between"><div>a9</div><div class="text-end">#103D57</div></div></div>
    <div class="c-line white-color neutral-1-bg-a10"><div class="d-flex justify-content-between"><div>a10</div><div class="text-end">#002C47</div></div></div>
  </div>
  <div class="col-md-4 col-xxl-3">
    <div class="c-line neutral-2-bg-b1"><div class="d-flex justify-content-between"><div>b1</div><div class="text-end">#DFE2EF</div></div></div>
    <div class="c-line white-color neutral-2-bg-b2"><div class="d-flex justify-content-between"><div>b2</div><div class="text-end">#B1B9C8</div></div></div>
    <div class="c-line white-color neutral-2-bg-b3"><div class="d-flex justify-content-between"><div>b3</div><div class="text-end">#87BE9C</div></div></div>
    <div class="c-line white-color neutral-2-bg-b4"><div class="d-flex justify-content-between"><div>b4</div><div class="text-end">#676A75</div></div></div>
    <div class="c-line white-color neutral-2-bg-b5"><div class="d-flex justify-content-between"><div>b5</div><div class="text-end">#424A4F</div></div></div>
    <div class="c-line white-color neutral-2-bg-b6"><div class="d-flex justify-content-between"><div>b6</div><div class="text-end">#272B2E</div></div></div>
    <div class="c-line white-color neutral-2-bg-b7"><div class="d-flex justify-content-between"><div>b7</div><div class="text-end">#141719</div></div></div>
  </div>
</div>

</div>

---

## Colori Triadici

<div class="exclude-a11y-check">
  <div class="d-flex align-items-start flex-column mb-3">
    <div class="p-2">
      <div class="rounded-color complementary-1-bg text-end">
        <span class="white-color align-middle fw-semibold">#C83A32</span>
      </div>
    </div>
    <div class="p-2">
      <div class="rounded-color complementary-2-bg shadow text-end">
        <span class="white-color align-middle fw-semibold">#F19937</span>
      </div>
    </div>
    <div class="p-2">
      <div class="rounded-color complementary-3-bg shadow text-end">
        <span class="white-color align-middle fw-semibold">#62AF90</span>
      </div>
    </div>
  </div>
  <div class="primary-color-container">
    <div class="square-color complementary-1-bg text-white">
      <div>#C83A32</div>
      <div>complementary-1</div>
    </div>
    <div class="square-color complementary-2-bg text-white">
      <div>#F19937</div>
      <div>complementary-2</div>
    </div>
    <div class="square-color complementary-3-bg text-white">
      <div>#62AF90</div>
      <div>complementary-3</div>
    </div>
    <div class="clearfix"></div>
  </div>
</div>
<br>

**Utilizzo delle classi:**

`.complementary-(1/2/3)-bg` : per background color <br>
`.complementary-(1/2/3)-color` : per text color<br>
`.complementary-(1/2/3)-border-color` : per border color


### Varianti colori triadici
{% capture callout %}
#### <svg class="icon icon-warning icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-warning-circle"></use></svg> Utilizzabili SOLO nei minisiti, siti tematici e {{ site.data.short.lp }}  
Per motivi di accessibilità, utilizzare i colori triadici all’interno di elementi decorativi e di segnalazione (es. segnalazioni di errore, avvisi di attenzione, azione eseguita correttamente), ma **non per i testi**.
{% endcapture %}{% include callout.html content=callout type="warning" %}

**Utilizzo delle classi:**

`.complementary-(1/2/3)-bg- + variante-colore` : per background color <br>
`.complementary-(1/2/3)-color- + variante-colore` : per text color<br>
`.complementary-(1/2/3)-border-color- + variante-colore` : per border color

(es. `.complementary-1-bg-a5` per utilizzare come background il colore complementare **1** con variante **a4** )

<div class="exclude-a11y-check">
<div class="row">
   <div class="col-sm-12 col-md-2">
      <div class="c-line complementary-1-bg-a1"><div class="d-flex justify-content-between"><div>a1</div><div class="text-end">#EBA8AA</div></div></div>
      <div class="c-line complementary-1-bg-a2"><div class="d-flex justify-content-between"><div>a2</div><div class="text-end">#E68E95</div></div></div>
      <div class="c-line white-color complementary-1-bg-a3"><div class="d-flex justify-content-between"><div>a3</div><div class="text-end">#E3767C</div></div></div>
      <div class="c-line white-color complementary-1-bg-a4"><div class="d-flex justify-content-between"><div>a4</div><div class="text-end">#DE5F63</div></div></div>
      <div class="c-line white-color complementary-1-bg-a5"><div class="d-flex justify-content-between"><div>a5</div><div class="text-end">#DD4848</div></div></div>
      <div class="c-line white-color complementary-1-bg-a6"><div class="d-flex justify-content-between"><div>a6</div><div class="text-end">#D93831</div></div></div>
      <div class="c-line white-color complementary-1-bg-a7"><div class="d-flex justify-content-between"><div>a7</div><div class="text-end">#C03330</div></div></div>
      <div class="c-line white-color complementary-1-bg-a8"><div class="d-flex justify-content-between"><div>a8</div><div class="text-end">#A6302C</div></div></div>
      <div class="c-line white-color complementary-1-bg-a9"><div class="d-flex justify-content-between"><div>a9</div><div class="text-end">#8D2622</div></div></div>
      <div class="c-line white-color complementary-1-bg-a10"><div class="d-flex justify-content-between"><div>a10</div><div class="text-end">#731E1B</div></div></div>
      <div class="c-line white-color complementary-1-bg-a11"><div class="d-flex justify-content-between"><div>a11</div><div class="text-end">#551313</div></div></div>
      <div class="c-line white-color complementary-1-bg-a12"><div class="d-flex justify-content-between"><div>a12</div><div class="text-end">#261010</div></div></div>
   </div>
   <div class="col-sm-12 col-md-2">
      <div class="c-line white-color complementary-1-bg-b1"><div class="d-flex justify-content-between"><div>b1</div><div class="text-end">#DD425F</div></div></div>
      <div class="c-line white-color complementary-1-bg-b2"><div class="d-flex justify-content-between"><div>b2</div><div class="text-end">#DC4F63</div></div></div>
      <div class="c-line white-color complementary-1-bg-b3"><div class="d-flex justify-content-between"><div>b3</div><div class="text-end">#C5596B</div></div></div>
      <div class="c-line white-color complementary-1-bg-b4"><div class="d-flex justify-content-between"><div>b4</div><div class="text-end">#AD5E6B</div></div></div>
      <div class="c-line white-color complementary-1-bg-b5"><div class="d-flex justify-content-between"><div>b5</div><div class="text-end">#925D66</div></div></div>
      <div class="c-line white-color complementary-1-bg-b6"><div class="d-flex justify-content-between"><div>b6</div><div class="text-end">#785A5D</div></div></div>
      <div class="c-line white-color complementary-1-bg-b7"><div class="d-flex justify-content-between"><div>b7</div><div class="text-end">#5D5151</div></div></div>
      <div class="c-line white-color complementary-1-bg-b8"><div class="d-flex justify-content-between"><div>b8</div><div class="text-end">#444143</div></div></div>
   </div>
   <div class="col-sm-12 col-md-2">
      <div class="c-line complementary-2-bg-a1"><div class="d-flex justify-content-between"><div>a1</div><div class="text-end">#F9E2BF</div></div></div>
      <div class="c-line complementary-2-bg-a2"><div class="d-flex justify-content-between"><div>a2</div><div class="text-end">#F8D29A</div></div></div>
      <div class="c-line white-color complementary-2-bg-a3"><div class="d-flex justify-content-between"><div>a3</div><div class="text-end">#F3C175</div></div></div>
      <div class="c-line white-color complementary-2-bg-a4"><div class="d-flex justify-content-between"><div>a4</div><div class="text-end">#F0AF4F</div></div></div>
      <div class="c-line white-color complementary-2-bg-a5"><div class="d-flex justify-content-between"><div>a5</div><div class="text-end">#EDA140</div></div></div>
      <div class="c-line white-color complementary-2-bg-a6"><div class="d-flex justify-content-between"><div>a6</div><div class="text-end">#EA923E</div></div></div>
      <div class="c-line white-color complementary-2-bg-a7"><div class="d-flex justify-content-between"><div>a7</div><div class="text-end">#D67F3A</div></div></div>
      <div class="c-line white-color complementary-2-bg-a8"><div class="d-flex justify-content-between"><div>a8</div><div class="text-end">#B26A35</div></div></div>
      <div class="c-line white-color complementary-2-bg-a9"><div class="d-flex justify-content-between"><div>a9</div><div class="text-end">#8C552C</div></div></div>
      <div class="c-line white-color complementary-2-bg-a10"><div class="d-flex justify-content-between"><div>a10</div><div class="text-end">#624020</div></div></div>
      <div class="c-line white-color complementary-2-bg-a11"><div class="d-flex justify-content-between"><div>a11</div><div class="text-end">#3D2813</div></div></div>
      <div class="c-line white-color complementary-2-bg-a12"><div class="d-flex justify-content-between"><div>a12</div><div class="text-end">#1E150E</div></div></div>
   </div>
   <div class="col-sm-12 col-md-2">
      <div class="c-line white-color complementary-2-bg-a6"><div class="d-flex justify-content-between"><div>a6</div><div class="text-end">#EA923E</div></div></div>
      <div class="c-line white-color complementary-2-bg-b1"><div class="d-flex justify-content-between"><div>b1</div><div class="text-end">#E4953E</div></div></div>
      <div class="c-line white-color complementary-2-bg-b2"><div class="d-flex justify-content-between"><div>b2</div><div class="text-end">#CA8C3E</div></div></div>
      <div class="c-line white-color complementary-2-bg-b3"><div class="d-flex justify-content-between"><div>b3</div><div class="text-end">#B4803C</div></div></div>
      <div class="c-line white-color complementary-2-bg-b4"><div class="d-flex justify-content-between"><div>b4</div><div class="text-end">#9A743C</div></div></div>
      <div class="c-line white-color complementary-2-bg-b5"><div class="d-flex justify-content-between"><div>b5</div><div class="text-end">#81653E</div></div></div>
      <div class="c-line white-color complementary-2-bg-b6"><div class="d-flex justify-content-between"><div>b6</div><div class="text-end">#66583C</div></div></div>
      <div class="c-line white-color complementary-2-bg-b7"><div class="d-flex justify-content-between"><div>b7</div><div class="text-end">#4D4236</div></div></div>
      <div class="c-line white-color complementary-2-bg-b8"><div class="d-flex justify-content-between"><div>b8</div><div class="text-end">#342E2A</div></div></div>
   </div>
   <div class="col-sm-12 col-md-2">
      <div class="c-line complementary-3-bg-a1"><div class="d-flex justify-content-between"><div>a1</div><div class="text-end">#DFEEDE</div></div></div>
      <div class="c-line complementary-3-bg-a2"><div class="d-flex justify-content-between"><div>a2</div><div class="text-end">#CEE4CB</div></div></div>
      <div class="c-line white-color complementary-3-bg-a3"><div class="d-flex justify-content-between"><div>a3</div><div class="text-end">#B1D4A9</div></div></div>
      <div class="c-line white-color complementary-3-bg-a4"><div class="d-flex justify-content-between"><div>a4</div><div class="text-end">#99C992</div></div></div>
      <div class="c-line white-color complementary-3-bg-a5"><div class="d-flex justify-content-between"><div>a5</div><div class="text-end">#7DBC7B</div></div></div>
      <div class="c-line white-color complementary-3-bg-a6"><div class="d-flex justify-content-between"><div>a6</div><div class="text-end">#64B56C</div></div></div>
      <div class="c-line white-color complementary-3-bg-a7"><div class="d-flex justify-content-between"><div>a7</div><div class="text-end">#4FAD58</div></div></div>
      <div class="c-line white-color complementary-3-bg-a8"><div class="d-flex justify-content-between"><div>a8</div><div class="text-end">#479E56</div></div></div>
      <div class="c-line white-color complementary-3-bg-a9"><div class="d-flex justify-content-between"><div>a9</div><div class="text-end">#3E8B4E</div></div></div>
      <div class="c-line white-color complementary-3-bg-a10"><div class="d-flex justify-content-between"><div>a10</div><div class="text-end">#337545</div></div></div>
      <div class="c-line white-color complementary-3-bg-a11"><div class="d-flex justify-content-between"><div>a11</div><div class="text-end">#2A6339</div></div></div>
      <div class="c-line white-color complementary-3-bg-a12"><div class="d-flex justify-content-between"><div>a12</div><div class="text-end">#214D2B</div></div></div>
   </div>
   <div class="col-sm-12 col-md-2">
      <div class="c-line white-color complementary-3-bg-b1"><div class="d-flex justify-content-between"><div>b1</div><div class="text-end">#4FAD58</div></div></div>
      <div class="c-line white-color complementary-3-bg-b2"><div class="d-flex justify-content-between"><div>b2</div><div class="text-end">#489F54</div></div></div>
      <div class="c-line white-color complementary-3-bg-b3"><div class="d-flex justify-content-between"><div>b3</div><div class="text-end">#3F8A4F</div></div></div>
      <div class="c-line white-color complementary-3-bg-b4"><div class="d-flex justify-content-between"><div>b4</div><div class="text-end">#3D7546</div></div></div>
      <div class="c-line white-color complementary-3-bg-b5"><div class="d-flex justify-content-between"><div>b5</div><div class="text-end">#33603D</div></div></div>
      <div class="c-line white-color complementary-3-bg-b6"><div class="d-flex justify-content-between"><div>b6</div><div class="text-end">#2B4C31</div></div></div>
      <div class="c-line white-color complementary-3-bg-b7"><div class="d-flex justify-content-between"><div>b7</div><div class="text-end">#223826</div></div></div>
      <div class="c-line white-color complementary-3-bg-b8"><div class="d-flex justify-content-between"><div>b8</div><div class="text-end">#172418</div></div></div>
   </div>
</div>
</div>


{% capture callout %}
#### {{ site.data.short.dt }}
Per l'applicazione di **colori semantici** al testo e allo sfondo si veda alla voce:
- **[Colori]({{ site.baseurl }}/docs/utilities/colori/)**
{% endcapture %}{% include callout.html content=callout type="info" %}


