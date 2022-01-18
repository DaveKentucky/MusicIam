# Musiclam

Jest to aplikacja webowa pozwalająca na wyświetlenie najpopularniejszych utworów muzycznych w internecie. Dla ciekawskich daję takżę możliwość o dowiedzeniu się więcej rzeczy o utrzorze, jak np. dokładny tekst piosenki.

Projekt powstał przy pomocy aplikacji [React](https://reactrouter.com/) ([create-react](https://github.com/facebook/create-react-app)) i wykorzystuje szereg Open Source'owych bibliotek.

## Uruchomienie aplikacji

W celu poprawnego uruchomienia aplikacji po załadowaniu kodu źródłowego w przygotowanym środowisku programistycznym (np PyCharm) powinno się uruchomić dwie konsole. W pierwszej uruchomić serwer strony, a w drugiej uruchomić stronę jako klient.

##### Server

`npm run start-server`

domyślnie ustawiony jest na http://127.0.0.1:5000

##### Klient

`npm run start`

Aby prawidłowo przygotować środowisko programistyczne wymagana jest obsługa języka [Python](https://www.python.org/downloads/), oraz zainstalowany manager pakietów [npm](https://www.npmjs.com/) dla środowiska Node.js

#### Historia Użytkownika

Użytkownik na stronie głównej może wybrać czy chcę przeglądać utwory, czy artystów.
W przypadku utworów, użytkownik może w wyszukiwarce znaleźć swój ulubiony utwór, albo pod nią zobaczyć listę najpopularniejszych utworów. Gdy użytkownik znalazł swój kawałek myzyczny, może w niego kliknąć, aby dowiedzieć się o nim więcej informacji.
W przypadku wyboru artystów, użytkownik otrzymuje dostęp tylko do wyszukiwarki artystów.

## Wykorzystane biblioteki

#### [Styled Components](https://styled-components.com/)

Jest to biblioteka wykorzystująca znakowanie literałów szablonów (dodatek do JavaScript) i potęgę CSS. Styled-Components umożliwia pisanie kodu CSS w celu nadania stylu komponentom. Usuwa również mapowanie między komponentami i stylami. Dzięki temu używanie komponentów jako konstrukcji do stylizacji niskiego poziomu nie może być prostsze!

#### [Genius](https://docs.genius.com/#/resources-h1)

Genius jest to strona internetowa zawierająca biblotekę najpopularniejszych utworów muzycznych w internecie. Genius zapewnia dostęp do swojego API, aby nasza strona w prosty sposób podłączyła się z kontem Genius'a. W ten sposób pozwalając nam na proste wykorzystanie ich end-pointów.

#### [Beautiful Soup](https://beautiful-soup-4.readthedocs.io/en/latest/)

Beautiful Soup jest to bibloteka Pythona do wyciągania danych z plików HTML i XML.

#### [Postman](https://www.postman.com/)

Jest to platforma API do budowania i używania API. Dzięki niej stworzyliśmy następujące API, które wykorzystaliśmy w aplikacji:

* GET search Genius
* GET song from Genius
* GET artist from Genius
* GET songs by artist from Genius
* GET track from Spotify
* GET song lyrics from Genius
* GET hot tracks from Genius

## API w aplikacji

W celu stworzenia strony przygotowaliśmy następujące end-pointy:

* search
* songs/<song_id>
* artists/<artist_id>
* artists/<artist_id>/songs
* songs/<song_id>/lyrics
* hot
* track
