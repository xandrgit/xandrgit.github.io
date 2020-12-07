---
layout: default
permalink: /blog
---

<ul>
  {% for post in site.posts.project %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    </li>
  {% endfor %}
</ul>
