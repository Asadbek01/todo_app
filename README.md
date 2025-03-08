# Vite loyihasi

Ushbu repozitoriyda Vite yordamida yaratilgan loyiha mavjud. Vite - bu veb loyihalar uchun tezroq va samaraliroq ishlab chiqish tajribasini taqdim etuvchi zamonaviy frontend build vositasi.

## Loyiha sozlamalari

### Talablar

- Node.js (14.18+ yoki 16+ versiyasi)
- npm yoki yarn yoki pnpm

### Yangi loyiha yaratish

```bash
# npm orqali
npm create vite@latest loyiha-nomi

# yarn orqali
yarn create vite loyiha-nomi

# pnpm orqali
pnpm create vite loyiha-nomi
```

### Shablon tanlash

Yangi loyiha yaratishda sizdan framework tanlash so'raladi. Vite quyidagilarni qo'llab-quvvatlaydi:

- Vanilla JavaScript
- Vue
- React
- Preact
- Lit
- Svelte
- Solid
- Qwik
- Boshqa hamjamiyat shablon loyihalari

### Loyiha tuzilishi

```
vite-loyiha/
├── public/             # O'zgarishsiz xizmat qilinuvchi statik fayllar
├── src/                # Dastur manba kodi
│   ├── assets/         # Bundling qilinuvchi resurslar
│   ├── components/     # Dastur komponentlari
│   ├── App.jsx         # Asosiy dastur komponenti
│   └── main.jsx        # Dastur kirish nuqtasi
├── index.html          # Kirish HTML fayli
├── package.json        # Loyiha bog'liqlari va skriptlari
├── vite.config.js      # Vite konfiguratsiyasi
└── README.md           # Loyiha hujjatlari
```


```bash
npm install
# yoki
yarn
# yoki
pnpm install
```

### Ishga tushirish

```bash
npm run dev
# yoki
yarn dev
# yoki
pnpm dev
```



[MIT Litsenziyasi](LICENSE) (yoki loyihangizning litsenziyasini ko'rsating)
