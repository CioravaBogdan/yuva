# Infant.ro Shopify Theme - Yuva (OPTIMIZED)

## 📋 Descriere
Acest repository conține tema Shopify pentru magazinul **infant-ro.myshopify.com**.

**Tema activă**: Updated copy of Copy of Yuva (OPTIMIZED) Latest  
**Theme ID**: 187625505113

## 🚀 Comenzi Rapide

### Autentificare
```bash
shopify auth login
```

### Descărcare Temă (Pull)
```bash
shopify theme pull --store infant-ro.myshopify.com --theme 187625505113
```

### Încărcare Temă (Push)
```bash
shopify theme push --store infant-ro.myshopify.com --theme 187625505113
```

### Development cu Live Preview
```bash
shopify theme dev --store infant-ro.myshopify.com --theme 187625505113
```

### Verificare Temă
```bash
shopify theme check
```

## 📁 Structura Proiectului

```
.
├── assets/          # CSS, JavaScript, imagini
├── config/          # Setări temă
├── layout/          # Layout-uri principale
├── locales/         # Fișiere de traducere
├── sections/        # Secțiuni modulare
├── snippets/        # Componente reutilizabile
└── templates/       # Șabloane pentru tipuri de pagini
```

## 🛠️ Dezvoltare Locală

### Cerințe
- [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) (instalat ✓)
- Git (instalat ✓)
- Node.js (opțional, pentru build tools)

### Setup Inițial
1. Clonează repository-ul
2. Rulează `shopify auth login`
3. Rulează `shopify theme dev` pentru a porni serverul local

### Workflow Recomandat
1. Creează un branch nou pentru fiecare feature: `git checkout -b feature/nume-feature`
2. Lucrează local cu `shopify theme dev` pentru preview live
3. Testează modificările
4. Commit & push către GitHub
5. Merge în `main` branch
6. Deploy pe Shopify cu `shopify theme push`

## 🔗 Link-uri Utile

- **Preview Temă**: https://infant-ro.myshopify.com/?preview_theme_id=187625505113
- **Theme Editor**: https://infant-ro.myshopify.com/admin/themes/187625505113/editor
- **Shopify Admin**: https://infant-ro.myshopify.com/admin

## 📝 Note

- **IMPORTANT**: Nu face push direct pe tema LIVE fără testare
- Utilizează theme ID-ul corect pentru fiecare comandă
- Verifică întotdeauna modificările cu `shopify theme check` înainte de push

## 👥 Echipă

Contact: office@infant.ro

---

*Ultima actualizare: octombrie 2025*
