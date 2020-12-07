---
layout: default
---

<ul>
  {% for prj in data.project %}
    <li>
      <h2><a href="{{ prj.url }}" target="_blank">{{ prj.title }}</a></h2>
    </li>
  {% endfor %}
</ul>
