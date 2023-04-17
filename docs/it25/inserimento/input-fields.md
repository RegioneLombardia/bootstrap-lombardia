---
layout: it25_docs
title: Input-fields
group: inserimento
toc: true
---

Gli **Input fields** sono le componenti dell’interfaccia dedicate all’inserimento di dati all’interno del sistema. Negli esempi sottostanti, si mostrano varie
casistiche di componenti per l’input di dati.

<div class="bd-example">
  <div class="row mb-5">
    <div class="col">Stato inattivo</div>
    <div class="col">Stato attivo</div>
  </div>
  <div class="row">
    <div class="col">
    {% include html_docs/input/input.html disabled='disabled' display_title='d-none' %}
    </div>
    <div class="col">
    {% include html_docs/input/input.html  display_info='d-none' %}
    </div>
  </div>
  {% include html_docs/input/input_validazione.html %}
</div>
{% highlight html %}
  <div class="row mb-5">
    <div class="col">Stato inattivo</div>
    <div class="col">Stato attivo</div>
  </div>
  <div class="row">
    <div class="col">
    {% include html_docs/input/input.html disabled='disabled' display_title='d-none' %}
    </div>
    <div class="col">
    {% include html_docs/input/input.html  display_info='d-none' %}
    </div>
  </div>
  {% include html_docs/input/input_validazione.html display_info='d-none' %}
</div>
{% endhighlight %}

### Input field con istruzioni

**È preferibile inserire istruzioni nei campi di testo, ad esempio quando all’utente si richiede l’inserimento di molteplici informazioni, per agevolare la comprensione e la chiarezza.**

<div class="bd-example">
  <div class="row mb-5">
    <div class="col">Stato inattivo</div>
    <div class="col">Stato attivo</div>
  </div>
  <div class="row">
    <div class="col">
    {% include html_docs/input/input.html disabled='disabled' %}
    </div>
    <div class="col">
    {% include html_docs/input/input.html  display_info='d-none' %}
    </div>
  </div>
  {% include html_docs/input/input_validazione.html %}
</div>
{% highlight html %}
  <div class="row mb-5">
    <div class="col">Stato inattivo</div>
    <div class="col">Stato attivo</div>
  </div>
  <div class="row">
    <div class="col">
    {% include html_docs/input/input.html disabled='disabled' %}
    </div>
    <div class="col">
    {% include html_docs/input/input.html  display_info='d-none' %}
    </div>
  </div>
  {% include html_docs/input/input_validazione.html display_info='d-none' %}
</div>
{% endhighlight %}

### Input field con icone

**È possibile aggiungere un’icona al campo di testo come istruzione per la compilazione.**

<div class="bd-example">
  <div class="row mb-5">
    <div class="col">Stato inattivo</div>
    <div class="col">Stato attivo</div>
  </div>
  <div class="row">
    <div class="col">
    {% include html_docs/input/input_icona.html name='input-field-disabled' disabled='disabled' display_info='d-none' %}
    </div>
    <div class="col">
    {% include html_docs/input/input_icona.html name='input-field-active' display_info='d-none' %}
    </div>
  </div>
    <div class="row">
    <div class="col">
    {% include html_docs/input/input_icona.html name='input-field-disabled-info' disabled='disabled' %}
    </div>
    <div class="col">
    {% include html_docs/input/input_icona.html name='input-field-active-info'  %}
    </div>
  </div>
  {% include html_docs/input/input_icona_validazione.html %}
  {% include html_docs/input/input_icona_validazione.html display_info='d-none' %}
</div>
{% highlight html %}
  <div class="row mb-5">
    <div class="col">Stato inattivo</div>
    <div class="col">Stato attivo</div>
  </div>
  <div class="row">
    <div class="col">
    {% include html_docs/input/input.html disabled='disabled' %}
    </div>
    <div class="col">
    {% include html_docs/input/input.html  display_info='d-none' %}
    </div>
  </div>
  {% include html_docs/input/input_icona_validazione.html %}
  {% include html_docs/input/input_validazione.html display_info='d-none' %}
</div>
{% endhighlight %}

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
