https://cimodkun.my.id/genkey/ & other hosts

(function(){var h=document.documentElement.innerHTML,m=h.match(/sessionToken\s*=\s*"([^"]+)"/i);if(!m)return alert("sessionToken not found");var t=m[1],u=(h.match(/https?:\/\/[^"' ]+\/(?:Gen-Key\/genskey|genkey\/genkey)\.php/i)||[])[0];if(!u)return alert("generator url not found");var g=(document.getElementById("gameSelect")||{}).value||"MLBB";location.href=u+"?data="+btoa("game="+g+"&token="+t)})();
