---
layout: it25_docs
title: Data entry
group: componenti
toc: true
---

<div class="h4"><span class="badge bg-warning">Da rivedere</span></div>

**Nota**: Tutti i componenti riguardanti l'Input e i Form cambieranno quando verrà rilasciata la versione 3.0.0 di Bootstrap-Italia.  
Al momento il look and feel rimane identico alla precedente versione del Design System di Regione Lombardia.

## Checkbox

Una **Checkbox** (o tickbox) è un controllo che permette all’utente di selezionare scelte multiple in un insieme predefinito di opzioni o possibili scelte.

<div class="bd-example">
  <div class="row">
    <div class="col">Default</div>
    <div class="col">Disabilitato</div>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-check">
        <input id="check1" class="" type="checkbox" checked="checked" />
        <label for="check1" class="">Selezionato</label>
      </div>
    </div>
    <div class="col">
      <div class="form-check">
        <input id="check2" class="" type="checkbox" checked="checked" disabled="" />
        <label for="check2" class="disabled">Selezionato</label>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-check">
        <input id="check3" class="semi-checked" type="checkbox" />
        <label for="check3" class="">Mixed</label>
      </div>
    </div>
    <div class="col">
      <div class="form-check">
        <input id="check4" class="semi-checked" type="checkbox" disabled="" />
        <label for="check4" class="disabled">Mixed</label>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-check">
        <input id="check5" class="" type="checkbox" />
        <label for="check5" class="">Non Selezionato</label>
      </div>
    </div>
    <div class="col">
      <div class="form-check">
        <input id="check6" class="" type="checkbox" disabled="" />
        <label for="check6" class="disabled">Non Selezionato</label>
      </div>
    </div>
  </div>
</div>

---

## Toggle

Un **Toggle** (o switch) è un controllo che permette all’utente di scegliere la modalità on/off di un singolo settaggio – rappresentando l’analogia dell’interruttore accesso/spento.

{% capture example %}
  <div class="row justify-content-between">
    <div class="col-3">
      <div>Default</div>
      <div class="toggles">
        <label for="toggleEsempio1a">
          Non selezionato
          <input type="checkbox" id="toggleEsempio1a">
          <span class="lever leverRight"></span>
        </label>
      </div>
      <div class="toggles">
        <label for="toggleEsempio1b">
          Selezionato
          <input type="checkbox" id="toggleEsempio1b" checked>
          <span class="lever"></span>
        </label>
      </div>
    </div>
    <div class="col-3">
      <div>Disabilitato</div>
      <div class="toggles">
        <label for="toggleEsempio2a">
          Non selezionato
          <input disabled type="checkbox" id="toggleEsempio2a">
          <span class="lever"></span>
        </label>
      </div>
      <div class="toggles">
        <label for="toggleEsempio2b">
          Selezionato
          <input disabled type="checkbox" id="toggleEsempio2b" checked>
          <span class="lever leverRight"></span>
        </label>
      </div> 
    </div>
  </div>
{% endcapture %}{% include example.html content=example %}


---


## Radio button

Un **Radio button** (o option button) è un controllo che permette all’utente di effettuare una scelta singola esclusiva nell’ambito
di un insieme predefinito di opzioni o possibili scelte.

{% capture example %}
  <div class="row">
    <div class="col">
    <div>Default</div>
      <div class="form-check form-check-inline">
        <input name="gruppo1" type="radio" id="radio1">
        <label for="radio1">Non selezionato</label>
      </div>
      <div class="form-check form-check-inline">
        <input name="gruppo1" type="radio" id="radio2" checked>
        <label for="radio2">Selezionato</label>
      </div>
    </div>
    <div class="col">
      <div>Disabilitato</div>
      <div class="form-check form-check-inline">
        <input name="gruppo2" type="radio" id="radio3" disabled>
        <label for="radio3">Non selezionato</label>
      </div>
      <div class="form-check form-check-inline">
        <input name="gruppo2" type="radio" id="radio4" checked disabled>
        <label for="radio4">Selezionato</label>
      </div>
    </div>
  </div>
{% endcapture %}{% include example.html content=example %}


---

## Input

<div class="h4"><span class="badge primary-bg-g1 text-black">In lavorazione</span></div>

I campi **Input** sono i componenti dell’interfaccia dedicate all’inserimento di dati all’interno del sistema.  
Negli esempi sottostanti, si mostrano varie casistiche di componenti per l’input di dati.

Per la validazione è possibile usare [Just Validate](https://just-validate.dev/){:target="_blank"} (si veda la [documentazione tecnica]({{ site.baseurl }}/docs/form/introduzione/#validazione) o l'[esempio Form]({{ site.baseurl }}/docs/it25/esempi/menu-oriz-form/)).  
Altrimenti è possibile impostare autonomamente:
- per i *tag* `input` le classi:
  * `is-valid`
  * `is-valid warning`
  * `is-invalid`
- per i messaggi di errore, le classi
  * `valid-feedback`
  * `warning-feedback`
  * `invalid-feedback`.


{% capture example %}
<div class="row mb-5">
  <div class="col">Default</div>
  <div class="col">Filled</div>
  <div class="col">Disabled</div>
</div>
<div class="row">
  <div class="col">
    <div class="form-group">
      <label for="exampleInputText1">Etichetta di esempio</label>
      <input type="text" class="form-control" id="exampleInputText1">
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <label class="active" for="exampleInputText2">Etichetta di esempio</label>
      <input type="text" class="form-control focus--mouse" id="exampleInputText2"   value="Testo immesso">
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <label class="active" for="exampleInputText3">Etichetta di esempio</label>
      <input type="text" class="form-control" id="exampleInputText3" disabled>
    </div>
  </div>
</div>
<div class="row mb-5">
  <div class="col-4">Success</div>
  <div class="col-4">Warning</div>
  <div class="col-4">Error</div>
</div>
<div class="row">
  <div class="form-group col-4">
    <label class="active" for="input-field-10">Etichetta di esempio</label>
    <input type="text" class="form-control is-valid" id="input-field-10" name="input-field-10" value="Testo immesso" />
  </div>
  <div class="form-group col-4">
    <label class="active" for="input-field-11">Etichetta di esempio</label>
    <input type="text" class="form-control is-valid warning" id="input-field-11" name="input-field-11" value="Testo immesso" />
  </div>
  <div class="form-group col-4">
    <label class="active" for="input-field-12">Etichetta di esempio</label>
    <input type="text" class="form-control is-invalid" id="input-field-12" name="input-field-12" value="Testo immesso" />
  </div>
</div>
{% endcapture %}{% include example.html content=example %}
  
  

{% capture callout %}
#### {{ site.data.short.dt }}
Per i dettagli tecnici sulla costruzione dei vari componenti si vedano le relative pagine:
* **[checkbox]({{ site.baseurl }}/docs/form/checkbox/)**
* **[toggle]({{ site.baseurl }}/docs/form/toggles/)**
* **[radio button]({{ site.baseurl }}/docs/form/radio-button/)**
* **[intruduzione ai form]({{ site.baseurl }}/docs/form/introduzione/)**
* **[input]({{ site.baseurl }}/docs/form/input/)**
* **[select]({{ site.baseurl }}/docs/form/select/)**

{% endcapture %}{% include callout.html content=callout type="info" %}

