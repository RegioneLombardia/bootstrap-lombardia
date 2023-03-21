---
layout: docs
title: Input-fields
group: inserimento
toc: true
---

{% capture callout %}
####  <svg class="icon icon-success icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg> Introduzione ai Form
Si consiglia vivamente di **leggere** l'**[introduzione ai Form]({{ site.baseurl }}/docs/form/introduzione/)** nella {{ site.data.short.dt }}, **prima** di procedere alla costruzione di una pagina per l'inserimento dati.  
Chiarisce alcuni concetti base della formattazione dei campi di input e della composizione del Form con le classi di Bootstrap Italia.
{% endcapture %}{% include callout.html content=callout type="accessibility" %}


### con label

Un *campo di input* è **preferibile** che abbia una **label**

{% capture example %}
<div class="row">
  <div class="form-group col-4">
    <label for="input-field-01">Label</label>
    <input type="text" class="form-control" id="input-field-01" name="input-field-01">
  </div>
  <div class="form-group col-4">
    <label for="input-field-02" class="active">Label</label>
    <input type="text" class="form-control" id="input-field-02" name="input-field-02" value="Valore del campo">
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


### senza label

Nel caso non abbia un label, **deve** avere almeno un *placeholder* e una label `visually-hidden` o, in alternativa, un `aria-label`, che saranno lette dalle tecnologie assistive.  
Il **placeholder** da solo **non basta**, perché sparisce quando il campo contiene un valore.  
Inoltre è bene specificare **solo una** tra `visually-hidden` e `aria-label`, perché potrebbero venire lette entrambe.

{% capture example %}
<div class="row">
  <div class="form-group col-4">
    <label class="visually-hidden active" for="input-field-03">label non visibile ma letta da screen-reader</label>
    <input type="text" class="form-control" id="input-field-03" name="input-field-03" placeholder="placeholder">
  </div>
  <div class="form-group col-4">
    <input type="text" class="form-control" id="input-field-04" name="input-field-04"
      placeholder="placeholder" aria-label="Label" value="Valore del campo">
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


### con testo esplicativo
Se la label non basta a rendere evidente cosa deve essere inserito, è possibile aggiungere un breve testo esplicativo al di sotto del campo stesso.

{% capture example %}
<div class="row">
  <div class="form-group col-4">
    <label for="input-field-05">Label</label>
    <input type="text" class="form-control" id="input-field-05" name="input-field-05">
    <small class="form-text text-muted">Ulteriore testo informativo</small>
  </div>
  <div class="form-group col-4">
    <label for="input-field-06" class="active">Label</label>
    <input type="text" class="form-control" id="input-field-06" name="input-field-06" value="Valore del campo">
    <small class="form-text text-muted">Ulteriore testo informativo</small>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### con icona

In questo caso l'*input-field* va inserito in un *div* con classe `input group`.  
All'interno di questo, prima dell'input-field, va inserito un ulteriore *div* di classe `input-group-prepend` che conterrà l'icona da visualizzare.  

Con questa configurazione, se il campo è vuoto la **label** viene visualizzata solo quando il campo prende il focus.

{% capture example %}
<div class="row">
  <div class="form-group col-4">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text"><svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg></div>
      </div>
      <label for="input-field-07">Label</label>
      <input type="text" class="form-control" id="input-field-07" name="input-field-07">
    </div>
  </div>
  <div class="form-group col-4">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text"><svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg></div>
      </div>
      <label for="input-field-08" class="active">Label</label>
      <input type="text" class="form-control" id="input-field-08" name="input-field-08" placeholder="placeholder">
    </div>
  </div>
  <div class="form-group col-4">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text"><svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg></div>
      </div>
      <label for="input-field-09" class="active">Label</label>
      <input type="text" class="form-control" id="input-field-09" name="input-field-09" value="Valore del campo">
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


### Validazione

**Messaggio di errore**:  
E' **necessario** spiegare l'errore, anche quando si tratta semplicemente di un campo obbligatorio lasciato in bianco od una data palesemente errata (per esempio: 30 febbraio).  
Se si decide di non mettere il messaggio subito sotto il campo, deve comparire, in testa alla videata, un riquadro rosso con elenco di **TUTTI gli errori**, campo per campo.  
E' opportuno utilizzare questa tecnica anche quando la spiegazione dell'errore è lunga.

