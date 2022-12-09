

var $progressValue = 0;
var resultList=[];

var allresult = [];
const quizdata=[
      {
        question:"1 . Characterized by skill at understanding and profiting by circumstances",
        options:[ "Shrewd","Prescient", "Analyst", "Diminution"],
        answer:"Shrewd",
        category:1
      },
      {
        question:"To refuse to acknowledge as one's own or as connected with oneself",
        options:["Prevalent", "Disown", "Squalid", "Employee"],
        answer:"Disown",
        category:2
      },
      {
        question:"Not having the abilities desired or necessary for any purpose",
        options:[ "Impoverish", "Coxswain", "Incompetent", "Devious"],
        answer:"Incompetent",
        category:3
      },
      {
        question:"Lizard that changes color in different situations",
        options:["Scruple", "Depredation", "Whimsical" , "Chameleon"],
        answer:"Chameleon",
        category:4
      },
      {
        question:"Having the title of an office without the obligations",
        options:["Titular","Reciprocal", "Unsullied",  "Inflated"],
        answer:"Titular",
        category:1
      },
      {
        question:"An expression of disapproval or blame personally addressed to one censured",
        options:["Pitiful", "Reproof", "Mutation", "Raillery"],
        answer:"Reproof",
        category:2
      },
      {
        question:"To deliver an elaborate or formal public speech.",
        options:[ "Magician", "Access", "Orate","Guzzle"],
        answer:"Orate",
        category:3
      },
      {
        question:"A wharf or artificial landing-place on the shore of a harbor or projecting into it",
        options:["Intolerable", "Fez", "Insatiable", "Quay"],
        answer:"Quay",
        category:4
      },
      {
        question:"Friendly counsel given by way of warning and implying caution or reproof",
        options:["Monition","Credence", "Colloquy", "Abyss"],
        answer:"Monition",
        category:1
      },
      {
        question:"To make a beginning in some occupation or scheme",
        options:["Muster", "Ocular", "Embark", "Apprehensible"],
        answer:"Ocular",
        category:2
      },
      {
        question:"Able to reinforce sound by sympathetic vibrations",
        options:[ "Clandestine", "Diffusion","Resonance", "Quietus"],
        answer:"Resonance",
        category:3
      },
      {
        question:"To send off or consign, as to an obscure position or remote destination",
        options:["Monolith", "Endurable", "Efficient", "Relegate"],
        answer:"Relegate",
        category:4
      },
      {
        question:"Characterized by skill at understanding and profiting by circumstances",
        options:[ "Shrewd","Prescient", "Analyst", "Diminution"],
        answer:"Shrewd",
        category:1
      },
      {
        question:"To refuse to acknowledge as one's own or as connected with oneself",
        options:["Prevalent", "Disown", "Squalid", "Employee"],
        answer:"Disown",
        category:2
      },
      {
        question:"Not having the abilities desired or necessary for any purpose",
        options:[ "Impoverish", "Coxswain", "Incompetent", "Devious"],
        answer:"Incompetent",
        category:3
      },
      {
        question:"Lizard that changes color in different situations",
        options:["Scruple", "Depredation", "Whimsical" , "Chameleon"],
        answer:"Chameleon",
        category:4
      },
      {
        question:"Having the title of an office without the obligations",
        options:["Titular","Reciprocal", "Unsullied",  "Inflated"],
        answer:"Titular",
        category:1
      },
      {
        question:"An expression of disapproval or blame personally addressed to one censured",
        options:["Pitiful", "Reproof", "Mutation", "Raillery"],
        answer:"Reproof",
        category:2
      },
      {
        question:"To deliver an elaborate or formal public speech.",
        options:[ "Magician", "Access", "Orate","Guzzle"],
        answer:"Orate",
        category:3
      },
      {
        question:"A wharf or artificial landing-place on the shore of a harbor or projecting into it",
        options:["Intolerable", "Fez", "Insatiable", "Quay"],
        answer:"Quay",
        category:4
      },
      {
        question:"Friendly counsel given by way of warning and implying caution or reproof",
        options:["Monition","Credence", "Colloquy", "Abyss"],
        answer:"Monition",
        category:1
      },
      {
        question:"To make a beginning in some occupation or scheme",
        options:["Muster", "Ocular", "Embark", "Apprehensible"],
        answer:"Ocular",
        category:2
      },
      {
        question:"Able to reinforce sound by sympathetic vibrations",
        options:[ "Clandestine", "Diffusion","Resonance", "Quietus"],
        answer:"Resonance",
        category:3
      },
      {
        question:"To send off or consign, as to an obscure position or remote destination",
        options:["Monolith", "Endurable", "Efficient", "Relegate"],
        answer:"Relegate",
        category:4
      },
      {
        question:"To make a beginning in some occupation or scheme",
        options:["Muster", "Ocular", "Embark", "Apprehensible"],
        answer:"Ocular",
        category:2
      },
      {
        question:"To make a beginning in some occupation or scheme",
        options:["Muster", "Ocular", "Embark", "Apprehensible"],
        answer:"Ocular",
        category:2
      },
    ];

    // [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,2]

