import sys 
# print(type(sys.argv[1]))
# Takes first name and last name via command  
# line arguments and then display them 
print("First name: " + sys.argv[1]) 
print("Last name: " + sys.argv[2]) 
import matplotlib.pyplot as plt 
import numpy as np
xpoints = np.array([int(j) for j in sys.argv[1].split(",")])
ypoints = np.array([int(x) for x in sys.argv[2].split(",")])

plt.plot(xpoints, ypoints,sys.argv[3])
plt.savefig("../server/1.png")