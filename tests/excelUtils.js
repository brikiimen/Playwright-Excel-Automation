const ExcelJs=require('exceljs')

//Update specific cell in Excel 

async function writeExcelTest(searchText,replaceText,change,filePath){
    
    const workbook=new ExcelJs.Workbook()
    await workbook.xlsx.readFile(filePath)
    const worksheet=workbook.getWorksheet('Sheet1')

    const output=await readExcel(worksheet,searchText)
  
    const cell=worksheet.getCell(output.row+change.rowChange,output.column+change.colChange)
    cell.value=replaceText
    
    //Save change
    await workbook.xlsx.writeFile(filePath)

    
}

async function readExcel(worksheet,searchText) {
    let output={row:-1,column:-1}
    worksheet.eachRow((row,rowNumber)=>{
        row.eachCell((cell,colNumber)=>{
            if(cell.value===searchText){
                output.row=rowNumber
                output.column=colNumber
                console.log(output)
                
            }

       })

    })

    return output

    
}



module.exports = {writeExcelTest}