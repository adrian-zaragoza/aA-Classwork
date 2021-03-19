const FollowToggle = required('./follow_toggle.js');

$(()=>{
  $('.follow-toggle').each((idx, button)=>{
    new FollowToggle(button); // we are reusing this code for another action where we display all the buttons on the window.
  })
})


  // $('.follow-toggle').on('click', ((event)=>{

//   event.preventDefault();
//   let follow = new FollowToggle(); //pass the button
//   return follow;
// }))