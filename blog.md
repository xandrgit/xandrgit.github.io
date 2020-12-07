---
layout: default
permalink: /blog
---

<ul>
  {% for post in site.posts %}
    {% if post.type == "blog" %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    </li>
    {% endif %}
  {% endfor %}
</ul>
