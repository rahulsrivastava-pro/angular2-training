import {Component} from '@angular/core';
import {Employee} from '../models/employee.model';
import { FormPosterService } from '../services/form-poster.service';
import { Languages } from '../models/languages.enum';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

title : string = 'Employee Form';
  languages : string[] = [];
  model = new Employee('Rahul', 'Srivastava', true, 'w2', 'default');
  hasPrimaryLanguageError : boolean = false;

  constructor(private formPosterService: FormPosterService){}

  ngOnInit() {				
	  this.getLanguages();
  }



/* 
test 1: keeping only first name field

firstNameToUpperCase(value : string){
  if(value.length > 0){
    this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
  }
  else
  {
    this.model.firstName = value;
  }
}
*/

submitForm(form: NgForm):void{
    //validate selected languages. Done on client side but useful as an example
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError)
      return;
    
    this.formPosterService.postEmployeeForm(this.model)
    .subscribe(
      data => console.log('Form subscribe success: ' , data),
      err => console.error('Form subscribe error :', err)
    )
  }


validatePrimaryLanguage(value){
  console.log('lang : ' + this.model.primaryLanguage);
  if(value === "default"){
    this.hasPrimaryLanguageError = true;
  }else{
    this.hasPrimaryLanguageError = false;
  }
}


getLanguages():void{
      for (var item in Languages) {
        if (Languages.hasOwnProperty(item)) {
            this.languages.push(item);
        }
     }
  }





}
