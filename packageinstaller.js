const packageArray = ["KittenService: ",
                      "LeetMeme: CyberPortal",
                      "CyberPortal: Ice",
                      "CamelCaser: KittenService",
                      "FraudStream: LeetMeme",
                      "Ice: "
                      ]

packageArray.indexOf(':')
splitStringWithoutAfterColon = () => {
   return packageArray.map(e=>{
   const afterColon = e.split(': ')[1];
    if(!afterColon){
      return e.split(':')[0]
    }
  })
}

// console.log(splitStringWithoutAfterColon())

const cleanArray1 = splitStringWithoutAfterColon().filter(arrayItem => {
  if(arrayItem !== undefined){
    return arrayItem
  }
})

//console.log(filteredUndefined)


filterItemsWithDependencies = () => {

  packageArray.map(e => {
    const afterColon = e.split(': ')[1];
    const beforeColon = e.substring(0, e.indexOf(':'))

    if(beforeColon !== splitStringWithoutAfterColon()){
      console.log(beforeColon)
    }
  })


}
filterItemsWithDependencies()

// packageArray.map((e)=>{
//
//
// const afterColon = e.split(': ')[1];
//
// if(!afterColon){
//   console.log(e)
// }
// if(afterColon){
//   const beforeColon = e.substring(0, e.indexOf(':'))
//
//   //console.log(e)
//
//
//  // console.log(beforeColon)
// }
//
//
//
//
// })

