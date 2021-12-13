---
layout: 'boilerplate.njk'
templateEngineOverride: njk
---
{% include "start_page.njk" %}

{%- for question in content.questions -%}
    {% include "question.njk" %}
{%- endfor -%}
{% include "results_page.njk" %}