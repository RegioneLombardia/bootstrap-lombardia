---
layout: it25_docs
title: Time Picker
group: informazioni
toc: yes
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
          <label class="active" for="time-picker">Orario</label>
          <div class="input-group-prepend">
            <div class="input-group-text">
              <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-clock"></use></svg>
            </div>
          </div>
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
    <label class="active" for="time-picker">Orario</label>
    <div class="input-group-prepend">
      <div class="input-group-text">
        <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-clock"></use></svg>
      </div>
    </div>
    <input type="text" class="form-control" id="time-picker" name="time-picker"
          aria-label="indicare ore e minuti separate da due punti." />
  </div>
</div>
{% endhighlight %}

Questo time-picker è un componente implementato in javascript ed il cui codice è importato all'interno di `bootstrap-lombardia.min.js`.  
E' stata utilizzata la libreria **flatpickr** la cui documentazione completa è reperibile a **[questo indirizzo](https://flatpickr.js.org/options/)**.

Per inizializzare il componente deve essere invocata la funzione seguente, passando come parametro l'elemento cui collegarla:  
{% highlight html %}
flatpickr(document.querySelector('#time-picker'), {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true
})
{% endhighlight %}

---

### Time Picker con orologio

**Nota:** questo tipo di time picker è adatto a smartphone e tablet. Su pc, l'utilizzo con il mouse risulta poco pratico.

Il time picker con orologio è un componente implementato in javascript ed il cui codice è importato all'interno di `bootstrap-lombardia.min.js`.  
E' stata utilizzata la libreria **Grudus Timepicker** la cui documentazione completa è reperibile a **[questo indirizzo](https://grudus.github.io/Timepicker/)**.

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

Per inizializzare il componente deve essere invocata la funzione seguente, passando come parametro l'elemento cui collegarla:  
{% highlight html %}
new bootstrap.it25().clockpicker(document.querySelector('#clockpicker01'))
{% endhighlight %}
