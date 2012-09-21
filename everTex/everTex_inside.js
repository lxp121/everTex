var ever_iframename = 'EN_IframePanel_1';

function bodymod(dom){
  if(dom.body.innerHTML=='') return;
  if(dom.body.innerHTML=='<h3>Loading note data...</h3>') return;
  var getmark=dom.getElementById('everTex_mark');
  if(getmark==null){
    var div=dom.createElement('div');
    div.style.visibility='hidden';
    div.id='everTex_mark';
    dom.body.insertBefore(div,dom.body.firstChild);
    var dScript=dom.createElement('script');
    dScript.type='text/javascript';
    dScript.text='MathJax.Hub.Queue(["Typeset",MathJax.Hub]);';
    dom.body.appendChild(dScript);
  }
}


for(var i = 0; i < frames.length; i++) {
    var curDoc = frames[i].document;

    if(curDoc.getElementById(ever_iframename)!=null){
        var dom=curDoc.getElementById(ever_iframename).contentWindow.document;
        dScript=dom.createElement('script');
        dScript.type='text/javascript';
        dScript.src='http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
        dScript.text='MathJax.Hub.Startup.onload();';
        dom.head.appendChild(dScript);
        dom.body.addEventListener("DOMSubtreeModified",function(){bodymod(dom);},false);
    }
}
