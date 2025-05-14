terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"  # Versi stabil
    }
  }
}

# Konfigurasi Docker (untuk Windows/Mac/Linux)
provider "docker" {
  # host = "unix:///var/run/docker.sock"  # Linux/Mac
  host = "npipe:////./pipe/docker_engine"  # Windows
}

# Pull image Nginx
resource "docker_image" "nginx" {
  name = "nginx:latest"
}

# Buat container dari image Nginx
resource "docker_container" "nginx" {
  name  = "nginx-container"
  image = docker_image.nginx.image_id
  ports {
    internal = 80
    external = 8080  # Port yang diakses di browser
  }
}