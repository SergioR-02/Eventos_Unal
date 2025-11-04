# 🎓 Eventos UNAL - Sistema de Gestión de Eventos

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Strapi](https://img.shields.io/badge/Strapi-5.30.0-4945FF?style=for-the-badge&logo=strapi&logoColor=white)](https://strapi.io/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

## 📖 Descripción

Sistema web para la **gestión y visualización de eventos** de la Universidad Nacional de Colombia, desarrollado con **React + TypeScript** en el frontend y **Strapi CMS v5** como Headless CMS en el backend.

---

## 🌐 DEMO EN VIVO

### 🚀 **Aplicación Desplegada en Producción**

[![Frontend Demo](https://img.shields.io/badge/Frontend-Live_Demo-success?style=for-the-badge&logo=vercel&logoColor=white)](https://eventos-unal.vercel.app)
[![Backend Admin](https://img.shields.io/badge/Backend_Admin-Strapi_Cloud-4945FF?style=for-the-badge&logo=strapi&logoColor=white)](https://talented-fun-b649e374ff.strapiapp.com/admin/auth/login)

- **🌍 Frontend**: [`https://eventos-unal.vercel.app`](https://eventos-unal.vercel.app)
- **⚙️ Backend Admin**: [`https://talented-fun-b649e374ff.strapiapp.com/admin`](https://talented-fun-b649e374ff.strapiapp.com/admin/auth/login)

> ⚠️ **Nota sobre Cold Start**: El backend usa Strapi Cloud (plan gratuito), por lo que el servidor entra en modo de "suspensión" después de un período de inactividad. **La primera carga puede tardar 30-60 segundos** mientras el servidor se reactiva. Las peticiones posteriores serán instantáneas.

---

## 📋 DESCRIPCIÓN DEL PROYECTO

- ✅ Frontend desarrollado con **React + TypeScript + Vite**
- ✅ Backend con **Strapi CMS v5** (Headless CMS)
- ✅ **Dos colecciones relacionadas**: Eventos y Categorías
- ✅ Interfaz dinámica e interactiva consumiendo la API REST
- ✅ Diseño responsive con **TailwindCSS**
- ✅ **Dockerización completa** del proyecto
- ✅ Despliegue en la nube (**Vercel** + **Strapi Cloud**)

### 🌟 **Funcionalidades Principales**

#### 🏗️ **Features & Arquitectura**
![Responsive](https://img.shields.io/badge/Responsive-Design-4ECDC4?style=flat-square&logo=css3&logoColor=white)
![TypeSafe](https://img.shields.io/badge/Type-Safe-96CEB4?style=flat-square&logo=typescript&logoColor=white)
![Dark Mode](https://img.shields.io/badge/Dark_Mode-Toggle-2D3748?style=flat-square&logo=moon&logoColor=white)
![API REST](https://img.shields.io/badge/API-REST-FF6B6B?style=flat-square&logo=fastapi&logoColor=white)

- 🏠 **Vista principal** con listado de todos los eventos
- 🔍 **Búsqueda dinámica** por título o descripción
- 🏷️ **Filtrado avanzado** por categoría
- 📄 **Vista detallada** de cada evento con información completa
- 📱 **Diseño responsive** (móvil, tablet, escritorio)
- 🌙 **Modo claro/oscuro** con persistencia
- 🔗 **Eventos relacionados** por categoría
- ⚡ **Performance optimizado** con lazy loading

---

## 🛠️ STACK TECNOLÓGICO

### **Frontend Core**
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=flat-square&logo=vite&logoColor=white)

- **React 18.3.1** - Librería UI con Hooks y Suspense
- **TypeScript 5.5.3** - Tipado estático para JavaScript
- **Vite 5.4.2** - Build tool ultrarrápido con HMR

### **Backend & CMS**
![Strapi](https://img.shields.io/badge/Strapi-5.30.0-4945FF?style=flat-square&logo=strapi&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=node.js&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-Development-003B57?style=flat-square&logo=sqlite&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Production-4169E1?style=flat-square&logo=postgresql&logoColor=white)

- **Strapi v5.30** - Headless CMS con API REST automática
- **Node.js 20** - Runtime de JavaScript
- **SQLite** - Base de datos local (desarrollo)
- **PostgreSQL** - Base de datos en producción (Strapi Cloud)

### **Styling & UI Libraries**
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide-0.344.0-FF6B6B?style=flat-square&logo=lucide&logoColor=white)

- **TailwindCSS 3.4.1** - Framework CSS utility-first
- **Lucide React 0.344.0** - Iconos modernos y customizables
- **@strapi/blocks-react-renderer** - Renderizado de Rich Text

### **State Management & HTTP**
![Zustand](https://img.shields.io/badge/Zustand-5.0.8-FF6B35?style=flat-square&logo=react&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.13.1-5A29E4?style=flat-square&logo=axios&logoColor=white)

- **Zustand 5.0.8** - Gestión de estado global ligera
- **Axios 1.13.1** - Cliente HTTP para peticiones API
- **Context API** - Gestión de tema claro/oscuro

### **DevOps & Deployment**
![Docker](https://img.shields.io/badge/Docker-Latest-2496ED?style=flat-square&logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Latest-000000?style=flat-square&logo=vercel&logoColor=white)
![Strapi Cloud](https://img.shields.io/badge/Strapi_Cloud-Latest-4945FF?style=flat-square&logo=strapi&logoColor=white)

- **Docker & Docker Compose** - Contenedorización y orquestación
- **Vercel** - Hosting del frontend con CI/CD automático
- **Strapi Cloud** - Hosting del backend con deploys automáticos

---

## 🚀 INSTALACIÓN Y EJECUCIÓN LOCAL

### **Opción 1: Con Docker (Recomendado)** 🐳

![Docker](https://img.shields.io/badge/Docker-Required-2496ED?style=flat-square&logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker_Compose-Required-2496ED?style=flat-square&logo=docker&logoColor=white)

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

4. **Configurar permisos en Strapi (Primera vez)** 🔐

   > ⚠️ **Importante**: Este paso es necesario para que el frontend pueda consumir la API.

   a. Acceder al admin: **http://localhost:1337/admin**
   
   b. **Crear cuenta de administrador** (primera vez)
   
   c. Ir a **Settings** ⚙️ → **Users & Permissions Plugin** → **Roles** → **Public**
   
   d. Expandir **Event** y marcar:
      - ☑️ `find`
      - ☑️ `findOne`
   
   e. Expandir **Category** y marcar:
      - ☑️ `find`
      - ☑️ `findOne`
   
   f. Click en **Save** 💾 (arriba a la derecha)

5. **Acceder a las aplicaciones** 🎉
   - 🌐 **Frontend**: http://localhost:5173
   - ⚙️ **Backend Admin**: http://localhost:1337/admin

---

### **Opción 2: Sin Docker** 💻

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

---

## 📁 ESTRUCTURA DEL PROYECTO

### 🏗️ **Arquitectura de Carpetas**

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
```

---

## 🧠 REFLEXIÓN SOBRE EL DESARROLLO

### 📚 **¿Qué aprendí de nuevo durante esta prueba?**

Durante la prueba profundicé en el uso de Docker para estructurar un sistema completo con frontend, backend y base de datos, garantizando la comunicación entre servicios y la persistencia de datos. También reforcé el manejo de variables de entorno en docker-compose y la configuración de entornos con hot-reload, logrando un flujo de desarrollo más ágil y estable.


### 🔧 **¿Qué obstáculos encontré y cómo los resolví?**

El formato en el que Strapi entrega los campos de texto enriquecido, ya que los contenidos se enviaban en bloques estructurados difíciles de renderizar directamente. Para resolverlo, integré la librería @strapi/blocks-react-renderer, lo que permitió interpretar y mostrar adecuadamente los textos con formato en la interfaz. Estos problemas me ayudaron a fortalecer mis habilidades de diagnóstico y depuración dentro de un entorno realista de desarrollo.

### 🚀 **¿Qué mejorarías si tuvieras más tiempo?**

Mejoraria la documentación y la escalabilidad del proyecto. Me gustaría integrar Storybook para documentar visualmente los componentes de la interfaz y facilitar la colaboración con otros desarrolladores.
También implementaría testing automatizado, combinando pruebas unitarias con Jest o Vitest y pruebas de extremo a extremo con Playwright, para garantizar la estabilidad del sistema.
Otra mejora sería la optimización de imágenes, aplicando técnicas de lazy loading y compresión con Sharp para mejorar el rendimiento.

### 🆕 **¿Qué parte del stack no conocías antes?**

Strapi Cloud, la plataforma de despliegue oficial de Strapi. Fue nueva para mí, pero resultó una buena experiencia para entender cómo funciona el ciclo completo de publicación de un backend con strapi en la nube. Configurando variables de entorno, gestionar tokens de autenticación y manejar los tiempos de suspensión propios del plan gratuito.

Una de las características que más me gustó fue su integración con GitHub, ya que el sistema permitía desplegar automáticamente nuevas versiones del backend cada vez que se realizaba un cambio en la rama asignada. Esto facilitó mantener un flujo de desarrollo continuo y bien sincronizado entre el código fuente y el entorno productivo.

---
**Desarrollado por Sergio Ruiz © 2025**

</div>