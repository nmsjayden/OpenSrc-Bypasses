https://submais.paginadariqueza.com/

fetch("https://app.alpharede.com/ws/submais/redirectLinks.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then(r=>r.json()).then(d=>location.href=d.destination_link)
