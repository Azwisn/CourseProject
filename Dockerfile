# ===============================
# —“јƒ»я 1: —борка фронтенда
# ===============================
FROM node:20 AS frontend-build
WORKDIR /app/frontend
COPY Frontend/frontend/package*.json ./
RUN npm install
COPY Frontend/frontend/ ./
RUN npm run build

# ===============================
# —“јƒ»я 2: —борка .NET backend
# ===============================
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

#  опируем csproj и восстанавливаем зависимости
COPY Backend/CourseProject/CourseProject/*.csproj ./CourseProject/
RUN dotnet restore ./CourseProject/CourseProject.csproj

#  опируем всЄ остальное и билдим
COPY Backend/CourseProject/CourseProject/. ./CourseProject/
COPY --from=frontend-build /app/frontend/dist ./CourseProject/wwwroot
WORKDIR /src/CourseProject
RUN dotnet publish -c Release -o /app/publish

# ===============================
# —“јƒ»я 3: Runtime
# ===============================
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
ENV ASPNETCORE_URLS=http://+:10000
EXPOSE 10000
ENTRYPOINT ["dotnet", "CourseProject.dll"]
