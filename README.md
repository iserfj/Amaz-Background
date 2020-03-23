# Amaz-Background  
##### *Web page background widget based on HTML5 Canvas which enables your cursor with a colorful tail* #####  
### Usage ###
Import amazbackground.js as a script file to your html document. Then initialize with following code:
<pre><code>
<script>
  document.AB.init();   
</script>
</code></pre>
### To customize your configure ###
<pre><code>
<script>    
  let cfg = document.AB.cfg();
  cfg.bgcolor={r:255,g:255,b:255,a:0.1};
  document.AB.init(cfg);   
</script>
</code></pre>
Where variable *document.AB* is defined in .js file, and method *document.AB.init* is the initialization, and function *document.AB.cfg* is the configuration in which customized settings could be set.  
for more information, please my git or visit my [website](http://www.axeswp.cn).  
*preview cap.gif*  
![preview](cap.gif)
