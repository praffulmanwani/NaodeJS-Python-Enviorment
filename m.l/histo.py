from matplotlib import pyplot as plt 
import numpy as np 
import sys 
s1= [int(j) for j in sys.argv[1].split(",")]
s2 = [int(t) for t in sys.argv[2].split(",")]
fig = plt.figure(figsize = (5, 5)) 
  
# Creating dataset 
# a = np.array([22, 87, 5, 43, 56,  
#               73, 55, 54, 11, 
#               20, 51, 5, 79, 31, 
#               27]) 
plt.hist(s1, bins = s2) 
plt.savefig("../server/4.png")