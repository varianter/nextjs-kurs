export default function handler(req, res) {
  if (req.method === 'POST') {
    // Save to DB
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ name: 'John Doe' }));
  }
}
