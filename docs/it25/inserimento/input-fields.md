---
layout: it25_docs
title: Input-fields
group: inserimento
toc: true
---

Gli **Input fields** sono le componenti dell’interfaccia dedicate all’inserimento di dati all’interno del sistema.  
Negli esempi sottostanti, si mostrano varie casistiche di componenti per l’input di dati.

{% capture example %}
<div class="row mb-5">
  <div class="col">Stato inattivo</div>
  <div class="col">Stato attivo</div>
  <div class="col">Stato disabilitato</div></div>
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
      <input type="text" class="form-control focus--mouse" id="exampleInputText2">
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <label for="exampleInputText3">Etichetta di esempio</label>
      <input type="text" class="form-control" id="exampleInputText3" disabled>
    </div>
  </div>
</div>
<div class="row mb-5">
  <div class="col-4">Input corretto</div>
  <div class="col-4">Attenzione</div>
  <div class="col-4">Errore</div>
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

---

### Input field con istruzioni

È preferibile inserire istruzioni nei campi di testo, ad esempio quando all’utente si richiede l’inserimento di molteplici informazioni, per agevolare la comprensione e la chiarezza.

{% capture example %}
<div class="row mb-5">
  <div class="col">Stato inattivo</div>
  <div class="col">Stato attivo</div>
  <div class="col">Stato disabilitato</div>
</div>
<div class="row">
  <div class="col">
    <div class="form-group">
      <label class="active" or="exampleInputText4">Etichetta di esempio</label>
      <input type="text" class="form-control" id="exampleInputText4" placeholder="Inserite dato...">
       <small id="formGroupExampleInputWithHelpDescription" class="form-text info">Ulteriore testo informativo</small>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <label class="active" for="exampleInputText5">Etichetta di esempio</label>
      <input type="text" class="form-control focus--mouse" id="exampleInputText5" value="Testo in inserim|">
       <small id="formGroupExampleInputWithHelpDescription" class="form-text info">Ulteriore testo informativo</small>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <label class="active" for="exampleInputText6">Etichetta di esempio</label>
      <input type="text" class="form-control" id="exampleInputText6" disabled value="Testo non modificabile">
       <small id="formGroupExampleInputWithHelpDescription" class="form-text info">Dato derivante da anagrafica</small>
    </div>
  </div>
</div>
<div class="row mb-5">
  <div class="col-4">Input corretto</div>
  <div class="col-4">Attenzione</div>
  <div class="col-4">Errore</div>
</div>
<div class="row">
  <div class="form-group col-4">
    <label class="active" for="input-field-13">Etichetta di esempio</label>
    <input type="text" class="form-control is-valid" id="input-field-13" name="input-field-13" value="Testo immesso" />
     <small class="valid-feedback {{include.display_info}}">Validato!</small>
  </div>
  <div class="form-group col-4">
    <label class="active" for="input-field-14">Etichetta di esempio</label>
    <input type="text" class="form-control is-valid warning" id="input-field-14" name="input-field-14" value="Testo immesso" />
    <small class="warning-feedback {{include.display_info}}">Possibili problemi.</small>
  </div>
  <div class="form-group col-4">
    <label class="active" for="input-field-15">Etichetta di esempio</label>
    <input type="text" class="form-control is-invalid" id="input-field-14" name="input-field-14" value="Testo immesso" />
     <small class="invalid-feedback {{include.display_info}}">Errore bloccante!</small>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

---

### Input field con icone

È possibile aggiungere un’icona al campo di testo come istruzione per la compilazione.

{% capture example %}
<div class="row mb-5">
  <div class="col">Stato inattivo</div>
  <div class="col">Stato attivo</div>
  <div class="col">Stato disabilitato</div>
</div>
<div class="row">
  <div class="col">
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
          </div>
        </div>
        <label for="exampleInputText7">Etichetta di esempio</label>
        <input type="text" class="form-control" id="exampleInputText7">
      </div>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
          </div>
        </div>
        <label class="active" for="exampleInputText7">Etichetta di esempio</label>
        <input type="text" class="form-control focus--mouse" id="exampleInputText7">
      </div>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
          </div>
        </div>
        <label for="exampleInputText8">Etichetta di esempio</label>
        <input type="text" class="form-control" id="exampleInputText8" disabled>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col">
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
          </div>
        </div>
        <label class="active" or="exampleInputText24">Etichetta di esempio</label>
        <input type="text" class="form-control" id="exampleInputText24" placeholder="Inserite dato...">
      </div>
      <small id="formGroupExampleInputWithHelpDescription" class="form-text info">Ulteriore testo informativo</small>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
          </div>
        </div>
        <label class="active" for="exampleInputText25">Etichetta di esempio</label>
        <input type="text" class="form-control focus--mouse" id="exampleInputText25" value="Testo in inserim|">
      </div>
      <small id="formGroupExampleInputWithHelpDescription" class="form-text info">Ulteriore testo informativo</small>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
          </div>
        </div>
        <label class="active" for="exampleInputText26">Etichetta di esempio</label>
        <input type="text" class="form-control" id="exampleInputText26" disabled value="Testo non modificabile">
      </div>
      <small id="formGroupExampleInputWithHelpDescription" class="form-text info">Dato derivante da anagrafica</small>
    </div>
  </div>
