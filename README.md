Geolocalização (Geolocation API)
API: navigator.geolocation
Função: Esta API permite acessar a localização geográfica do usuário. Ela é uma funcionalidade nativa dos navegadores modernos, que pode ser usada para obter a latitude e a longitude do usuário. O código usa o método navigator.geolocation.getCurrentPosition() para obter a posição do usuário.
Se a geolocalização for bem-sucedida, retorna as coordenadas de latitude e longitude.
Se a geolocalização falhar (por exemplo, se o usuário bloquear a permissão), é possível tratar o erro.

Nominatim API (OpenStreetMap)
API: https://nominatim.openstreetmap.org/reverse
Função: O Nominatim é uma API de geocodificação e geocodificação reversa oferecida pelo OpenStreetMap. A geocodificação é o processo de converter uma descrição textual de um local (como um endereço) em coordenadas geográficas (latitude e longitude), e a geocodificação reversa é o oposto, ou seja, a conversão de coordenadas geográficas de volta para um endereço.
https://github.com/osm-search/Nominatim

Open-Meteo API (Clima)
API: https://api.open-meteo.com/v1/forecast
Função: Open-Meteo é uma API que fornece previsões climáticas e dados meteorológicos em tempo real para qualquer localização global. Ela oferece uma maneira fácil de acessar dados climáticos, como temperatura, umidade, precipitação, velocidade do vento, entre outros, sem precisar de uma chave de API ou de registro. A API é voltada para desenvolvedores que precisam de dados meteorológicos em seus aplicativos, sites ou projetos.
https://github.com/open-meteo

Esse trabalho temtem como objetivo obter a localização do usuário (latitude e longitude), exibir informações sobre o clima e a cidade em que ele se encontra, e também mostrar um mapa com a localização.
