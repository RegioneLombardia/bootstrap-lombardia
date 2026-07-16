---
layout: it25_docs
group: introduzione
title: Linee Guida
toc: false
---


Queste pagine descrivono i **componenti specifici personalizzati** utili alla costruzione delle applicazioni web di {{ site.data.short.rl }} coerenti con il nuovo Design System regionale.  

**Devono esse utilizzari al posto di quelli della versione standard** di {{ site.data.short.bi }}.  
Il loro impiego è **condizione necessaria ma non sufficiente**, per costruire un'interfaccia utente che possa essere approvata da {{ site.data.short.rl }}.

La loro documentazione è organizzata in gruppi: *Utilità*, *Navigazione* e *Componenti*.  
Sono inoltre forniti degli *Esempi* di pagine complete per vederne il funzionamento nel concreto.


{% capture callout %}
#### <svg class="icon icon-warning icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-warning-circle"></use></svg> Componenti in fase di aggiornamento
Nel corso del 2026 Regione Lombardia ha rinnovato l’identità visiva dell’ente.  
L'aggiornamento dei componenti al nuovo Design System di Regione Lombardia è ancora in corso.  
Sono pronti gli elementi più evidenti dal punto di vista visivo.

I componenti **non ancora pienamente aggiornati** sono contrassegnati dai seguenti tag:

<table class="table table-sm">
  <thead>
    <tr>
      <th scope="col">Badge</th>
      <th scope="col">Significato</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="badge bg-warning">Da rivedere</span></td>
      <td>utilizzabile ma potrebbe essere soggetto a modifiche</td>
    </tr>
    <tr>
      <td><span class="badge primary-bg-g1 text-black">In lavorazione</span></td>
      <td>componente da creare o ancora in bozza</td>
    </tr>
  </tbody>
</table>

I componenti **non contrassegnati** da un tag, sono da intendersi **pronti**.  
I componenti **eliminati** sono elencati nei [breaking change]({{ site.baseurl }}/docs/it25/breaking-change/)

#### Roadmap
I componenti aggiornati sono basati sulla versione *2.x* di {{ site.data.short.bi }}.

AGID ha appena rilasciato la versione *3.0.0-beta* destinata a sostituirla e contenente sostanziali e impattanti cambiamenti.  
Quando Agid rilascerà la versione *3.0.0* definitiva, partirà necessariamente un riallineamento alla nuova versione di {{ site.data.short.bi }}.  

A tale nuova versione è rimandato l'aggiornamento del componente *Form* (e componenti direttamente collegati)
{% endcapture %}{% include callout.html content=callout type="warning" %}


### {{ site.data.short.dt }}
Le {{ site.data.short.dt }} sono il **manuale di riferimento** l'utilizzo dei componenti.

Si tratta della documentazione di Bootstrap Italia riportata integralmente per non riscrivere tutti i dettagli di funzionamento di quanto rimane immutato rispetto alla libreria originale da cui {{ site.data.short.bl }} deriva.  
Tale documentazione è stata cioè **soltanto ricompilata** sulla stessa base di file *scss* e *JavaScript* che generano i file minimizzati da installare per il funzionamento degli applicativi, per rendere possibile vedere l'esatto aspetto e comportamento che ogni singolo *widget* assume per le interfacce di {{ site.data.short.rl }}.

Per questo motivo nelle {{ site.data.short.dt }} sono contenuti riferimenti **anche** a colori o componenti che sono **non conformi** al {{ site.data.short.ivd }}.  

Si raccomanda quindi di **consultare prima le Linee Guida**, in quanto ciò che è contenuto nelle {{ site.data.short.dt }} può essere utilizzato **solo se le Linee Guida non contengono l'equivalente componente personalizzato**.

