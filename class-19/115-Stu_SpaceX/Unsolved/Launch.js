

export default class Launch {
  constructor({ details, flight_number: number,
  launch_success: succeeded, launch_year: year }){

    this.details = details;
    this.number = number;
    this.succeeded = succeeded;
    this.year = year;
  }

  wasFailure() {
    if(this.succeeded){
      return false;
    }else{
      return true;
    }
  }

  launchInfo() {
    console.log(this.year + " - Flight No. " + this.number);
    console.log("    " + this.details);
  }
}

