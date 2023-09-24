// find the unique elements in an array, remove any duplicates and classify the unique elements into two arrays: one containing even numbers and the others containing odd numbers

    function duplicateValues(values) {
        const uniqueSet = new Set(values);
        const uniqueArr = Array.from(uniqueSet);
        console.log('uniqueArr', uniqueArr);
        return uniqueArr; 
    }

    const inputArray = [1, 2, 2, 3, 4, 4, 5, 6];
    const uniqueArr = duplicateValues(inputArray); 

    
    const evenArray = [];
    const oddArray = [];

    
    uniqueArr.forEach((element) => {
        if (element % 2 === 0) {
            evenArray.push(element); 
        } else {
            oddArray.push(element); 
        }
    });
    
    console.log("Even numbers:", evenArray);
    console.log("Odd numbers:", oddArray);

