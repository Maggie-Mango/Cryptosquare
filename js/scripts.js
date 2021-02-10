


//business logic

function squareNum(str) {
	let cryptoSq = []
  let strSplit = str.split("")
  let sqRt = Math.sqrt(strSplit.length)
	if (sqRt % 2 === 0) {
  	//we'll handle printing square crypto in user-facing interface
  return strSplit
    } else {
    makeItSquare(str)
  }   
}

console.log(squareNum("four"))