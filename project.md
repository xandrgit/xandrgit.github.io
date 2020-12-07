---
layout: default
permalink: /project/
---

<ul>
  {% for prj in site.posts %}
  {% if prj.type == "project" %}
    <li>
      <h2><a href="{{ prj.url }}">{{ prj.title }}</a></h2>
    </li>
  {% endif %}
  {% endfor %}
</ul>
