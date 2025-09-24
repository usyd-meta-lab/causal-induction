

loadTrials('src/content')
.then((trials) => {
  
  // Define the timeline
  var timeline = [
    instructions,
    training_trial,
    efficacy_instructions,
    efficacy_rating,
    save_data
  ];
  
  // Augment timeline
  var timeline = augmentTimeline(timeline); // This adds PIS, debrief, full screen, debug question, and browser check
  
  jsPsych.run(timeline);
})
.catch((error) => {
  console.error('[timeline] Unable to initialise experiment:', error);
});
