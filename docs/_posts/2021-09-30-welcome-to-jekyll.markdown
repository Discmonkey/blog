---
layout: post
title:  "Welcome to Jekyll!"
date:   2021-09-30 20:10:13 -0400
categories: code

{% highlight javascript %}
  // read input 
  function read() {
		const textBox = document.getElementById('input');

		const t = textBox.value.trim();
		textBox.value = "";

		return t;
	}
  
  // remove anything that breaks exec
  // TODO(ast)
	function compile(source) {
		return source
           .replace(/ ?let /g," var ")
           .replace(/ ?const /g", var ")
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
