import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Answer } from 'src/app/models/answer';
import { Ask } from 'src/app/models/ask';

@Component({
  selector: 'app-new-ask',
  templateUrl: './new-ask.component.html',
  styleUrls: ['./new-ask.component.css']
})
export class NewAskComponent implements OnInit {

  newAsk: FormGroup;
  //ask: Ask;
  coAnswer = 0;
  @Output() sendAsk = new EventEmitter<Ask>();

  constructor(private fb: FormBuilder,
              private toastr: ToastrService) {
                this.newAsk =this.fb.group({              
                  title:['', Validators.required],
                  answer: this.fb.array([])                
                });               
               }

  ngOnInit(): void {
    this.addAnswerDefault();
  }

  //Devuelve form Array
  get getAnswer(): FormArray{
    return this.newAsk.get('answer') as FormArray;
  }
  //Add answer to array
  addAnswer(): void{  
    this.getAnswer.push(this.fb.group({
      description: ['', Validators.required],
      isCorrect: 0
    }));   
  }

  addAnswerDefault():void{
    this.addAnswer();
    this.addAnswer();
  }

  deleteAnswerField(index: number): void{
    if(this.getAnswer.length === 2){
      this.toastr.error('The quest must have 2 answer as minimum!');
    }else{
      this.getAnswer.removeAt(index);
    }
    console.log(this.getAnswer.length);
  }

  setAnswerValid(index: number ):void{
    this.coAnswer = index;
  }


  addAsk(): void{
    //getting title of ask
    const descAsk = this.newAsk.get('title')?.value;
    //getting array of answer
    const arrayAnswer = this.newAsk.get('answer')?.value;
    //creating array of answer
    const arrayAnw: Answer[] =[];

    arrayAnswer.forEach((element: any, index: number) => {
      const answer: Answer = new Answer(element.description, false);
      if(index === this.coAnswer){
        answer.isCorrect = true;
      }
      arrayAnw.push(answer);
      
    });


    const ask: Ask = new Ask(descAsk, arrayAnw);

    this.sendAsk.emit(ask);
    this.reset();
  }

  reset():void{
    this.coAnswer = 0;
    this.newAsk.reset();
    this.getAnswer.clear();
    this.addAnswerDefault();
  }
}

