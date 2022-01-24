Musiclam
=====

Jest to aplikacja webowa pozwalająca na wyświetlenie najpopularniejszych utworów muzycznych w internecie. Dla ciekawskich daję takżę możliwość o dowiedzeniu się więcej rzeczy o utrzorze, jak np. dokładny tekst piosenki.

Aplikację tworzą dwa projekty. Projekt backendowy składa się z prostego serwera oprogramowanego w języku Python we frameworku [Flask](https://flask.palletsprojects.com/en/2.0.x/). Projekt frontendowy został zbudowany z użyciem frameworka [React](https://pl.reactjs.org/) ([create-react-app](https://create-react-app.dev/)) i wykorzystuje szereg Open Source'owych bibliotek.

## Uruchamianie aplikacji

W niniejszym rozdziale opisano kolejne kroki postępowania konieczne do uruchomienia aplikacji na własnym urządzeniu.

### Konfiguracja serwera

Przed uruchomieniem projektu konieczne jest zdefiniowanie konfiguracji serwera. W tym calu należy stworzyć plik `.flaskenv` w folderze `api`. Plik konfiguracyjny powinien mieć następującą formę:
```
FLASK_APP=server.py
FLASK_ENV=development

GENIUS_API_HOST=genius.p.rapidapi.com
GENIUS_API_KEY=<your API key>
```
Podczas testowania aplikacji wykorzystano hosta [RapidAPI](https://rapidapi.com/hub). Jest to serwis, zbierający wiele publicznych API internetowych, w którym można założyć darmowe konto i uzyskać dostęp zarówno do płatnych jak i darmowych API. Zachęcamy użytkownika do rejestracji w serwisie i wygenerowania własnego klucza API, który należy następnie wkleić do pliku konfiguracyjnego we wskazanym miejscu zastępując frazę `<your API key>`.

Dodatkowo w projekcie wykorzystano silnik chromedriver, który tworzy wirtualną instancję przeglądarki internetowej z silnikiem chromium. Jest to konieczne do prawidłowego działania biblioteki Beautiful Soup. Aby umożliwić aplikacji korzystanie z chromedriver należy pobrać [wybraną wersję](https://chromedriver.chromium.org/downloads) aplikacji i umieścić plik `chromedriver.exe` w folderze `api`.

### Uruchamianie klienta w trybie developerskim

Do uruchomienia skonfigurowanego projektu wystarczy użyć dwóch okien konsoli systemowej. Konsole należy otworzyć w głównym katalogu projektu. do uruchamiania należy użyć menadżera paczek [npm](https://www.npmjs.com/). W jednej konsoli należy uruchomić serwer za pomocą komendy:
```
npm run start-server
```
W drugim oknie konsoli należy następnie uruchomić frontend za pomocą komendy:
```
npm run start
```
Po chwili aplikacja powinna otworzyć się samoczynnie w nowym oknie przeglądarki internetowej. Jeśli tak się nie stanie, można bezpośrednio wpisać w pasku przeglądarki adres `localhost` na porcie `3000`:
```
http://localhost:3000/
```

## Wykorzystane narzędzia i biblioteki

### [Styled Components](https://styled-components.com/)

Jest to biblioteka wykorzystująca znakowanie literałów szablonów (dodatek do JavaScript) i potęgę CSS. Styled-Components umożliwia pisanie kodu CSS w celu nadania stylu komponentom frameworka React. Usuwa również mapowanie między komponentami i stylami. Dzięki temu używanie komponentów jako konstrukcji do stylizacji niskiego poziomu nie może być prostsze!

### [Genius API](https://docs.genius.com/)

Genius jest to strona internetowa zawierająca biblotekę najpopularniejszych utworów muzycznych w internecie. Genius zapewnia dostęp do niektórych endpointów swojego internetowego API. Aplikacja wykorzystuje to API do pobierania większości danych o utworach muzycznych i wykonawcach.

### [Beautiful Soup](https://beautiful-soup-4.readthedocs.io/en/latest/)

Beautiful Soup jest to bibloteka Pythona służąca do wyciągania danych z plików HTML i XML. W niniejszym projekcie została wykorzystana do poszerzenia możliwości Genius API o pobieranie tekstów utworów muzycznych bezpośrednio ze strony [Genius.com](https://genius.com/).

### [Postman](https://www.postman.com/)

Jest to platforma API do budowania i używania API. Dzięki niej testowaliśmy działanie naszego API, które wykorzystaliśmy w aplikacji.

## Serwer aplikacji

Serwer zawiera kilka prostych endpointów, które zostały krótko opisane poniżej.

* search - wyszukiwanie utworów i wykonawców w bazie Genius.com
* songs/<song_id> - pobieranie szczegółowych informacji o utworze wskazanym przez ID
* artists/<artist_id> - pobieranie szczegółowych informacji o wykonawcy wskazanym przez ID
* artists/<artist_id>/songs - pobieranie utworów wykonawcy o wskazanym ID
* songs/<song_id>/lyrics - pobieranie tekstu utworu o wskazanym ID
* hot - pobieranie listy najpopularniejszych utworów na stronie Genius.com
