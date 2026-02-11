# Folder na zdjęcia do galerii

## Jak dodać zdjęcia?

1. **Wrzuć zdjęcia tutaj** (do folderu `public/photos/`)
   - Polecane formaty: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Przykładowe nazwy: `1.jpg`, `2.jpg`, `3.jpg` lub `love-1.jpg`, `engagement.jpg` itd.

2. **Zaktualizuj kod** w pliku `src/sections/GallerySection.jsx`
   
   Znajdź tablicę `photos` (koło linii 4-10) i zamień na:

   ```javascript
   const photos = [
     { id: 1, src: '/photos/1.jpg', alt: 'Paula i Artur - zdjęcie 1' },
     { id: 2, src: '/photos/2.jpg', alt: 'Paula i Artur - zdjęcie 2' },
     { id: 3, src: '/photos/3.jpg', alt: 'Paula i Artur - zdjęcie 3' },
     { id: 4, src: '/photos/engagement.jpg', alt: 'Nasze zaręczyny' },
     // dodaj więcej zdjęć...
   ];
   ```

3. **Odkomentuj kod renderujący obrazki** w tym samym pliku
   
   Znajdź sekcję z komentarzem `{/* Uncomment when you have real photos: */}` 
   i odkomentuj tag `<img>`

4. **Commit i push**
   ```bash
   git add public/photos/
   git add src/sections/GallerySection.jsx
   git commit -m "Add photos to gallery"
   git push
   ```

## Przykładowa struktura:

```
public/photos/
├── 1.jpg          (nasze zdjęcie razem)
├── 2.jpg          (zaręczyny)
├── 3.jpg          (wspólne wakacje)
├── 4.jpg          (...)
└── README.md      (ten plik)
```

## Wskazówki:

- **Rozmiar**: Zoptymalizuj zdjęcia przed wrzuceniem (max 1-2MB każde)
- **Orientacja**: Mogą być pionowe i poziome, strona się dostosuje
- **Ilość**: Dodaj tyle ile chcesz, będą wyświetlane w siatce 2-3 kolumny
