# Konfiguracja RSVP z Google Sheets

## Krok 1: Utwórz arkusz Google Sheets

1. Idź do [Google Sheets](https://sheets.google.com)
2. Utwórz nowy arkusz
3. W pierwszym wierszu dodaj nagłówki:
   - A1: `Timestamp`
   - B1: `Imię i nazwisko`
   - C1: `Email`
   - D1: `Telefon`
   - E1: `Liczba osób`
   - F1: `Czy przyjedzie`
   - G1: `Dieta`
   - H1: `Transport`
   - I1: `Uwagi`

## Krok 2: Utwórz Apps Script

1. W arkuszu kliknij **Rozszerzenia** → **Apps Script**
2. Usuń istniejący kod i wklej poniższy:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.guests || '1',
      data.attending === 'yes' ? 'Tak' : 'Nie',
      data.diet || '',
      data.transport || '',
      data.comments || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('RSVP API is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

3. Zapisz projekt (Ctrl+S)
4. Kliknij **Wdróż** → **Nowe wdrożenie**
5. Wybierz typ: **Aplikacja internetowa**
6. Ustaw:
   - **Wykonaj jako**: Ja
   - **Kto ma dostęp**: Każdy
7. Kliknij **Wdróż**
8. Skopiuj **URL aplikacji internetowej**

## Krok 3: Zaktualizuj kod

Otwórz plik `src/pages/RSVPPage.jsx` i zamień:

```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
```

na skopiowany URL, np.:

```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/ABC123.../exec';
```

## Krok 4: Przetestuj

1. Wypełnij formularz RSVP na stronie
2. Sprawdź czy dane pojawiły się w arkuszu Google Sheets

## Wskazówki

- **Powiadomienia**: W Google Sheets możesz ustawić regułę powiadomień email o nowych wpisach
- **Formatowanie**: Możesz dodać warunkowe formatowanie do kolumny "Czy przyjedzie"
- **Zabezpieczenia**: Rozważ dodanie prostego tokena do weryfikacji requestów

## Rozwiązywanie problemów

1. **CORS errors**: Upewnij się że używasz `mode: 'no-cors'` w fetch
2. **Brak danych**: Sprawdź czy Apps Script jest poprawnie wdrożony jako "Każdy"
3. **Błędy autoryzacji**: Przy pierwszym wdrożeniu musisz zaakceptować uprawnienia
