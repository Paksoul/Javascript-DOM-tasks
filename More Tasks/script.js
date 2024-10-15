function arithmetic_operations()
{
    let num1= 10;
    let num2 = 5;
    let num3;

    num1 +=num2;  // sum of num1 and num2 will be saved in num1
    
    num2--;  // num2 decremented by 1
    
    num3 = num1 * num2 ;  //num3 initialized with the product of num1 and num2
    
    num1 /=2;  //value of num1 divided by 2
    
    num3 %=num1;  // the reminder of num3 and num1 is saved in num3

    
    console.log("Final values:" , num1, num2, num3);

}

function task2(){

    var fruits =['Apple','Orange','Banana','Mango','Pineapple','Grapes'];
    
    console.log("Initial array: "+ fruits);

    fruits.sort();
    console.log("Array sorted: " + fruits);

    fruits.push("Watermelon");  //pushing item at the end of array 
    fruits.push("Pomegranate");
    fruits.push("Apricot");
    console.log("Array with new: " + fruits);

    
    fruits.pop();  //remove last item
    fruits.unshift("Watermelon");  //adding item at the beginning of array
    
    console.log("Current Array : " + fruits);


    fruits.sort();
    console.log("Final Sorted array : " + fruits);

    
    //search an item in array
    searchArray(fruits,"Apple");

}

function searchArray(fruits, keyword){
    let itemIndex;

    if(fruits.includes(keyword))  //check if item exists in array, it will return true
    {
         itemIndex = fruits.indexOf(keyword);   //get the index of the item
         console.log("Item exist in array at index No."+ itemIndex);
    }
    else{
        console.log("Item not found in array.");
    }
}