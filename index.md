---
layout: default
---

{{ site.posts }}

<ul>
  {% for prj in site.posts.project %}
    <li>
      <h2><a href="{{ prj.url }}">{{ prj.title }}</a></h2>
    </li>
  {% endfor %}
</ul>