/** Random shuffle questions **/
function shuffleArray(question){
   var shuffled=question.sort(function() {
    return .5 - Math.random();
 });
   return shuffled;
}

function shuffle(a) {
  for (var i = a.length; i; i--) {
    var j = Math.floor(Math.random() * i);
    var _ref = [a[j], a[i - 1]];
    a[i - 1] = _ref[0];
    a[j] = _ref[1];
  }
}

/*** Return shuffled question ***/
function generateQuestions(){
  var questions=quizdata;    
  return questions;
}

/*** Return list of options ***/
function returnOptionList(opts, i){

  var optionHtml='<li class="myoptions">'+
    '<input value="'+opts+'" name="optRdBtn" type="radio" id="rd_'+i+'">'+
    '<label for="rd_'+i+'">'+opts+'</label>'+
    '<div class="bullet">'+
      '<div class="line zero"></div>'+
      '<div class="line one"></div>'+
      '<div class="line two"></div>'+
      '<div class="line three"></div>'+
      '<div class="line four"></div>'+
      '<div class="line five"></div>'+
      '<div class="line six"></div>'+
      '<div class="line seven"></div>'+
      
    '</div>'+
  '</li>';

  return optionHtml;
}

/** Render Options **/
function renderOptions(optionList){
  var ulContainer=$('<ul>').attr('id','optionList');
  for (var i = 0, len = optionList.length; i < len; i++) {
    var optionContainer=returnOptionList(optionList[i], i)
    ulContainer.append(optionContainer);
  }
  $(".answerOptions").html('').append(ulContainer);
}

/** Render question **/
function renderQuestion(question){
  $(".question").html("<h1>"+question+"</h1>");
}

/** Render quiz :: Question and option **/
function renderQuiz(questions, index){ 
  var currentQuest=questions[index];  
  renderQuestion(currentQuest.question); 
  renderOptions(currentQuest.options); 
  console.log("Question");
  console.log(questions[index]);
}

/** Return correct answer of a question ***/
function getCorrectAnswer(questions, index){
  return questions[index].answer;
}

/** pushanswers in array **/
function correctAnswerArray(resultByCat){
  var arrayForChart=[];
  for(var i=0; i<resultByCat.length;i++){
   arrayForChart.push(resultByCat[i].correctanswer);
  }

  return arrayForChart;
}
/** Generate array for percentage calculation **/
function genResultArray(results, wrong){
  var resultByCat = resultByCategory(results);
  var arrayForChart=correctAnswerArray(resultByCat);
  arrayForChart.push(wrong);
  return arrayForChart
}

/** percentage Calculation **/
function percentCalculation(array, total){
  var percent = array.map(function (d, i) {
    return (100 * d / total).toFixed(2);
  });
  return percent;
}

/*** Get percentage for chart **/
function getPercentage(resultByCat, wrong){
  var totalNumber=resultList.length;
  var wrongAnwer=wrong;
  var arrayForChart=genResultArray(resultByCat, wrong);
  return percentCalculation(arrayForChart, totalNumber);
}

/** count right and wrong answer number **/
function countAnswers(results){

  var countCorrect=0, countWrong=0;

  for(var i=0;i<results.length;i++){
    if(results[i].iscorrect==true)  
        countCorrect++;
    else countWrong++;
  }

  return [countCorrect, countWrong];
}

