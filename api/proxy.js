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
