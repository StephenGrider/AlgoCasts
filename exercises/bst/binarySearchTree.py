class BinarySearchTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if value > self.value:
            if not self.right:
                self.right = BinarySearchTree(value)
            else:
                self.right.insert(value)
        else:
            if not self.left:
                self.left = BinarySearchTree(value)
            else:
                self.left.insert(value)

    def contains(self, target):
        if(self.value == target):
            return True
        else:
            if(target >= self.value):
                if(self.right is None):
                    return False
                return self.right.contains(target)
            if(target < self.value):
                if(self.left is None):
                    return False
                return self.left.contains(target)

    def get_max(self):
        if not self.right:
            return self.value
        return self.right.get_max()