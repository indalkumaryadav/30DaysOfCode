import cv2

path=input('Enter Path of the image only:-')

img1= cv2.imread(path,0)
cv2.imshow("converted image",img1)
k=cv2.waitKey(0)
if k==ord("s"):
    cv2.imwrite("C:\\Users\\Indal Yadav\\Downloads\\Pictures\\output.png",img1)
else:
    cv2.destroyAllWindows()
