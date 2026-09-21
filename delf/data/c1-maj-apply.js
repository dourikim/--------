/* c1-maj-apply.js — applique les mises à jour C1 (longueur officielle) aux sujets déjà chargés.
   Doit être chargé APRÈS tous les fichiers *-sujets.js, officiel-sujets.js et c1-maj-*.js. */
(function(){
  const M=window.SUJETS_MAJ||[];const byId={};for(const x of window.SUJETS||[])byId[x.id]=x;
  let n=0;for(const m of M){const t=byId[m.id];if(!t)continue;for(const k of Object.keys(m)){if(k!=='id')t[k]=m[k]}n++}
  window.SUJETS_MAJ_APPLIED=n;
})();
