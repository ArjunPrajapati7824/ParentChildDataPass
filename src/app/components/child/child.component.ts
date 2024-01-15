import { Component , Input , Output,EventEmitter} from '@angular/core';
import { User } from 'src/app/data';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  data:User[]=[]

  //form empty  form field
  username=''
  contact=''


  @Output() updateDataEvent  =new EventEmitter<User>();




  @Output() sendEvent  =new EventEmitter<User>();
  // @Output() updateDataEvent<User>{username:string,contact:number} =new EventEmitter<User>();

  

  createNewArray:User[]=[]

  formOpen:boolean=false

  setusername:string=""
  setcontact:any=''

  addNewItem(value: User) {
    this.updateDataEvent.emit(value);
    this.setusername=''
    this.setcontact=''
    
    
  }




  // updateDataNow(dataupdate:User){

  //   this.createNewArray.push(dataupdate)
  //   console.log("updateData",dataupdate);
    
  // }

  editdata(data1:User){
    this.setusername=data1.username
    this.setcontact=data1.contact
    console.log(this.setusername);
    console.log(this.setcontact);
    
    this.formOpen=true
    console.log(this.formOpen);
    
    // console.log("child form submit data",data1);
    // this.data.push({id:1,username:"Arjun",contact:1})
    // console.log("in child update",this.data);
   
    // this.data.push(id:1,username:"Arjun",contact:125)
    console.log("edit button clicked",data1)

    this.sendEvent.emit(data1);

  }


}
