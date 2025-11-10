# ===============================
# СТАДИЯ 1: Сборка фронтенда
# ===============================
FROM node:20 AS frontend-build
WORKDIR /app/frontend
COPY Frontend/frontend/package*.json ./
RUN npm install
COPY Frontend/frontend/ ./
RUN npm run build

# ===============================
# СТАДИЯ 2: Сборка .NET backend
# ===============================
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Копируем csproj и восстанавливаем зависимости
COPY Backend/CourseProject/CourseProject/*.csproj ./CourseProject/
RUN dotnet restore ./CourseProject/CourseProject.csproj

# Копируем исходники и собираем
COPY Backend/CourseProject/CourseProject/. ./CourseProject/
# Копируем собранный фронт в wwwroot
COPY --from=frontend-build /app/frontend/dist ./CourseProject/wwwroot

WORKDIR /src/CourseProject
RUN dotnet publish -c Release -o /app/publish

# ===============================
# СТАДИЯ 3: Runtime
# ===============================
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

# Render задаёт порт через переменную среды PORT
ENV ASPNETCORE_URLS=http://+:${PORT}
EXPOSE 10000

ENTRYPOINT ["dotnet", "CourseProject.dll"]
