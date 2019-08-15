import { Component, OnInit, Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ApiService} from '../../services/api.service';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

date = new FormControl(new Date());
number_error = false;
booking_success = false;


booking_date = new Date();
mobile_number: number;
booking_time = "6:00pm";
booking_people = "2";


datePickerConfig: Partial<BsDatepickerConfig>;


  fileNameDialogRef: MatDialogRef<DialogOverviewExampleDialog>; 

  
  constructor( private dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit() {
    window.scroll(0,0);
    this.datePickerConfig = Object.assign({},
     { 
       value: new Date(),
       containerClass: 'theme-dark-blue',
       minDate: new Date(),
       maxDate: new Date(2019, 11 ,31)

     });
  }

  type(){
   this.number_error = false;
   //console.log(this.booking_date,this.booking_people,this.booking_time,this.mobile_number); 
  }
  openDialog() {
    //const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {width: '250px'});
    //console.log(this.mobile_number);
    
    if(!this.mobile_number || this.mobile_number.toString().length != 10){
       this.number_error = true;
       this.mobile_number = null; 
  }else {
    //console.log(this.booking_date,this.booking_people,this.booking_time,this.mobile_number);
    const reser_data = {
      date: this.booking_date,
      time: this.booking_time,
      people: this.booking_people,
      mobile_number: this.mobile_number
    };
    // let x = this.apiService.reservation(reser_data).subscribe((data) => {
    //   console.log(data);
    // })

    this.mobile_number = null;
this.booking_success = true;    
      }
  }
}


//**************************************************************************************************/
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}