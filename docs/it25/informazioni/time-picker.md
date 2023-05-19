---
layout: it25_docs
title: Time Picker
group: informazioni
toc: no
---

I **Time picker** aiutano gli utenti a selezionare e impostare un'ora specifica.  
Essi consentono agli utenti di inserire un valore di tempo e possono essere utilizzati per un'ampia gamma di scenari, come ad esempio in ambito di prenotazioni o programmazioni di eventi.

<div class="bd-example">
{% include html_docs/timepickers/timepicker.html %}
</div>
{% highlight html %}
{% include html_docs/timepickers/timepicker.html %}
{% endhighlight %}

---

### Time Picker avanzato

<div class="bd-example">
  <div class="row">
    <div class="col-12 col-lg-4">
      <div class="form-group" style="margin-bottom:0px">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-clock"></use></svg>
            </div>
          </div>
          <label class="active" for="time-picker">Orario</label>
          <input type="text" class="form-control" id="time-picker" name="time-picker"
                aria-label="indicare ore e minuti separate da due punti." />
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="form-group">
  <div class="input-group">
    <div class="input-group-prepend">
      <div class="input-group-text">
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-clock"></use></svg>
      </div>
    </div>
    <label class="active" for="time-picker">Orario</label>
    <input type="text" class="form-control" id="time-picker" name="time-picker"
          aria-label="indicare ore e minuti separate da due punti." />
  </div>
</div>
{% endhighlight %}


Il time picker di seguito è un componente implementato in javascript.  
E' stata utilizzata la libreria **flatpickr** la cui documentazione completa è reperibile a **[questo indirizzo](https://flatpickr.js.org/options/)**.

Deve essere incluso tra gli script della pagina il seguente CDN:
{% highlight html %}
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
{% endhighlight %}

Per inizializzare il componente deve essere invocata la seguente funzione:

{% highlight html %}
new bootstrap.it25().datepicker(document.querySelector('#time-picker'), {
  allowInput: true,
  enableTime: true,
  noCalendar: true,
  dateFormat: 'H:i',
  time_24hr: true
})
{% endhighlight %}

---

### Time Picker con orologio

Il time picker con orologio si basa sull'implementazione di "Grudus Timepicker".  
Per abilitare questa funzionalità bisogna includere tra gli scrip il seguente CDN:

{% highlight html %}
<script type="text/javascript" src="https://rawgit.com/grudus/Timepicker/master/dist/grudus-timepicker.es5.js"></script>
{% endhighlight %}

<div class="bd-example">
  <div class="row">
    <div class="col-12 col-lg-4">
       {% include html_docs/timepickers/clockpicker.html %}
    </div>
  </div>
</div>
{% highlight html %}
{% include html_docs/timepickers/clockpicker.html %}
{% endhighlight %}
