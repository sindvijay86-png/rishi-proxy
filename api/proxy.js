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
      "Content-Type": "application/json",
      "x-api-key": "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",
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify(req.body),
  });
  const data = await response.json();
  return res.status(200).json(data);
}
export const config = { api: { bodyParser: true } };
