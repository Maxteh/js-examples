/**
 * Create function which return indexes of tree
 */

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 4 }, { value: 5 }],
    },
    {
      value: 3,
      children: [{ value: 6 }, { value: 7 }],
    },
  ],
}

/**
 * First variant
 */
function getTreeValues(tree) {
  let values = [tree.value]

  if (Array.isArray(tree.children)) {
    tree.children.forEach((item) => (values = values.concat(getTreeValues(item))))
  }

  return values
}

/**
 * Second variant
 */
function getTreeValuesSecond(tree) {
  const tmpTree = [tree]
  const res = []
  let current

  while (tmpTree.length > 0) {
    current = tmpTree.shift()
    res.push(current.value)

    if (current.children) {
      current.children.forEach((item) => tmpTree.push(item))
    }
  }

  return res
}
