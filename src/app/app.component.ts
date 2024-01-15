import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParentChild';

  userData:User[]=[]


  //for remove data from fild
  username=''
  contact=''



  // count:number=1
  addData(data:User){
    console.log("form data",data);
    
    this.userData.push( data)
    this.username=''
    this.contact=''
    console.log("data add in userdata",this.userData);
  }


  
  setData:User[]=[]
  setRefData(getData:User){
    this.setData.push(getData)
    console.log("pastUser",this.setData);
    
  }

  updateData(item:User){

    let index:number=0
    // const c = a.map(e => {
    //   let newValue = b.find(n => e.id === n.id);
      
    this.setData.find(e=> {
        index=this.userData.findIndex(e1=>e.username === e1.username)
        console.log("index val",index);
    })

    console.log("Before delete",index);
    
    this.userData.splice(index,1)
  // console.log(`delete ${item} from index no ${index}`);
  
    // console.log("after delete",index);
    // console.log("after delet previous ele",this.userData);

    // for(let i=1;i<=this.userData.length;i++){
    //   if(i==index){
    //     this.userData.push(item)
    //   }
    // }
    this.userData.splice(index,0,item)
  console.log(`add ${item} at index no ${index}`);



    
    // console.log("Map",this.userData.map(e=>{console.log("e value",e);
    
    //   console.log("e check val",
    //   e.username,this.setData.username)
    // }))
    // this.userData.push(item)
    // console.log("after click on update userdata array",this.userData);
    
    // this.dataChild=item
    console.warn("new data from child",item)
  }

}
