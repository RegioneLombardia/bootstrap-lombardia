---
layout: it25_docs
title: Time Picker
group: informazioni
toc: yes
---

I **Time picker** aiutano gli utenti a selezionare e impostare un'ora specifica.  
Essi consentono agli utenti di inserire un valore di tempo e possono essere utilizzati per un'ampia gamma di scenari, come ad esempio in ambito di prenotazioni o programmazioni di eventi.

{% capture example %}
<div class="row mt-5 mt-md-0">
  <div class="col-md-4 col-xl-3">
    <div class="it-datepicker-wrapper">
      <div class="form-group">
        <div class="form-group">
          <label class="active" for="timeStandard">Timepicker</label>
          <input class="form-control" id="timeStandard" type="time" />
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4 offset-xl-3 col-xl-3">
    <div class="it-datepicker-wrapper">
      <div class="form-group">
        <label class="active" for="da">Selezione Da</label>
        <input class="form-control" id="da" type="time" />
      </div>
    </div>
  </div>
  <div class="col-md-4 col-xl-3">
    <div class="it-datepicker-wrapper">
      <div class="form-group">
        <label class="active" for="a">a</label>
        <input class="form-control" id="a" type="time" />
      </div>
    </div>
  </div>
</div>
{% endcapture %}{% include example.html content=example %}


## Breaking change

{% capture callout %}
Eliminati **Time Picker avanzato** e **Time Picker con orologio** per problemi di accessibilità.
{% endcapture %}{% include callout-breaking.html content=callout version="2.5.3" type="danger" %}

