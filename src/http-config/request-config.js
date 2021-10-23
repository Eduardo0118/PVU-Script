export const url =
  "https://backend-farm.plantvsundead.com/get-plants-filter-v2?sort=latest&offset=0&limit=5&type=1&elements=parasite";

export const config = {
  headers: {
    accept: "application/json, text/plain, */*",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    authorization:
      "Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHgyMjJhMTJkYWFmYWVhZDQ3OThmNzRmMGFhMzJmNjEyNWExODFmNDA3IiwibG9naW5UaW1lIjoxNjM0MDQ4NzcyMjE2LCJjcmVhdGVEYXRlIjoiMjAyMS0wOS0xNCAyMTowMToxOCIsImlhdCI6MTYzNDA0ODc3Mn0.A1HaTWrc13m083F9d3856WAtclCUvW1suUzuw5a66ME",
    "if-none-match": 'W/"1442-yR1m34tVSmGvbjfi1BZaZs+eHc4"',
    "sec-ch-ua":
      '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Linux"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
  },
  referrer: "https://marketplace.plantvsundead.com/",
  referrerPolicy: "strict-origin-when-cross-origin",
  body: null,
  method: "GET",
  mode: "cors",
};
