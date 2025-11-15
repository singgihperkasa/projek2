async function loadSurahFromAPI(surahNumber) {
    const response = await fetch(`https://api.quran.com/api/v4/verses/by_chapter/${surahNumber}?language=id&words=true`);
    const data = await response.json();
    return data.verses.map(verse => ({
        number: verse.verse_number,
        arabic: verse.text_uthmani,
        translation: verse.translations[0]?.text || 'Terjemahan tidak tersedia'
    }));
}