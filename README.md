# iberia--seed--ds-components

Proyecto semilla para la librería de componentes del sistema de diseño de Iberia

## Prerequisitos

Para la generación e los componentes y el proyecto nos vamos a basar en [modern-web](https://modern-web.dev/) y [open-wc](https://open-wc.org/)

Usar patterfly elements como base

- Mantenemos los archivos de unit test (\*.test.js) en la misma carpeta que el componente
- Mantenemos los archivos de integración / demoing (\*.stories.js) en la misma carpeta que el componente
- Mantenemos los archivos de estilos (\*.css) en la misma carpeta que el componente
- Mantenemos los archivos de documentación (\*.md) en la misma carpeta que el componente

## Installation

Para la creación de la semilla hemos lanzado openWC:

```bash
npm init @open-wc
```

Con estas opciones:

✔ What would you like to do today? › Scaffold a new project

✔ What would you like to scaffold? › Web Component

✔ What would you like to add? › Linting (eslint & prettier), Testing (web-test-runner), Demoing (storybook)

✔ Would you like to use typescript? › Yes

## Uso

Este componente web sigue la recomendación [open-wc](https://github.com/open-wc/open-wc).

### Instalación

```bash
npm i ib-link
```

## Uso

```html
<script type="module">
  import 'ib-link/ib-link.js';
</script>

<ib-link></ib-link>
```

## Linting y formateo

Para escanear el proyecto en busca de errores de formato y linting, ejecute

```bash
npm run lint
```

Para corregir automáticamente errores de formato y linting, ejecute

```bash
npm run format
```

## Pruebas con Web Test Runner

Para ejecutar un test de una sola vez, ejecute

```bash
npm run test
```

Para ejecutar las pruebas en modo interactivo ejecute:

```bash
npm run test:watch
```

## Demostraciones con Storybook

Para ejecutar una instancia local de Storybook, ejecute

```bash
npm run storybook
```

Para crear una versión de producción de Storybook, ejecute

```bash
npm run storybook:build
```

## Configuración de herramientas

Para la mayoría de las herramientas (como eslint, husky), la configuración está en `package.json` para reducir la cantidad de archivos en el proyecto.

Si personaliza mucho la configuración, puede considerar moverlos a archivos individuales.

## Demostración local con `web-dev-server`

```bash
npm run start
```

Para ejecutar un servidor de desarrollo local que sirva la demostración básica ubicada en `demo/index.html`
