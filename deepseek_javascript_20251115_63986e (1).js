// Contoh integrasi dengan API publik
const QURAN_API = "https://api.alquran.cloud/v1/surah/";

async function loadFullSurah(surahNumber) {
    try {
        const response = await fetch(`${QURAN_API}${surahNumber}`);
        const data = await response.json();
        return data.data.ayahs;
    } catch (error) {
        console.error('Error loading surah:', error);
        return [];
    }
}