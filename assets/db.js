---
---

const PROJECT = [({{ site.data.project }}).replace(/=>/g, ":")];
const SOCIAL = [({{ site.data.social }}).replace(/=>/g, ":")];

globalThis._PROJECT = PROJECT;
globalThis._SOCIAL = SOCIAL;
