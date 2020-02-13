let disqusSite = '<MY DISQUS SITE NAME>';
let w = window;

let disqusConfig = function ()
{
    this.page.identifier = category + "_" + name;
    this.page.url = window.location.href;
};

if (!w.DISQUS)
{
    console.log('calling embed, not reset, for disqus');

    w.disqus_config = disqusConfig;

    let d = document, s = d.createElement('script');

    s.src = 'https://' + disqusSite + '.disqus.com/embed.js';
    s.setAttribute('data-timestamp', new Date() + "");

    (d.head || d.body).appendChild(s);
}
else
{
    console.log('calling disqus.reset');
    w.DISQUS.reset({
        reload: true,
        config: disqusConfig
    });
}