const fs = require('fs');

// Read the JSON file
fs.readFile('Prakash.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    try {
        const resume = JSON.parse(data);

        // Using a regular for loop
        console.log('Using for loop:');
        for (let i = 0; i < resume.skills.length; i++) {
            console.log(`Skill ${i + 1}: ${resume.skills[i]}`);
        }

        // Using for...in loop
        console.log('\nUsing for...in loop:');
        for (const key in resume) {
            if (resume.hasOwnProperty(key)) {
                console.log(`${key}: ${JSON.stringify(resume[key], null, 2)}`);
            }
        }

        // Using for...of loop
        console.log('\nUsing for...of loop (education array):');
        for (const edu of resume.education) {
            console.log(`Institution: ${edu.institution}`);
            console.log(`Degree: ${edu.degree}`);
            console.log(`Start Date: ${edu.startDate}`);
            console.log(`End Date: ${edu.endDate}`);
        }

        // Using forEach method (skills array)
        console.log('\nUsing forEach method:');
        resume.skills.forEach((skill, index) => {
            console.log(`Skill ${index + 1}: ${skill}`);
        });

    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});
