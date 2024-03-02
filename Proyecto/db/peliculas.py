import requests
import json

def obtener_todas_las_peliculas():
    peliculas = []
    pagina = 1
    total_paginas = float('inf')  # Inicializado como infinito para asegurar la obtención de todas las páginas
    
    # Realizar solicitudes hasta que se obtengan todas las páginas
    while pagina <= total_paginas:
        # Realizar solicitud a la API de TMDb con el idioma español
        response = requests.get(f'https://api.themoviedb.org/3/discover/movie?api_key=7550c4f2e2a2e5f83baa7235c0426643&page={pagina}&language=es-ES')
        data = response.json()
        
        # Verificar si se obtuvo una respuesta exitosa
        if response.status_code == 200:
            # Obtener las películas de la página actual
            peliculas.extend(data['results'])
            
            # Actualizar el número total de páginas
            total_paginas = data['total_pages']
            
            # Pasar a la siguiente página
            pagina += 1
        else:
            print(f"Error al obtener la página {pagina}. Código de estado: {response.status_code}")
            break
    
    return peliculas

# Llamar a la función para obtener todas las películas
peliculas = obtener_todas_las_peliculas()

# Guardar la información en un archivo JSON
with open('peliculas.json', 'w', encoding='utf-8') as file:
    json.dump(peliculas, file, ensure_ascii=False, indent=4)

print("La información de las películas se ha guardado en el archivo 'peliculas.json'.")

      
      