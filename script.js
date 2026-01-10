function checkInput() {
  const input = document.getElementById("input").value.toLowerCase().trim();
  const result = document.getElementById("result");

  result.className = "";
  result.classList.remove("hidden");

  if (!input) {
    result.textContent = "Please enter something to check.";
    result.classList.add("caution");
    return;
  }

  const riskyWords = [
    "free",
    "winner",
    "urgent",
    "verify",
    "click",
    "bitcoin",
    "crypto",
    "login",
    "reset"
  ];

  let riskScore = 0;

  riskyWords.forEach(word => {
    if (input.includes(word)) riskScore++;
  });

  if (input.includes("@")) riskScore += 2;
  if (input.match(/\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/)) riskScore += 2;
  if (input.includes("http") || input.includes("www")) riskScore++;

  if (riskScore >= 5) {
    result.textContent = "🚨 HIGH RISK — Likely a scam. Do NOT engage.";
    result.classList.add("danger");
  } else if (riskScore >= 3) {
    result.textContent = "⚠️ CAUTION — Some red flags detected.";
    result.classList.add("caution");
  } else {
    result.textContent = "✅ LIKELY SAFE — No major red flags found.";
    result.classList.add("safe");
  }
}
