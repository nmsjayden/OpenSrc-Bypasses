https://rblxscripts2.vercel.app/keygen

fetch("https://rblxscripts2.vercel.app/getkey",{headers:{"Cache-Control":"no-cache"}}).then(r=>r.text()).then(t=>console.log((t.match(/const VALID_KEYS\s*=\s*\[([\s\S]*?)\];/i)?.[1].match(/"([^"]+)"/g)||[]).map(x=>x.replace(/"/g,''))[Math.random()*((t.match(/const VALID_KEYS\s*=\s*\[([\s\S]*?)\];/i)?.[1].match(/"([^"]+)"/g)||[]).length)|0]||"No keys found")).catch(e=>console.error(e))
