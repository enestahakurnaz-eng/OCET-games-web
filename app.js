/* ==========================================================================
   OCET GAMES — app.js (vanilla JS, no dependencies)
   1. EN / TR language toggle
   2. Copy-to-clipboard buttons
   3. Mobile menu

   HOW TRANSLATION WORKS
   - English lives in the HTML. Any element with data-i18n="some.key" gets its
     Turkish text from the TR list below when TR is selected.
   - No TR entry for a key? The English text from the HTML is kept.
   - Longer bilingual content (privacy.html) uses whole blocks instead:
     <div data-lang-block="en"> ... </div>  <div data-lang-block="tr" hidden> ... </div>
   ========================================================================== */
(function () {
  'use strict';

  var TR = {
    // meta
    'title.home': 'OCET GAMES — Bağımsız oyun stüdyosu',
    'title.privacy': 'Gizlilik Politikası — OCET GAMES',
    'skip': 'İçeriğe geç',

    // navbar + footer
    'nav.games': 'Oyunlar',
    'nav.studio': 'Stüdyo',
    'nav.founders': 'Kurucular',
    'nav.contact': 'İletişim',
    'nav.status': 'DURUM: PROTOTİP',
    'nav.home': 'Ana sayfa',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.copy': '© 2026 OCET GAMES. Tüm hakları saklıdır.',

    // hero
    'hero.eyebrow1': 'Bağımsız oyun stüdyosu',
    'hero.eyebrow2': 'Kuruluş 2026',
    'hero.h1a': 'Küçük ekip.',
    'hero.h1b': 'Sıkı mekanikler.',
    'hero.h1c': 'Sıfırdan inşa.',
    'hero.sub': '<strong>OCET GAMES</strong> bağımsız bir oyun geliştirme stüdyosudur. CrazyGames için web oyunları, Google Play için mobil oyunlar yapıyoruz: kısa oturumlar, hızlı tepki veren kontroller, dolgu yok.',
    'hero.cta1': 'Geliştirme Hattını Gör',
    'hero.cta2': 'İletişime Geç',

    // build sheet
    'sheet.team': 'Ekip',
    'sheet.team.v': '2 geliştirici',
    'sheet.platforms': 'Platformlar',
    'sheet.targets': 'Hedefler',
    'sheet.pipeline': 'Geliştirilen',
    'sheet.pipeline.v': '2 proje',
    'sheet.released': 'Yayınlanan',
    'sheet.released.v': '0 (şimdilik)',
    'sheet.status': 'Durum',
    'sheet.status.v': 'Prototip',

    // games
    'games.label': 'Geliştirme hattı',
    'games.h2': 'Henüz yayınlanan oyun yok. Tezgâhta olanlar bunlar.',
    'games.lead': 'Yeni bir stüdyoyuz, bu yüzden gösterecek yayınlanmış bir oyunumuz yok. Şu anda üzerinde çalıştığımız iki proje bunlar. İsimler, görüntüler ve çıkış tarihleri kesinleştiğinde burada yer alacak.',
    'games.noart': 'Henüz görsel paylaşılmadı',
    'games.status': 'Geliştiriliyor',
    'games.note': 'Çalışma adlarıdır. Prototipler değiştikçe ayrıntılar da değişir.',
    'spec.platform': 'Platform',
    'spec.target': 'Hedef',
    'spec.stage': 'Aşama',
    'g1.id': 'Proje 01',
    'g1.title': 'WebGL Arcade Oyunu',
    'g1.desc': 'Tarayıcı için hızlı bir arcade oyunu. Saniyeler içinde açılır, klavye veya dokunmatik ekranla oynanır ve birkaç dakikalık turlar üzerine kuruludur.',
    'g1.platform': 'Web (WebGL)',
    'g1.stage': 'Prototip',
    'g2.id': 'Proje 02',
    'g2.title': 'Mobil Aksiyon Oyunu',
    'g2.desc': 'Önce telefon düşünülerek tasarlanan bir aksiyon oyunu. Tek parmakla kontrol, hızlı yeniden başlama ve elde doğru hissettirene kadar ayarladığımız bir çekirdek döngü.',
    'g2.platform': 'Mobil (Android)',
    'g2.stage': 'Prototip',

    // studio
    'studio.label': 'Stüdyo',
    'studio.h2': 'İki geliştirici, bir masa dolusu fikir.',
    'studio.p1': 'OCET GAMES iki geliştiriciden oluşan bir kurucu ekiptir. Tasarımı, kodu ve testi kendimiz yapıyoruz.',
    'studio.p2': 'Sürecimiz basit: birkaç gün içinde oynanabilir bir prototip çıkar, insanlara oynat, yalnızca eğlenceli olanı tut. Çekirdek mekanik gri kutularla çalışmıyorsa, görseller onu kurtarmaz.',
    'studio.p3': 'Bir oyunun oynarken nasıl hissettirdiğini ve altı ay sonra hâlâ okuyabildiğimiz kodu önemsiyoruz. Ekip bu kadar küçükken ikisi de önemli.',
    'pr1.t': 'Hızlı prototipleme',
    'pr1.d': 'Küçük, oynanabilir sürümler; erken test. Fikirler hızlı elenir, iyi olanlara daha çok zaman kalır.',
    'pr2.t': 'Oynanış hissi',
    'pr2.d': 'Girdi tepkisi, zamanlama, geri bildirim. İlk on saniyeyi tekrar oynamaya değer olana kadar ayarlıyoruz.',
    'pr3.t': 'Temiz mühendislik',
    'pr3.d': 'Hafif sürümler, kısa yükleme süreleri ve tasarım değiştiğinde kolayca değişebilen kod.',

    // founders
    'founders.h2': 'Kurucular',
    'founders.count': 'Ekip: 02',
    'founders.role': 'Kurucu Ortak &amp; Geliştirici',

    // contact
    'contact.label': 'İletişim',
    'contact.h2': 'Yayıncılar, platformlar, oyuncular: bize yazın.',
    'contact.lead': 'Yayıncılık ve iş birliği soruları için genel adresi kullanın. Birimize doğrudan ulaşmak için kişisel adresleri kullanabilirsiniz. Gelen her mesajı okuyoruz.',
    'contact.wa': 'WhatsApp\'tan Yaz',
    'contact.wa.note': 'Yeni sekmede doğrudan sohbet açar',
    'contact.general': 'Genel ve yayıncılık talepleri',
    'contact.domain': 'Resmî alan adı',
    'copy': 'Kopyala',
    'copied': 'Kopyalandı',

    // privacy page chrome
    'legal.eyebrow': 'Yasal',
    'legal.h1': 'Gizlilik Politikası',
    'legal.toc': 'İçindekiler'
  };

  /* ---------------------------------------------------------------- i18n */
  var STORAGE_KEY = 'ocet-lang';
  var EN = { copied: 'Copied' };
  var i18nNodes = document.querySelectorAll('[data-i18n]');
  var langButtons = document.querySelectorAll('.lang [data-lang]');
  var langBlocks = document.querySelectorAll('[data-lang-block]');
  var current = 'en';

  // Remember the English text that is written in the HTML.
  i18nNodes.forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (!(key in EN)) EN[key] = el.innerHTML;
  });

  function t(key) {
    if (current === 'tr' && Object.prototype.hasOwnProperty.call(TR, key)) return TR[key];
    return EN[key];
  }

  function setLang(lang) {
    current = lang === 'tr' ? 'tr' : 'en';
    document.documentElement.lang = current;

    i18nNodes.forEach(function (el) {
      var value = t(el.getAttribute('data-i18n'));
      if (value !== undefined) el.innerHTML = value;
    });

    langBlocks.forEach(function (el) {
      el.hidden = el.getAttribute('data-lang-block') !== current;
    });

    langButtons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === current));
    });

    try { localStorage.setItem(STORAGE_KEY, current); } catch (e) { /* private mode */ }
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang'));
    });
  });

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* private mode */ }
  if (saved === 'tr') setLang('tr');

  /* ---------------------------------------------------- copy to clipboard */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () {
        return legacyCopy(text);
      });
    }
    return legacyCopy(text);
  }

  // Fallback for http:// and older browsers
  function legacyCopy(text) {
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      ok ? resolve() : reject(new Error('copy failed'));
    });
  }

  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    var timer;
    btn.addEventListener('click', function () {
      copyText(btn.getAttribute('data-copy')).then(function () {
        btn.textContent = t('copied');
        btn.classList.add('is-copied');
        clearTimeout(timer);
        timer = setTimeout(function () {
          btn.textContent = t('copy');
          btn.classList.remove('is-copied');
        }, 1600);
      }).catch(function () {
        // Last resort: select the text next to the button so Ctrl+C works
        var row = btn.closest('.contact-row');
        var target = row && row.querySelector('a');
        if (target && window.getSelection) {
          var range = document.createRange();
          range.selectNodeContents(target);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        }
      });
    });
  });

  /* ---------------------------------------------------------- mobile menu */
  var menuBtn = document.querySelector('.menu-btn');
  var navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    var closeMenu = function () {
      navLinks.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    };
    menuBtn.addEventListener('click', function () {
      var open = navLinks.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }
})();
