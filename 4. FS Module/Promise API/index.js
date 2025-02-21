import * as fs from 'fs/promises'

//1. creating Directory / Folder

// try {
//     // await fs.mkdir("D:\Newjdcnjdb");
//     await fs.mkdir("D:\New2\\Hello",{recursive:true});

//     console.log("Folder Created..")
// } catch (error) {
//     console.log(error);   
// }

// 4. Create and Write File

// try {
//     await fs.writeFile("README.md", "Hello This file is made by nodeJS writeFile function");
    
// } catch (error) {
//     console.log(error);
// }

// 5. Read a File

// try {
//     const data= await fs.readFile("README.md","utf-8");
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }

// 6. Append data

try {
    await fs.appendFile("README.md","Additional Data");
} catch (error) {
    console.log(error);
}