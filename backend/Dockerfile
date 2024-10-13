FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS build
WORKDIR /source
COPY . /source

RUN dotnet restore
RUN dotnet publish -c Release -o out 

FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine AS runtime
WORKDIR /app
COPY --from=build /source/out ./

RUN apk add icu-dev icu-libs icu-data-full
RUN apk add tzdata
RUN ln -sf /usr/share/zoneinfo/Europe/Istanbul /etc/localtime
RUN echo "Europe/Istanbul" > /etc/timezone

EXPOSE 3001

ENTRYPOINT ["dotnet", "Backend.dll", "--urls", "http://0.0.0.0:3001", "--environment=Production"]
