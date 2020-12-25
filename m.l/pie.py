import sys 
import numpy as np 
import matplotlib.pyplot as plt  
  
   
# creating the dataset 
# cars = ['AUDI', 'BMW', 'FORD', 
#         'TESLA', 'JAGUAR', 'MERCEDES'] 
  
# data = [23, 17, 35, 29, 12, 41] 
s1= [j for j in sys.argv[1].split(",")]
s2 = [int(t) for t in sys.argv[2].split(",")]
   

fig = plt.figure(figsize = (5, 5))   
# creating the bar plot 
plt.pie(s2, labels = s1) 
plt.savefig("../server/3.png")