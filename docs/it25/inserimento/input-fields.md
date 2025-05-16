---
layout: it25_docs
title: Input-fields
group: inserimento
toc: true
---

Gli **Input fields** sono le componenti dell’interfaccia dedicate all’inserimento di dati all’interno del sistema.  
Negli esempi sottostanti, si mostrano varie casistiche di componenti per l’input di dati.

Per la validazione è possibile usare [Just Validate](https://just-validate.dev/){:target="_blank"} (si veda la [documentazione tecnica]({{ site.baseurl }}/docs/form/introduzione/#validazione) o l'[esempio Form]({{ site.baseurl }}/docs/it25/esempi/form-menu-oriz/)).  
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
  <div class="col">Stato inattivo</div>
  <div class="col">Stato attivo</div>
  <div class="col">Stato disabilitato</div>
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
      <input type="text" class="form-control focus--mouse" id="exampleInputText2">
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
      <label class="active" for="exampleInputText4">Etichetta di esempio</label>
      <input type="text" class="form-control" id="exampleInputText4" placeholder="Inserite dato..."
        aria-describedby="formGroupExampleInputWithHelpDescription4">
       <small id="formGroupExampleInputWithHelpDescription4" class="form-text info">Ulteriore testo informativo</small>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <label class="active" for="exampleInputText5">Etichetta di esempio</label>
      <input type="text" class="form-control focus--mouse" id="exampleInputText5" value="Testo in inserim|"
        aria-describedby="formGroupExampleInputWithHelpDescription5">
       <small id="formGroupExampleInputWithHelpDescription5" class="form-text info">Ulteriore testo informativo</small>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <label class="active" for="exampleInputText6">Etichetta di esempio</label>
      <input type="text" class="form-control" id="exampleInputText6" disabled value="Testo non modificabile"
       aria-describedby="formGroupExampleInputWithHelpDescription6">
       <small id="formGroupExampleInputWithHelpDescription6" class="form-text info">Dato derivante da anagrafica</small>
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
     <small class="valid-feedback">Validato!</small>
  </div>
  <div class="form-group col-4">
    <label class="active" for="input-field-14">Etichetta di esempio</label>
    <input type="text" class="form-control is-valid warning" id="input-field-14" name="input-field-14" value="Testo immesso" />
    <small class="warning-feedback">Possibili problemi.</small>
  </div>
  <div class="form-group col-4">
    <label class="active" for="input-field-15">Etichetta di esempio</label>
    <input type="text" class="form-control is-invalid" id="input-field-15" name="input-field-15" value="Testo immesso" />
     <small class="invalid-feedback">Errore bloccante!</small>
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
        <span class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
        </span>
        <label for="exampleInputText7">Etichetta di esempio</label>
        <input type="text" class="form-control" id="exampleInputText7">
      </div>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
        </span>
        <label class="active" for="exampleInputText8">Etichetta di esempio</label>
        <input type="text" class="form-control focus--mouse" id="exampleInputText8">
      </div>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
        </span>
        <label class="active" for="exampleInputText9">Etichetta di esempio</label>
        <input type="text" class="form-control" id="exampleInputText9" disabled>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col">
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
        </span>
        <label class="active" for="exampleInputText24">Etichetta di esempio</label>
        <input type="text" class="form-control" id="exampleInputText24" placeholder="Inserite dato..."
          aria-describedby="formGroupExampleInputWithHelpDescription24">
      </div>
      <small id="formGroupExampleInputWithHelpDescription24" class="form-text info">Ulteriore testo informativo</small>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
        </span>
        <label class="active" for="exampleInputText25">Etichetta di esempio</label>
        <input type="text" class="form-control focus--mouse" id="exampleInputText25" value="Testo in inserim|"
          aria-describedby="formGroupExampleInputWithHelpDescription25">
      </div>
      <small id="formGroupExampleInputWithHelpDescription25" class="form-text info">Ulteriore testo informativo</small>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
        </span>
        <label class="active" for="exampleInputText26">Etichetta di esempio</label>
        <input type="text" class="form-control" id="exampleInputText26" disabled value="Testo non modificabile"
          aria-describedby="formGroupExampleInputWithHelpDescription26">
      </div>
      <small id="formGroupExampleInputWithHelpDescription26" class="form-text info">Dato derivante da anagrafica</small>
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
      <span class="input-group-text">
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
      </span>
      <label class="active" for="input-field-30">Etichetta di esempio</label>
      <input type="text" class="form-control is-valid" id="input-field-30" name="input-field-30" value="Testo immesso" />
    </div>
  </div>
  <div class="form-group col-4">
    <div class="input-group">
      <span class="input-group-text">
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
      </span>
      <label class="active" for="input-field-31">Etichetta di esempio</label>
      <input type="text" class="form-control is-valid warning" id="input-field-31" name="input-field-31" value="Testo immesso" />
    </div>
  </div>
  <div class="form-group col-4">
    <div class="input-group">
      <span class="input-group-text">
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
      </span>
      <label class="active" for="input-field-32">Etichetta di esempio</label>
      <input type="text" class="form-control is-invalid" id="input-field-32" name="input-field-32" value="Testo immesso" />
    </div>
  </div>
</div>
<div class="row">
  <div class="form-group col-4">
    <div class="input-group">
      <span class="input-group-text">
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
      </span>
      <label class="active" for="input-field-33">Etichetta di esempio</label>
      <input type="text" class="form-control is-valid" id="input-field-33" name="input-field-33" value="Testo immesso" />
      <small class="valid-feedback">Validato!</small>
    </div>
  </div>
  <div class="form-group col-4">
    <div class="input-group">
      <span class="input-group-text">
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
      </span>
      <label class="active" for="input-field-34">Etichetta di esempio</label>
      <input type="text" class="form-control is-valid warning" id="input-field-34" name="input-field-34" value="Testo immesso" />
      <small class="warning-feedback">Possibili problemi.</small>
    </div>
  </div>
  <div class="form-group col-4">
    <div class="input-group">
      <span class="input-group-text">
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-mail"></use></svg>
      </span>
      <label class="active" for="input-field-35">Etichetta di esempio</label>
      <input type="text" class="form-control is-invalid" id="input-field-35" name="input-field-35" value="Testo immesso" />
      <small class="invalid-feedback">Errore bloccante!</small>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

---

### Password field

{% capture example %}
<div class="row mb-5">
  <div class="col">Stato inattivo</div>
  <div class="col">Stato attivo</div>
  <div class="col">Stato disabilitato</div>
</div>
<div class="row">
  <div class="col">
    <div class="form-group">
      <label for="passwd1">Password con label e testo di aiuto</label>
      <input type="password" data-bs-input class="form-control input-password" id="passwd1" aria-describedby="infoPassword1" />
      <button type="button" class="password-icon btn" role="switch" aria-checked="false">
        <span class="visually-hidden">Mostra/Nascondi Password</span>
        <svg class="password-icon-visible icon icon-sm"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-password-visible"></use></svg>
        <svg class="password-icon-invisible icon icon-sm d-none"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-password-invisible"></use></svg>
      </button>
      <small id="infoPassword1" class="form-text">Inserisci almeno 8 caratteri</small>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <label class="active" for="passwd2">Password con label e testo di aiuto</label>
      <input type="password" data-bs-input class="form-control input-password" id="passwd2"
            aria-describedby="infoPassword2" value="iuQ34!iwah" />
      <button type="button" class="password-icon btn" role="switch" aria-checked="false">
        <span class="visually-hidden">Mostra/Nascondi Password</span>
        <svg class="password-icon-visible icon icon-sm"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-password-visible"></use></svg>
        <svg class="password-icon-invisible icon icon-sm d-none"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-password-invisible"></use></svg>
      </button>
      <small id="infoPassword2" class="form-text">Inserisci almeno 8 caratteri</small>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <label class="active" for="passwd3">Password con label e testo di aiuto</label>
      <input type="password" data-bs-input class="form-control input-password" id="passwd3"
            aria-describedby="infoPassword3" value="iuQ34!iwah" disabled />
      <button type="button" class="password-icon btn" role="switch" aria-checked="false">
        <span class="visually-hidden">Mostra/Nascondi Password</span>
        <svg class="password-icon-visible icon icon-sm"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-password-visible"></use></svg>
        <svg class="password-icon-invisible icon icon-sm d-none"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-password-invisible"></use></svg>
      </button>
      <small id="infoPassword3" class="form-text">Inserisci almeno 8 caratteri</small>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

### Validazione password
<div class="bd-example">
  <div class="row">
    <div class="col-6">
{% include html_docs/input/input_password_validazione.html %}
    </div>
  </div>
</div>

{% highlight html %}
{% include html_docs/input/input_password_validazione.html %}
{% endhighlight %}


---

### Password field con icone

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
        <span class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-key"></use></svg>
        </span>
        <label for="passwd41">Password con label e testo di aiuto</label>
        <input type="password" data-bs-input class="form-control input-password" id="passwd41" 
              aria-describedby="infoPassword41" />
        <button type="button" class="password-icon btn" role="switch" aria-checked="false">
          <span class="visually-hidden">Mostra/Nascondi Password</span>
          <svg class="password-icon-visible icon icon-sm"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-password-visible"></use></svg>
          <svg class="password-icon-invisible icon icon-sm d-none"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-password-invisible"></use></svg>
        </button>
      </div>
      <small id="infoPassword41" class="form-text">Inserisci almeno 8 caratteri</small>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-key"></use></svg>
        </span>
        <label class="active" for="passwd42">Password con label e testo di aiuto</label>
        <input type="password" data-bs-input class="form-control input-password" id="passwd42"
              aria-describedby="infoPassword42" value="iuQ34!iwah" />
        <button type="button" class="password-icon btn" role="switch" aria-checked="false">
          <span class="visually-hidden">Mostra/Nascondi Password</span>
          <svg class="password-icon-visible icon icon-sm"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-password-visible"></use></svg>
          <svg class="password-icon-invisible icon icon-sm d-none"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-password-invisible"></use></svg>
        </button>
      </div>
      <small id="infoPassword42" class="form-text">Inserisci almeno 8 caratteri</small>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <div class="input-group">
        <span class="input-group-text">
          <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-key"></use></svg>
        </span>
        <label class="active" for="passwd43">Password con label e testo di aiuto</label>
        <input type="password" data-bs-input class="form-control input-password" id="passwd43"
              aria-describedby="infoPassword43" value="iuQ34!iwah" disabled />
        <button type="button" class="password-icon btn" role="switch" aria-checked="false">
          <span class="visually-hidden">Mostra/Nascondi Password</span>
          <svg class="password-icon-visible icon icon-sm"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-password-visible"></use></svg>
          <svg class="password-icon-invisible icon icon-sm d-none"><use href="{{site.baseurl}}/dist/svg/sprites.svg#it-password-invisible"></use></svg>
        </button>
      </div>
      <small id="infoPassword43" class="form-text">Inserisci almeno 8 caratteri</small>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


---

### Search field

<div class="bd-example">
  <div class="row mb-5">
    <div class="col">Ricerca</div>
    <div class="col">Selezione</div>
    <div class="col">Suggerimenti</div>
  </div>
  <div class="row">
    <div class="col">
      <div class="form-group">
        <div class="input-group">
          <span class="input-group-text">
            <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-search"></use></svg>
          </span>
          <label for="searchField">Testo da cercare</label>
          <input type="text" class="form-control" id="searchField">
        </div>
      </div> 
    </div>
    <div class="col">
      <div class="select-wrapper">
        <label for="defaultSelect">Etichetta</label>
        <select id="defaultSelect">
          <option selected="" value="">Scegli un'opzione</option>
          <option value="Value 1">Risultato 1</option>
          <option value="Value 2">Risultato  2</option>
          <option value="Value 3">Risultato  3</option>
        </select>
      </div>
    </div>
    <div class="col">
 {% include html_docs/input/autocompletamento.html  %}
    </div>
  </div>
</div>
{% highlight html %}
<div class="form-group">
  <div class="input-group">
    <span class="input-group-text">
      <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-search"></use></svg>
    </span>
    <label for="searchField">Testo da cercare</label>
    <input type="text" class="form-control" id="searchField">
  </div>
</div> 
. . .
<div class="select-wrapper">
  <label for="defaultSelect">Etichetta</label>
  <select id="defaultSelect">
    <option selected="" value="">Scegli un'opzione</option>
    <option value="Value 1">Risultato 1</option>
    <option value="Value 2">Risultato  2</option>
    <option value="Value 3">Risultato  3</option>
  </select>
</div>
...      
 {% include html_docs/input/autocompletamento.html  %} 
{% endhighlight %}

### Input number

{% capture example %}
<div class="row mb-5">
  <div class="col">Stato inattivo</div>
  <div class="col">Stato attivo</div>
  <div class="col">Stato disabilitato</div>
</div>
<div class="row">
  <div class="col">
    <div class="form-group">
      <label for="inputNumber1" class="input-number-label">Lorem ipsum</label>
      <div class="input-group input-number">
        <input type="number" class="form-control" data-bs-input id="inputNumber1" name="inputNumber1" step="any" />
        <span class="input-group-text align-buttons flex-column">
          <button class="input-number-add">
            <span class="visually-hidden">Aumenta valore</span>
          </button>
          <button class="input-number-sub">
            <span class="visually-hidden">Diminuisci valore</span>
          </button>
        </span>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <label for="inputNumber2" class="input-number-label">Lorem ipsum</label>
      <div class="input-group input-number">
        <input type="number" class="form-control" data-bs-input id="inputNumber2" name="inputNumber2" value="100" step="1" />
        <span class="input-group-text align-buttons flex-column">
          <button class="input-number-add">
            <span class="visually-hidden">Aumenta valore</span>
          </button>
          <button class="input-number-sub">
            <span class="visually-hidden">Diminuisci valore</span>
          </button>
        </span>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="form-group">
      <label for="inputNumber3" class="input-number-label">Lorem ipsum</label>
      <div class="input-group input-number disabled">
        <input type="number" class="form-control" data-bs-input id="inputNumber3" name="inputNumber3" value="100" step="1" disabled />
        <span class="input-group-text align-buttons flex-column">
          <button class="input-number-add" disabled >
            <span class="visually-hidden">Aumenta valore</span>
          </button>
          <button class="input-number-sub" disabled >
            <span class="visually-hidden">Diminuisci valore</span>
          </button>
        </span>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


{% capture example %}
<div class="row mb-5">
  <div class="col-4">Percentuale</div>
  <div class="col-4">Valuta</div>
</div>
<div class="row">
  <div class="col-4">
    <div class="form-group">
      <label for="inputPerc1" class="input-number-label active">Lorem ipsum</label>
      <div class="input-group input-number input-number-percentage">
        <span class="input-group-text fw-semibold">%</span>
        <input type="number" class="form-control" data-bs-input id="inputPerc1" name="inputPerc1" value="50" min="0" max="100" step="10" />
        <span class="input-group-text align-buttons flex-column">
          <button class="input-number-add">
            <span class="visually-hidden">Aumenta del 10%</span>
          </button>
          <button class="input-number-sub">
            <span class="visually-hidden">Diminuisci del 10%</span>
          </button>
        </span>
      </div>
    </div>
  </div>
  <div class="col-4">
    <div class="form-group">
      <label for="inputValuta1" class="input-number-label active">Valuta</label>
      <div class="input-group input-number input-number-currency">
        <span class="input-group-text fw-semibold">€</span>
        <input type="number" class="form-control" data-bs-input id="inputValuta1" name="inputValuta1" step="any" value="3.50" min="0" />
        <span class="input-group-text align-buttons flex-column">
          <button class="input-number-add">
            <span class="visually-hidden">Aumenta valore Euro</span>
          </button>
          <button class="input-number-sub">
            <span class="visually-hidden">Diminuisci valore Euro</span>
          </button>
        </span>
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}

<script>
document.getElementById("exampleInputText2").focus();
</script>
