// --- Configuration ---
// ===============================
// FULL RSS FEED CONFIGURATION (MERGED AND CLEANED)
// ===============================
const ALL_FEEDS = {
  // ===============================
  // NATIONAL
  // ===============================
  "National News": [
    // --- Core Major PH Media (Original List) ---
    { url: "https://news.abs-cbn.com/feed", source: "ABS-CBN News (General)" },
    {
      url: "https://www.inquirer.net/fullfeed",
      source: "Inquirer Main (General)",
    },
    { url: "https://newsinfo.inquirer.net/feed", source: "Inquirer NewsInfo" },
    {
      url: "https://www.gmanetwork.com/news/rss/news/",
      source: "GMA News Online (General)",
    },
    {
      url: "https://www.gmanetwork.com/news/rss/regions/",
      source: "GMA Regional",
    },
    {
      url: "https://www.philstar.com/rss/headlines",
      source: "Philippine Star (General)",
    },
    { url: "https://mb.com.ph/feed/", source: "Manila Bulletin (General)" },
    {
      url: "https://www.manilatimes.net/news/feed",
      source: "Manila Times (General)",
    },
    { url: "https://www.ptvnews.ph/feed/", source: "PTV News" },
    { url: "https://www.untvweb.com/feed/", source: "UNTV News" },
    {
      url: "https://www.pna.gov.ph/rss",
      source: "Philippine News Agency (PNA)",
    },
    { url: "https://www.rappler.com/feed/", source: "Rappler Main" },
    { url: "https://www.sunstar.com.ph/rss", source: "SunStar Philippines" },
    {
      url: "https://www.bomboradyo.com/category/national-news/feed/",
      source: "Bombo Radyo Nation",
    },
    {
      url: "https://www.brigadanews.ph/category/national/feed/",
      source: "Brigada News",
    },
    { url: "https://rmn.ph/feed/", source: "RMN Networks" },
    { url: "https://www.journalnews.com.ph/feed/", source: "People's Journal" },

    // --- New: Specialized PH Sectional Feeds ---
    { url: "https://www.philstar.com/rss/nation", source: "Philstar Nation" },
    {
      url: "https://www.inquirer.net/columns/feed",
      source: "Inquirer Opinion/Columns",
    },
    {
      url: "https://www.manilatimes.net/news/national/feed/",
      source: "Manila Times Nation",
    },
    { url: "https://www.gmanetwork.com/news/rss/metro/", source: "GMA Metro" },

    // --- New: Additional Major PH News Outlets ---
    {
      url: "https://manilastandard.net/rss-feed",
      source: "Manila Standard (General)",
    },
    { url: "https://tempo.com.ph/feed/", source: "Tempo News" },
    { url: "https://tonite.abante.com.ph/feed", source: "Abante Tonite" },
    {
      url: "https://interaksyon.philstar.com/feed/",
      source: "Interaksyon (Political & Social)",
    },

    // --- New: PH Government/Institutional Feeds ---
    {
      url: "http://www.senate.gov.ph/rss/rss_news.aspx",
      source: "Senate of the Philippines (News)",
    },
    {
      url: "https://www.bsp.gov.ph/SitePages/RSS.aspx",
      source: "Bangko Sentral ng Pilipinas (BSP)",
    },
  ],

  // ===============================
  // BUSINESS / ECONOMY
  // ===============================
  "Business / Economy": [
    { url: "https://www.philstar.com/rss/money", source: "Philstar Business" },
    {
      url: "https://www.philstar.com/rss/business",
      source: "Philstar Economy",
    },
    { url: "https://businessmirror.com.ph/feed/", source: "BusinessMirror" },
    {
      url: "https://www.manilatimes.net/business/feed",
      source: "Manila Times Business",
    },
    { url: "https://www.gmanetwork.com/news/rss/money/", source: "GMA Money" },
    {
      url: "https://www.rappler.com/business/feed/",
      source: "Rappler Business",
    },
    { url: "https://www.bworldonline.com/feed/", source: "BusinessWorld" },
    {
      url: "https://www.cnnphilippines.com/business/rss",
      source: "CNN Philippines Business",
    },
    {
      url: "https://www.bsp.gov.ph/rss/MediaList.xml",
      source: "Bangko Sentral ng Pilipinas",
    },
    {
      url: "https://www.reuters.com/rssFeed/businessNews",
      source: "Reuters Business",
    },
    { url: "https://asia.nikkei.com/rss/feed/nar", source: "Nikkei Asia" },
  ],

  // ===============================
  // SPORTS
  // This section merges the two 'Sports' definitions from your original input
  // ===============================
  Sports: [
    { url: "https://www.espn.com/espn/rss/news", source: "ESPN General" },
    { url: "https://sports.inquirer.net/feed", source: "Inquirer Sports" },
    {
      url: "https://www.gmanetwork.com/news/rss/sports/",
      source: "GMA Sports",
    },
    { url: "https://www.rappler.com/sports/feed/", source: "Rappler Sports" },
    {
      url: "https://www.abs-cbn.com/sports/rss/latest-news",
      source: "ABS-CBN Sports",
    },
    {
      url: "https://nba.nbcsports.com/category/top-posts/feed/",
      source: "NBC Sports NBA",
    },
    {
      url: "https://www.bomboradyo.com/category/sports/feed/",
      source: "Bombo Radyo Sports",
    },
    { url: "https://www.philstar.com/rss/sports", source: "Philstar Sports" },
    { url: "https://www.spin.ph/feed", source: "SPIN.ph" },
    { url: "https://tiebreakertimes.com.ph/feed", source: "Tiebreaker Times" },
    {
      url: "https://www.espn.com/espn/rss/nba/news",
      source: "ESPN NBA Headlines",
    },
    {
      url: "https://www.espn.com/espn/rss/soccer/news",
      source: "ESPN Soccer Headlines",
    },
    { url: "https://www.espn.com/espn/rss/news", source: "ESPN General" },
    { url: "https://sports.inquirer.net/feed", source: "Inquirer Sports (PH)" },
    {
      url: "https://www.gmanetwork.com/news/rss/sports/",
      source: "GMA Sports (PH)",
    },
    {
      url: "https://www.rappler.com/sports/feed/",
      source: "Rappler Sports (PH)",
    },
    {
      url: "https://www.abs-cbn.com/sports/rss/latest-news",
      source: "ABS-CBN Sports (PH)",
    },
    {
      url: "https://www.bomboradyo.com/category/sports/feed/",
      source: "Bombo Radyo Sports (PH)",
    },
    {
      url: "https://www.philstar.com/rss/sports",
      source: "Philstar Sports (PH)",
    },
    { url: "https://www.spin.ph/feed", source: "SPIN.ph (PH)" },
    {
      url: "https://tiebreakertimes.com.ph/feed",
      source: "Tiebreaker Times (PH)",
    },
    // New general international feeds (from previous suggestions)
    {
      url: "https://rss.app/feeds/H3y9L6jQ64f5uMv2.xml",
      source: "BBC Sport (General)",
    },
    {
      url: "http://feeds.reuters.com/reuters/sportsNews",
      source: "Reuters Sports News",
    },
    {
      url: "https://www.cbssports.com/rss/headlines/",
      source: "CBS Sports (General)",
    },
  ],

  // ===============================
  // SHOWBIZ
  // ===============================
  Showbiz: [
    {
      url: "https://www.abs-cbn.com/entertainment/rss/latest-news",
      source: "ABS-CBN Entertainment",
    },
    {
      url: "https://www.rappler.com/entertainment/feed/",
      source: "Rappler Showbiz",
    },
    {
      url: "https://www.brigadanews.ph/category/showbiz/feed/",
      source: "Brigada Showbiz",
    },
    {
      url: "https://rmn.ph/category/showbiz/feed/",
      source: "RMN Showbiz",
    },
    {
      url: "https://www.pep.ph/feed/",
      source: "PEP.ph",
    },
    {
      url: "https://www.pikapika.ph/feed",
      source: "Pikapika",
    },
    {
      url: "https://www.philstar.com/rss/showbiz/",
      source: "Philstar.com Showbiz",
    },
    {
      url: "https://www.gmanetwork.com/news/rss/showbiz/",
      source: "GMA News Online Showbiz",
    },
    {
      url: "https://mb.com.ph/category/entertainment/feed/",
      source: "Manila Bulletin Entertainment",
    },
    {
      url: "https://entertainment.inquirer.net/feed",
      source: "Inquirer.net Entertainment",
    },
    {
      url: "https://bandera.inquirer.net/feed",
      source: "Inquirer Bandera",
    },
  ],

  // ===============================
  // TECHNOLOGY
  // ===============================
  Technology: [
    { url: "https://www.rappler.com/technology/feed/", source: "Rappler Tech" },
    {
      url: "https://www.gmanetwork.com/news/rss/scitech/",
      source: "GMA SciTech",
    },
    { url: "https://www.theverge.com/rss/index.xml", source: "The Verge" },
    {
      url: "https://feeds.arstechnica.com/arstechnica/index",
      source: "Ars Technica",
    },
  ],

  // ===============================
  // BALITANG ESPESYAL / SPECIAL REPORTS
  // ===============================
  "Balitang Espesyal": [
    {
      url: "https://www.bomboradyo.com/category/balitang-espesyal/feed/",
      source: "Bombo Radyo Special Reports",
    },
    {
      url: "https://www.gmanetwork.com/news/rss/specialreports/",
      source: "GMA News Special Reports",
    },
    {
      url: "https://www.manilatimes.net/the-sunday-times/feed/",
      source: "Manila Times Sunday Magazine",
    },
    {
      url: "https://interaksyon.philstar.com/feed/",
      source: "Interaksyon (Political & Social)",
    },
    {
      url: "https://www.philstar.com/rss/lifestyle/features",
      source: "Philstar Lifestyle Features",
    },
    {
      url: "https://mb.com.ph/category/lifestyle/luminaries-and-life/feed/",
      source: "Manila Bulletin Luminaries & Life",
    },
    {
      url: "https://www.rappler.com/news/feed/",
      source: "Rappler News (General - Key Investigations)",
    },
  ],

  // ===============================
  // LOCAL (Social Links - Special Hardcoded List)
  // ===============================
  "Local Links": {
    // Renamed category to avoid confusion with 'General / Local'
    isSocialMedia: true,
    items: [
      {
        title: "RMN Malaybalay ",
        link: "https://www.facebook.com/profile.php?id=100063929018518",
        source: "Facebook",
      },
      {
        title: "101.7 XFM Bukidnon",
        link: "https://www.facebook.com/101.7XFMBUKIDNON2025",
        source: "XFM Bukidnon",
      },
      {
        title: "Juander Radyo Malaybalay 90.5 FM ",
        link: "https://www.facebook.com/juanderradyomalaybalay",
        source: "Juander Radio",
      },
    ],
  },

  International: [
    {
      url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
      source: "The New York Times",
    },
    {
      url: "https://feeds.bbci.co.uk/news/world/rss.xml",
      source: "BBC News",
    },
    {
      url: "https://www.aljazeera.com/xml/rss/all.xml",
      source: "Al Jazeera",
    },
    {
      url: "https://www.bomboradyo.com/category/international/feed/",
      source: "Bombo Radyo World",
    },
    {
      url: "https://www.rappler.com/world/feed/",
      source: "Rappler World",
    },
    {
      url: "https://www.philstar.com/rss/world",
      source: "Philstar World",
    },
  ],
};

