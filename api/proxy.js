export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
    "x-api-key":"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" , 
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify(req.body),
  });
  const data = await response.json();
  return res.status(200).json(data);
}
export const config = { api: { bodyParser: true } };
