FROM docker.io/node:20-alpine AS build-stage

WORKDIR /odsn

# Copier les fichiers package pour installer les dépendances
COPY package*.json ./

# Installer les dépendances sans exécuter les scripts postinstall
RUN npm ci --ignore-scripts

# Copier tous les fichiers source
COPY . .

# Maintenant faire le build avec tous les fichiers présents
RUN npm run build

# STAGE 2
FROM docker.io/nginxinc/nginx-unprivileged:latest AS serve-stage

# Configurer nginx pour une SPA (Single Page Application)
RUN sed -i 's/^ *index  index.html index.htm;/        try_files $uri $uri\/ \/index.html;/' /etc/nginx/conf.d/default.conf 

# Copier les fichiers buildés depuis l'étape précédente
COPY --from=build-stage /odsn/dist /usr/share/nginx/html

# METADATA
EXPOSE 8080