const newsContainer = document.getElementById("news-container");
const buttonContainer = document.getElementById("category-buttons");
const refreshButton = document.getElementById("refresh-button");
const statusMessage = document.getElementById("status-message");

let activeCategory = "National News";
const BASE_API_URL = `https://api.rss2json.com/v1/api.json?rss_url=`;

// Status updater
function updateStatus(message, isLoading = false) {
  statusMessage.innerHTML = message.replace(
    /\*\*(.*?)\*\*/g,
    "<strong>$1</strong>"
  );
  refreshButton.disabled = isLoading;

  const icon = refreshButton.querySelector(".icon");
  if (icon) {
    icon.innerHTML = isLoading ? "⏳" : "🔄";
    icon.classList.toggle("spinner", isLoading);
  }
}

// NOTE: isNewNews is skipped for Social Links, so we just return false
function isNewNews(pubDate) {
  return Date.now() - new Date(pubDate).getTime() < 6 * 60 * 60 * 1000;
}

function createCategoryButtons() {
  buttonContainer.innerHTML = "";
  Object.keys(ALL_FEEDS).forEach((category) => {
    const btn = document.createElement("button");
    btn.textContent = category;
    btn.className = category === activeCategory ? "active" : "";
    btn.onclick = () => {
      activeCategory = category;
      createCategoryButtons();
      fetchNews();
    };
    buttonContainer.appendChild(btn);
  });
}

