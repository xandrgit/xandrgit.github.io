---
layout: default
---

{{ site }}

<ul>
  {% for prj in site.posts %}
    <li>
      <h2><a href="{{ prj.url }}">{{ prj.title }}</a></h2>
    </li>
  {% endfor %}
</ul>
