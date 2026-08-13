const key = "17189fc54af743c9b350a0493eed8407";
const host = "www.lrasoftware.com";
const endpoint = "https://api.indexnow.org/indexnow";
const sitemapUrl = `https://${host}/sitemap.xml`;
const keyLocation = `https://${host}/${key}.txt`;

const args = process.argv.slice(2);

async function getUrlsFromSitemap() {
  const response = await fetch(sitemapUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap (${response.status}): ${sitemapUrl}`);
  }

  const xml = await response.text();

  const urls = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map(([, value]) =>
    value.trim().replaceAll("&amp;", "&"),
  );

  if (urls.length === 0) {
    throw new Error(`No URLs found in sitemap: ${sitemapUrl}`);
  }

  return urls;
}

function validateUrls(values) {
  const uniqueUrls = [...new Set(values)];

  if (uniqueUrls.length === 0) {
    throw new Error("No URLs provided for IndexNow submission.");
  }

  if (uniqueUrls.length > 10000) {
    throw new Error(
      `IndexNow supports at most 10,000 URLs per request. Received: ${uniqueUrls.length}`,
    );
  }

  for (const value of uniqueUrls) {
    const url = new URL(value);

    if (url.protocol !== "https:" || url.hostname !== host) {
      throw new Error(`Invalid URL for ${host}: ${value}`);
    }
  }

  return uniqueUrls;
}

let urls;

if (args.length === 1 && args[0] === "--sitemap") {
  console.log(`Reading URLs from ${sitemapUrl}...`);
  urls = await getUrlsFromSitemap();
} else if (args.includes("--sitemap")) {
  throw new Error("Use --sitemap by itself or provide URLs manually, but not both.");
} else {
  urls = args;
}

urls = validateUrls(urls);

console.log(`Submitting ${urls.length} URL(s) to IndexNow...`);

const response = await fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify({
    host,
    key,
    keyLocation,
    urlList: urls,
  }),
});

if (![200, 202].includes(response.status)) {
  const body = await response.text();

  throw new Error(`IndexNow submission failed (${response.status}): ${body || "No response body"}`);
}

console.log(`IndexNow accepted ${urls.length} URL(s) with status ${response.status}.`);
