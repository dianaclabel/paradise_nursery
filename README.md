# Paradise Nursery 🌿

Aplicación de front-end para la compra de plantas de interior. Los usuarios
pueden explorar plantas agrupadas por categoría, agregarlas al carrito de
compras, ajustar las cantidades y ver el total antes de "pagar".

El proyecto se construyó como práctica del **IBM Front-End Developer
Professional Certificate** y tiene como objetivo demostrar las habilidades
esenciales de React, Redux Toolkit y React Router.

## ✨ Funcionalidades

- **Página de aterrizaje** con una imagen de fondo a pantalla completa, el
  nombre de la empresa ("Paradise Nursery"), un párrafo "Sobre nosotros" y
  un botón *Get Started* (Comenzar) que enlaza con el listado de productos.
- **Página de listado de productos** con **20 plantas de interior únicas**
  organizadas en **3 categorías** (Plantas Purificadoras de Aire, Plantas
  Aromáticas, Plantas Decorativas de Interior). Cada tarjeta muestra una
  miniatura, nombre, precio, descripción y un botón *Add to Cart* (Añadir al
  carrito) que se convierte en *Added to Cart* (Añadido al carrito) tras
  pulsarlo.
- **Página del carrito** con el importe total, el número total de plantas,
  la miniatura / nombre / precio unitario / total por línea de cada
  artículo, junto con controles `+` / `−` / *Delete* que actualizan el
  carrito y el contador del encabezado en tiempo real. Incluye los botones
  *Continue Shopping* (Seguir comprando) y *Checkout* (Pagar) ("Próximamente").
- **Encabezado / barra de navegación fija** con el logo, enlaces de
  navegación a Inicio / Plantas / Carrito y un icono del carrito cuyo
  contador muestra dinámicamente el número total de artículos en el carrito.
- El estado se gestiona con **Redux Toolkit** (`createSlice` + selectores)
  y el enrutamiento con **React Router**.

## 🧱 Stack tecnológico

| Herramienta                 | Versión | Propósito                                  |
| --------------------------- | ------- | ------------------------------------------ |
| React                       | 18      | Librería de UI                             |
| Redux Toolkit / React-Redux | 2 / 9   | Gestión de estado global                   |
| React Router                | 6       | Enrutado (`HashRouter` para GitHub Pages)  |
| Vite                        | 5       | Herramienta de build y servidor de dev     |
| CSS                   | –       | Estilos (sin frameworks de UI)             |

## 📁 Estructura del proyecto

```
paradise_nursery/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
│   ├── favicon.svg
│   └── 404.html          
└── src/
    ├── main.jsx          
    ├── App.jsx           # Rutas principales
    ├── App.css           # Estilos globales, incluye el fondo de la landing
    ├── index.css
    ├── AboutUs.jsx       
    ├── ProductList.jsx   # Página de listado de productos
    ├── CartItem.jsx      # Página del carrito
    ├── CartSlice.jsx     
    ├── store.js          # Store de Redux configurado
    ├── components/
    │   └── Header.jsx    
    ├── data/
    │   └── plants.js     
    └── assets/
        ├── bg/
        │   └── nursery-bg.jpg  
        └── plants/             
```

## 🚀 Cómo empezar

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar el servidor de desarrollo (http://127.0.0.1:5173/paradise-nursery/)
npm run dev

# 3. Build de producción
npm run build

# 4. Previsualizar el build de producción localmente
npm run preview
```

## 🌐 Despliegue en GitHub Pages

El proyecto viene preconfigurado para GitHub Pages. Edita el campo `homepage`
en `package.json` para que apunte a tu fork:

```json
"homepage": "https://dianaclabel.github.io/paradise-nursery"
```

Luego despliega con:

```bash
npm run deploy
```
