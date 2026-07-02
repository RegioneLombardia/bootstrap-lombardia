---
layout: it25_docs
group: introduzione
title: Introduzione
toc: true
---

Lo scopo primario dell’interfaccia è quello di **aiutare l’utente** a raggiungere ciò che cerca in modo  naturale, immediato e trasparente. Per questo, la coerenza dei vari elementi che la compongono – anche su diversi dispositivi – è un elemento chiave per la creazione di prodotti e servizi funzionali e  semplici da utilizzare.

Un altro punto fondamentale di una buona interfaccia è la sua inclusività e **tolleranza agli errori**: non si deve mai dare per assunto che l’utente abbia sempre il flusso di navigazione in mente o che comprenda appieno le istruzioni senza che esse vengano fornite esplicitamente.

Per ciò, il designer ha il compito di  progettare interfacce che sappiano accompagnare e guidare il fruitore nel suo percorso, prevedendo  le modalità di utilizzo e prevenendo eventuali errori, tenendo sempre al primo posto **usabilità e accessibilità**. 


### Responsive Web Design
L’interfaccia web deve essere sempre progettata e sviluppata con un approccio responsive, con l’obiettivo di fornire un’esperienza di utilizzo ottimale indipendentemente dalla risoluzione dello  schermo o dal tipo di dispositivo utilizzato.

Al concetto di responsive web design vanno associate pratiche di semplificazione delle interfacce in ottica mobile first, e un’attenzione particolare nel fornire un’esperienza soddisfacente anche a coloro  che hanno difficoltà visive o motorie. 

### Linee Guida
Le *Linee Guida* descrivono i **componenti specifici personalizzati** per le applicazioni Web di Regione Lombardia.  
**Devono esse utilizzari al posto di quelli della versione standard** di {{ site.data.short.bi }}.  
Il loro impiego è **condizione necessaria ma non sufficiente**, per costruire un'interfaccia che possa essere *"approvabile"* da {{ site.data.short.rl }}.

La loro documentazione è organizzata in gruppi: *Utilità*, *Navigazione* e *Componenti*.  
Sono inoltre forniti degli *Esempi* di pagine complete per vederne il funzionamento nel concreto.


{% capture callout %}
#### <svg class="icon icon-warning icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-warning-circle"></use></svg> Componenti in fase di aggiornamento

Il sommario è provvisoriamente diviso in due sezioni:
 - **Linee Guida** contiene la documentazione dei componenti **già adeguati al nuovo** {{ site.data.short.dsl }}
 - **Linee Guida Old** le voci riguardanti le parti non ancora aggiornate.

Con i prossimi rilasci, mano a mano che altri componenti e la relativa documentazione verranno aggiornati, le voci spariranno dalle "Linee guida OLD" per comparire nelle "Linee Guida".  
Le voci nella seconda sezione riguardano comunque **componenti tuttora funzionanti ed utilizzabili**.

#### Roadmap
Il criterio seguito nell'aggiornamento dei componenti è quello di fornire per primi gli elementi più evidenti dal punto di vista visivo, per poi completare quelli di dettaglio.

Data l'urgenza è stato giocoforza basarsi sulla versione *2.x* di {{ site.data.short.bi }}, pur sapendo che AGID ha appena rilasciato la versione *3.0.0-beta.0* destinata a sostituirla e contenente sostanziali e impattanti cambiamenti.

Quando Agid rilascerà la versione *3.0.0* definitiva, partirà necessariamente un riallineamento alla nuova versione di {{ site.data.short.bi }}.  
A tale nuova versione è rimandato l'aggiornamento del componente *Form* (e componenti direttamente collegati)
{% endcapture %}{% include callout.html content=callout type="warning" %}



### Documentazione Tecnica
La {{ site.data.short.dt }} è il **manuale di riferimento** per il dettaglio sulle specifiche dei componenti.

Si tratta della documentazione di Bootstrap Italia riportata integralmente per non riscrivere tutti i dettagli di funzionamento di quanto rimane immutato rispetto alla libreria originale da cui {{ site.data.short.bl }} deriva.
Tale documentazione è stata cioè **soltanto ricompilata** sulla stessa base di file *scss* e *JavaScript* che generano i file minimizzati da installare per il funzionamento degli applicativi, per rendere possibile vedere l'esatto aspetto e comportamento che ogni singolo *widget* assume per le interfacce di {{ site.data.short.rl }}.

Per questo motivo nella {{ site.data.short.dt }} sono contenuti riferimenti **anche** a colori o componenti che sono **non conformi** al {{ site.data.short.ivd }}.  

Si raccomanda quindi di **leggere prima le Linee Guida**, in quanto ciò che è contenuto nella {{ site.data.short.dt }} può essere utilizzato **solo se le Linee Guida non lo sconsigliano**.

