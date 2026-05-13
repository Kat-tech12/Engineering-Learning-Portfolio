//const testbutton = document.getElementById("testingbutton");
//const text = document.getElementById("message");
//const firstText = document.getElementById("firsttext");
//const secondText = document.getElementById("secondtext");

//secondText.style.display = 'none';

//testbutton.addEventListener('click', function() {
//    firstText.style.display = 'none';
//    secondText.style.display = 'block';
//});

//Button constants for top of page
const introButton = document.getElementById("introButton");
const commButton = document.getElementById("commButton");
const teamworkButton = document.getElementById("teamworkButton");
const ethicsButton = document.getElementById("ethicsButton");
const knowledgeButton = document.getElementById("knowledgeButton");
const conclusionButton = document.getElementById("conclusionButton");
const appendixButton = document.getElementById("appendixButton");

//Button constants for bottom of page
const introButtonBottom = document.getElementById("introButtonBottom");
const commButtonBottom = document.getElementById("commButtonBottom");
const teamworkButtonBottom = document.getElementById("teamworkButtonBottom");
const ethicsButtonBottom = document.getElementById("ethicsButtonBottom");
const knowledgeButtonBottom = document.getElementById("knowledgeButtonBottom");
const conclusionButtonBottom = document.getElementById("conclusionButtonBottom");
const appendixButtonBottom = document.getElementById("appendixButtonBottom");

//text-section constants
const mainIntro = document.getElementById("IntroductionSection");
const communicationSection = document.getElementById("CommunicationSection");
const teamworkSection = document.getElementById("TeamworkSection");
const ethicsSection = document.getElementById("EthicsSection");
const knowledgeSection = document.getElementById("KnowledgeSection");
const conclusionSection = document.getElementById("ConclusionSection");
const appendix = document.getElementById("AppendixSection");

//Initial load style.display
/*
Only the Main Introduction section should be visible,
all other sections should not be visible after a reload.
*/
mainIntro.style.display = 'block';
communicationSection.style.display = 'none';
teamworkSection.style.display = 'none';
ethicsSection.style.display = 'none';
knowledgeSection.style.display = 'none';
conclusionSection.style.display = 'none';
appendix.style.display = 'none';

//EventListeners for top buttons
introButton.addEventListener('click', function() {
    mainIntro.style.display = 'block';
    communicationSection.style.display = 'none';
    teamworkSection.style.display = 'none';
    ethicsSection.style.display = 'none';
    knowledgeSection.style.display = 'none';
    conclusionSection.style.display = 'none';
    appendix.style.display = 'none';
});

commButton.addEventListener('click', function() {
    mainIntro.style.display = 'none';
    communicationSection.style.display = 'block';
    teamworkSection.style.display = 'none';
    ethicsSection.style.display = 'none';
    knowledgeSection.style.display = 'none';
    conclusionSection.style.display = 'none';
    appendix.style.display = 'none';
});

teamworkButton.addEventListener('click', function() {
    mainIntro.style.display = 'none';
    communicationSection.style.display = 'none';
    teamworkSection.style.display = 'block';
    ethicsSection.style.display = 'none';
    knowledgeSection.style.display = 'none';
    conclusionSection.style.display = 'none';
    appendix.style.display = 'none';
});

ethicsButton.addEventListener('click', function() {
    mainIntro.style.display = 'none';
    communicationSection.style.display = 'none';
    teamworkSection.style.display = 'none';
    ethicsSection.style.display = 'block';
    knowledgeSection.style.display = 'none';
    conclusionSection.style.display = 'none';
    appendix.style.display = 'none';
});

knowledgeButton.addEventListener('click', function() {
    mainIntro.style.display = 'none';
    communicationSection.style.display = 'none';
    teamworkSection.style.display = 'none';
    ethicsSection.style.display = 'none';
    knowledgeSection.style.display = 'block';
    conclusionSection.style.display = 'none';
    appendix.style.display = 'none';
});

conclusionButton.addEventListener('click', function() {
    mainIntro.style.display = 'none';
    communicationSection.style.display = 'none';
    teamworkSection.style.display = 'none';
    ethicsSection.style.display = 'none';
    knowledgeSection.style.display = 'none';
    conclusionSection.style.display = 'block';
    appendix.style.display = 'none';
});

appendixButton.addEventListener('click', function() {
    mainIntro.style.display = 'none';
    communicationSection.style.display = 'none';
    teamworkSection.style.display = 'none';
    ethicsSection.style.display = 'none';
    knowledgeSection.style.display = 'none';
    conclusionSection.style.display = 'none';
    appendix.style.display = 'block';
});

//EventListeners for bottom buttons
introButtonBottom.addEventListener('click', function() {
    mainIntro.style.display = 'block';
    communicationSection.style.display = 'none';
    teamworkSection.style.display = 'none';
    ethicsSection.style.display = 'none';
    knowledgeSection.style.display = 'none';
    conclusionSection.style.display = 'none';
    appendix.style.display = 'none';
});

commButtonBottom.addEventListener('click', function() {
    mainIntro.style.display = 'none';
    communicationSection.style.display = 'block';
    teamworkSection.style.display = 'none';
    ethicsSection.style.display = 'none';
    knowledgeSection.style.display = 'none';
    conclusionSection.style.display = 'none';
    appendix.style.display = 'none';
});

teamworkButtonBottom.addEventListener('click', function() {
    mainIntro.style.display = 'none';
    communicationSection.style.display = 'none';
    teamworkSection.style.display = 'block';
    ethicsSection.style.display = 'none';
    knowledgeSection.style.display = 'none';
    conclusionSection.style.display = 'none';
    appendix.style.display = 'none';
});

ethicsButtonBottom.addEventListener('click', function() {
    mainIntro.style.display = 'none';
    communicationSection.style.display = 'none';
    teamworkSection.style.display = 'none';
    ethicsSection.style.display = 'block';
    knowledgeSection.style.display = 'none';
    conclusionSection.style.display = 'none';
    appendix.style.display = 'none';
});

knowledgeButtonBottom.addEventListener('click', function() {
    mainIntro.style.display = 'none';
    communicationSection.style.display = 'none';
    teamworkSection.style.display = 'none';
    ethicsSection.style.display = 'none';
    knowledgeSection.style.display = 'block';
    conclusionSection.style.display = 'none';
    appendix.style.display = 'none';
});

conclusionButtonBottom.addEventListener('click', function() {
    mainIntro.style.display = 'none';
    communicationSection.style.display = 'none';
    teamworkSection.style.display = 'none';
    ethicsSection.style.display = 'none';
    knowledgeSection.style.display = 'none';
    conclusionSection.style.display = 'block';
    appendix.style.display = 'none';
});

appendixButtonBottom.addEventListener('click', function() {
    mainIntro.style.display = 'none';
    communicationSection.style.display = 'none';
    teamworkSection.style.display = 'none';
    ethicsSection.style.display = 'none';
    knowledgeSection.style.display = 'none';
    conclusionSection.style.display = 'none';
    appendix.style.display = 'block';
});