(function(){
var ICO={bovi:"assets/icone-bovitech.svg",grao:"assets/icone-grao-a-grao.png",synth:"assets/icone-synth.svg"};
var PROJ=[
{id:"bovi",n:"BoviTech",tag:"Dados e visualização · publicado",s:"Do campo à decisão: respostas de pesquisa viram gráficos.",b:"#0F3D2E",f:"#EDE7D9",a:"#D7C6A7",
 p:"Painel de dados para uma pesquisa acadêmica sobre bovinos. As respostas coletadas no formulário viram filtros por tema, gráficos interativos e um laboratório estatístico com histograma, boxplot, tabela de frequência e estatística descritiva.",
 st:[["Google Forms","Quem participa da pesquisa responde ao formulário."],["Google Sheets","As respostas ficam organizadas na planilha, a fonte dos dados."],["JavaScript","O app lê a planilha, aplica filtros por tema e calcula estatísticas."],["Chart.js","Gráficos interativos, histograma, boxplot e tabela de frequência."]],
 stack:["HTML","CSS","JavaScript","Chart.js","Google Sheets"],pal:["#0F3D2E","#526A45","#5A3C2C","#756557","#EDE7D9","#D7C6A7"],
 lk:[["Abrir a demo","https://luisrenaato.github.io/BoviTech/"],["Código no GitHub","https://github.com/luisrenaato/BoviTech"]]},
{id:"grao",n:"Grão a Grão",tag:"Produto · conceito acadêmico em equipe",s:"“Cada doação tem um destino. Nós conferimos.”",b:"#305C43",f:"#F6F0E4",a:"#D6A52B",pap:1,
 p:"Plataforma proposta para dar transparência e rastreabilidade a doações de alimentos, ligando empresas doadoras a instituições receptoras. Minha parte foi o problema, a proposta de valor, a estrutura das funcionalidades e a identidade visual, incluindo a mascote Dona Papuda.",
 st:[["Doação","A empresa doadora registra o que vai doar."],["Identificação","Doador e instituição receptora têm perfis verificados."],["Conferência","Procedimentos de verificação da organização e da doação."],["Recebimento","A instituição confirma que recebeu."],["Prestação de contas","Indicadores de transparência e certificação de confiança por níveis."]],
 stack:["Design de produto","UX/UI","Identidade visual"],pal:["#305C43","#F6F0E4","#5D3E32","#D6A52B"],
 lk:[["Abrir o site","https://luisrenaato.github.io/grao-a-grao/"],["Ver o repositório","https://github.com/luisrenaato/grao-a-grao"]]},
{id:"synth",n:"AIR/SYNTH",tag:"Experimento · visão computacional",s:"Fazer música com as mãos, pela câmera.",b:"#07140c",f:"#5dff8f",a:"#e4dcc4",ff:"'Courier New',Courier,monospace",crt:1,
 p:"Um terminal retrô que lê as suas mãos pela câmera e transforma o gesto em som. A altura e o volume da nota vêm da posição da mão, e o painel mostra tudo em tempo real: telemetria, osciloscópio e o leitor de gestos. Dá para trocar a forma de onda, subir ou descer oitavas e silenciar.",
 st:[["Mão aberta","Controla a frequência: frequência baixa."],["Pinça","Toca a nota."],["Mão fechada","Silencia."]],
 stack:["Visão computacional","Web Audio","JavaScript","Interação"],pal:["#07140c","#5dff8f","#e4dcc4","#6b624d"],shot:"assets/synth-tela.webp",
 lk:[["Abrir o AIR/SYNTH","https://luisrenaato.github.io/Synth/"],["GitHub","https://github.com/luisrenaato"]]}
];
var IMGS=[["assets/dona-papuda-1.webp","Dona Papuda de óculos escuros"],["assets/dona-papuda-2.webp","Dona Papuda apresentando"],["assets/dona-papuda-3.webp","Dona Papuda caminhando"],["assets/dona-papuda-4.webp","Dona Papuda de mãos na cintura"]];
var TRACOS=[["Silhueta","Uma galinha branca de barriga grande, arredondada e proeminente: é o que torna a Dona Papuda reconhecível de longe."],["Cores","Crista vermelha, bico e pés laranja sobre o corpo branco, dentro da paleta verde, bege e marrom do Grão a Grão."],["Contorno","Contornos ilustrados em preto, que dão peso e personalidade ao desenho."],["Expressão","Uma expressão marcante, divertida e carismática, e a frase “Papo cheio” que acompanha a marca."]];
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
var $=function(i){return document.getElementById(i)};
/* preloader */
var pre=$('pre');
(function(){var c=$('pc'),x=c.getContext('2d'),d=Math.min(devicePixelRatio||1,2),W=innerWidth,H=innerHeight,T=W<700?34:60,P=[],t0=performance.now(),D=2200,done=0;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0);
function fin(){if(done)return;done=1;pre.classList.add('out');setTimeout(function(){pre.style.display='none'},1000);setTimeout(function(){document.querySelectorAll('.name .lt').forEach(function(e){e.classList.add('on')})},450)}
function f(now){var p=Math.min(1,(now-t0)/D),n=Math.floor(T*Math.min(1,p*1.3)),R=Math.min(190,Math.max(W,H)*.2)*(.6+.6*p);while(P.length<n)P.push({x:W*(.3+Math.random()*.4),y:H*(.3+Math.random()*.4),vx:(Math.random()-.5)*2.2,vy:(Math.random()-.5)*2.2,r:0});
x.clearRect(0,0,W,H);
for(var i=0;i<P.length;i++){var a=P[i];a.x+=a.vx;a.y+=a.vy;a.vx*=.985;a.vy*=.985;a.vx+=(Math.random()-.5)*.06;a.vy+=(Math.random()-.5)*.06;a.r=Math.min(3,a.r+.12);
x.globalAlpha=1;x.fillStyle=i%3?'#18d4ff':'#2f6bff';x.shadowColor='#18d4ff';x.shadowBlur=10;x.beginPath();x.arc(a.x,a.y,a.r,0,6.3);x.fill();x.shadowBlur=0;
for(var j=i+1;j<P.length;j++){var b=P[j],ex=a.x-b.x,ey=a.y-b.y,q=Math.sqrt(ex*ex+ey*ey);if(q<R){x.globalAlpha=.65*(1-q/R);x.strokeStyle='#18d4ff';x.lineWidth=1;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}}
if(p>=1){fin();return}requestAnimationFrame(f)}
requestAnimationFrame(f);setTimeout(fin,D+800)})();
/* letras: nome e todos os títulos */
var LT=[].slice.call(document.querySelectorAll('.lt')),n=0;
LT.forEach(function(e){n=0;e.setAttribute('aria-label',e.dataset.s);e.dataset.s.split(' ').forEach(function(w,wi,arr){var W=document.createElement('span');W.className='w';W.setAttribute('aria-hidden','true');w.split('').forEach(function(c){var s=document.createElement('span');s.className='c';s.textContent=c;s.style.setProperty('--i',n++);W.appendChild(s)});e.appendChild(W);if(wi<arr.length-1)e.appendChild(document.createTextNode(' '))})});
var CH=LT.map(function(e){return{e:e,c:[].slice.call(e.querySelectorAll('.c'))}});
if(fine&&!rm){var pq=0;addEventListener('pointermove',function(ev){if(pq)return;pq=1;requestAnimationFrame(function(){pq=0;CH.forEach(function(g){var R=g.e.getBoundingClientRect();if(R.bottom<-200||R.top>innerHeight+200)return;g.c.forEach(function(s){var r=s.getBoundingClientRect(),dx=ev.clientX-(r.left+r.width/2),dy=ev.clientY-(r.top+r.height/2),d=Math.sqrt(dx*dx+dy*dy),m=g.e.closest('.name')?220:150;if(d<m){var f=(m-d)/m;s.style.transform='translate('+(-dx*f*.15)+'px,'+(-dy*f*.15)+'px) scale('+(1+f*.1)+')'}else s.style.transform=''})})})})}
/* cursor */
if(fine&&!rm){var cu=$('cur'),dt=$('dot'),cx=0,cy=0,tx=0,ty=0;
addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY;dt.style.opacity=cu.style.opacity=1;dt.style.transform='translate('+tx+'px,'+ty+'px)'});
(function f(){cx+=(tx-cx)*.18;cy+=(ty-cy)*.18;cu.style.transform='translate('+cx+'px,'+cy+'px)';requestAnimationFrame(f)})();
document.addEventListener('pointerover',function(e){cu.classList.toggle('big',!!e.target.closest('a,button,.pc,.gal figure'))})}
/* texto que acende */
var st=$('st');st.innerHTML=st.textContent.split(' ').map(function(w){return'<span>'+w+'</span>'}).join(' ');
var W=[].slice.call(st.children);
var bar=$('bar'),tl=$('tl'),fill=tl.querySelector('i'),root=document.documentElement;
function sc(){var h=root.scrollHeight-innerHeight;bar.style.width=(h>0?scrollY/h*100:0)+'%';
var r=tl.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.65-r.top)/r.height));fill.style.height=p*100+'%';
var b=st.getBoundingClientRect(),q=Math.min(1,Math.max(0,(innerHeight*.85-b.top)/(innerHeight*.5)));W.forEach(function(w,i){w.classList.toggle('l',i/W.length<q)})}
addEventListener('scroll',sc,{passive:true});sc();
var links=[].slice.call(document.querySelectorAll('nav a'));
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var t=e.target;
if(/\b(ev|rv|hd|lt)\b/.test(t.className))t.classList.add('on');
if(t.id)links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+t.id)})})},{threshold:.2});
document.querySelectorAll('.ev,.rv,.hd,.lt:not(.name .lt),section[id],header[id],footer[id]').forEach(function(e){io.observe(e)});
/* projetos */
var trk=$('trk'),dlg=$('dlg'),dc=$('dc');
PROJ.forEach(function(p){var b=document.createElement('button');b.className='pc'+(p.crt?' crt':'');b.type='button';b.style.setProperty('--b',p.b);b.style.setProperty('--f',p.f);if(p.ff)b.style.setProperty('--ff',p.ff);
b.innerHTML='<span class="m"><img src="'+ICO[p.id]+'" alt="">'+p.tag+'</span><span><h3>'+p.n+'</h3><p>'+p.s+'</p></span><u>Abrir projeto</u>';b.onclick=function(){open(p)};trk.appendChild(b);
if(fine&&!rm){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;b.style.transform='perspective(800px) rotateY('+x*12+'deg) rotateX('+(-y*12)+'deg)'});b.addEventListener('pointerleave',function(){b.style.transform=''})}});
function overview(p){var h='<p>'+p.p+'</p>';
if(p.st.length){h+='<ul class="steps">'+p.st.map(function(s,i){return'<li><button type="button" aria-pressed="'+(i==0)+'" data-t="'+s[1]+'">'+s[0]+'</button></li>'}).join('')+'</ul><p class="out" aria-live="polite">'+p.st[0][1]+'</p>'}
if(p.shot)h+='<figure class="shot"><img src="'+p.shot+'" alt="Tela do AIR/SYNTH"></figure>';
h+='<p style="margin-top:22px">'+p.stack.map(function(s){return'<span class="pill">'+s+'</span>'}).join('')+'</p>';
if(p.pal.length)h+='<div class="sw">'+p.pal.map(function(c){return'<div style="background:'+c+';color:'+(parseInt(c.slice(1),16)>0x888888?'#000':'#fff')+'">'+c+'</div>'}).join('')+'</div>';
return h+p.lk.map(function(l){return'<a class="lk" href="'+l[1]+'">'+l[0]+'</a>'}).join('')}
function papuda(){return'<p style="font-size:19px">Nem tudo é IA. A Dona Papuda, mascote do Grão a Grão, eu criei: da forma da barriga ao brilho do olhar. Toque em cada traço para ver a decisão por trás dele.</p><div class="gal">'+IMGS.map(function(g,i){return'<figure data-i="'+i+'"><img src="'+g[0]+'" alt="'+g[1]+'"></figure>'}).join('')+'</div><ul class="tr">'+TRACOS.map(function(t){return'<li><button type="button" aria-pressed="false" data-t="'+t[1]+'">'+t[0]+'<span aria-hidden="true">+</span></button></li>'}).join('')+'</ul><p class="out" id="po" aria-live="polite">Escolha um traço.</p>'}
function open(p){dlg.style.setProperty('--b',p.b);dlg.style.setProperty('--f',p.f);dlg.style.setProperty('--a',p.a||p.f);dlg.style.setProperty('--ff',p.ff||'Inter,system-ui,sans-serif');dlg.className=p.crt?'crt':'';
var h='<div class="dh"><img src="'+ICO[p.id]+'" alt=""><span class="m" style="color:inherit">'+p.tag+'</span></div><h3>'+p.n+'</h3>';
if(p.pap)h+='<div class="tabs" role="tablist"><button role="tab" aria-selected="true" data-v="o">Visão geral</button><button role="tab" aria-selected="false" data-v="p">Dona Papuda</button></div>';
dc.innerHTML=h+'<div id="vw">'+overview(p)+'</div>';dc._p=p;dlg.showModal();dlg.scrollTop=0}
dc.addEventListener('click',function(e){var t=e.target.closest('.tabs button');
if(t){dc.querySelectorAll('.tabs button').forEach(function(x){x.setAttribute('aria-selected',x===t)});$('vw').innerHTML=t.dataset.v==='p'?papuda():overview(dc._p);dlg.scrollTop=0;return}
var b=e.target.closest('.steps button,.tr button');if(b){var u=b.closest('ul');u.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});u.nextElementSibling.textContent=b.dataset.t;return}
var f=e.target.closest('.gal figure');if(f){var g=IMGS[f.dataset.i],z=$('img');z.style.display='block';z.innerHTML='<img src="'+g[0]+'" alt="'+g[1]+'" style="max-width:100vw;max-height:100dvh;display:block;margin:auto;background:#fffaf0"><button class="x" type="button" style="position:fixed;right:10px;top:10px">Fechar</button>';z.showModal();z.onclick=function(){z.close();z.style.display='none'}}});
$('dx').onclick=function(){dlg.close()};dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()});
/* copiar e-mail */
$('cp').onclick=function(){var e=this.dataset.e,m=$('cm');(navigator.clipboard?navigator.clipboard.writeText(e):Promise.reject()).then(function(){m.textContent='Copiado.'},function(){m.textContent='Copie manualmente: '+e})};
/* rede neon (só na metade de cima) */
var c=$('net'),x=c.getContext('2d'),N=[],mx=-999,my=-999,Wd,H,run=true;
function size(){var d=Math.min(devicePixelRatio||1,2);Wd=c.clientWidth;H=c.clientHeight;c.width=Wd*d;c.height=H*d;x.setTransform(d,0,0,d,0,0);var q=Wd<700?32:64;N=[];for(var i=0;i<q;i++)N.push({x:Math.random()*Wd,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4})}
function draw(){x.clearRect(0,0,Wd,H);
for(var i=0;i<N.length;i++){var a=N[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>Wd)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;var dx=a.x-mx,dy=a.y-my;if(dx*dx+dy*dy<16000){a.x+=dx*.012;a.y+=dy*.012}
x.fillStyle=i%3?'#18d4ff':'#2f6bff';x.globalAlpha=.85;x.beginPath();x.arc(a.x,a.y,2.2,0,6.3);x.fill();
for(var j=i+1;j<N.length;j++){var b=N[j],ex=a.x-b.x,ey=a.y-b.y,d=ex*ex+ey*ey;if(d<17000){x.globalAlpha=.4*(1-d/17000);x.strokeStyle='#18d4ff';x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}}
if(run)requestAnimationFrame(draw)}
size();addEventListener('resize',size);addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
new IntersectionObserver(function(es){var v=es[0].isIntersecting;if(v&&!run){run=true;draw()}run=v}).observe(c);draw();
})();
