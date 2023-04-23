//Resume Json Data
let resumeData = data.resume,
    resumeStartIndex = 0, skills, hobbies, filterKey;

let positionTitle = 'Applied for: ', candidateName = document.getElementById('name'),
    positionAppliedFor = document.getElementById('position'),
    phone = document.getElementById('phone'),
    email = document.getElementById('email'),
    linkedIn = document.getElementById('linkedin'),
    techSkills = document.getElementById('skills'),
    hobbiesInfo = document.getElementById('hobbies'),
    searchField = document.getElementById('search'),
    previousBtn = document.getElementById('previous'),
    nextBtn = document.getElementById('next'),
    projects = document.getElementById('projects'),
    experiences = document.getElementById('experience'),
    education = document.getElementById('education'),
    internship = document.getElementById('internship'),
    achievement = document.getElementById('achievement'),
    container = document.querySelector('.container'),    
    resumeContainerBody = document.querySelector('.container-body'),
    noResultContainer = document.getElementById('no-result-container');

const loadResume = () => {
    console.log('resumeStartIndex :: ' + resumeStartIndex);
    if (resumeData.length === 0) {
        container.style.display = 'block';
        noResultContainer.style.display = 'block';
        resumeContainerBody.style.display = 'none';
    } else {
        if (resumeStartIndex < resumeData.length) {
            candidateName.innerText = resumeData[resumeStartIndex].basics.name;
            positionAppliedFor.innerText = positionTitle + resumeData[resumeStartIndex].basics.AppliedFor;
            phone.innerText = resumeData[resumeStartIndex].basics.phone;
            email.innerText = resumeData[resumeStartIndex].basics.email;
            linkedIn.href = resumeData[resumeStartIndex].basics.profiles.url;
            skills = resumeData[resumeStartIndex].skills.keywords;
            hobbies = resumeData[resumeStartIndex].interests.hobbies;
            techSkills.innerHTML = `<div>${skills.map(
                (keyword) => `<p>${keyword}</p>`
            ).join('')}</div>`;
            hobbiesInfo.innerHTML = `<div>${hobbies.map(
                (hobby) => `<p>${hobby}</p>`
            ).join('')}</div>`;
            //render work experience
            Object.keys(resumeData[resumeStartIndex].work).map(key => {
                console.log(key)
            });

            Object.keys(resumeData[resumeStartIndex].education).map(key => {
                console.log(key);
                console.log(resumeData[resumeStartIndex].education[key]);
            });

            experiences.innerHTML = `<div>${Object.keys(resumeData[resumeStartIndex].work).map(
                key =>
                    `<p class='experience'><b>${key}</b>: ${resumeData[resumeStartIndex].work[key]}</p>`
            )}</div>`.replaceAll(',', '');

            education.innerHTML = `<ul>${Object.keys(resumeData[resumeStartIndex]['education']).map(
                (education) =>
                    `<li><b>${education}:</b> ${Object.keys(
                        resumeData[resumeStartIndex]['education'][education]
                    ).map(
                        (key) =>
                            `<span> ${resumeData[resumeStartIndex]['education'][education][key]}</span>`
                    )}</li>`
            ).join('')}</ul>`;

            internship.innerHTML = `<ul>${Object.keys(resumeData[resumeStartIndex]['Internship']).map(
                (key) => `<li><b>${key}</b>: ${resumeData[resumeStartIndex]['Internship'][key]}</li>`
            ).join('')}</ul>`;
            achievement.innerHTML = `<ul>${resumeData[resumeStartIndex]['achievements']['Summary'].map(
                (achievement) => `<li>${achievement}</li>`
            ).join('')}</ul>`;

            if (resumeStartIndex === resumeData.length - 1) {
                nextBtn.disabled = true;
            }

            if (resumeStartIndex === 0) {
                previousBtn.disabled = true;
            }
            projects.innerHTML = resumeData[resumeStartIndex].projects.description;
        }
    }
};

previousBtn.addEventListener('click', (event) => {
    resumeStartIndex = resumeStartIndex - 1;
    loadResume();
    nextBtn.disabled = false;
});

searchField.addEventListener('search', (event) => {
    console.log('Searching...................event :: ', event);
    filterKey = event.target.value;
    if (filterKey.length > 0) {
        resumeData = resumeData.filter(resume =>
            resume['basics']['AppliedFor']
                .toLowerCase()
                .includes(filterKey.toLowerCase())
        );
    }
    resumeStartIndex = 0;
    loadResume();
    console.log('Searched.....................');
});

nextBtn.addEventListener('click', (event) => {
    resumeStartIndex = resumeStartIndex + 1;
    loadResume();
    previousBtn.disabled = false;
});

window.onload = () => {
    loadResume();
};



