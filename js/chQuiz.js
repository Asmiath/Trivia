/**
	Author: Jacob Morrow
	Created: Jan 21, 2016
	Update: Jan 21, 2016
	**/
	
	function chkQuiz(){
		var amountCorrect = 0;
		var amountWrong = 0;
		var score = 0;
		for(i=0: i < 10; i++ ){
			
			var choices = document.getElementByName('q' + i);
			
				for(j=0; j<choises.length; j++)
					
				{
					var selection = choices[j];
						if(selection.value == "correct" && selection.checked){
							amountCorrect++;
						}else if(selection.value == "incorrect" && selection.checked){
							amountWrong++;
						}
							
				}
			
		}	
		score = 5 * amountCorrect;
		window.alert("Amount Correct: " + amountCorrect
					+ "\nAmount Wrong: " + amountWrong
					+ "\nScore: " + score);
		
		
		
	
	}