/**** Categorize result *****/
function resultByCategory(results){

  var categoryCount = [];
  var ctArray=results.reduce(function (res, value) {
    if (!res[value.category]) {
        res[value.category] = {
            category: value.category,
            correctanswer: 0           
        };
        categoryCount.push(res[value.category])
    }
    var val=(value.iscorrect==true)?1:0;
    res[value.category].correctanswer += val; 
    return res;
  }, {});

  categoryCount.sort(function(a,b) {
    return a.category - b.category;
  });

  return categoryCount;
}


/** Total score pie chart**/
function totalPieChart(_upto, _cir_progress_id, _correct, _incorrect) {

   $("#"+_cir_progress_id).find("._text_incor").html("Incorrect : "+_incorrect);
   $("#"+_cir_progress_id).find("._text_cor").html("Correct : "+_correct);

   var unchnagedPer=_upto;
   
    _upto = (_upto > 100) ? 100 : ((_upto < 0) ? 0 : _upto);

    var _progress = 0;

    var _cir_progress = $("#"+_cir_progress_id).find("._cir_P_y");
    var _text_percentage = $("#"+_cir_progress_id).find("._cir_Per");

    var _input_percentage;
    var _percentage;

    var _sleep = setInterval(_animateCircle, 25);

    function _animateCircle() {
      //2*pi*r == 753.6 +xxx=764
        _input_percentage = (_upto / 100) * 764;
        _percentage = (_progress / 100) * 764;

        _text_percentage.html(_progress + '%');

        if(unchnagedPer >= 50){
             $("#qualify").show();
        }else{
            $("#unqualify").show();
        }

        if (_percentage >= _input_percentage) {
             _text_percentage.html('<tspan x="50%" dy="0em">'+unchnagedPer + '% </tspan><tspan  x="50%" dy="1.9em">Your Score</tspan>');
            clearInterval(_sleep);
        } else {

            _progress++;

            _cir_progress.attr("stroke-dasharray",_percentage + ',764');
        }
    }
}

function renderBriefChart(correct, total, incorrect){
  var percent=(100 * correct / total);
  if(Math.round(percent) !== percent) {
          percent = percent.toFixed(2);
  }

 totalPieChart(percent, '_cir_progress', correct, incorrect)
   
}
/*** render chart for result **/
function renderChart(data){
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: [ "Verbal communication", 
              "Non-verbal communication", 
              "Written communication", 
              "Incorrect"
            ],
    datasets: [
                {
                 
                  data: data,
                  backgroundColor: [  '#e6ded4',
                                      '#968089',
                                      '#e3c3d4',
                                      '#ab4e6b'
                                    ],
                  borderColor: [  'rgba(239, 239, 81, 1)',
                                  '#8e3407',
                                  'rgba((239, 239, 81, 1)',
                                  '#000000'
                                ],
                  borderWidth: 1
                }
              ]
    },
    options: {
         pieceLabel: {
          render: 'percentage',
          fontColor: 'black',
          precision: 2
        }
      }
    
  });
}

/** List question and your answer and correct answer  

*****/
function getAllAnswer(results){
    var innerhtml="";
    for(var i=0;i<results.length;i++){

      var _class=((results[i].iscorrect)?"item-correct":"item-incorrect");
       var _classH=((results[i].iscorrect)?"h-correct":"h-incorrect");
      

      var _html='<div class="_resultboard '+_class+'">'+
                  '<div class="_header">'+results[i].question+'</div>'+
                  '<div class="_yourans '+_classH+'">'+results[i].clicked+'</div>';

        var html="";
       if(!results[i].iscorrect)
        html='<div class="_correct">'+results[i].answer+'</div>';
       _html=(_html+html)+'</div>';
       innerhtml+=_html;
    }

  $(".allAnswerBox").html('').append(innerhtml);
}
/** render  Brief Result **/
function renderResult(resultList){ 
  
  var results=resultList;
  console.log(results);
  var countCorrect=countAnswers(results)[0], 
  countWrong=countAnswers(results)[1];

  console.log("coreect one" , countCorrect);
  console.log("wrong one" , countWrong);
  
  
  renderBriefChart(countCorrect, resultList.length, countWrong);
}

function renderChartResult(){
   var results=resultList; 
  var countCorrect=countAnswers(results)[0], 
  countWrong=countAnswers(results)[1];
  var dataForChart=genResultArray(resultList, countWrong);
  renderChart(dataForChart);
}

