import {config as dotEnvConfig} from 'dotenv'
import nodeMailer from 'nodemailer'

dotEnvConfig()

const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: "dimaafanasiev3@gmail.com",
        pass: process.env.MAIL_PASSWORD,
    },
});

const companies =[
    {
        name: 'WYK Web Solutions',
        email: 'office@wykweb.com'
    },
    {
        name: 'Zeal Media',
        email: 'sales@zealmedia.ca'
    },
    {
        name: 'VERB Interactive',
        email: 'careers@verbinteractive.com'
    },
    {
        name: 'Red Cherry',
        email: 'info@redcherry.ca'
    },
    {
        name: 'EvolveU',
        email: 'info@inceptionu.com'
    },
    {
        name: 'Parabit Systems',
        email: 'hr@parabit.com'
    },
    {
        name: 'Pureblink',
        email: 'INFO@PUREBLINK.COM'
    }
]


const sendEmailToCompany = (companyName, companyEmail) =>{
    const personalizedMessage =
        `Hello ${companyName},\n` +'\n' +
        'I hope this message finds you well. I\'m Dmytro, a Frontend Developer currently based in Calgary. I recently came across your company, and I was impressed by the variety of exciting projects you\'ve worked on and your strong reputation in the industry.\n' +
        '\n' +
        'With over 5 years of professional experience in technologies like JavaScript, React.js, Vue.js, and TypeScript, I\'m confident in my ability to contribute to your team and projects. In my past roles, I\'ve been part of teams where we successfully delivered multiple web projects on time, often exceeding client expectations.\n' +
        '\n' +
        'What I bring to the table is not just my technical skills, but also my passion for creating user-friendly websites and applications that make a real difference to businesses. I believe I could be a valuable addition to your team, helping to deliver even more high-quality projects to your clients.\n' +
        '\n' +
        `I would love the opportunity to further discuss how I can contribute to ${companyName}. I\'ve attached my resume for your review. If there are any opportunities that you believe I would be a good fit for, or if you\'d like more information about my skills and experience, I\'d be more than happy to chat.\n` +
        '\n' +
        'Thank you for considering my application. I\'m looking forward to the possibility of working with you.\n' +
        '\n' +
        'Best regards,\n' +
        'Dmytro Afanasiev\n'

    const options = {
        from: "Dmytro Afanasiev <dimaafanasiev3@gmail.com>",
        to: companyEmail,
        subject: "Enthusiastic Frontend Developer Looking for Opportunities",
        text: personalizedMessage,
        attachments: [{
            filename:'Resume_Afanasiev.pdf',
            path: './Resume_Afanasiev.pdf'
        }]
    };

     transporter.sendMail(options);
}

for (const company of companies){
    sendEmailToCompany(company.name, company.email)
}


