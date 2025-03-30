export default function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !lastName || !email || !phone || !message) {
      return res
        .status(400)
        .json({ error: "Please fill out all required fields." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    // Simulate email sending (you can integrate with an email API like SendGrid, Nodemailer, etc.)
    const mailSent = true; // Replace this with actual email sending logic

    if (mailSent) {
      return res.status(200).json({ message: "Message sent successfully!" });
    } else {
      return res
        .status(500)
        .json({ error: "There was a problem sending your message." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
