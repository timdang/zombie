  var player_name, faster_count = 0, slower_count = 0, next_question=0;
  var question_array=["Welcom to Amazing Zombie Game....You are stuck in a building and have to get to the roof..."
  , "Choose the elevator (Y/N)", "you find see wounded person; help(Y/N) ", "run into a zombie"];

  var picture_array= ["building_imgage.jpg", "elevator/stairs.jpg"];
  var faster_btn=$('#faster'), slower_btn=$('#slower');
  var picture_div=$('#picture'), output_div=$('#output');

  function presentQuestion(question_number){
    if(!end_game()){
      output_div.append(question_array[question_number]);
      console.log(question_number);

      next_question++;
      // changeButtonText()
      changeImage(next_question);
    }
  }

  function changeImage(next_question){
    //update div with picture_text
  }

  function end_game(){
    console.log("end_game");
    if ((slower_count > 2) || (faster_count===3)){
      // looser
      if(slower_count > 2){
        faster_btn.hide();
        slower_btn.hide();
        return true;
      }
      //winning scenario
    }
  }

  function acceptAnswer(choice){
    console.log("we made it");
    if(choice === 'faster')
    {
      faster_count++;

    }
    if(choice === 'slower')
    {
      slower_count++;
    }
    presentQuestion(next_question);
  }
