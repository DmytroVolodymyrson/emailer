import { config as dotEnvConfig } from "dotenv";
import existingCompanies from "./companies.json" assert { type: "json" };
import nodeMailer from "nodemailer";

dotEnvConfig();

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "dimaafanasiev3@gmail.com",
    pass: process.env.MAIL_PASSWORD,
  },
});

const companies = [];

const sendEmailToCompany = async (companyName, companyEmail) => {
  const personalizedMessage =
    `Hello ${companyName} Team,\n` +
    "\n" +
    "I hope this message finds you well. I'm Dmytro, a Frontend Developer currently based in Calgary. I recently came across your company, and I was impressed by the variety of exciting projects you've worked on and your strong reputation in the industry.\n" +
    "\n" +
    "With over 5 years of professional experience in technologies like JavaScript, React.js, Vue.js, and TypeScript, I'm confident in my ability to contribute to your team and projects. In my past roles, I've been part of teams where we successfully delivered multiple web projects on time, often exceeding client expectations.\n" +
    "\n" +
    "What I bring to the table is not just my technical skills, but also my passion for creating user-friendly websites and applications that make a real difference to businesses. I believe I could be a valuable addition to your team, helping to deliver even more high-quality projects to your clients.\n" +
    "\n" +
    `I would love the opportunity to further discuss how I can contribute to ${companyName}. I've attached my resume for your review. If there are any opportunities that you believe I would be a good fit for, or if you'd like more information about my skills and experience, I'd be more than happy to chat.\n` +
    "\n" +
    `Please note that although I am currently based in Calgary, I am open to relocating for the right opportunity.\n` +
    "\n" +
    "Thank you for considering my application. I'm looking forward to the possibility of working with you.\n" +
    "\n" +
    "Best regards,\n" +
    "Dmytro Afanasiev\n";

  const options = {
    from: "Dmytro Afanasiev <dimaafanasiev3@gmail.com>",
    to: companyEmail,
    subject: "Enthusiastic Frontend Developer Looking for Opportunities",
    text: personalizedMessage,
    attachments: [
      {
        filename: "Resume_Afanasiev.pdf",
        path: "./Resume_Afanasiev.pdf",
      },
    ],
  };

  transporter.sendMail(options);
};

for (const [companyIndex, company] of companies.entries()) {
  if (
    existingCompanies.find(
      (existingCompany) => existingCompany.email === company.email
    )
  ) {
    continue;
  }

  setTimeout(() => {
    sendEmailToCompany(company.name, company.email);
  }, 1000 * companyIndex);
}
