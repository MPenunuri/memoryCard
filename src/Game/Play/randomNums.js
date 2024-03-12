export default function randomNums() {
  let nums = [];
  while (nums.length < 10) {
    let num = Math.floor(Math.random() * 100);
    if (!nums.includes(num)) nums.push(num);
  }
  return nums;
}
