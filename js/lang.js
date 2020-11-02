function setLanguage(language) {
  document.cookie = "lang=" + language + "; path=/";
  location.reload();
}

function refreshLanguageText() {
  $(".lang-de").hide();
  $(".lang-en").hide();

  if (document.cookie.startsWith("lang=de")) {
    $(".lang-de").show();
    updateLanguageText("Deutsch");
  } else if (document.cookie.startsWith("lang=")) {
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang == "de-DE")
      setLanguage("de")
    else
      setLanguage("en")
  } else {
    $(".lang-en").show();
    updateLanguageText("English");
  }
}

function updateLanguageText(lang) {
  $("#lang-text").text(lang);
}