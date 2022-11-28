//nt salary-function to calculate indiviual's net salary
//payecalculations- function to calculate the PAYE
// nssfNhifDeduction; function to calculate the nssf an NHIF
//Salary- basic salary

//variable declarationlet lowerBoundary =  24001;
let lowerBoundery=24001
let lowerBoundary2 = 32333
let personalRelief = 2400;
let nssf =  300;

function netSalary(salary, benefits = 1080)
{
    let payeCalulations = () => // Function to calculate PAYE
    {
    const grossSalary = salary;
    let taxable = grossSalary - benefits

    if (salary <= 24000)
    {
        var tax =  (24000 * 0.1) - 2400;
        return tax;
    }
    else if (taxable> 24000 && taxable <= 32333)
    {
        const tax =  (24000 * 0.1) + (0.25 * (taxable - lowerBoundery)) - personalRelief;
        return tax;
    }
     else if (taxable > 32333)
     {
         const tax =  2400 + ((32333 - 24000) * 0.25) + (0.3 * (taxable - lowerBoundary2)) - personalRelief;
         return tax;
     }

    }
    const nssfNhifDeduction = ()=> // Block takes into account NSSF, NHIF figures and PAYE function above.
    {
        if (salary <= 5999)
        {
            const salo = salary - payeCalulations() - nssf - 150;
            return salo;
        }
        else if (salary >=6000 && salary < 8000)
        {
            const salo = salary - payeCalulations() - nssf - 300;
            return salo;
        }
        else if (salary >=8000 && salary < 12000)
        {
            const salo = salary - payeCalulations() - nssf - 400;
            return salo;
        }
        else if (salary >=12000 && salary < 15000)
        {
            const salo = salary - payeCalulations() - nssf - 500;
            return salo;
        }
        else if (salary >=15000 && salary < 20000)
        {
            const salo = salary - payeCalulations() - nssf - 600;
            return salo;
        }
        else if (salary >=20000 && salary < 25000)
        {
            const salo = salary - payeCalulations() - nssf - 750;
            return salo;
        }
        else if (salary >=25000 && salary < 30000)
        {
            const salo = salary - payeCalulations() - nssf - 850;
            return salo;
        }
        else if (salary >=30000 && salary < 35000)
        {
            const salo = salary - payeCalulations() - nssf - 900;
            return salo;
        }
        else if (salary >=35000 && salary < 40000)
        {
            const salo = salary - payeCalulations() - nssf - 950;
            return salo;
        }
        else if (salary >=40000 && salary < 45000)
        {
            const salo = salary - payeCalulations() - nssf - 1000;
            return salo;
        }
        else if (salary >=45000 && salary < 50000)
        {
            const salo = salary - payeCalulations() - nssf - 1100;
            return salo;
        }
        else if (salary >=50000 && salary < 60000)
        {
            const salo = salary - payeCalulations() - nssf - 1200;
            return salo;
        }
        else if (salary >=60000 && salary < 70000)
        {
            const salo = salary - payeCalulations() - nssf - 1300;
            return salo;
        }
        else if (salary >=70000 && salary < 80000)
        {
            const salo = salary - payeCalulations() - nssf - 1400;
            return salo;
        }
        else if (salary >=80000 && salary < 90000)
        {
            const salo = salary - payeCalulations() - nssf - 1500;
            return salo;
        }
        else if (salary >=90000 && salary < 100000)
        {
            const salo = salary - payeCalulations() - nssf - 1600;
            return salo;
        }
        else
        {
            const salo = salary - payeCalulations() - nssf - 1600;
            return salo;
        }
    }

    const finalPay =  [`PAYE: ${payeCalulations().toFixed(2)}, NSSF: ${nssf}, Net Salary is: ${nssfNhifDeduction() + benefits}`];
    return finalPay; // This returns Net Salary

}
console.log(netSalary(200000,9500)); // Testing if the program works