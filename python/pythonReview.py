arr = [1,2,3,4,5]
arrProduct = []

for i, num1 in enumerate(arr): 
    product = 1
    for j, num2 in enumerate(arr): 
        if i != j:
            product *= num2
    arrProduct.append(product)
    
    
print(arrProduct)