</div>
<div class="row mb-5">
  <div class="col-4">Input corretto</div>
  <div class="col-4">Attenzione</div>
  <div class="col-4">Errore</div>
</div>
<div class="row">
  <div class="form-group col-4">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
        </div>
      </div>
      <label class="active" for="input-field-30">Etichetta di esempio</label>
      <input type="text" class="form-control is-valid" id="input-field-30" name="input-field-30" value="Testo immesso" />
    </div>
  </div>
  <div class="form-group col-4">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
        </div>
      </div>
      <label class="active" for="input-field-31">Etichetta di esempio</label>
      <input type="text" class="form-control is-valid warning" id="input-field-31" name="input-field-31" value="Testo immesso" />
    </div>
  </div>
  <div class="form-group col-4">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
        </div>
      </div>
      <label class="active" for="input-field-32">Etichetta di esempio</label>
      <input type="text" class="form-control is-invalid" id="input-field-32" name="input-field-32" value="Testo immesso" />
    </div>
  </div>
</div>
<div class="row">
  <div class="form-group col-4">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
        </div>
      </div>
      <label class="active" for="input-field-33">Etichetta di esempio</label>
      <input type="text" class="form-control is-valid" id="input-field-33" name="input-field-33" value="Testo immesso" />
      <small class="valid-feedback is-valid">Validato!</small>
    </div>
  </div>
  <div class="form-group col-4">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
        </div>
      </div>
      <label class="active" for="input-field-34">Etichetta di esempio</label>
      <input type="text" class="form-control is-valid warning" id="input-field-34" name="input-field-34" value="Testo immesso" />
      <small class="warning-feedback is-valid warning">Possibili problemi.</small>
    </div>
  </div>
  <div class="form-group col-4">
      <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
        </div>
      </div>
      <label class="active" for="input-field-35">Etichetta di esempio</label>
      <input type="text" class="form-control is-invalid" id="input-field-35" name="input-field-35" value="Testo immesso" />
      <small class="invalid-feedback is-invalid">Errore bloccante!</small>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

---

### Password field

<div class="bd-example">
  <div class="row mb-5">
    <div class="col">Stato inattivo</div>
    <div class="col">Stato attivo</div>
  </div>
  <div class="row">
    <div class="col">
  {% include html_docs/input/input_password.html disabled='disabled' id='input1' idbutton='info1' %}
    </div>
    <div class="col">
    {% include html_docs/input/input_password.html id='input2' idbutton='info2' %}
    </div>
  </div>
    <div class="row">
    <div class="col-6">
    {% include html_docs/input/input_password_validazione.html %}
    </div>
  </div>
</div>
{% highlight html %}
  <div class="row mb-5">
    <div class="col">Stato inattivo</div>
    <div class="col">Stato attivo</div>
  </div>
  <div class="row">
    <div class="col">
    {% include html_docs/input/input_password.html disabled='disabled'  id='input3' idbutton='info3' %}
    </div>
    <div class="col">
    {% include html_docs/input/input_password.html id='input4' idbutton='info4' %}
    </div>
  </div>
    <div class="row">
    <div class="col-6">
    {% include html_docs/input/input_password_validazione.html %}
    </div>
  </div>
</div>
{% endhighlight %}

### Search field

<div class="bd-example">
  <div class="row mb-5">
    <div class="col">Stato focus</div>
    <div class="col">Suggerimenti</div>
  </div>
  <div class="row">
    <div class="col">
  {% include html_docs/input/search_field.html  %}
    </div>
    <div class="col">
      {% include html_docs/input/search_field_esempio.html  %}
    </div>
  </div>
</div>
{% highlight html %}
{% include html_docs/input/search_field.html  %}
{% endhighlight %}

### Input number

<div class="bd-example">
  <div class="row mb-5">
    <div class="col">Stato Inattivo</div>
    <div class="col">Stato Attivo</div>
  </div>
  <div class="row">
    <div class="col">
  {% include html_docs/input/input_number.html value=100 id='inputNumber' disabled='disabled'  %}
    </div>
    <div class="col">
     {% include html_docs/input/input_number.html value=100 id='inputNumber' %}
    </div>
  </div>
    <div class="row mb-5">
    <div class="col-6">Formattatore</div>
  </div>
  <div class="row">
    <div class="col">
  {% include html_docs/input/input_number.html value=100 id='inputNumber' type='input-number-percentage' %}
    </div>
    <div class="col">
      {% include html_docs/input/input_number.html value=100 id='inputNumber' type='input-number-currency' %}
    </div>
  </div>
</div>
{% highlight html %}
{% include html_docs/input/search_field.html  %}
{% endhighlight %}

<script>
document.getElementById("exampleInputText2").focus();
// document.getElementById("exampleInputText5").style.color = "#000000";
</script>
