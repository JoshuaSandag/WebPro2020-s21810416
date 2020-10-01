  // Pertemuan 12 
// Lab exercise
// convert to ES 6 
let yearUntilRetirement = (year=2020, firstName="joshua")=>
{
    const age = 30;
    const retirement = 65 - age;
    if(retirement>0)
    {
        console.log(firstName + "retired in" +retirement+ "years");
    }
    else
    {
        console.log(firstName+ " is already retired ");
    }
}
yearUntilRetirement ();
