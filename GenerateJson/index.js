module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var numerator = (req.body.yrly_turnover + req.body.Bank_fd * 0.8 + req.body.Bank_fd * 0.4);
    var score= (numerator/(req.body.loan_taken * 0.5 + req.body.overdraft * 0.1 + numerator))*100;

    console.log(req.body.yrly_turnover);
    if (score > 50) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            //body: "Hello " + (req.query.abc || req.body.abc);
            //body : "Your Score is " + score
            body: "Yaay you are approved for the loan"
        };
    } else if(score < 50){
        body: "You are not eligible"

    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};