# Asset Management Backend

## Descripción

Backend para la gestión de activos aplicado a mantenimiento predictivo. Proporciona API's para manejar operaciones relacionadas con la generación de masters / ubicaciones, indicadores y reportes de condición

## Características

- Master / Ubicación
- Indicadores
- Reporte de condición

## Requisitos

- Node.js >= 14.x
- Mysql >= 8.x

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/am-backend.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd am-backend
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
    ```env
    PORT=3000
    ```

## Uso

1. Inicia el servidor:
    ```bash
    npm start
    ```
2. La API estará disponible en `http://localhost:3000`.

## Contribuir

1. Haz un fork del proyecto
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`)
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.