**Messaggio di avvertimento**:  
Da utilizzare quando il dato immesso è valido provvisoriamente o con riserva di ulteriori controlli, oppure ha una scadenza di validità ravvicinata.  
Se ne è stato emesso uno, può essere opportuno richiedere un invio/clic di **conferma** (ma **uno solo** anche in presenza di più avvisi).  
Va considerato se è il caso di far apparire un riquadro giallo in testa alla pagina, per maggiore visibilità/chiarezza (soprattutto se c'è più di un messaggio).

**Messaggio di convalida**:  
E' facoltativo. E' molto opportuno nel caso si debba segnalare l'avvenuta convalida del dato dopo che è stato sottoposto a controlli che hanno richiesto tempo (per esempio un avvenuto pagamento).

{% capture example %}
<div class="row">
  <div class="form-group col-4">
    <label class="visually-hidden" for="input-field-10">label non visibile ma letta da screen-reader</label>
    <input type="text" class="form-control is-valid" id="input-field-10" name="input-field-10" value="Text input ">
    <div class="valid-feedback">Validato!</div>
  </div>
  <div class="form-group col-4">
    <label class="visually-hidden" for="input-field-11">label non visibile ma letta da screen-reader</label>
    <input type="text" class="form-control is-valid warning" id="input-field-11" name="input-field-11" value="Text input ">
    <div class="warning-feedback">Possibili problemi.</div>
  </div>
  <div class="form-group col-4">
    <label class="visually-hidden" for="input-field-12">label non visibile ma letta da screen-reader</label>
    <input type="text" class="form-control is-invalid" id="input-field-12" name="input-field-12" value="Text input ">
    <div class="invalid-feedback">Errore bloccante!</div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

La visualizzazione del messaggio al di sotto del campo e dell'icona colorata a fianco, avviene aggiungendo la classe `is-valid` o `is-invalid` sul *tag* `input`.  
Per visualizzare il messaggio di *warning* il tag input deve avere **entrambe** le classi `is-valid` e `warning`.  
Il testo del messaggio va incluso in in un *div* di classe `valid/invalid/warning-feedback`, che ne determina anche la colorazione.


### Validazione con label e icona

{% capture example %}
<div class="row">
  <div class="form-group col-4">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text"><svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg></div>
      </div>
      <label for="input-field-13" class="active">Label</label>
      <input type="text" class="form-control is-valid" id="input-field-13" name="input-field-13" value="Text input ">
      <div class="valid-feedback">Validato!</div>
    </div>
  </div>
  <div class="form-group col-4">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text"><svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg></div>
      </div>
      <label for="input-field-14" class="active">Label</label>
      <input type="text" class="form-control is-valid warning" id="input-field-14" name="input-field-14" value="Text input ">
      <div class="warning-feedback">Possibili problemi.</div>
    </div>
  </div>
  <div class="form-group col-4">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text"><svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg></div>
      </div>
      <label for="input-field-15" class="active">Label</label>
      <input type="text" class="form-control is-invalid" id="input-field-15" name="input-field-15" value="Text input ">
      <div class="invalid-feedback">Errore bloccante!</div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


### Campi di solo output
Nei form, quando è necessario mostrare campi di solo ouput inframmezzati a quelli di input, per mantenere un aspetto coerente per dimensioni e allineamento, è possibile usare per le *label* la classe `output` e per il dato in tag *div* di classe `output-field`.
<div class="bd-example">
{% include esempi-lombardia/account_posta.html %}
</div>

{% highlight html %}
{% include esempi-lombardia/account_posta.html %}
{% endhighlight %}



{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della {{ site.data.short.dt }}:
- **[Input]({{ site.baseurl }}/docs/form/input/)**
- **[Form - introduzione]({{ site.baseurl }}/docs/form/introduzione/)**

Si consiglia anche la lettura dei paragrafi relativi a:
- **[Input numerico]({{ site.baseurl }}/docs/form/input-numerico/)**
- **[Select]({{ site.baseurl }}/docs/form/select/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
