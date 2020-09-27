---
---

const PROJECT = [({{ site.data.project }}).replace(/=>/g, ":").split("}").join(",")];
const SOCIAL = [({{ site.data.social }}).replace(/=>/g, ":").split("}").join(",")];

globalThis._PROJECT = PROJECT;
globalThis._SOCIAL = SOCIAL;
