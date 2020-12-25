import sys 
import numpy as np 
import matplotlib.pyplot as plt  
  
   
# creating the dataset 
# data = {'C':20, 'C++':15, 'Java':30,  
#         'Python':35} 
# courses = list(data.keys()) 
# values = list(data.values()) 
s1= [j for j in sys.argv[1].split(",")]
s2 = [int(t) for t in sys.argv[2].split(",")]
   
fig = plt.figure(figsize = (5, 5)) 
  
# creating the bar plot 
plt.bar(s1, s2, color =sys.argv[3],  
        width = 0.4) 
plt.savefig("../server/2.png")
