# 🎓 Eventos UNAL - Sistema de Gestión de Eventos

Sistema web para la gestión y visualización de eventos de la Universidad Nacional de Colombia, desarrollado con **React + TypeScript** en el frontend y **Strapi CMS** en el backend.

---

## 🌐 Demo en Vivo

### 🚀 Aplicación Desplegada

- **Frontend (Producción)**: [https://eventos-unal.vercel.app](https://eventos-unal.vercel.app)
- **Backend Admin (Producción)**: [https://talented-fun-b649e374ff.strapiapp.com/admin](https://talented-fun-b649e374ff.strapiapp.com/admin/auth/login)

> ⚠️ **Nota importante**: El backend usa Strapi Cloud (plan gratuito), por lo que el servidor entra en modo de "suspensión" después de un período de inactividad. **La primera carga puede tardar 30-60 segundos** mientras el servidor se activa. Posteriores peticiones serán mucho más rápidas.

---

## 📋 Descripción del Proyecto

Este proyecto fue desarrollado como prueba técnica cumpliendo los siguientes requisitos:

### Requisitos Cumplidos ✅
- ✅ Frontend desarrollado con **React + TypeScript + Vite**
- ✅ Backend con **Strapi CMS v5** (Headless CMS)
- ✅ Interfaz dinámica e interactiva consumiendo la API REST
- ✅ Diseño responsive con **TailwindCSS**
- ✅ Dockerización completa del proyecto
- ✅ Despliegue en la nube (Vercel + Strapi Cloud)

### Funcionalidades Principales
-  Vista principal con listado de todos los eventos
-  Búsqueda de eventos por título o descripción
-  Filtrado de eventos por categoría
-  Vista detallada de cada evento
-  Diseño responsive (móvil, tablet, escritorio)
-  Modo claro/oscuro
-  Eventos relacionados por categoría

---

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** - Librería UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **TailwindCSS** - Estilos y diseño responsive
- **Axios** - Cliente HTTP
- **Zustand** - Manejo de estado global
- **Lucide React** - Iconos
- **@strapi/blocks-react-renderer** - Renderizado de rich text

### Backend
- **Strapi v5.30** - Headless CMS
- **Node.js 20** - Runtime
- **TypeScript** - Lenguaje
- **SQLite** - Base de datos (desarrollo)
- **PostgreSQL** - Base de datos (producción en Strapi Cloud)

### DevOps
- **Docker** - Contenedorización
- **Docker Compose** - Orquestación
- **Vercel** - Hosting frontend
- **Strapi Cloud** - Hosting backend

---

## 🚀 Instalación y Ejecución Local

### Opción 1: Con Docker (Recomendado) 🐳

#### Prerrequisitos
- [Docker Desktop](https://www.docker.com/products/docker-desktop) instalado
- Git

#### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/SergioR-02/Eventos_Unal.git
cd Eventos_Unal
```

2. **Configurar variables de entorno del backend**
```bash
# Windows PowerShell
copy backend\.env.example backend\.env

# Linux/Mac
cp backend/.env.example backend/.env
```

Editar `backend/.env` y cambiar los valores de ejemplo por valores seguros (importante cambiar `APP_KEYS`, `JWT_SECRET`, etc.).

3. **Levantar los contenedores**
```bash
docker-compose up --build
```

4. **Configurar permisos en Strapi (Primera vez)**

   a. Acceder al admin de Strapi: http://localhost:1337/admin
   b. Crear cuenta de administrador (primera vez)
   c. Ir a **Settings** ⚙️ → **Users & Permissions Plugin** → **Roles** → **Public**
   d. Expandir **Event** y marcar:
      - ☑️ `find`
      - ☑️ `findOne`
   e. Expandir **Category** y marcar:
      - ☑️ `find`
      - ☑️ `findOne`
   f. Click en **Save** (arriba a la derecha)

5. **Acceder a las aplicaciones**
   - **Frontend**: http://localhost:5173
   - **Backend Admin**: http://localhost:1337/admin

### Opción 2: Sin Docker

#### Backend

```bash
cd backend
npm install
npm run develop
```

Configurar permisos públicos igual que en el paso 4 de Docker.

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📁 Estructura del Proyecto

```
Eventos_Unal/
├── backend/                    # Strapi CMS Backend
│   ├── src/
│   │   ├── api/
│   │   │   ├── event/         # Colección de Eventos
│   │   │   └── category/      # Colección de Categorías
│   │   └── index.ts
│   ├── config/                # Configuración de Strapi
│   ├── database/              # Migraciones
│   ├── public/uploads/        # Archivos subidos
│   ├── Dockerfile
│   └── package.json
│
├── frontend/                   # React + Vite Frontend
│   ├── src/
│   │   ├── components/        # Componentes React
│   │   │   ├── atoms/         # Componentes básicos
│   │   │   ├── molecules/     # Componentes compuestos
│   │   │   ├── organisms/     # Secciones complejas
│   │   │   ├── pages/         # Vistas completas
│   │   │   └── templates/     # Plantillas de página
│   │   ├── hooks/             # Custom hooks
│   │   ├── services/          # API calls
│   │   ├── types/             # TypeScript types
│   │   ├── context/           # Context API
│   │   └── utils/             # Utilidades
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml          # Orquestación de contenedores
└── README.md
```

---

## 🧠 Reflexión sobre el Desarrollo

### ¿Qué aprendí de nuevo durante esta prueba?

Durante la prueba profundicé en el uso de Docker para estructurar un sistema completo con frontend, backend y base de datos, garantizando la comunicación entre servicios y la persistencia de datos. También reforcé el manejo de variables de entorno en docker-compose y la configuración de entornos con hot-reload, logrando un flujo de desarrollo más ágil y estable.


### ¿Qué obstáculos encontré y cómo los resolví?

El formato en el que Strapi entrega los campos de texto enriquecido, ya que los contenidos se enviaban en bloques estructurados difíciles de renderizar directamente. Para resolverlo, integré la librería @strapi/blocks-react-renderer, lo que permitió interpretar y mostrar adecuadamente los textos con formato en la interfaz. Estos problemas me ayudaron a fortalecer mis habilidades de diagnóstico y depuración dentro de un entorno realista de desarrollo.

### ¿Qué mejorarías si tuvieras más tiempo?

Mejoraria la documentación y la escalabilidad del proyecto. Me gustaría integrar Storybook para documentar visualmente los componentes de la interfaz y facilitar la colaboración con otros desarrolladores.
También implementaría testing automatizado, combinando pruebas unitarias con Jest o Vitest y pruebas de extremo a extremo con Playwright, para garantizar la estabilidad del sistema.
Otra mejora sería la optimización de imágenes, aplicando técnicas de lazy loading y compresión con Sharp para mejorar el rendimiento.

### ¿Qué parte del stack no conocías antes?

Strapi Cloud, la plataforma de despliegue oficial de Strapi. Fue nueva para mí, pero resultó una buena experiencia para entender cómo funciona el ciclo completo de publicación de un backend con strapi en la nube. Configurando variables de entorno, gestionar tokens de autenticación y manejar los tiempos de suspensión propios del plan gratuito.

Una de las características que más me gustó fue su integración con GitHub, ya que el sistema permitía desplegar automáticamente nuevas versiones del backend cada vez que se realizaba un cambio en la rama asignada. Esto facilitó mantener un flujo de desarrollo continuo y bien sincronizado entre el código fuente y el entorno productivo.

---


## 👨‍💻 Autor

**Sergio Ruiz**

- GitHub: [@SergioR-02](https://github.com/SergioR-02)

---