---
layout: it25_docs
title: Colori
group: foundations
toc: true
---

Di seguito sono riportati i colori coerenti con la brand identity digitale di Regione Lombardia e con il brandbook.  
**Si consiglia l’utilizzo di una palette composta da non più di 5 colori per un progetto digitale**.

## Colori Primari

<div class="bd-example-border-utils">
  <p>
  I colori primari sono il Verde Regione Lombardia e il bianco.<br>
  Il <strong class="primary-color">Verde Regione Lombardia</strong> è il colore identificativo dell’intera brand identity e rappresenta la radice per creare altri colori della palette primaria.
  </p>
  <div class="primary-color-container">
    <div class="square-color primary-bg white-color">
      <div>#297A38</div>
      <div>primary</div>
    </div>
    <div class="square-color white-bg shadow">
      <span>#FFFFFF</span>
    </div>
    <div class="clearfix"></div>
   </div>
</div>

<div class="exclude-a11y-check">
{% comment %}Example name: Colori primari{% endcomment %}
{% capture example %}
<div class="primary-bg p-3"><span class="white-color">Testo bianco su background colore primario</span></div>
<div class="primary-border-color border p-3"><span class="primary-color">Testo colore primario su background con bordo primario</span></div>
{% endcapture %}{% include example.html content=example %}
</div>


**Utilizzo delle classi:**

`.primary-bg` : per background color <br>
`.primary-color` : per text color<br>
`.primary-border-color` : per border color<br>


---

### Brand colors

La palette dei colori è suddivisa in tre gruppi: *brand colors*, *neutral* e *triadic*.  
Per utilizzarle è sufficiente utilizzare la relativa classe

#### Green
{% comment %}Example name: Brand colors green{% endcomment %}
{% capture example %}
<div class="d-flex flex-wrap">
  <div class="c-square primary-bg-0"><div>0</div><div>#E4F6E8</div></div>
  <div class="c-square primary-bg-100"><div>100</div><div>#CAEDD0</div></div>
  <div class="c-square primary-bg-200"><div>200</div><div>#98DCA4</div></div>
  <div class="c-square primary-bg-300"><div>300</div><div>#62CA76</div></div>
  <div class="c-square primary-bg-400 text-black"><div>400</div><div>#3BB050</div></div>
  <div class="c-square primary-bg-500 white-color"><div>500</div><div>#297A38</div><div class="dot mt-2"></div></div>
  <div class="c-square primary-bg-600 white-color"><div>600</div><div>#21632D</div></div>
  <div class="c-square primary-bg-700 white-color"><div>700</div><div>#184921</div></div>
  <div class="c-square primary-bg-800 white-color"><div>800</div><div>#113217</div></div>
  <div class="c-square primary-bg-900 white-color"><div>900</div><div>#08170A</div></div>
</div>
{% endcapture %}{% include example.html content=example %} 

**Utilizzo delle classi:**

`.primary-bg-(variante-colore)` : per background color <br>
`.primary-color-(variante-colore)` : per text color<br>
`.primary-border-color-(variante-colore)` : per border color

(es. `.primary-bg-300` per utilizzare come background il colore primario con variante **300** )


#### Cold
{% comment %}Example name: Brand colors cold{% endcomment %}
{% capture example %}
<div class="d-flex flex-wrap">
  <div class="c-square primary-bg-v7 text-black"><div>v7</div><div>#00AEC3</div></div>
  <div class="c-square primary-bg-v6 text-black"><div>v6</div><div>#08B0A0</div></div>
  <div class="c-square primary-bg-v5 text-black"><div>v5</div><div>#009B6F</div></div>
</div>
{% endcapture %}{% include example.html content=example %} 


#### Hot
{% comment %}Example name: Brand colors hot{% endcomment %}
{% capture example %}
<div class="d-flex flex-wrap">
  <div class="c-square primary-bg-v4 text-black"><div>v4</div><div>#009E3D</div></div>
  <div class="c-square primary-bg-v3 text-black"><div>v3</div><div>#52AE32</div></div>
  <div class="c-square primary-bg-v2 text-black"><div>v2</div><div>#95C11F</div></div>
  <div class="c-square primary-bg-v1 white-color"><div>v1</div><div>#005D31</div></div>
</div>
{% endcapture %}{% include example.html content=example %} 


#### News
{% comment %}Example name: Brand colors news{% endcomment %}
{% capture example %}
<div class="d-flex flex-wrap">
  <div class="c-square primary-bg-v8 white-color"><div>v8</div><div>#00362E</div></div>
  <div class="c-square primary-bg-v9 white-color"><div>v9</div><div>#187A6A</div></div>
  <div class="c-square primary-bg-v10"><div>v10</div><div>#EDF7ED</div></div>
