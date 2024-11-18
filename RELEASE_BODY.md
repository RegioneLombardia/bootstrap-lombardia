# 2.4.0 (2024-11-18)

### !! ATTENZIONE !! 
Per rendere pienamente funzionante la CI/CD di Bootstrap Regione Lombardia:
* sono stati **eliminati i tag delle versioni di boostrap-italia**
* le **nuove release** di bootstrap-lombardia non avranno più il prefisso "rl" ma adotteranno quello standard "v"
* le release di bootstrap-lombardia precedenti rimangono invariate
* tutti i commit sia provenienti da bootstrap-italia che di bootstrap-lombardia rimangono invariati.

Se si è clonato il repository dei sorgenti, per eliminare in locale i tag di bootstrap-italia ed allinearlo con quelli di bootstrap-lombardia  
**è necessario eseguire il comando:** `git pull --prune --tags`

# [rl2.3.0](https://github.com/RegioneLombardia/bootstrap-lombardia/compare/rl2.2.2...rl2.3.0) (2024-09-23)

### BugFixes

* piccoli dettagli visivi ([1a8c242ffs](https://github.com/RegioneLombardia/bootstrap-lombardia/commit/1a8c242ff1f9bb6832db84722b881da6ad0b0fd5))
* Textarea - bordatura ([59d0de8f9s](https://github.com/RegioneLombardia/bootstrap-lombardia/commit/59d0de8f9d5490463d8398561d7ef3c11e831626))
* Menu Orizzontale - tolta ombra per schermi lg ([de96c7531s](https://github.com/RegioneLombardia/bootstrap-lombardia/commit/de96c75316cd34b09a7f2394a50fc38a969045bc))
* TopBar - bottone accesso smartphone e tablet ([8ef5f2908s](https://github.com/RegioneLombardia/bootstrap-lombardia/commit/8ef5f2908f40a38e1dfa387db543db38bfe1e13a))

### Features 
* modifica menù verticale e header hamburger](https://github.com/RegioneLombardia/bootstrap-lombardia/commit/0bf9608b2746b8fbe712efcb183cd58c602cecf5) 

### !! BREAKING CHANGE !!
Il `menù verticale` diventa `sidebar` visualizzata di default su schermi `md-lg-xl`