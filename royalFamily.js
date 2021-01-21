const TreeNode = require('./TreeNode');

const elizabeth = new TreeNode('Elizabeth');
const charles= new TreeNode('Charles');
const william = new TreeNode('William');
const harry = new TreeNode('Harry');

const andrew = new TreeNode('Andrew');
const beatrice = new TreeNode('Beatrice');
const eugenie = new TreeNode('Eugenie');

//Create new instances of Anne and her descendants Zara and Peter.




elizabeth.addDescendant(charles);
charles.addDescendant(william);
charles.addDescendant(harry);

elizabeth.addDescendant(andrew);
andrew.addDescendant(beatrice);
andrew.addDescendant(eugenie);
//Add princess Anne and her descendants Zara and Peter to the tree node

//print the tree node

// Remove Princess Beatrice from the TreeNode and use the print method to check the new structure of the Tree Node;

//Traverse the tree node using the depth-first approach


//Traverse the tree node using the bread-first approach