</div>
{% endcapture %}{% include example.html content=example %} 


#### Warm
{% comment %}Example name: Brand colors warm{% endcomment %}
{% capture example %}
<div class="d-flex flex-wrap">
  <div class="c-square primary-bg-g1"><div>g1</div><div>#EEAA38</div></div>
</div>
{% endcapture %}{% include example.html content=example %} 



---

## Colori neutrali
I colori neutrali nelle linee guida sono tre, ma le classi previste riguardano solo i primi due (*nero* e *grigio*).   
Il terzo colore neutro è il bianco, pertanto non serve una classe specifica.

<div class="primary-color-container mb-3">
  <div class="square-color neutral-1-bg white-color">
    <div>#000000</div>
    <div>neutral-1</div>
  </div>
  <div class="square-color neutral-2-bg white-color">
    <div>#5F7381</div>
    <div>neutral-2</div>
  </div>
  <div class="square-color white shadow">
    <div>#FFFFFF</div>
    <div>white</div>
  </div>
<div class="clearfix"></div>
</div>

**Utilizzo delle classi:**  
`.neutral(-1/2)-bg` : per background color <br>
`.neutral(-1/2)-color` : per text color<br>
`.neutral(-1/2)-border-color` : per border color<br>

**Esempio:**
<div class="exclude-a11y-check">
{% capture example %}
  <div class="row">
    <div class="col-xs-12 col-md-4">
      <div class="neutral-1-bg p-3"><span class="white-color">Testo bianco su background neutro 1</span></div>
      <div class="neutral-1-border-color border p-3"><span class="neutral-1-color">Testo e bordo neutro 1</span></div>
    </div>
    <div class="col-xs-12 col-md-4">
      <div class="neutral-2-bg white-color p-3">Testo bianco su background neutro 2</div>
      <div class="neutral-2-border-color border p-3"><span class="neutral-2-color">Testo e bordo neutro 2</span></div>
    </div>
  </div>

{% endcapture %}{% include example.html content=example %}
</div>


### Grigi
{% comment %}Example name: Grigi{% endcomment %}
{% capture example %}
<div class="d-flex flex-wrap">
  <div class="c-square grey-bg-0"><div>0</div><div>#FBFBFB</div></div>
  <div class="c-square grey-bg-100"><div>100</div><div>#F6F7F9</div></div>
  <div class="c-square grey-bg-200"><div>200</div><div>#E6E9F0</div><div class="dot mt-2"></div></div>
  <div class="c-square grey-bg-300"><div>300</div><div>#B9C5CC</div></div>
  <div class="c-square grey-bg-400 text-black"><div>400</div><div>#91A3B0</div></div>
  <div class="c-square grey-bg-500 white-color"><div>500</div><div>#5F7381</div><div class="dot mt-2"></div></div>
  <div class="c-square grey-bg-600 white-color"><div>600</div><div>#556875</div></div>
  <div class="c-square grey-bg-700 white-color"><div>700</div><div>#4A5B66</div></div>
  <div class="c-square grey-bg-800 white-color"><div>800</div><div>#404D57</div></div>
  <div class="c-square grey-bg-900 white-color"><div>900</div><div>#293339</div></div>
</div>
{% endcapture %}{% include example.html content=example %} 

**Utilizzo delle classi:**

`.grey-bg-(variante-colore)` : per background color <br>
`.grey-color-(variante-colore)` : per text color<br>
`.grey-border-color-(variante-colore)` : per border color

(es. `.grey-bg-300` per utilizzare come background il colore primario con variante **300** )


---

## Colori Triadici

<div class="primary-color-container">
  <div class="square-color complementary-1-bg text-white">
    <div>#C83A32</div>
    <div>complementary-1</div>
  </div>
  <div class="square-color complementary-2-bg text-black">
    <div>#F19937</div>
    <div>complementary-2</div>
  </div>
  <div class="square-color complementary-3-bg text-black">
    <div>#62AF60</div>
    <div>complementary-3</div>
  </div>
  <div class="clearfix"></div>
</div>

**Utilizzo delle classi:**

`.complementary-(1/2/3)-bg` : per background color <br>
`.complementary-(1/2/3)-color` : per text color<br>
`.complementary-(1/2/3)-border-color` : per border color

{% capture callout %}
#### {{ site.data.short.dt }}
Per l'applicazione di **colori semantici** al testo e allo sfondo si veda alla voce:
- **[Colori]({{ site.baseurl }}/docs/utilities/colori/)**
{% endcapture %}{% include callout.html content=callout type="info" %}


