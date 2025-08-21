FROM node:20-alpine

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración de pnpm
COPY package.json pnpm-lock.yaml* ./

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar el código fuente (excluyendo archivos sensibles)
COPY . .

# Eliminar cualquier archivo .env* que pudiera haberse copiado
RUN rm -f .env .env.local .env.development .env.production

# Crear un archivo .env.production vacío (las variables se pasarán en tiempo de ejecución)
RUN echo "# Variables de entorno para producción - Se pasan en tiempo de ejecución" > .env.production

# Construir la aplicación
RUN pnpm run build

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["pnpm", "run", "start"]
