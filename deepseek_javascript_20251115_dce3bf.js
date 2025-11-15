// Urutan playback:
playCurrent() → 
  if (isPlayingQari) → playQariAudio() → onEnded → isPlayingQari = false → playNextSegment()
  if (!isPlayingQari) → playTranslationTTS() → onEnded → isPlayingQari = true → currentVerseIndex++ → playNextSegment()