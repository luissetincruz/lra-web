const key = "17189fc54af743c9b350a0493eed8407";
const host = "www.lrasoftware.com";
const endpoint = "https://api.indexnow.org/indexnow";
const keyLocation = `https://${host}/${key}.txt`;

const urls = process.argv.slice(2);

if (urls.length === 0) {
  console.error(
    "Usage: npm run indexnow -- https://www.lrasoftware.com/ https://www.lrasoftware.com/en",
  );
  process.exit(1);
}

for (const value of urls) {
  const url = new URL(value);

  if (url.protocol !== "https:" || url.hostname !== host) {
    throw new Error(`Invalid URL for ${host}: ${value}`);
  }
}

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