async function fetchNews(isManual = false) {
  updateStatus(`Fetching **${activeCategory}**...`, true);
  newsContainer.innerHTML = `<li class="loading">⏳ Loading headlines...</li>`;

  const categoryData = ALL_FEEDS[activeCategory];
  let allItems = [];

  // --- SOCIAL MEDIA/LINK HANDLER ---
  if (categoryData && categoryData.isSocialMedia) {
    allItems = categoryData.items.map((item) => ({
      ...item,
      title: item.title,
      pubDate: null, // No date for social links
      sourceTitle: item.source,
    }));
  }
  // --- RSS FEED HANDLER ---
  else {
    // Check if categoryData is an array (for regular RSS feeds)
    const feeds = Array.isArray(categoryData) ? categoryData : [];

    const promises = feeds.map((feed) =>
      fetch(`${BASE_API_URL}${encodeURIComponent(feed.url)}`)
        .then((res) => (res.ok ? res.json() : null))
        .then((data) =>
          data && data.status === "ok"
            ? data.items
                .slice(0, 5)
                .map((item) => ({ ...item, sourceTitle: feed.source }))
            : []
        )
        .catch(() => [])
    );

    const results = await Promise.all(promises);
    allItems = results
      .flat()
      .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  }

  newsContainer.innerHTML = "";

  if (!allItems.length) {
    newsContainer.innerHTML = `<li class="loading">No news available.</li>`;
  }

  allItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = "news-item";

    // Determine the meta-data format based on whether it's an RSS feed or Social Link
    let metaHTML;
    if (categoryData && categoryData.isSocialMedia) {
      metaHTML = `Source: <strong>${item.sourceTitle}</strong>`;
    } else {
      const date = new Date(item.pubDate).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      metaHTML = `Source: <strong>${item.sourceTitle}</strong> | ${date}`;
    }

    li.innerHTML = `
      <div>
        ${
          item.pubDate && isNewNews(item.pubDate)
            ? `<span class="new-badge">NEW</span>`
            : ""
        }
        <a href="${item.link}" target="_blank" rel="noopener">${item.title}</a>
      </div>
      <span class="news-meta">
        ${metaHTML}
      </span>
    `;

    newsContainer.appendChild(li);
  });

  updateStatus(
    isManual
      ? `Refreshed **${allItems.length}** headlines.`
      : `Showing **${activeCategory}**.`,
    false
  );
}

refreshButton.addEventListener("click", () => fetchNews(true));

createCategoryButtons();
fetchNews();
// Only run interval for automatic fetch if the category is not Social Links
setInterval(() => {
  const categoryData = ALL_FEEDS[activeCategory];
  // FIX: Check if categoryData exists AND if isSocialMedia is NOT true
  if (categoryData && !categoryData.isSocialMedia) {
    fetchNews(false);
  }
}, 20 * 60 * 1000);

// --- PWA SERVICE WORKER REGISTRATION (NEW ADDITION) ---
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // Register the Service Worker file
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log(
          "Service Worker registered successfully with scope: ",
          registration.scope
        );
      })
      .catch((registrationError) => {
        console.log("Service Worker registration failed: ", registrationError);
      });
  });
}