/** Insert progress bar in html **/
function getProgressindicator(length){
  var progressbarhtml=" ";
  for(var i=0;i<length;i++){
    progressbarhtml+='<div class="my-progress-indicator progress_'+(i+1)+' '+((i==0)?"active":"")+'"></div>';
  }
  $(progressbarhtml).insertAfter(".my-progress-bar");
} 

/*** change progress bar when next button is clicked ***/
function changeProgressValue(){
  $progressValue+= 4;
  if ($progressValue >= 100) {
    
  } else {
    if($progressValue==99) $progressValue=100;
    $('.my-progress')
      .find('.my-progress-indicator.active')
      .next('.my-progress-indicator')
      .addClass('active');      
    $('progress').val($progressValue);
  }
  $('.js-my-progress-completion').html($('progress').val() + '% complete');

}   
function addClickedAnswerToResult(questions,presentIndex,clicked ){
  var correct=getCorrectAnswer(questions, presentIndex);
    var result={
      index:presentIndex,
      question:questions[presentIndex].question, 
      clicked:clicked,
      iscorrect:(clicked==correct)?true:false,
      answer:correct, 
      category:questions[presentIndex].category
    }
    resultList.push(result);

    console.log("result");
    console.log(result);
      
}

$(document).ready(function() {
  
  var presentIndex=0;
   var clicked=0;

  var questions=generateQuestions();
  renderQuiz(questions, presentIndex);
  getProgressindicator(questions.length);

  $(".answerOptions ").on('click','.myoptions>input', function(e){
    clicked=$(this).val();   
    // console.log("index no of array ," )
    if(questions.length==(presentIndex+1)){
      $("#submit").removeClass('hidden');
      $("#next").addClass("hidden");
    }
    else{

      $("#next").removeClass("hidden");
    }

     
  
  });



  $("#next").on('click',function(e){
    e.preventDefault();
    addClickedAnswerToResult(questions,presentIndex,clicked);
    var type =  questions[presentIndex].options;
     for(var i = 0 ; i<= type.length ; i++){
       if( type[i]== clicked){
        var no =i+1;
        allresult.push(no);
       }
     }
    

    $(this).addClass("hidden");
    
    presentIndex++;
    renderQuiz(questions, presentIndex);
    changeProgressValue();
  });

  $("#submit").on('click', async function(e){
     addClickedAnswerToResult(questions,presentIndex,clicked);
    
    renderResult(resultList);
    console.log("rrrrr",resultList);
    console.log("clicked" , clicked);
    console.log("presendind" ,presentIndex)
    console.log(allresult);


    var accounts = await window.web3.eth.getAccounts();

    var abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"internalType":"address","name":"_student","type":"address"}],"name":"isQualified","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"passMarks","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_qMarks","type":"uint256"}],"name":"qualifyingMarks","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256[]","name":"questions","type":"uint256[]"},{"internalType":"uint256[]","name":"corr_choices","type":"uint256[]"}],"name":"setQuestion","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256[]","name":"setQuest","type":"uint256[]"},{"internalType":"uint256[]","name":"answer","type":"uint256[]"}],"name":"subAnswer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalQuestions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
    var contract_address= '0x98e8e95ed54e2e6a01de7b1a46f6560b9a9f8fc8'; 



    var instance = new web3.eth.Contract(
      abi,
      contract_address
    );
     var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25] ;
   
    await instance.methods.subAnswer(a ,  allresult)
      .send({from : accounts[0]})
      .then(()=>{
        $('.multipleChoiceQues').hide();
        $(".resultArea").show();
        renderResult(resultList);
      })
  });

  
  

   $(".resultArea").on('click','.viewchart',function(){
      $(".resultPage2").show();
       $(".resultPage1").hide();
       $(".resultPage3").hide();
       renderChartResult();
   });

    $(".resultArea").on('click','.backBtn',function(){
      $(".resultPage1").show();
       $(".resultPage2").hide();
       $(".resultPage3").hide();
        renderResult(resultList);
   });

    $(".resultArea").on('click','.viewanswer',function(){
      $(".resultPage3").show();
       $(".resultPage2").hide();
       $(".resultPage1").hide();
        getAllAnswer(resultList);
        console.log("resultList" , resultList);
   });

  $(".resultArea").on('click','.replay',function(){
    window.location.reload(true);
  });

});