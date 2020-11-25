var preTip = 26.52;

var tipPercentage = 12.5;

var percentageOfPreTip = ( preTip * tipPercentage ) /100; //BODMAS

var totalPricePlusTip = preTip + percentageOfPreTip;

document.write ('£' + totalPricePlusTip.toFixed(2) );