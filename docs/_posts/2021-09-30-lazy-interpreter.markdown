---
layout: post
title:  "eval_"
date:   2025-09-13 20:10:13 -0400
categories: code

{% highlight javascript %}
  // read input 
  function read() {
    return document.getElementById('input').value.trim();
  }
  
  // remove anything that breaks exec
  function compile(source) {
    return source.replace(/ ?let /g," var ").replace(/ ?const /g", var ")
  }
  
  // eval by getting an lvalue reference to eval
  function eval_(source) {
    const globalScopeEval = eval;

    try {
      return [globalScopeEval(compile(source)), true];
    } catch (e) {
      return [`${e.message}\n\n${e.stack}`, false];
    }
   }
{% endhighlight %}
