const fs = require('fs');

fs.readFile('Prakash.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    try {
        const resume = JSON.parse(data);

        // Function to format JSON data
        function formatResume(resume) {
            let formatted = `Name: ${resume.name}\n`;
            formatted += `Contact:\n  Email: ${resume.contact.email}\n  Phone: ${resume.contact.phone}\n`;
            formatted += `Summary: ${resume.summary}\n`;
            formatted += `Education:\n`;

            resume.education.forEach(edu => {
                formatted += `  Institution: ${edu.institution}\n`;
                formatted += `  Degree: ${edu.degree}\n`;
                formatted += `  Start Date: ${edu.startDate}\n`;
                formatted += `  End Date: ${edu.endDate}\n`;
            });

            formatted += `Skills:\n`;
            resume.skills.forEach(skill => {
                formatted += `  - ${skill}\n`;
            });

            return formatted;
        }

        console.log(formatResume(resume));
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});


